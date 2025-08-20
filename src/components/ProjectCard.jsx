import React from "react";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="border border-blue-300 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        View Project
      </a>
    </div>
  );
}
