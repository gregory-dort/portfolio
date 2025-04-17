"use client"
import React, { useState, useEffect } from 'react';
import useActiveSection from '@/app/useActiveSection';

const sections = ['hero', 'slider', 'projects', 'interests', 'contact'];

const Navbar: React.FC = () => {
    const activeSection = useActiveSection(sections);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className = "fixed top-0 z-50 w-full px-8 pt-6 mb-4 flex justify-between items-center transition duration-300 bg-gray-900/80 backdrop-blur-lg shadow-md">
            <h1 className = "text-4xl text-white front-bold">Gregory Dort</h1>
            <ul className = "flex space-x-6">
                {sections.map((sectionId) => (
                    <li key = {sectionId}>
                        <button onClick = {() => scrollToSection(sectionId)}
                                className = {`px-4 py-2 rounded-lg text-lg hover:text-violet-200 transition duration-300 shadow-lg relative`}
                        >
                            { sectionId === 'hero' && 'About Me'}
                            { sectionId === 'slider' && 'Experience'}
                            { sectionId === 'projects' && 'Projects'}
                            { sectionId === 'interests' && 'Interests'}
                            { sectionId === 'contact' && 'Contact'}

                            {/* Highlight Underline */}
                            {activeSection === sectionId && (
                            <span className = "absolute left-1/2 right-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-white rounded-full bottom-0 transition-all duration-300"></span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;