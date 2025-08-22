import React from "react";

export default function Footer({ text }) {
  return (
    <footer className="p-6 text-center bg-sky-700 text-white shadow-lg">
      {text}
    </footer>
  );
}
