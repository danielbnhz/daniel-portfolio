import React from "react";

export default function PortfolioCard({ title, bgColor, textColor }) {
  return (
    <section
      className={`rounded-lg shadow-lg w-80 text-center p-10 bg-sky-500 text-white`}
    >
      {title}
    </section>
  );
}
