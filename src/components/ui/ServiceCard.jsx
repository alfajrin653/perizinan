/**
 * src/components/ui/ServiceCard.jsx
 * Card for a service offering
 */
import React from 'react'
import * as Icons from 'lucide-react'

export default function ServiceCard({ icon, title, description, href }){
  const Icon = Icons[icon] || Icons['Box']
  return (
    <article className="bg-white p-4 rounded-card shadow-card hover:shadow-card-hover hover:scale-105 transform transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="text-primary bg-primary/10 rounded-xl p-3">
          <Icon />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted mt-1">{description}</p>
          <a href={href} className="inline-block mt-3 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">Pelajari Lebih →</a>
        </div>
      </div>
    </article>
  )
}
