"use client"
import React from 'react';

const Navbar: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className = "p-4 bg-violet-400 mb-6 flex justify-between items-center shadow-lg">
            <h1 className = "text-2xl text-gray-800 front-bold">My Portfolio</h1>
            <ul className = "flex space-x-6">
                <li>
                    <button onClick={() => scrollToSection('hero')} className = "px-4 py-2 bg-gray-900 rounded-lg text-white hover:text-violet-400 shadow-lg text-lg transition duration-200">
                        About Me
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('slider')} className = "px-4 py-2 bg-gray-900 rounded-lg text-white hover:text-violet-400 shadow-lg text-lg transition duration-200">
                        Experience
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('projects')} className = "px-4 py-2 bg-gray-900 rounded-lg text-white hover:text-violet-400 shadow-lg text-lg transition duration-200">
                        Projects
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('interests')} className = "px-4 py-2 bg-gray-900 rounded-lg text-white hover:text-violet-400 shadow-lg text-lg transition duration-200">
                        Interests
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('contact')} className = "px-4 py-2 bg-gray-900 rounded-lg text-white hover:text-violet-400 shadow-lg text-lg transition duration-200">
                        Contact
                    </button>
                </li>
                
            </ul>
        </nav>
    );
};

export default Navbar;