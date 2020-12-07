import { createContext, useState } from 'react';

const TodosContext = createContext();

const TodosProvider = ({children}) => {

    const [todos, setTodos] = useState([]);

    const refreshTodos = async () => {
        try {
            const res = await fetch('/api/getTodos');
            const latestTodos = await res.json();
            setTodos(latestTodos)
        } catch (error) {
            console.log(err);
        }
    };

    const addTodo = async (description) => {
        try {
            const res = await fetch('/api/createTodo', {
                method: 'POST',
                body: JSON.stringify({description}),
                headers: {'Content-Type': 'application/json'}
            });
            const latestTodos = await res.json();
            setTodos((prevTodos) => {
                return [ newTodo, ...prevTodos]
            })
        } catch (error) {
            console.log(err);
        }
    };

    const updateTodo = async (updatedTodo) => {
        try {
            const res = await fetch('/api/updateTodo', {
                method: 'PUT',
                body: JSON.stringify(updatedTodo),
                headers: {'Content-Type': 'application/json'}
            });
            await res.json();
            setTodos((prevTodos) => {
                const existingTodos = [...prevTodos];
                const existingTodo = existingTodos.find(todo => todo.id ===
                    updatedTodo.id);
                existingTodo.fields = updatedTodo.fields;
                return existingTodos;
            })
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const res = await fetch('/api/deleteTodo', {
                method: 'DELETE',
                body: JSON.stringify({id}),
                headers: {'Content-Type': 'application/json'}
            });
            setTodos((prevTodos) => {
                return prevTodos.filter((todo) => todo.id !== id );
            })
        } catch (err) {
            console.log(err);
        }
    }
    return ( <TodosContext.Provider 
                value={{
                    todos,
                    setTodos,
                    refreshTodos,
                    updateTodo,
                    deleteTodo,
                    addTodo
                }}>
                    {children}
                </TodosContext.Provider>)
};

export {TodosProvider, TodosContext};