/**
 * src/hooks/useCounterAnimation.js
 * Hook to animate a number from 0 to target when element enters viewport
 */
import { useEffect, useRef, useState } from 'react'

export default function useCounterAnimation(target, duration = 2000){
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    if(!el) return
    let started = false
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting && !started){
          started = true
          const start = performance.now()
          const step = (now)=>{
            const progress = Math.min((now - start)/duration,1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(eased * target))
            if(progress < 1) requestAnimationFrame(step)
            else setValue(target)
          }
          requestAnimationFrame(step)
        }
      })
    }, { threshold: 0.2 })
    obs.observe(el)
    return ()=> obs.disconnect()
  }, [target, duration])
  return { ref, value }
}
