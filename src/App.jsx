import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-800 mb-4">My Portfolio</h1>
          <p className="text-gray-700 text-lg">
            Projects I’ve built with code and creativity.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="Project 1" description="A cool React app" link="#" />
          <ProjectCard title="Project 2" description="Another awesome project" link="#" />
          <ProjectCard title="Project 3" description="Yet another one" link="#" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
