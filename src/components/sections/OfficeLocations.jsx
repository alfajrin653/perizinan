/**
 * src/components/sections/OfficeLocations.jsx
 * Office locations grid
 */
import React from 'react'
import { locations } from '../../data/locations'
import LocationCard from '../ui/LocationCard'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function OfficeLocations(){
  useScrollReveal()
  return (
    <section className="mt-10 reveal">
      <h3 className="text-xl font-semibold mb-4">Lokasi Kantor Kami</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {locations.map((l,idx)=> <LocationCard key={idx} item={l} />)}
      </div>
    </section>
  )
}
