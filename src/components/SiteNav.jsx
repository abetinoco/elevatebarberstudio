import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  BOOKSY_BOOK_URL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from '../data/siteData'
import FloatingActions from './FloatingActions'

/* Nav structure — ordered left-to-right the same way the page flows
   top-to-bottom. Every item is an on-home anchor so the nav scrolls in-page
   (the full /portfolio route is still reachable via the "See the Full
   Portfolio" CTA and the footer Work link). */
const NAV_ITEMS = [
  { key: 'process',   label: 'Process',  hash: 'process'   },
  { key: 'services',  label: 'Services', hash: 'services'  },
  { key: 'portfolio', label: 'Work',     hash: 'portfolio' },
  { key: 'about',     label: 'About',    hash: 'about'     },
  { key: 'reviews',   label: 'Reviews',  hash: 'reviews'   },
  { key: 'faq',       label: 'FAQ',      hash: 'faq'       },
  { key: 'location',  label: 'Visit',    hash: 'location'  },
  { key: 'social',    label: 'Follow',   hash: 'social'    },
]

/* On the HomePage, anchor links just jump in-page.
   On any other page, they need to navigate home first, then jump. */
function useHomeHref() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  return (hash) => (onHome ? `#${hash}` : `/#${hash}`)
}

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const href = useHomeHref()
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const onPortfolio = pathname.startsWith('/portfolio')

  /* Mobile menu: lock body scroll while open, close on Escape, and make sure
     crossing the desktop breakpoint auto-closes (so the overlay never lingers
     if the user rotates / resizes). */
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = (e) => {
      if (e.matches) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  /* ── Scroll spy: highlight the nav item whose section is in view. ──
     rootMargin creates a narrow "active band" ~40% from the top of the
     viewport so only one section qualifies at a time and handoff is clean. */
  const [activeKey, setActiveKey] = useState(null)
  useEffect(() => {
    // On the dedicated portfolio page, "Work" is always the active item.
    if (onPortfolio) {
      setActiveKey('portfolio')
      return
    }
    if (!onHome) {
      setActiveKey(null)
      return
    }

    const targets = NAV_ITEMS
      .map((item) => ({ item, el: document.getElementById(item.hash) }))
      .filter((t) => t.el)

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = targets.find((t) => t.el === entry.target)
            if (match) setActiveKey(match.item.key)
          }
        })
      },
      {
        // 5% tall band centered ~40% down the viewport
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      },
    )

    targets.forEach((t) => observer.observe(t.el))
    return () => observer.disconnect()
  }, [onHome, onPortfolio])

  /* ── Sliding indicator: measure the active link and move a single
     underline span to its position/width. Smooth CSS transition does the rest. */
  const linksRef = useRef(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })

  useLayoutEffect(() => {
    const root = linksRef.current
    if (!root) return
    const update = () => {
      const active = root.querySelector('[data-nav-active="true"]')
      if (!active) {
        setIndicator((prev) => ({ ...prev, visible: false }))
        return
      }
      const rootBox = root.getBoundingClientRect()
      const box = active.getBoundingClientRect()
      setIndicator({
        left: box.left - rootBox.left,
        width: box.width,
        visible: true,
      })
    }
    update()
    // Recompute on resize (layout shifts when breakpoints change).
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [activeKey, pathname])

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link to="/" className="nl nl-link" aria-label="Barber Elevate Studio home">
            <img src="/logo-elevate.png" alt="Barber Elevate Studio" className="nl-logo" />
          </Link>
          <div className="nav-links" ref={linksRef} aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const isActive = activeKey === item.key
              const commonProps = {
                'data-nav-active': isActive ? 'true' : undefined,
                className: isActive ? 'is-active' : undefined,
              }
              return item.to ? (
                <Link key={item.key} to={item.to} {...commonProps}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.key} href={href(item.hash)} {...commonProps}>
                  {item.label}
                </a>
              )
            })}
            <span
              className="nav-indicator"
              aria-hidden
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: `${indicator.width}px`,
                opacity: indicator.visible ? 1 : 0,
              }}
            />
          </div>
          <div className="nav-actions">
            <a
              href={`tel:${BUSINESS_PHONE_TEL}`}
              className="nav-call"
              aria-label={`Call Barber Elevate Studio at ${BUSINESS_PHONE_DISPLAY}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="nav-call-text">Call</span>
            </a>
            <a href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer" className="nav-book" aria-label="Book on Booksy">
              <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark" />
              <span>Book</span>
            </a>
          </div>
          <button
            type="button"
            className={`nmb${menuOpen ? ' nmb--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`mob-menu${menuOpen ? ' mob-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mob-menu-nav" aria-label="Mobile primary">
          {NAV_ITEMS.map((item, i) => {
            const num = String(i + 1).padStart(2, '0')
            return item.to ? (
              <Link key={item.key} to={item.to} onClick={closeMenu}>
                <span className="mob-num">{num}</span>
                <span className="mob-lbl">{item.label}</span>
              </Link>
            ) : (
              <a key={item.key} href={href(item.hash)} onClick={closeMenu}>
                <span className="mob-num">{num}</span>
                <span className="mob-lbl">{item.label}</span>
              </a>
            )
          })}
        </nav>
        <div className="mob-menu-foot">
          <a
            href={BOOKSY_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-blk mob-menu-book"
            onClick={closeMenu}
          >
            <span className="btn-content">
              <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark booksy-mark--lg" />
              <span>Book on Booksy</span>
            </span>
            <span className="arr">→</span>
          </a>
          <div className="mob-menu-meta">
            <a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE_DISPLAY}</a>
            <span className="mob-menu-meta-dot" aria-hidden>·</span>
            <span>72 E Belvidere Rd, Hainesville IL</span>
          </div>
        </div>
      </div>

      <FloatingActions />
    </>
  )
}
