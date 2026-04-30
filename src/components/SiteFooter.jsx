import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'
import {
  BOOKSY_BOOK_URL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  FACEBOOK_URL,
  FACEBOOK_HANDLE,
  MAPS_DIRECTIONS_URL,
  HOURS,
  HALO_SITE_URL,
} from '../data/siteData'

function useHomeHref() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  return (hash) => (onHome ? `#${hash}` : `/#${hash}`)
}

export default function SiteFooter() {
  const todayIdx = new Date().getDay()
  const href = useHomeHref()

  return (
    <footer className="site-footer">
      <div className="ft-inner">
        <div className="ft-col ft-col--brand">
          <img src="/logo-elevate.png" alt="Barber Elevate Studio" className="ft-logo-img" />
          <p className="ft-tagline">
            Lake County&rsquo;s premium barber studio. Precision fades, sharp lineups, and a chair that always feels like home.
          </p>
          <a
            href={BOOKSY_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ft-book-btn"
            aria-label="Book your cut on Booksy"
          >
            <img src="/booksy-icon.png" alt="" aria-hidden="true" className="booksy-mark" />
            <span>Book on Booksy</span>
          </a>
        </div>

        <div className="ft-col ft-col--visit">
          <h3 className="ft-h">
            <Icon name="pin" size={14} className="ft-h-ico" />
            <span>Visit</span>
          </h3>
          <address className="ft-addr">
            72 E Belvidere Rd<br />
            Hainesville, IL 60030
          </address>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ft-link"
          >
            <span>Get directions</span>
            <Icon name="arrow-right" size={14} className="ft-link-arrow" />
          </a>
        </div>

        <div className="ft-col ft-col--hours">
          <h3 className="ft-h">
            <Icon name="clock" size={14} className="ft-h-ico" />
            <span>Hours</span>
          </h3>
          <ul className="ft-hrs">
            {HOURS.map((h) => (
              <li
                key={h.d}
                className={`ft-hrs-row${h.idx === todayIdx ? ' is-today' : ''}${h.closed ? ' is-closed' : ''}`}
              >
                <span className="ft-hrs-day">{h.d}</span>
                <span className="ft-hrs-time">
                  {h.closed ? 'Closed' : <>{h.open} <span aria-hidden="true">–</span> {h.close}</>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ft-col ft-col--connect">
          <h3 className="ft-h">
            <Icon name="chat" size={14} className="ft-h-ico" />
            <span>Connect</span>
          </h3>
          <ul className="ft-links">
            <li>
              <a href={`tel:${BUSINESS_PHONE_TEL}`} className="ft-link ft-link--contact">
                <span className="ft-link-lbl">
                  <Icon name="phone" size={13} />
                  <span>Call</span>
                </span>
                <span className="ft-link-val">{BUSINESS_PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a href={BOOKSY_BOOK_URL} target="_blank" rel="noopener noreferrer" className="ft-link ft-link--contact">
                <span className="ft-link-lbl">
                  <Icon name="calendar" size={13} />
                  <span>Booksy</span>
                </span>
                <span className="ft-link-val">alondra01barber</span>
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="ft-link ft-link--contact">
                <span className="ft-link-lbl">
                  <Icon name="instagram" size={13} />
                  <span>Instagram</span>
                </span>
                <span className="ft-link-val">{INSTAGRAM_HANDLE}</span>
              </a>
            </li>
            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="ft-link ft-link--contact">
                <span className="ft-link-lbl">
                  <Icon name="facebook" size={13} />
                  <span>Facebook</span>
                </span>
                <span className="ft-link-val">{FACEBOOK_HANDLE}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-bottom">
        <div className="ft-bottom-inner">
          <div className="ft-bottom-primary">
            <p className="ft-copy">© 2026 Barber Elevate Studio. All rights reserved.</p>
            <nav className="ft-nav" aria-label="Footer">
              <a href={href('services')}>Services</a>
              <Link to="/portfolio">Work</Link>
              <a href={href('about')}>About</a>
              <a href={href('reviews')}>Reviews</a>
              <a href={href('faq')}>FAQ</a>
              <a href={href('location')}>Visit</a>
            </nav>
          </div>
          <p className="ft-credit">
            Made with{' '}
            <span className="ft-credit-heart" aria-hidden="true">
              ♥
            </span>
            <span className="ft-sr-only"> love </span>
            by{' '}
            <a
              href={HALO_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ft-credit-link"
              title="Halo Web Agency — web design and digital studio"
            >
              Halo Web Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
