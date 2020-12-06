import '../styles/index.css'
import {TodosProvider} from "../Context/TodosContext";

function MyApp({ Component, pageProps }) {
  return (
        <TodosProvider>
          <div className="container mx-auto my-6 max-w-xl">
            <Component {...pageProps} />
          </div>
        </TodosProvider>
  )
}

export default MyApp
