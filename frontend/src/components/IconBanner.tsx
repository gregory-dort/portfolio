"use client";
import React from 'react';
import { SiJavascript, SiPython, SiFlask, SiMongodb, SiTailwindcss, SiGithub, SiHtml5, SiCss3, SiNextdotjs,
SiNodedotjs, SiExpress, SiReact, SiTypescript, SiSqlite, } from "react-icons/si";

const techStack = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiHtml5, name: "HTML" },
    { icon: SiCss3, name: "CSS" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiPython, name: "Python" },
    { icon: SiFlask, name: "Flask" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiSqlite, name: "SQLite" },
];

const IconBanner: React.FC = () => {
    return (
        <section className = "py-6 bg-sky-200 text-white">
            <h2 className = "text-center text-3xl font-bold mb-8">Technologies I Have Worked With</h2>

            <div className = "flex flex-wrap justify-center gap-6 px-4">
                {techStack.map(({ icon: Icon, name }, index) => (
                    <div
                    key = {index}
                    className = "flex flex-col items-center text-center hover:scale-110 hover:text-sky-700 transition-transform duration-300"
                    >
                        <Icon size = {48} />
                        <span className = "mt-2 text-sm">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IconBanner;