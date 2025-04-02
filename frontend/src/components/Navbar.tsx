import React from 'react';

const Navbar: React.FC = () => {
    return(
        <nav className = "p-4 bg-blue-600 mb-6 flex justify-between items-center shadow-lg">
            <h1 className = "text-2xl text-sky-200 front-bold">Portfolio</h1>
        </nav>
    );
};

export default Navbar;