import React from "react";

export default function Navbar() {
  return (
   <nav className="flex justify-between items-center p-4 bg-dark border-b border-primary">
     <h1 className="text-2xl font-bold text-primary">My Portfolio</h1>
     <ul className="flex gap-6">
       <li><a href="#about" className="hover:text-primary">About</a></li>
       <li><a href="#projects" className="hover:text-primary">Projects</a></li>
       <li><a href="#contact" className="hover:text-primary">Contact</a></li>
     </ul>
   </nav>

  );
}
