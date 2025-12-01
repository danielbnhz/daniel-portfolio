import React from "react";

export default function Header({ title }) {
  return (
    <header className="bg-gradient-to-r from-sky-700 to-sky-500 text-white p-6 rounded-lg shadow-lg text-center text-4xl font-bold">
      {title}
    </header>
  );
}