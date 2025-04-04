"use client"
import React from 'react';

const Navbar: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className = "sticky top-0 z-50 w-full bg-transparent flex justify-between items-center">
            <h1 className = "text-4xl text-white front-bold">Gregory Dort</h1>
            <ul className = "flex space-x-6">
                <li>
                    <button onClick={() => scrollToSection('hero')} className = "px-4 py-2 bg-transparent rounded-lg text-white hover:text-sky-200 shadow-lg text-lg transition duration-200">
                        About Me
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('slider')} className = "px-4 py-2 bg-transparent rounded-lg text-white hover:text-sky-200 shadow-lg text-lg transition duration-200">
                        Experience
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('projects')} className = "px-4 py-2 bg-transparent rounded-lg text-white hover:text-sky-200 shadow-lg text-lg transition duration-200">
                        Projects
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('interests')} className = "px-4 py-2 bg-transparentrounded-lg text-white hover:text-sky-200 shadow-lg text-lg transition duration-200">
                        Interests
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection('contact')} className = "px-4 py-2 bg-transparent rounded-lg text-white hover:text-sky-200 shadow-lg text-lg transition duration-200">
                        Contact
                    </button>
                </li>
                
            </ul>
        </nav>
    );
};

export default Navbar;