/**
 * src/components/ui/StatCounter.jsx
 * Shows animated stat using useCounterAnimation
 */
import React from 'react'
import useCounterAnimation from '../../hooks/useCounterAnimation'

export default function StatCounter({ value, suffix, label }){
  const { ref, value: v } = useCounterAnimation(value, 2000)
  return (
    <div ref={ref} className="bg-white p-4 rounded-card shadow-card text-center">
      <div className="text-3xl font-bold text-primary">{v}{suffix}</div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  )
}
