import { useEffect } from 'react'

/* Adds a `.vis` class to any `.reveal` element inside the mounted
   page when it enters the viewport. Matches the existing CSS hook
   used on HomePage so animations stay consistent across pages. */
export default function useReveal(rootSelector = '.elevate-home') {
  useEffect(() => {
    const root = document.querySelector(rootSelector)
    if (!root) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('vis')
        })
      },
      { threshold: 0.1 }
    )
    root.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [rootSelector])
}
