import React from "react";

export default function PortfolioCard({ title, description }) {
  return (
    <div className="max-w-sm mx-auto bg-blue-600 text-white rounded-lg shadow-lg p-6 my-6">
    <h2 className="text-xl font-bold mb-2">Project Name</h2>
    <p className="text-sm">Short description of this project.</p>
    <a href="#" className="text-blue-200 underline mt-4 inline-block">View Project</a>
    </div>
    );
}
