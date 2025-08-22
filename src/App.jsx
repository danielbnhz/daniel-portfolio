import React from "react";
import PortfolioCard from "./components/Portfoliocard";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Banner from "./components/Banner"

export default function App() {
  const projects = [
    { title: "Project 1" },
    { title: "Project 2"},
    { title: "Project 3" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Component */}
      <Header title="My Portfolio - Daniel Hernandez" />
      <Banner />

      <main className="flex flex-wrap justify-center gap-8 p-10">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}

          />
        ))}
      </main>

      {/* Footer Component */}
      <Footer text="© 2025 Daniel Hernandez" />
    </div>
  );
}
