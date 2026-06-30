/**
 * src/components/sections/SearchBar.jsx
 * Search bar with filter tabs and input
 */
import React, { useState } from 'react'
import { MapPin } from 'lucide-react'

const tabs = ['Virtual Office','Coworking Space','Ruang Meeting','Studio Podcast','Di Dekat Saya']

export default function SearchBar(){
  const [active, setActive] = useState(0)
  return (
    <section className="mt-8 reveal">
      <div className="bg-white shadow-card rounded-2xl p-6">
        <div className="flex gap-3 overflow-x-auto pb-3">
          {tabs.map((t,i)=> (
            <button key={t} onClick={()=> setActive(i)} className={`px-4 py-2 rounded-full ${i===active? 'bg-primary text-white':'bg-surface hover:bg-primary/10'}`}>{t}</button>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className="col-span-2 flex items-center gap-3 bg-white rounded-lg p-3 shadow-inner">
            <MapPin />
            <input className="w-full outline-none" placeholder="Cari lokasi, kota, atau kawasan..." />
          </div>
          <div className="flex gap-3">
            <button className="bg-primary text-white px-4 py-3 rounded-pill">TELUSURI</button>
            <button className="border border-primary text-primary px-4 py-3 rounded-pill">Booking Meeting Room</button>
          </div>
        </div>
      </div>
    </section>
  )
}
