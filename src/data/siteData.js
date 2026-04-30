/* Site-wide constants shared between HomePage and PortfolioPage.
   Update here once, it propagates everywhere. */

export const BOOKSY_BOOK_URL = 'https://alondra01barber.booksy.com'
export const BOOKSY_REVIEWS_URL = 'https://booksy.com/en-us/820594_alondra-barber-barberelevatestudio_barber-shop_18685_grayslake?do=invite&_branch_match_id=1574780647201977727&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVDwixTAqKDEksMUqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAs4Pr8zwAAAA%3D#reviews-section'
export const GOOGLE_REVIEWS_URL = 'https://share.google/OXFOZCWB3xIC7iOwg'

export const BUSINESS_PHONE_DISPLAY = '(224) 540-6180'
export const BUSINESS_PHONE_TEL = '+12245406180'

export const INSTAGRAM_URL = 'https://www.instagram.com/barber_elevate_studio'
export const INSTAGRAM_HANDLE = '@barber_elevate_studio'
export const FACEBOOK_URL = 'https://www.facebook.com/share/18Uy7uX7di/'
export const FACEBOOK_HANDLE = 'Barber Elevate Studio'

/** Halo — crawlable footer attribution (real <a href> for search engines).
 *  Update to your canonical marketing domain if this ever changes. */
export const HALO_SITE_URL = 'https://haloweb.ca'

export const STUDIO_ADDRESS = '72 E Belvidere Rd, Hainesville, IL 60030'
/* maps.google.com embed tends to load more reliably than www for iframes */
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(STUDIO_ADDRESS)}&output=embed`
export const MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STUDIO_ADDRESS)}`
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STUDIO_ADDRESS)}`

/* Business hours — order Mon→Sun so the table reads like a calendar.
   `idx` matches JS Date#getDay() (0=Sun … 6=Sat) so we can highlight today. */
export const HOURS = [
  { d: 'Mon', open: '9 AM', close: '5 PM', closed: false, idx: 1 },
  { d: 'Tue', closed: true, idx: 2 },
  { d: 'Wed', open: '9 AM', close: '7 PM', closed: false, idx: 3 },
  { d: 'Thu', open: '9 AM', close: '7 PM', closed: false, idx: 4 },
  { d: 'Fri', open: '9 AM', close: '7 PM', closed: false, idx: 5 },
  { d: 'Sat', open: '8 AM', close: '3 PM', closed: false, idx: 6 },
  { d: 'Sun', closed: true, idx: 0 },
]
