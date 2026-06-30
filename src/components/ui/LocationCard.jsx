/**
 * src/components/ui/LocationCard.jsx
 * Card used in OfficeLocations section
 */
import React from 'react'

export default function LocationCard({ item }){
  return (
    <div className="rounded-card overflow-hidden shadow-card group">
      <div className="relative h-44">
        <img src={item.image} alt={item.country} className="w-full h-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute left-4 bottom-4 text-white">
          <div className="text-lg font-semibold">{item.country}</div>
          <div className="text-sm">{item.building}</div>
          <div className="text-sm mt-1">{item.phone}</div>
        </div>
      </div>
      <div className="p-3 bg-white">
        <a href="#" className="text-sm text-primary">Hubungi</a>
      </div>
    </div>
  )
}
