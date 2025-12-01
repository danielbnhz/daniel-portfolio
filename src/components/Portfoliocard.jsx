import React from "react";

export default function PortfolioCard({ title, description, bgColor = "bg-sky-500", textColor = "text-white" }) {
  return (
    <section
      className={`
        ${bgColor} ${textColor} 
        rounded-xl shadow-lg 
        w-80 text-center p-8 
        transform transition-transform duration-300 
        hover:scale-105 hover:shadow-2xl
      `}
    >
      {/* Image / preview */}
      <div
        className="
          bg-gray-200 h-40 w-full mb-4 rounded-md 
          flex items-center justify-center 
          shadow-inner
          transform transition-transform duration-300 
          hover:scale-105
        "
      >
        <span className="text-gray-500">Preview Image</span>
      </div>

      {/* Project title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </section>
  );
}
