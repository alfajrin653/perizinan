// LocationSection.jsx
import React, { useState } from 'react';
import { locations, categories } from '../../../data/locations'


const LocationSection = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Filter logika: tampilkan semua jika "Semua" dipilih, jika tidak, filter berdasarkan kota
  const filteredLocations = activeCategory === "Semua" 
    ? locations 
    : locations.filter(loc => loc.city === activeCategory);

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Temukan Lokasi Ideal Anda
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih dari berbagai lokasi strategis kami untuk mendukung operasional dan administrasi bisnis Anda dengan lebih efisien.
          </p>
        </div>

        {/* Filter Pills UX */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((loc) => (
            <div 
              key={loc.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm">
                  {loc.city}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{loc.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {loc.address}
                  </p>
                  
                  {/* Features / Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {loc.features.map((feature, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer/Action */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  {/* <span className="text-sm font-bold text-gray-900">
                    {loc.price}
                  </span> */}
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 transform duration-300 flex items-center gap-1">
                    < a href={loc.link} className="flex items-center gap-1">
                    Lihat Detail <span aria-hidden="true">&rarr;</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State jika data tidak ditemukan (Opsional tapi bagus untuk UX) */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada lokasi yang ditemukan untuk kategori ini.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default LocationSection;