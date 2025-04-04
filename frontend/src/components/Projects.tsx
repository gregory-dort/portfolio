"use client"
import React from 'react';
import Image from "next/image";
import Card from './Card';

const projectData = [
    {
        title: "Senior Capstone - PraxAssist",
        role: "Role: Lead Software Engineer / Project Manager",
        description: "PraxAssist is a Medical Application with a Chatbot feature utilizing the OpenAI API to generate responses for medical professionals working with their patients.",
        image: "",
        link: "https://github.com/gregory-dort/prax-assist"
    },
    {
        title: "PrepNGo - Recipe Finder",
        role: "Role: Frontend Developer / UI Designer",
        description: "PrepNGo is a Meal Planning Application utilizing webscraping to find recipes based on ingredients currently at a user's disposal.",
        image: "",
        link: "https://github.com/jodanelysee/HACK-RU-2025"
    }
]

const Projects: React.FC = () => {
    return (
        <div className = "px-10 py-20 bg-sky-200">
            <h1 className = "text-4xl font-bold mb-4 text-center text-white">Projects</h1>

            {/* Grid Section for Project Display */}
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.map((project, index) => (
                    <Card
                        key = {index}
                        title = {project.title}
                        role = {project.role}
                        description = {project.description}
                        image = {project.image}
                        link = {project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;