import React from 'react';
import Image from 'next/image';

interface CardProps {
    title: string;
    description?: string;
    image?: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
    return (
        <div className = "p-6 bg-gray-600 shadow-lg rounded-2xl">
            {image && (
                <div className = "mb-4">
                    <Image
                        src = {image}
                        alt = "Project Image"
                        width = {400}
                        height = {300}
                        className = "rounded-xl"
                    />
                </div>
            )}
            <h2 className = "text-2xl text-sky-200 font-bold mb-2">{title}</h2>
            {description &&<p className = "text-lg text-amber-100 font-semibold mb-4">{description}</p>}
            <a href = {link} className = "text-amber-100 hover:text-sky-200 font-semibold">Link to Project</a>
        </div>
    );
};

export default Card;