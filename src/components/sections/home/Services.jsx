/**
 * src/components/sections/Services.jsx
 * Services listing section using ServiceCard components
 */
import React from 'react'
import { services } from '../../../data/services'
import ServiceCard from '../../ui/ServiceCard'
import useScrollReveal from '../../../hooks/useScrollReveal'

export default function Services(){
  useScrollReveal()
  return (
    <section className="mt-10 reveal">
      <h3 className="text-xl font-semibold mb-4">Layanan Unggulan</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map(s=> <ServiceCard key={s.id} {...s} />)}
      </div>
    </section>
  )
}
