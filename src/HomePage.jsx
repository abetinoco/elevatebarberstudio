import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/home.css'
import ReviewsMarquee from './components/ReviewsMarquee'
import Icon from './components/Icon'
import SiteNav from './components/SiteNav'
import SiteFooter from './components/SiteFooter'
import useReveal from './hooks/useReveal'
import {
  BOOKSY_BOOK_URL,
  BOOKSY_REVIEWS_URL,
  GOOGLE_REVIEWS_URL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  FACEBOOK_URL,
  FACEBOOK_HANDLE,
  MAPS_EMBED_URL,
  MAPS_OPEN_URL,
  MAPS_DIRECTIONS_URL,
  HOURS,
} from './data/siteData'
import { SIGNATURE_CUTS } from './data/portfolio'
import { TEAM_LABEL, TEAM_MEMBERS } from './data/team'

const PROCESS_STEPS = [
  { n: '01', t: 'Book',    icon: 'calendar', d: 'Pick your service on Booksy. Under 60 seconds — you\u2019ll see the exact barber, time, and price.' },
  { n: '02', t: 'Consult', icon: 'talk',     d: 'Settle in and we dial the vision — length, fade height, beard shape, how you style day-to-day.' },
  { n: '03', t: 'Craft',   icon: 'scissors', d: 'Precision clippers, straight razor on the lines, steam towel if you went luxe. Every step is intentional.' },
  { n: '04', t: 'Finish',  icon: 'check',    d: 'Style, brush off, mirror check. You walk out feeling like the best version of you.' },
]

const FAQS = [
  {
    q: 'How do I book an appointment?',
    a: 'Booksy is the fastest way — tap any Book button on this site and you can pick your service, time, and barber in under a minute. You\u2019ll get a confirmation and a reminder before your slot.',
  },
  {
    q: 'Do you take walk-ins?',
    a: 'We reserve our chair time for confirmed Booksy appointments so nobody\u2019s rushed. If a slot opens same-day we\u2019ll post it on Booksy — check there first before swinging by.',
  },
  {
    q: 'Are kids welcome?',
    a: 'Absolutely. The "Haircut / fade (all ages)" service covers kids through adults — just book that one for anyone under 18 and we\u2019ll take care of them.',
  },
  {
    q: 'What if I\u2019m not sure what cut I want?',
    a: 'Bring 1 or 2 reference photos or a rough description. We\u2019ll talk through length, fade height, beard shape, and how you style it day-to-day before anything touches your hair.',
  },
  {
    q: 'How should I prep for my appointment?',
    a: 'Come with clean, dry hair if you can. If shampoo is included in your service we\u2019ll wash on-site. Try to arrive about 5 minutes early so we can start your consult on time.',
  },
  {
    q: 'What\u2019s your cancellation policy?',
    a: 'You can reschedule or cancel on Booksy up to 4 hours before your appointment with no issue. Repeat last-minute cancellations may limit future bookings.',
  },
  {
    q: 'Where are you located & how do I park?',
    a: '72 E Belvidere Rd, Hainesville, IL 60030. Free parking on-site — pull up, grab a spot near the entrance, and head in.',
  },
]

