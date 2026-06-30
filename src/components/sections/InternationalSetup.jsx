/**
 * src/components/sections/InternationalSetup.jsx
 * Grid of countries for international business setup
 */
import React from 'react'
import { countries } from '../../data/countries'
import CountryCard from '../ui/CountryCard'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function InternationalSetup(){
  useScrollReveal()
  return (
    <section className="mt-10 reveal">
      <h3 className="text-xl font-semibold mb-4">Ekspansi Bisnis ke Seluruh Dunia</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {countries.map((c,idx)=> <CountryCard key={idx} country={c} />)}
      </div>
    </section>
  )
}
