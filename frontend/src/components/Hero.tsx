"use client"
import React from 'react';
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Hero: React.FC = () => {
    return(
        <section className = "flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gradient-to-b from-sky-200 to-sky-700 text-white">
            {/* Background Grid Pattern */}

            {/* About Me Content */}

            {/* About Me Left Side */}
            <div className = "md:w-1/2 text-center">
                <h1 className = "text-4xl font-bold mb-4">Hi, My Name Is Greg!</h1>
                <span className = "text-xl mb-4 shadow-lg">
                    I'm a Software Engineer, Problem Solver, and Tech Enthusiast
                </span>

                {/* Social Media Links */}
                <div className = "flex flex-col items-center justify-center md:justify-start mt-6 gap-6">
                    <span className = "text-xl text-white font-semibold">Connect with Me!</span>
                    <div className = "flex flex-row gap-8 text-3xl">
                        <a href="https://github.com/gregory-dort" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className = "hover:text-sky-700 trasition duration-300 hover:scale-110 shadow-lg" />
                        </a>
                        <a href="https://www.linkedin.com/in/gregory-dort-776503218/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className = "hover:text-sky-700 transition duration-300 hover:scale-110 shadow-lg" />
                        </a>
                        <a href="https://www.instagram.com/gdort07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className = "hover:text-sky-700 transition duration-300 hover:scale-110 shadow-lg" />
                        </a>
                    </div>
                </div>
            </div>

            {/* About Me Right Side */}
            <div className = "md:w-1/2 flex justify-center mt-10 md:mt-0">
                <div className = "w-72 h-72 md:w-84 md:h-84 rounded-full overflow-hidden border-10 border-white shadow-xl">
                    <Image 
                    src = "/profileimg.jpg" 
                    alt = "Profile Picture" 
                    width = {300} 
                    height = {300} 
                    className = "w-full h-full shadow-lg object-cover"
                    priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
