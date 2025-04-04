"use client"
import React, { useState } from 'react';

const Slider: React.FC =() => {
    const [activeTab, setActiveTab] = useState('');

    return(
        <div className = "p-6 bg-gray-400 rounded-lg shadow-lg">
            <div className = "flex flex-row items-center justify-center mb-4">

                {/* Education Experience Button */}
                <button 
                className = {`px-4 py-2 mx-2 rounded-lg hover:bg-sky-200 ${activeTab === 'education' ? 'bg-sky-200' : 'bg-gray-600'}`}
                onClick = {() => setActiveTab('education')}>
                    Educational Experience
                </button>

                {/* Vertical Line */}
                <div className = "w-px h-10 bg-gray-600 mx-4"></div>

                {/* Professional Experience Button */}
                <button 
                className = {`px-4 py-2 mx-2 rounded-lg hover:bg-sky-700 ${activeTab === 'experience' ? 'bg-sky-700' : 'bg-gray-600'}`}
                onClick = {() => setActiveTab('experience')}>
                    Professional Experience
                </button>
            </div>

            <div className = "text-center">
                    {activeTab === 'education' ? (
                        <div className = "bg-gray-600 rounded-lg p-4">
                            <h2 className = "text-2xl font-bold">Education</h2>
                            <p>Bachelor of Science (BS) in Information Technology from Sacred Heart University</p>
                            <p>Minor in Computer Science</p>
                            <p>Relevant Coursework: Software Engineering, Human Computer Interaction, Database Design & Management, Professional Web Design </p>
                        </div>
                    ) : (
                        <div className = "bg-gray-600 rounded-lg p-4">
                            <h2 className = "text-2xl font-bold">Professional Experience</h2>
                            <p>Level 1 Service Technician at Sacred Heart University</p>
                            <p>Consultation Agent at Geek Squad | Best Buy</p>
                        </div>
                    )}
                </div>
        </div>
    );
};

export default Slider;