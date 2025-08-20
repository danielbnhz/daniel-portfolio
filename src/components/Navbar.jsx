import React from "react";

export default function Navbar() {
  return (
    <header className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">MyBrand</div>
        <nav className="space-x-4">
          <a href="#projects" className="hover:text-blue-300">Projects</a>
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}
