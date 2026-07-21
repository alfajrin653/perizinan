import React from 'react';
import ProductCard from '../../element/ProductCard'; // Sesuaikan path-nya
// import { locations } from "../../../data/Coworking";
import { useEffect, useState } from 'react';

export default function CoworkingLocations() {
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/data/coworking-location.json')
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.locations);
        setCategories(data.categories);
      });
  }, []);

  return (
    <section className='py-24 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Pilihan Lokasi Coworking Space</h2>
          <p className='text-slate-600'>Temukan ruang kerja ideal Anda di berbagai lokasi strategis kami.</p>
        </div>

        {/* Implementasi ProductCard dalam Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {locations.map((loc, index) => (
            <ProductCard
              key={index}
              image={loc.image}
              badge={loc.region}
              title={loc.name}
              description={loc.address}
              features={loc.facilities}
              price={loc.price}
              period={loc.period}
              showPrice={true}
              buttonText='Book Now'
              buttonLink={`/coworking-space/detail/${loc.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
