/**
 * src/hooks/useScrollReveal.js
 * Hook to add 'visible' class to elements with .reveal when they enter viewport
 */
import { useEffect } from 'react'

export default function useScrollReveal(){
  useEffect(()=>{
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el=> obs.observe(el))
    return ()=> obs.disconnect()
  }, [])
}
