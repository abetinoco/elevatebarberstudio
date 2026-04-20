/**
 * Client reviews from Booksy (screenshots). ids are stable for React keys.
 */
export const REVIEWS = [
  {
    id: 'christian',
    name: 'Christian',
    date: 'Apr 8, 2026',
    service: 'Haircut / fade (all ages)',
    quote:
      'Great service, haircut and vibes. Gives you a 10/10 haircut and really nice person to talk to.',
  },
  {
    id: 'lauren',
    name: 'Lauren',
    date: 'Apr 5, 2026',
    service: 'Haircut / fade (all ages)',
    quote: 'Alondra always does an amazing job!',
  },
  {
    id: 'scott',
    name: 'scott',
    date: 'Mar 23, 2026',
    service: 'Haircut / fade (all ages)',
    quote: 'Great service and atmosphere!',
  },
  {
    id: 'mario',
    name: 'Mario',
    date: 'Mar 6, 2026',
    service: 'Haircut / fade (all ages)',
    quote:
      "Alondra is friendly and very professional. She does a fantastic job with my son's hair. Highly recommend.",
  },
  {
    id: 'leila',
    name: 'Leila',
    date: 'Mar 6, 2026',
    service: "Women's haircut",
    quote:
      'Alondra is friendly and very professional. She listened to exactly what I wanted and delivered.',
  },
  {
    id: 'maryjane',
    name: 'Maryjane',
    date: 'Mar 6, 2026',
    service: 'Haircut / fade (all ages)',
    quote: 'Highly recommend—the shop has such a welcoming vibe and the cut is always on point.',
  },
  {
    id: 'edgar',
    name: 'Edgar',
    date: 'Feb 11, 2026',
    service: 'Haircut / fade (all ages)',
    quote: 'Great haircut',
  },
  {
    id: 'kyle',
    name: 'Kyle',
    date: 'Feb 3, 2026',
    service: 'Haircut / fade (all ages)',
    quote:
      "Alondra is hands down one of the best barbers I've ever been to. She takes her time and makes sure everything is perfect before you leave. Highly recommend booking with her—you won't be disappointed.",
  },
  {
    id: 'mariela',
    name: 'Mariela',
    date: 'Dec 5, 2025',
    service: 'Haircut / fade (all ages)',
    quote:
      "Alondra is very detailed and precise—my son will not go to anyone else. We love Alondra's work.",
  },
  {
    id: 'mo',
    name: 'Mo',
    date: 'Nov 10, 2025',
    service: 'Haircut / fade',
    quote: 'Fantastic customer service. Very gentle and great conversation!',
  },
  {
    id: 'moises',
    name: 'Moises',
    date: 'Oct 16, 2025',
    service: 'Haircut + beard',
    quote: 'First time—I had a great cut & experience. Will definitely be coming back!',
  },
  {
    id: 'doug',
    name: 'Doug',
    date: 'Oct 15, 2025',
    service: 'Haircut / fade, Kids cut',
    quote: 'The most professional',
  },
  {
    id: 'angel',
    name: 'Angel',
    date: 'Sep 25, 2025',
    service: 'Skin fade',
    quote: '👍👍👍👍👍',
  },
  {
    id: 'arwind',
    name: 'Arwind',
    date: 'Sep 15, 2025',
    service: 'Skin fade',
    quote: 'Excellent cut every time!! Thank you Alondra',
  },
  {
    id: 'mauricio',
    name: 'Mauricio',
    date: 'Aug 16, 2025',
    service: 'Skin fade',
    quote: 'Best service',
  },
  {
    id: 'lia',
    name: 'Lia',
    date: 'Aug 10, 2025',
    service: 'Kids cut, Haircut + eyebrows',
    quote: 'Love it!',
  },
  {
    id: 'tony',
    name: 'Tony',
    date: 'Aug 5, 2025',
    service: 'Business haircut',
    quote: 'Told her my vision and she was able to cut it.',
  },
]

export function initialsFromName(name) {
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}
