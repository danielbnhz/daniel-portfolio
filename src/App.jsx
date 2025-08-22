import React from "react";
import PortfolioCard from "./components/Portfoliocard";

export default function App() {
  const projects = [
    { title: "Project 1" },
    { title: "Project 2"},
    { title: "Project 3" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="p-6 text-center text-3xl font-bold border-b border-gray-700">
        My Portfolio
      </header>

      <main className="flex flex-wrap justify-center gap-8 p-10">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}

          />
        ))}
      </main>

      <footer className="p-6 text-center border-t border-gray-700">
        &copy; 2025 MyName
      </footer>
    </div>
  );
}
