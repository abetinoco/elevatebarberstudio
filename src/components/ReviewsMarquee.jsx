import { useSyncExternalStore } from 'react'
import { REVIEWS, initialsFromName } from '../data/reviews'

function subscribeReducedMotion(callback) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)
}

function ReviewCard({ r }) {
  const initials = initialsFromName(r.name)
  return (
    <article className="rvw-card rvw-card--carousel">
      <div className="rvw-top">
        <div className="rvw-user">
          <div className="rvw-av" aria-hidden>
            {initials}
          </div>
          <div>
            <div className="rvw-name">{r.name}</div>
            <div className="rvw-badge">
              <span className="rvw-check" aria-hidden>
                ✓
              </span>{' '}
              Confirmed client
            </div>
          </div>
        </div>
      </div>
      <div className="rvw-rating-row">
        <div className="rvw-stars" aria-label="5 out of 5 stars">
          <span className="star" />
          <span className="star" />
          <span className="star" />
          <span className="star" />
          <span className="star" />
        </div>
        <span className="rvw-date">{r.date}</span>
      </div>
      <div className="rvw-service">
        <div>
          <span>Service:</span> {r.service}
        </div>
        <div>
          <span>Staff:</span> Alondra
        </div>
      </div>
      <p className="rvw-quote">{r.quote}</p>
    </article>
  )
}

function MarqueeTrack({ direction, items }) {
  const reduced = usePrefersReducedMotion()
  const list = reduced ? items : [...items, ...items]
  const animClass = reduced
    ? 'rvw-marquee-track--static'
    : direction === 'right'
      ? 'rvw-marquee-track--right'
      : 'rvw-marquee-track--left'
  return (
    <div className={`rvw-marquee-track ${animClass}`}>
      {list.map((r, i) => (
        <ReviewCard key={`${r.id}-${i}`} r={r} />
      ))}
    </div>
  )
}

export default function ReviewsMarquee() {
  const mid = Math.ceil(REVIEWS.length / 2)
  const left = REVIEWS.slice(0, mid)
  const right = REVIEWS.slice(mid)

  return (
    <div className="rvw-marquee-columns">
      <div className="rvw-marquee-col">
        <div className="rvw-marquee-mask">
          <MarqueeTrack direction="left" items={left} />
        </div>
      </div>
      <div className="rvw-marquee-col">
        <div className="rvw-marquee-mask">
          <MarqueeTrack direction="right" items={right} />
        </div>
      </div>
    </div>
  )
}
