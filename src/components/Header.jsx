import React from "react";

export default function Header({ title }) {
  return (
    <header className="p-6 text-center text-3xl font-bold bg-sky-600 text-white shadow-lg">
      {title}
    </header>
  );
}