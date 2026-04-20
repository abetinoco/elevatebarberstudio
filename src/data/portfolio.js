/* ─────────────────────────────────────────────────────────
   PORTFOLIO — all 20 real work photos from the studio.
   Files live in /public/portfolio/cut-01.jpg … cut-20.jpg.
   ───────────────────────────────────────────────────────── */

/* Full gallery (dedicated /portfolio page renders all of these). */
export const PORTFOLIO_IMAGES = Array.from({ length: 20 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    id: `cut-${n}`,
    src: `/portfolio/cut-${n}.jpg`,
    alt: `Barber Elevate Studio portfolio — cut ${n}`,
  }
})

/* Curated teaser set for the HomePage "Signature Cuts" section.
   Six entries mapped to real Booksy services so each tile still
   works as a conversion surface (tap = book that service). The
   `img` values point at real portfolio photos in /public/portfolio/. */
export const SIGNATURE_CUTS = [
  {
    title: 'Skin Fade',
    sub: 'Zero to blended, razor-sharp edges.',
    dur: '35 min',
    price: '$30',
    img: '/portfolio/cut-04.jpg',
  },
  {
    title: 'Textured Crop',
    sub: 'Movement up top, clean sides.',
    dur: '35 min',
    price: '$30',
    img: '/portfolio/cut-07.jpg',
  },
  {
    title: 'Low Taper + Beard',
    sub: 'Straight-razor shape, steam finish.',
    dur: '50 min',
    price: '$40',
    img: '/portfolio/cut-02.jpg',
  },
  {
    title: 'Classic Side Part',
    sub: 'Sharp part, scissor finish.',
    dur: '35 min',
    price: '$30',
    img: '/portfolio/cut-10.jpg',
  },
  {
    title: 'Buzz + Beard',
    sub: 'Clean, uniform, razor-edged.',
    dur: '40 min',
    price: '$35',
    img: '/portfolio/cut-16.jpg',
  },
  {
    title: 'Luxury Cut',
    sub: 'Haircut, shampoo, hot towel.',
    dur: '45 min',
    price: '$37',
    img: '/portfolio/cut-20.jpg',
  },
]
