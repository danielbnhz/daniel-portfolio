import React from "react";
import PortfolioCard from "./components/Portfoliocard";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Banner from "./components/Banner"

export default function App() {
  const projects = [
    { title: "Code_Business" , description: "Coming soon"},
    { title: "SortingVisualizer", description: "Under Construction" },
    { title: "Sketches" , description: "Under Construction" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Component */}
      <Header title="Hello 👋" />
      <Banner />

      {/* Main Content */}
      <main className="flex-1 flex flex-wrap justify-center gap-8 p-10">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </main>

      {/* Footer Component */}
      <Footer text="© 2025 Daniel Hernandez" />
    </div>
  );
}
