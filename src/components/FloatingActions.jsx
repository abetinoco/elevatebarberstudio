import { useEffect, useRef, useState } from 'react'
import {
  BOOKSY_BOOK_URL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from '../data/siteData'

/* Mobile-only floating action stack.
   - Stack order (bottom → top): Book, Call, Back-to-top.
   - Hides when the user scrolls down, slides back in when they scroll up.
   - Back-to-top only renders after the user has moved past the first viewport.
   - Desktop is handled by the real nav; CSS hides the stack at ≥1024px. */
export default function FloatingActions() {
  const [visible, setVisible] = useState(true)
  const [pastHero, setPastHero] = useState(false)
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY.current
        // Dead zone avoids jitter from sub-pixel scroll events.
        if (Math.abs(delta) > 6) {
          if (delta > 0 && y > 140) {
            setVisible(false)
          } else if (delta < 0) {
            setVisible(true)
          }
          lastY.current = y
        } else if (y <= 140) {
          // Near top — always show so the stack is anchored on first load.
          setVisible(true)
          lastY.current = y
        }
        setPastHero(y > 520)
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`floating-actions${visible ? '' : ' floating-actions--hidden'}`}
      aria-hidden={!visible}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className={`fa-btn fa-top${pastHero ? '' : ' fa-top--tucked'}`}
        aria-label="Back to top"
        tabIndex={pastHero ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 15l6-6 6 6" />
        </svg>
      </button>
      <a
        href={`tel:${BUSINESS_PHONE_TEL}`}
        className="fa-btn fa-call"
        aria-label={`Call Barber Elevate Studio at ${BUSINESS_PHONE_DISPLAY}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
      <a
        href={BOOKSY_BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fa-btn fa-book"
        aria-label="Book on Booksy"
      >
        <img src="/booksy-icon.png" alt="" aria-hidden="true" className="fa-book-ico" />
        <span>Book</span>
      </a>
    </div>
  )
}
