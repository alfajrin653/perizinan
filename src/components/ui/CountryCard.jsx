/**
 * src/components/ui/CountryCard.jsx
 * Card used in InternationalSetup list
 */
import React from 'react'

export default function CountryCard({ country }){
  return (
    <div className="bg-white p-4 rounded-card shadow-card text-center hover:transform hover:-translate-y-1 transition">
      <div className="text-3xl">{country.flag}</div>
      <div className="mt-2 font-semibold">{country.name}</div>
    </div>
  )
}