export default function HomePage() {
  const todayIdx = new Date().getDay()
  useReveal()

  /* Services accordion behavior is mobile-only.
     • Desktop (≥768px): every <details class="svc-group"> stays open and
       the summaries are non-interactive, so the menu reads like the
       original flat two-column list.
     • Mobile (≤767px): user can expand/collapse, and opening one group
       collapses any other that was open (exclusive). */
  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 767px)')
    const groups = () => document.querySelectorAll('details.svc-group')

    const forceAllOpen = () => {
      groups().forEach((d) => { if (!d.open) d.open = true })
    }

    const onToggle = (e) => {
      const target = e.target
      if (!target) return
      if (!mqMobile.matches) {
        if (!target.open) target.open = true
        return
      }
      if (target.open) {
        groups().forEach((d) => {
          if (d !== target && d.open) d.open = false
        })
      }
    }

    const onSummaryClick = (e) => {
      if (!mqMobile.matches) e.preventDefault()
    }

    const attach = () => {
      groups().forEach((d) => {
        d.addEventListener('toggle', onToggle)
        const summary = d.querySelector('summary')
        if (summary) summary.addEventListener('click', onSummaryClick)
      })
    }
    const detach = () => {
      groups().forEach((d) => {
        d.removeEventListener('toggle', onToggle)
        const summary = d.querySelector('summary')
        if (summary) summary.removeEventListener('click', onSummaryClick)
      })
    }

    const sync = () => { if (!mqMobile.matches) forceAllOpen() }

    sync()
    attach()
    mqMobile.addEventListener('change', sync)
    return () => {
      detach()
      mqMobile.removeEventListener('change', sync)
    }
  }, [])

  return (
    <div className="elevate-home">

{/* NAV + MOBILE MENU (shared component) */}
<SiteNav />

{/* HERO — split layout, copy left / portfolio card right */}
<section id="hero" aria-label="Barber Elevate Studio — Premium Barber in Hainesville, Lake County IL">
  <div className="hero-inner">
    {/* LEFT: Copy */}
    <div className="hero-left">
      <div className="hero-trust">
        <span className="trust-dot" aria-hidden="true"></span>
        <span className="trust-text">Now booking · Hainesville, IL</span>
      </div>
      <h1 className="hero-h1">
        <span className="h1-line h1-line--1">Elevate</span>
        <span className="h1-line h1-line--2"><em>Your</em></span>
        <span className="h1-line h1-line--3">Style.</span>
      </h1>
      <p className="hero-mission">&ldquo;We don&rsquo;t just cut hair &mdash; we sculpt confidence.&rdquo;</p>
      <p className="hero-sub">
        Precision fades, sharp cuts, and clean lineups &mdash; <strong>Lake County&rsquo;s
        premium barber studio</strong> for men, women &amp; kids.
        Every chair, every cut, every client leaves feeling like the best version of themselves.
      </p>
      <div className="hero-ctas">
        <a
          href={BOOKSY_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-primary"
          aria-label="Book a cut at Barber Elevate Studio on Booksy"
        >
          <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark booksy-mark--lg" />
          <span>Book on Booksy</span>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
        <a
          href={`tel:${BUSINESS_PHONE_TEL}`}
          className="cta-call"
          aria-label={`Call Barber Elevate Studio at ${BUSINESS_PHONE_DISPLAY}`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Call {BUSINESS_PHONE_DISPLAY}</span>
        </a>
        <a href="#services" className="cta-ghost">See Services</a>
      </div>
      <p className="hero-nudge">
        <span aria-hidden="true">🗓</span>&nbsp; Spots fill fast &mdash;{' '}
        <a href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">check availability on Booksy</a>
      </p>
    </div>

    {/* RIGHT: Portfolio image card */}
    <div className="hero-right">
      <div className="portfolio-card">
        <div className="port-main port-main--photo">
          <img
            src="/portfolio/cut-04.jpg"
            alt="Precision fade at Barber Elevate Studio — Hainesville, IL"
            className="port-main-img"
            loading="eager"
          />
        </div>

        {/* Rotating circular sticker — soft barbershop character, no hard corners */}
        <div className="port-sticker" aria-hidden="true">
          <div className="port-sticker-disc"></div>
          <svg className="port-sticker-text" viewBox="0 0 100 100">
            <defs>
              <path id="port-sticker-path" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
            </defs>
            <text>
              <textPath href="#port-sticker-path" startOffset="0">
                ELEVATE · BARBER · STUDIO · HAINESVILLE · IL ·
              </textPath>
            </text>
          </svg>
          <svg className="port-sticker-mark" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="6" cy="18" r="2.5" />
            <path d="M8 6l12 12M8 18L20 6" />
          </svg>
        </div>

        <div className="port-badge">
          <span className="port-badge-name">Barber Elevate</span>
          <span className="port-badge-role">Barber Studio &middot; Hainesville, IL</span>
        </div>

        <div className="port-stat">
          <span className="port-stat-num">5<sup>★</sup></span>
          <span className="port-stat-lbl">Rated on<br />Booksy</span>
        </div>

        <div className="port-thumb port-thumb--photo">
          <img
            src="/portfolio/cut-16.jpg"
            alt="Clean lineup at Barber Elevate Studio"
            className="port-thumb-img"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Scroll cue */}
  <div className="hero-scroll" aria-hidden="true">
    <div className="scroll-track"><div className="scroll-thumb"></div></div>
    <span className="scroll-word">Scroll</span>
  </div>
</section>

{/* TRUST STRIP
    On mobile this becomes an infinite-scrolling marquee; the .ts-group is
    rendered twice (the duplicate is inert + aria-hidden) so the CSS loop
    can translate by -50% and feel seamless. On tablet/desktop the track
    wrappers collapse via `display:contents`, restoring the original layout. */}
{(() => {
  const trustItems = (
    <>
      <div className="ts-item">
        <span className="ts-num"><span className="ts-stars">★★★★★</span> 5.0</span>
        <span className="ts-label">Booksy Rating</span>
      </div>
      <div className="ts-item">
        <span className="ts-num">250<sup>+</sup></span>
        <span className="ts-label">Happy Clients</span>
      </div>
      <div className="ts-item">
        <span className="ts-num">9 Yrs</span>
        <span className="ts-label">Experience</span>
      </div>
      <div className="ts-item">
        <span className="ts-num">100%</span>
        <span className="ts-label">Licensed Barber</span>
      </div>
      <div className="ts-item">
        <span className="ts-num">Men, Women &amp; Kids</span>
        <span className="ts-label">All Welcome</span>
      </div>
      <a
        href={BOOKSY_BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ts-booksy"
        aria-label="Book with Booksy"
      >
        <img
          src="/booksy-badge.png"
          alt="Book with Booksy"
          className="ts-booksy-badge"
        />
      </a>
    </>
  )
  return (
    <div className="trust-strip" role="region" aria-label="Barber Elevate Studio credentials">
      <div className="trust-strip-inner">
        <div className="ts-track">
          <div className="ts-group">{trustItems}</div>
          <div className="ts-group ts-group--dup" aria-hidden="true" inert="">{trustItems}</div>
        </div>
      </div>
    </div>
  )
})()}

{/* PROCESS — how it works, placed early so visitors know the flow */}
<section id="process" className="pattern-bg-light">
  <div className="sec-tag reveal">
    <span className="sec-dot" style={{background: 'var(--gl)'}}></span>
    <span className="sec-label" style={{color: 'var(--gm)'}}>The Barber Elevate Experience</span>
  </div>
  <h2 className="sec-title reveal" style={{color: 'var(--black)'}}>How It{' '}<em style={{fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic', fontWeight: 700, color: 'var(--gm)'}}>Works</em></h2>
  <p className="svc-intro reveal" style={{color: 'var(--gm)'}}>Four deliberate moments — from the second you book to the second you walk back out the door.</p>
  <div className="proc-grid reveal">
    {PROCESS_STEPS.map((s) => (
      <div key={s.n} className="proc-step">
        <div className="proc-head">
          <div className="proc-num">{s.n}</div>
          <div className="proc-icon-wrap"><Icon name={s.icon} size={20} className="proc-icon" /></div>
        </div>
        <div className="proc-rule" aria-hidden />
        <h3 className="proc-title">{s.t}</h3>
        <p className="proc-desc">{s.d}</p>
      </div>
    ))}
  </div>
</section>

{/* WAVE white→black (double layered) */}
<div className="wave">
  <svg viewBox="0 0 375 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,72 L0,36 C50,60 100,8 150,28 C200,48 250,12 300,32 C325,42 350,24 375,36 L375,72 Z" fill="#131311" opacity="0.4"/>
    <path d="M0,72 L0,44 C40,18 90,62 150,40 C210,18 260,54 310,38 C340,28 360,48 375,44 L375,72 Z" fill="#131311"/>
  </svg>
</div>

{/* SERVICES */}
<section id="services" className="pattern-bg-dark">
  <div className="sec-tag reveal">
    <span className="sec-dot" style={{background: 'var(--gm)'}}></span>
    <span className="sec-label" style={{color: 'var(--gm)'}}>What We Offer</span>
  </div>
  <h2 className="sec-title reveal" style={{color: 'var(--white)'}}>Our Elevated{' '}<em style={{fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic', fontWeight: 700, color: 'var(--gm)'}}>Services</em></h2>
  <p className="svc-intro reveal">Every service is a craft. Book the exact service you need—pricing and times match our Booksy menu.</p>
  <div className="reveal svc-list">
    <details className="svc-group" open>
      <summary className="svc-cat"><Icon name="sparkle" size={20} className="svc-cat-ico" /><span>Popular services</span><span className="svc-chev" aria-hidden>▾</span></summary>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Haircut / fade (all ages)</div>
          <p className="svc-desc">All ages. Any style.</p>
          <div className="svc-dur">35 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$30</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Haircut + beard</div>
          <p className="svc-desc">Haircut of your choice, straight razor to shape your beard—including a steam towel finish.</p>
          <div className="svc-dur">50 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$40</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Haircut + eyebrows</div>
          <p className="svc-desc">Haircut of your choice + straight razor eyebrow shaping.</p>
          <div className="svc-dur">45 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$35</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Women&apos;s haircut</div>
          <p className="svc-desc">Shampoo included if desired.</p>
          <div className="svc-dur">45 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$35</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
    </details>

    <details className="svc-group">
      <summary className="svc-cat"><Icon name="scissors" size={20} className="svc-cat-ico" /><span>Cuts & grooming</span><span className="svc-chev" aria-hidden>▾</span></summary>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Luxury haircut and shampoo</div>
          <p className="svc-desc">Haircut of your choice, shampoo, and hot towel.</p>
          <div className="svc-dur">45 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$37</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Beard trim only</div>
          <p className="svc-desc">Shaping your beard with a straight razor for clean lines.</p>
          <div className="svc-dur">30 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$20</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
    </details>

    <details className="svc-group">
      <summary className="svc-cat"><Icon name="drop" size={20} className="svc-cat-ico" /><span>Waxing</span><span className="svc-chev" aria-hidden>▾</span></summary>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Eyebrow waxing</div>
          <div className="svc-dur">15 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$10</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Ears waxing</div>
          <div className="svc-dur">15 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$10</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Eyebrows with razor</div>
          <div className="svc-dur">5 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$5</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Nose waxing</div>
          <div className="svc-dur">15 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$10</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
    </details>

    <details className="svc-group">
      <summary className="svc-cat"><Icon name="package" size={20} className="svc-cat-ico" /><span>Packages</span><span className="svc-chev" aria-hidden>▾</span></summary>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Haircut + beard + eyebrows</div>
          <p className="svc-desc">Shape your eyebrows with a straight razor alongside your cut and beard.</p>
          <div className="svc-dur">55 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$45</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Haircut + beard + shampoo</div>
          <div className="svc-dur">55 min</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$45</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
      <div className="svc-item">
        <div className="svc-main">
          <div className="svc-name">Luxury haircut and beard</div>
          <p className="svc-desc">Haircut of your choice + steam towel and straight razor beard shaping.</p>
          <div className="svc-dur">1 hr</div>
        </div>
        <div className="svc-meta">
          <span className="svc-price">$50</span>
          <a className="svc-book" href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </div>
    </details>
  </div>
  <div className="svc-cta-wrap reveal">
    <a href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-wht">Book Your Appointment <span className="arr" style={{color: 'var(--black)'}}>→</span></a>
  </div>
</section>

{/* PORTFOLIO (continues dark from services) */}
<section id="portfolio" className="pattern-bg-dark">
  <div className="sec-tag reveal">
    <span className="sec-dot" style={{background: 'var(--gm)'}}></span>
    <span className="sec-label" style={{color: 'var(--gm)'}}>The Barber Elevate Work</span>
  </div>
  <h2 className="sec-title reveal" style={{color: 'var(--white)'}}>Signature{' '}<em style={{fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic', fontWeight: 700, color: 'var(--gm)'}}>Cuts</em></h2>
  <p className="svc-intro reveal">Six cuts we get asked for week after week. Tap any tile to book it — or see the full gallery below.</p>
  <div className="pf-grid reveal">
    {SIGNATURE_CUTS.map((p, i) => (
      <a
        key={p.title}
        href={BOOKSY_BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pf-tile"
        aria-label={`Book on Booksy — ${p.title}`}
        style={{ '--pf-img': `url('${p.img}')` }}
      >
        <div className="pf-img" aria-hidden />
        <span className="pf-num" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
        <span className="pf-arrow" aria-hidden>→</span>
      </a>
    ))}
  </div>
  <div className="reveal pf-cta">
    <Link to="/portfolio" className="btn-wht">
      See the Full Portfolio <span className="arr" style={{color: 'var(--black)'}}>→</span>
    </Link>
    <a href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-out pf-cta-alt">
      <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark" />
      <span>Book on Booksy</span>
    </a>
  </div>
</section>

{/* WAVE black→white (double layered) */}
<div className="wave">
  <svg viewBox="0 0 375 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L0,32 C50,56 110,10 170,30 C230,50 275,14 320,34 C348,44 365,24 375,28 L375,0 Z" fill="#131311" opacity="0.4"/>
    <path d="M0,0 L0,24 C45,52 100,4 155,26 C210,48 265,10 315,30 C342,42 360,22 375,26 L375,0 Z" fill="#131311"/>
  </svg>
</div>

{/* ABOUT — data-driven roster (see src/data/team.js) */}
<section id="about" className="pattern-bg-light">
  <div className="about-inner">
    <span className="about-label reveal">{TEAM_LABEL}</span>

    <div className="about-members">
      {TEAM_MEMBERS.map((m) => (
        <article key={m.id} className="about-member reveal" aria-labelledby={`about-name-${m.id}`}>
          <div className="about-name-block">
            <h2 className="about-display" id={`about-name-${m.id}`}>
              <span className="about-display-italic">{m.headlineItalic}</span>{' '}
              {m.headlineName}
            </h2>
            <div className="about-name-sub">{m.roleLine}</div>
          </div>

          <div className="about-portrait-wrap">
            <div className="about-portrait">
              <img
                src={m.imageSrc}
                alt={m.imageAlt}
                style={m.portraitObjectPosition ? { objectPosition: m.portraitObjectPosition } : undefined}
              />
            </div>
          </div>

          <div className="about-story">
            {m.paragraphs.map((text, pi) => (
              <p key={`${m.id}-p-${pi}`}>
                {pi === m.dropCapSentenceIndex && m.dropCapLetter ? (
                  <>
                    <span className="about-drop">{m.dropCapLetter}</span>
                    {text}
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
            <div className="about-signoff">
              <span className="about-sign-name">{m.signName}</span>
              <span className="about-sign-role">{m.signRole}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

{/* WAVE light→dark (into reviews) */}
<div className="wave">
  <svg viewBox="0 0 375 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,72 L0,36 C50,60 100,8 150,28 C200,48 250,12 300,32 C325,42 350,24 375,36 L375,72 Z" fill="#131311" opacity="0.4"/>
    <path d="M0,72 L0,44 C40,18 90,62 150,40 C210,18 260,54 310,38 C340,28 360,48 375,44 L375,72 Z" fill="#131311"/>
  </svg>
</div>

{/* REVIEWS */}
<section id="reviews" className="pattern-bg-dark">
  <div className="sec-tag reveal">
    <span className="sec-dot" style={{background: 'var(--gm)'}}></span>
    <span className="sec-label" style={{color: 'var(--gm)'}}>Client Reviews</span>
  </div>
  <h2 className="sec-title reveal" style={{color: 'var(--white)', marginBottom: 32}}>What They{' '}<em style={{fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic', fontWeight: 700, color: 'var(--gm)'}}>Say</em></h2>
  <p className="svc-intro reveal" style={{marginBottom: 24, color: 'rgba(246,244,241,0.7)'}}>
    Confirmed Booksy reviews—two live feeds scrolling in opposite directions. Hover a row to pause.
  </p>
  <div className="reveal">
    <ReviewsMarquee />
  </div>
  <div className="rvw-cta-row reveal" role="group" aria-label="Read or leave reviews">
    <a
      href={BOOKSY_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rvw-cta rvw-cta--booksy"
      aria-label="Read more reviews on Booksy"
    >
      <img src="/booksy-icon.png" alt="" aria-hidden="true" className="rvw-cta-ico" />
      <span className="rvw-cta-txt">
        <span className="rvw-cta-sub">Read reviews on</span>
        <span className="rvw-cta-brand">Booksy</span>
      </span>
    </a>
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rvw-cta rvw-cta--google"
      aria-label="Leave a review on Google"
    >
      <svg className="rvw-cta-ico" viewBox="0 0 48 48" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
      </svg>
      <span className="rvw-cta-txt">
        <span className="rvw-cta-sub">Leave a review on</span>
        <span className="rvw-cta-brand">Google</span>
      </span>
    </a>
  </div>
</section>

{/* WAVE dark→light (out of reviews into faq) */}
<div className="wave">
  <svg viewBox="0 0 375 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L0,32 C50,56 110,10 170,30 C230,50 275,14 320,34 C348,44 365,24 375,28 L375,0 Z" fill="#131311" opacity="0.4"/>
    <path d="M0,0 L0,24 C45,52 100,4 155,26 C210,48 265,10 315,30 C342,42 360,22 375,26 L375,0 Z" fill="#131311"/>
  </svg>
</div>

{/* FAQ */}
<section id="faq" className="pattern-bg-light">
  <div className="sec-tag reveal">
    <span className="sec-dot" style={{background: 'var(--gl)'}}></span>
    <span className="sec-label" style={{color: 'var(--gm)'}}>Good To Know</span>
  </div>
  <h2 className="sec-title reveal" style={{color: 'var(--black)'}}>Common{' '}<em style={{fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic', fontWeight: 700, color: 'var(--gm)'}}>Questions</em></h2>
  <p className="svc-intro reveal" style={{color: 'var(--gm)'}}>Everything we get asked most often — if your question isn&apos;t here, text the studio at {BUSINESS_PHONE_DISPLAY}.</p>
  <div className="faq-list reveal">
    {FAQS.map((f, i) => (
      <details key={i} className="faq-item">
        <summary className="faq-q">
          <span className="faq-num" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
          <span className="faq-q-text">{f.q}</span>
          <span className="faq-q-icon" aria-hidden>
            <Icon name="plus" size={16} />
          </span>
        </summary>
        <div className="faq-a">{f.a}</div>
      </details>
    ))}
  </div>
  <div className="reveal faq-cta">
    <a href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-blk">
      <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark booksy-mark--lg" />
      <span>Book on Booksy</span>
      <span className="arr">→</span>
    </a>
    <a href={`tel:${BUSINESS_PHONE_TEL}`} className="btn-out">
      Call the Studio <span className="arr">→</span>
    </a>
  </div>
</section>

{/* WAVE white→black */}
<div className="wave">
  <svg viewBox="0 0 375 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,72 L0,36 C50,60 100,8 150,28 C200,48 250,12 300,32 C325,42 350,24 375,36 L375,72 Z" fill="#131311" opacity="0.4"/>
    <path d="M0,72 L0,44 C40,18 90,62 150,40 C210,18 260,54 310,38 C340,28 360,48 375,44 L375,72 Z" fill="#131311"/>
  </svg>
</div>

{/* LOCATION */}
<section id="location" className="pattern-bg-dark">
  <div className="sec-tag reveal">
    <span className="sec-dot" style={{background: 'var(--gm)'}}></span>
    <span className="sec-label" style={{color: 'var(--gm)'}}>Find Us</span>
  </div>
  <h2 className="sec-title reveal" style={{color: 'var(--white)', marginBottom: 32}}>Come{' '}<em style={{fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic', fontWeight: 700, color: 'var(--gm)'}}>Visit</em></h2>
  <div className="map-embed-wrap reveal">
    <iframe
      title="Barber Elevate Studio on Google Maps"
      className="map-embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      src={MAPS_EMBED_URL}
    />
    <div className="map-embed-actions">
      <a href={MAPS_OPEN_URL} target="_blank" rel="noopener noreferrer">
        Open in Google Maps
      </a>
      <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
        Directions
      </a>
    </div>
  </div>
  <div className="loc-grid reveal">
    <div className="loc-cell">
      <div className="loc-lbl"><Icon name="pin" size={12} className="loc-ico" /><span>Address</span></div>
      <div className="loc-val">72 E Belvidere Rd<br />Hainesville, IL 60030</div>
    </div>
    <div className="loc-cell loc-cell--hours">
      <div className="loc-lbl"><Icon name="clock" size={12} className="loc-ico" /><span>Hours</span></div>
      <ul className="hrs-list">
        {HOURS.map((h) => (
          <li
            key={h.d}
            className={`hrs-row${h.idx === todayIdx ? ' hrs-row--today' : ''}${h.closed ? ' hrs-row--closed' : ''}`}
          >
            <span className="hrs-day">{h.d}</span>
            <span className="hrs-time">
              {h.closed ? 'Closed' : <>{h.open} <span aria-hidden>–</span> {h.close}</>}
            </span>
            {h.idx === todayIdx && <span className="hrs-today-tag" aria-label="Today">Today</span>}
          </li>
        ))}
      </ul>
    </div>
    <div className="loc-cell">
      <div className="loc-lbl"><Icon name="phone" size={12} className="loc-ico" /><span>Phone</span></div>
      <div className="loc-val"><a href={`tel:${BUSINESS_PHONE_TEL}`}>{BUSINESS_PHONE_DISPLAY}</a></div>
    </div>
    <div className="loc-cell">
      <div className="loc-lbl"><Icon name="calendar" size={12} className="loc-ico" /><span>Booking</span></div>
      <div className="loc-val">Via Booksy</div>
    </div>
  </div>
</section>

{/* WAVE black→white */}
<div className="wave">
  <svg viewBox="0 0 375 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L0,32 C50,56 110,10 170,30 C230,50 275,14 320,34 C348,44 365,24 375,28 L375,0 Z" fill="#131311" opacity="0.4"/>
    <path d="M0,0 L0,24 C45,52 100,4 155,26 C210,48 265,10 315,30 C342,42 360,22 375,26 L375,0 Z" fill="#131311"/>
  </svg>
</div>

{/* SOCIAL — Follow Along */}
<section id="social" className="social-follow">
  <div className="sf-inner">

    <div className="sf-intro reveal">
      <span className="sf-label">Stay Connected</span>
      <h2 className="sf-headline">
        Follow<br />
        <span className="sf-italic">along</span>
      </h2>
      <p className="sf-lede">
        Fresh cuts, new openings, and behind-the-chair moments &mdash; all the places to keep up with the studio.
      </p>
    </div>

    <div className="sf-cards reveal">

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sf-card sf-card--ig"
        aria-label={`Follow Barber Elevate Studio on Instagram — ${INSTAGRAM_HANDLE}`}
      >
        <div className="sf-ribbon"><span className="sf-dot"></span>Most Active</div>
        <div className="sf-top">
          <div className="sf-icon sf-icon--ig" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </div>
          <div className="sf-meta">
            <div className="sf-name">Instagram</div>
            <div className="sf-handle">{INSTAGRAM_HANDLE}</div>
          </div>
          <div className="sf-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </div>
        <p className="sf-body">
          Cut reveals, transformations, and the occasional chair-side story.
        </p>
      </a>

      {/* Facebook */}
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sf-card sf-card--fb"
        aria-label={`Follow Barber Elevate Studio on Facebook — ${FACEBOOK_HANDLE}`}
      >
        <div className="sf-ribbon"><span className="sf-dot"></span>Active</div>
        <div className="sf-top">
          <div className="sf-icon sf-icon--fb" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/>
            </svg>
          </div>
          <div className="sf-meta">
            <div className="sf-name">Facebook</div>
            <div className="sf-handle">{FACEBOOK_HANDLE}</div>
          </div>
          <div className="sf-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </div>
        <p className="sf-body">
          Announcements, studio hours, and community updates.
        </p>
      </a>

      {/* Booksy */}
      <a
        href={BOOKSY_BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sf-card sf-card--booksy"
        aria-label="Book an appointment at Barber Elevate Studio on Booksy"
      >
        <div className="sf-ribbon"><span className="sf-dot"></span>Book Online</div>
        <div className="sf-top">
          <div className="sf-icon sf-icon--booksy" aria-hidden="true">
            <img src="/booksy-icon.png" alt="" className="sf-icon-img" />
          </div>
          <div className="sf-meta">
            <div className="sf-name">Booksy</div>
            <div className="sf-handle">Book your appointment</div>
          </div>
          <div className="sf-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </div>
        <p className="sf-body">
          <strong>Anytime</strong>Real-time availability and instant booking.
        </p>
      </a>

    </div>
  </div>
</section>

{/* WAVE white→black (into final CTA) */}
<div className="wave">
  <svg viewBox="0 0 375 72" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,72 L0,40 C55,14 110,58 165,38 C220,18 265,52 310,36 C338,26 360,44 375,40 L375,72 Z" fill="#131311" opacity="0.4"/>
    <path d="M0,72 L0,48 C60,72 115,20 170,44 C225,68 270,22 320,42 C348,52 362,32 375,46 L375,72 Z" fill="#131311"/>
  </svg>
</div>

{/* CLOSING CTA — final conversion moment before footer */}
<section id="closing" className="pattern-bg-dark" aria-label="Book your next cut">
  <div className="closing-inner">
    {/* LEFT: copy + CTAs */}
    <div className="closing-copy">
      <div className="closing-eyebrow reveal">
        <span className="closing-eyebrow-dot" aria-hidden="true"></span>
        <span>Last Stop</span>
      </div>

      <h2 className="closing-hl reveal">
        <span className="closing-hl-line closing-hl-line--bold">Your Chair</span>
        <span className="closing-hl-line closing-hl-line--italic">Is Waiting.</span>
      </h2>

      <p className="closing-sub reveal">
        Skip the walk-in lottery. Reserve your spot on Booksy — Lake County&rsquo;s premium barber studio is a quick drive, and every cut is by appointment only.
      </p>

      <div className="closing-ctas reveal">
        <a
          href={BOOKSY_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-primary closing-cta-primary"
          aria-label="Book a cut on Booksy"
        >
          <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark booksy-mark--lg" />
          <span>Book on Booksy</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
        <a
          href={`tel:${BUSINESS_PHONE_TEL}`}
          className="cta-call closing-cta-call"
          aria-label={`Call Barber Elevate Studio at ${BUSINESS_PHONE_DISPLAY}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>Call {BUSINESS_PHONE_DISPLAY}</span>
        </a>
      </div>

      <ul className="closing-trust reveal" aria-label="Studio credentials">
        <li><strong>5.0★</strong> Booksy rated</li>
        <li><strong>Tue&ndash;Sat</strong> by appointment</li>
        <li><strong>Hainesville &middot; IL</strong></li>
      </ul>
    </div>

    {/* RIGHT: brand card — soft-arch cream card matching the hero portfolio aesthetic (desktop/tablet) */}
    <div className="closing-card-wrap closing-card-wrap--aside reveal" aria-hidden="true">
      <div className="closing-card">
        <div className="closing-card-inner">
          <div className="closing-card-mark">
            <img src="/logo-elevate.png" alt="Barber Elevate Studio" className="closing-card-logo" />
          </div>

          <div className="closing-card-rule"></div>

          <div className="closing-card-stat">
            <span className="closing-card-stat-num">5.0</span>
            <span className="closing-card-stat-star">★</span>
          </div>
          <div className="closing-card-label">Rated on Booksy</div>

          <div className="closing-card-rule"></div>

          <div className="closing-card-meta">
            <span>72 E Belvidere Rd</span>
            <span>Hainesville, IL 60030</span>
            <span>Tue&ndash;Sat &middot; By appointment</span>
          </div>
        </div>

        {/* rotating sticker — same vocabulary as hero */}
        <div className="closing-sticker" aria-hidden="true">
          <div className="closing-sticker-disc"></div>
          <svg className="closing-sticker-text" viewBox="0 0 100 100">
            <defs>
              <path id="closing-sticker-path" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
            </defs>
            <text>
              <textPath href="#closing-sticker-path" startOffset="0">
                BOOK · YOUR · CUT · TODAY · ELEVATE ·
              </textPath>
            </text>
          </svg>
          <svg className="closing-sticker-mark" viewBox="0 0 24 24">
            <path d="M5 3l7 9-7 9M12 3l7 9-7 9" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FOOTER (shared component) */}
<SiteFooter />



    </div>
  )
}
