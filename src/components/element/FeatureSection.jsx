import React from "react";

export default function FeatureSection({ 
  badge, 
  title, 
  description, 
  imageSrc, 
  statsValue, 
  statsLabel, 
  features,
  buttonText, // <-- Tambahan prop untuk tombol
  buttonLink  // <-- Tambahan prop untuk link tombol
}) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src={imageSrc}
              alt={title}
              className="rounded-3xl object-cover w-full h-[520px]"
            />
            {statsValue && (
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                <p className="text-4xl font-bold text-blue-600">{statsValue}</p>
                <p className="text-gray-500 mt-1">{statsLabel}</p>
              </div>
            )}
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              {badge}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-6 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 mt-6 leading-8">{description}</p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-800">{item.title}</span>
                  </div>
                );
              })}
            </div>

            {/* Render Tombol Jika buttonText diisi */}
            {buttonText && (
              <div className="mt-10">
                <a 
                  href={buttonLink || "#"} 
                  className="inline-flex bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                >
                  {buttonText}
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}