import React from "react";

export default function Header() {
  return (
    <header className="flex bg-blue-600 justify-between items-center p-6 bg-black border-b border-gray-800">
      <div className="text-2xl font-bold text-blue-400">TechBrand</div>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:text-blue-300">Home</a></li>
          <li><a href="#" className="hover:text-blue-300">About</a></li>
          <li><a href="#" className="hover:text-blue-300">Projects</a></li>
          <li><a href="#" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
