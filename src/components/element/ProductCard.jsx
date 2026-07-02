import React from "react";

export default function ProductCard({
  image,
  badge,
  title,
  description,

  features = [],

  price,
  period = "",
  showPrice = false,

  buttonText = "View Detail",
  buttonLink = "#",

  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col ${className}`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {badge && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-500 text-sm leading-7">
          {description}
        </p>

        {showPrice && price && (
          <div className="mt-5">

            <span className="text-3xl font-bold text-blue-600">
              {price}
            </span>

            {period && (
              <span className="ml-2 text-gray-500">
                {period}
              </span>
            )}

          </div>
        )}

        {features.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">

            {features.map((item) => (
              <span
                key={item}
                className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md"
              >
                {item}
              </span>
            ))}

          </div>
        )}

        <div className="mt-auto pt-6">

          <a
            href={buttonLink}
            className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            {buttonText}
            <span>→</span>
          </a>

        </div>

      </div>
    </div>
  );
}