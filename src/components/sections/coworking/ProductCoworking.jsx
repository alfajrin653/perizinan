import React, { useState } from "react";

import SectionHeader from "../../element/HeaderProduct";
import CategoryFilter from "../../element/CatagoryFilter";
import ProductCard from "../../element/ProductCard";

import {
  categories,
  locations,
} from "../../../data/Coworking.js";

export default function ProductCoworking() {

  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredLocations =
    activeCategory === "Semua"
      ? locations
      : locations.filter(
          (loc) => loc.city === activeCategory
        );

  return (
    <section className="py-16 px-4 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <SectionHeader
          badge="OUR LOCATIONS"
          title="Temukan Lokasi Ideal Anda"
          description="Pilih lokasi terbaik untuk mendukung perkembangan bisnis Anda."
        />

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredLocations.map((loc) => (

            <ProductCard
              key={loc.id}
              image={loc.image}
              badge={loc.city}
              title={loc.title}
              description={loc.address}
              features={loc.features}
              price={loc.pricing?.price}
              period={loc.pricing?.period}
              showPrice={true}
              buttonText="Lihat Detail"
              buttonLink={`/coworking-space/detail/${loc.id}`}
            />

          ))}

        </div>

        {filteredLocations.length === 0 && (
          <div className="py-16 text-center">

            <p className="text-gray-500">
              Tidak ada lokasi ditemukan.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}