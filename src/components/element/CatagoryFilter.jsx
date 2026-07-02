import React from "react";

export default function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300

          ${
            activeCategory === category
              ? "bg-blue-600 text-white shadow-md scale-105"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}