import React from "react";

export default function PortfolioCard({ title, bgColor, textColor }) {
  return (
    <section
      className={`rounded-lg shadow-lg w-80 text-center p-10 bg-sky-500 text-white`}
    >
      <div className="bg-gray-200 h-40 w-full mb-4 rounded-md flex items-center justify-center">
        <span className="text-gray-500">Preview Image</span>
      </div>

      {/* Project title */}
      <h3 className="text-xl font-semibold">{title}</h3>
    </section>
  );
}
