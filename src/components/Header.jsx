import React from "react";

export default function Header({ title }) {
  return (
    <header className="p-6 text-center text-3xl font-bold border-b border-gray-700">
      {title}
    </header>
  );
}