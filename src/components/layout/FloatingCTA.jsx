/**
 * src/components/layout/FloatingCTA.jsx
 * Floating CTA column with icons and tooltips
 */
import React from 'react'
import { Phone, Calendar, ShoppingCart, MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: Phone, label: 'Hubungi Kami', href: 'tel:+622129222999', bg: 'bg-primary' },
  { icon: Calendar, label: 'Booking', href: '#', bg: 'bg-secondary' },
  { icon: ShoppingCart, label: 'Beli Virtual Office', href: '#', bg: 'bg-accent' },
  { icon: MapPin, label: 'Lokasi', href: '#', bg: 'bg-green-500' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/6281280055105', bg: 'bg-green-400' }
]

export default function FloatingCTA(){
  return (
    <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="fixed right-4 bottom-8 z-50 flex flex-col gap-3">
      {items.map((it,idx)=>{
        const Icon = it.icon
        return (
          <a key={idx} href={it.href} className={`${it.bg} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg`} title={it.label}>
            <Icon size={18} />
          </a>
        )
      })}
    </motion.div>
  )
}
