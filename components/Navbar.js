import React from 'react';

function Navbar() {
    return (
        <nav>
            <p class="text-2xl font-bold text-grey-800">My Todos</p>
            <div className="flex">
                <a href="/api/logout"
                    className="rounded bg-blue-500 hover:bg-blue-600
                    text-white py-2 px-4">
                        Logout
                    </a>
            </div>
        </nav>
    );
}

export default Navbar;