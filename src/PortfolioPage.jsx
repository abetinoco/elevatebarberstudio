import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/home.css'
import './styles/portfolio.css'
import SiteNav from './components/SiteNav'
import SiteFooter from './components/SiteFooter'
import Icon from './components/Icon'
import useReveal from './hooks/useReveal'
import { PORTFOLIO_IMAGES } from './data/portfolio'
import {
  BOOKSY_BOOK_URL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from './data/siteData'

export default function PortfolioPage() {
  useReveal()
  const [active, setActive] = useState(null) /* index or null */
  const hasActive = active !== null
  const total = PORTFOLIO_IMAGES.length

  /* Scroll page to top when entering so visitors land at the hero */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const open = useCallback((i) => setActive(i), [])
  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + total) % total)),
    [total]
  )
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % total)),
    [total]
  )

  /* Keyboard: ESC closes, arrows navigate. Also lock body scroll while open. */
  useEffect(() => {
    if (!hasActive) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [hasActive, close, prev, next])

  return (
    <div className="elevate-home portfolio-page">
      <SiteNav />

      {/* PAGE HERO — compact, focused on the gallery below */}
      <section className="pf-hero" aria-label="Barber Elevate Studio — Portfolio">
        <div className="pf-hero-inner">
          <div className="pf-hero-tag reveal">
            <span className="pf-hero-dot" aria-hidden="true"></span>
            <span>Portfolio · {total} cuts</span>
          </div>
          <h1 className="pf-hero-h1 reveal">
            <span className="pf-hero-h1-line">The{' '}
              <em>Work</em>.
            </span>
          </h1>
          <p className="pf-hero-sub reveal">
            A look behind the chair — fades, lineups, beard work and full
            transformations from real clients at Barber Elevate Studio.
            Tap any photo to see it up close.
          </p>
          <div className="pf-hero-ctas reveal">
            <a
              href={BOOKSY_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
              aria-label="Book a cut on Booksy"
            >
              <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark booksy-mark--lg" />
              <span>Book on Booksy</span>
              <Icon name="arrow-right" size={16} />
            </a>
            <Link to="/" className="cta-ghost">
              <Icon name="arrow-left" size={14} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY — full masonry of every photo */}
      <section className="pf-gallery pattern-bg-light" aria-label="Full portfolio gallery">
        <div className="pf-gallery-inner reveal">
          {PORTFOLIO_IMAGES.map((p, i) => (
            <button
              type="button"
              key={p.id}
              className="pf-gitem"
              onClick={() => open(i)}
              aria-label={`Open ${p.alt} in lightbox`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
              <span className="pf-gitem-num" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="pf-gitem-zoom" aria-hidden>
                <Icon name="expand" size={16} />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* WAVE light→dark into CTA */}
      <div className="wave">
        <svg viewBox="0 0 375 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,72 L0,36 C50,60 100,8 150,28 C200,48 250,12 300,32 C325,42 350,24 375,36 L375,72 Z" fill="#131311" opacity="0.4"/>
          <path d="M0,72 L0,44 C40,18 90,62 150,40 C210,18 260,54 310,38 C340,28 360,48 375,44 L375,72 Z" fill="#131311"/>
        </svg>
      </div>

      {/* BOOK CTA — dark band before footer */}
      <section className="pf-cta-band pattern-bg-dark" aria-label="Book your cut">
        <div className="pf-cta-band-inner">
          <div className="pf-cta-band-copy reveal">
            <div className="pf-cta-band-eyebrow">
              <span className="pf-cta-band-eyebrow-dot" aria-hidden="true"></span>
              <span>Ready for yours?</span>
            </div>
            <h2 className="pf-cta-band-h2">
              <span>Your chair</span>
              <em>is waiting.</em>
            </h2>
            <p className="pf-cta-band-sub">
              Every cut here was by appointment. Lock yours in on Booksy or call the studio directly —
              we&rsquo;ll take care of the rest.
            </p>
          </div>
          <div className="pf-cta-band-actions reveal">
            <a
              href={BOOKSY_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
              aria-label="Book a cut on Booksy"
            >
              <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark booksy-mark--lg" />
              <span>Book on Booksy</span>
              <Icon name="arrow-right" size={16} />
            </a>
            <a
              href={`tel:${BUSINESS_PHONE_TEL}`}
              className="cta-call"
              aria-label={`Call Barber Elevate Studio at ${BUSINESS_PHONE_DISPLAY}`}
            >
              <Icon name="phone" size={14} />
              <span>Call {BUSINESS_PHONE_DISPLAY}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost pf-cta-ig"
            >
              <Icon name="instagram" size={14} />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* LIGHTBOX */}
      {hasActive && (
        <div
          className="pf-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio photo viewer"
          onClick={close}
        >
          <button
            type="button"
            className="pf-lb-close"
            onClick={close}
            aria-label="Close photo viewer"
          >
            <Icon name="close" size={20} />
          </button>
          <button
            type="button"
            className="pf-lb-nav pf-lb-nav--prev"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous photo"
          >
            <Icon name="arrow-left" size={22} />
          </button>
          <div
            className="pf-lb-stage"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PORTFOLIO_IMAGES[active].src}
              alt={PORTFOLIO_IMAGES[active].alt}
              className="pf-lb-img"
            />
            <div className="pf-lb-meta">
              <span className="pf-lb-counter">
                {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <a
                href={BOOKSY_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-lb-book"
              >
                <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark" />
                <span>Book this look</span>
                <Icon name="arrow-right" size={12} />
              </a>
            </div>
          </div>
          <button
            type="button"
            className="pf-lb-nav pf-lb-nav--next"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next photo"
          >
            <Icon name="arrow-right" size={22} />
          </button>
        </div>
      )}
    </div>
  )
}
