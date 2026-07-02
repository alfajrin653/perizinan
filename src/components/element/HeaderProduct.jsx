import React from "react";

export default function SectionHeader({
  badge,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`text-center mb-12 ${className}`}>

      {badge && (
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-5">
          {badge}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
          {description}
        </p>
      )}

    </div>
  );
}