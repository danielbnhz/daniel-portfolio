import React from "react";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <header className="p-6 text-center text-3xl font-bold border-b border-gray-700">
        My Portfolio
      </header>

      <main className="p-10 flex flex-col items-center gap-8">
        <div className="bg-blue-400 text-white p-6 rounded-lg shadow-lg w-80 text-center">
          Project 1
        </div>
        <div className="bg-blue-300 text-white p-6 rounded-lg shadow-lg w-80 text-center">
          Project 2
        </div>
        <div className="bg-blue-200 text-black p-6 rounded-lg shadow-lg w-80 text-center">
          Project 3
        </div>
      </main>

      <footer className="p-6 text-center border-t border-gray-700">
        &copy; 2025 MyName
      </footer>
    </div>
  );
}
