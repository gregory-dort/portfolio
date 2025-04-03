"use client"
import React from 'react';
import Image from "next/image";


const Hero: React.FC = () => {
    return(
        <section className = "flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-900 text-white">
            {/* About Me Left Side */}
            <div className = "md:w-1/2 text-center">
                <h1 className = "text-4xl font-bold mb-4">Hi, My name is Greg!</h1>
            </div>

            {/* About Me Right Side */}
            <div className = "md:w-1/2 flex justify-center mt-10 md:mt-0">
                <div className = "w-72 h-72 md:w-84 md:h-84 rounded-full overflow-hidden border-10 border-violet-400 shadow-lg">
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
