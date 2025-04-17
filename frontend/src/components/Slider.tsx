"use client"
import React, { useState } from 'react';

const Slider: React.FC =() => {
    const [activeTab, setActiveTab] = useState('');

    return(
        <div className = "p-6 bg-gradient-to-br from-green-200 to-violet-400 rounded-lg shadow-lg">
            <div className = "flex flex-row items-center justify-center mb-4 relative">

                {/* Education Experience Button */}
                <button 
                className = {`px-4 py-2 mx-2 rounded-lg text-2xl text-bold
                            hover:outline-1 hover:outline-violet-600
                            focus:outline-1 focus:outline-violet-600
                            ${activeTab === 'education' ? 'bg-violet-600' : 'bg-transparent'}`}
                onClick = {() => setActiveTab('education')}
                >
                    Educational Experience
                </button>

                {/* Vertical Line */}
                <div className = "w-px h-10 bg-gray-600 mx-4"></div>

                {/* Professional Experience Button */}
                <button 
                className = {`px-4 py-2 mx-2 rounded-lg text-2xl text-bold
                            hover:outline-1 hover:outline-violet-600
                            focus:outline-1 focus:outline-violet-600 
                            ${activeTab === 'experience' ? 'bg-violet-600' : 'bg-transparent'}`}
                onClick = {() => setActiveTab('experience')}
                >
                    Professional Experience
                </button>
            </div>

            <div className = "text-center max-w-3xl mx-auto">
                    {activeTab === 'education' ? (
                        <div className = "bg-gray-600 rounded-lg p-4 h-48 overflow-y-auto">
                            <h2 className = "text-3xl font-bold">Education</h2>
                            <p>Bachelor of Science (BS) in Information Technology from Sacred Heart University</p>
                            <p>Minor in Computer Science</p>
                            <p>Relevant Coursework: Software Engineering, Human Computer Interaction, Database Design & Management, Professional Web Design </p>
                        </div>
                    ) : (
                        <div className = "bg-gray-600 rounded-lg p-4 h-48 overflow-y-auto">
                            <h2 className = "text-3xl font-bold">Professional Experience</h2>
                            <p>Level 1 Service Technician at Sacred Heart University</p>
                            <p>Consultation Agent at Geek Squad | Best Buy</p>
                        </div>
                    )}
                </div>
        </div>
    );
};

export default Slider;