import React from "react";

export default function Footer({ text }) {
  return (
    <footer className="bg-gradient-to-r text-center from-sky-500 to-sky-700 text-white p-6 rounded-lg shadow-lg">
      {text}
    </footer>
  );
}
