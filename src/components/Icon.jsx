/* ───────────────────────────────────────────────
   ICON — minimal stroke set, currentColor-driven.
   Keeps the site consistent; swap size via the `size` prop,
   color via parent `color` CSS.
   ─────────────────────────────────────────────── */
export default function Icon({ name, size = 18, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
    focusable: 'false',
    className: `icon icon--${name}${className ? ' ' + className : ''}`,
  }
  switch (name) {
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.2-7-11.3a7 7 0 1 1 14 0C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.7" r="2.6" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.2 2" />
        </svg>
      )
    case 'chat':
      return (
        <svg {...common}>
          <path d="M21 11.5a8.5 8.5 0 0 1-13 7.3L3 21l1.2-4A8.5 8.5 0 1 1 21 11.5z" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M5 4.2a1 1 0 0 1 1-.9h3.1a1 1 0 0 1 1 .8l.8 3.4a1 1 0 0 1-.3 1l-1.6 1.3a12 12 0 0 0 5.2 5.2l1.3-1.6a1 1 0 0 1 1-.3l3.4.8a1 1 0 0 1 .8 1V18a1 1 0 0 1-.9 1c-8.5-.2-15.2-7-15.3-15.3z" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path d="M3.5 10h17M8.5 3v4M15.5 3v4" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M15 8.5h2.5V5H15a3.5 3.5 0 0 0-3.5 3.5V11H9v3.5h2.5V21H15v-6.5h2.5l.5-3.5H15V9a.5.5 0 0 1 .5-.5z" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg {...common}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      )
    case 'arrow-left':
      return (
        <svg {...common}>
          <path d="M19 12H5M11 19l-7-7 7-7" />
        </svg>
      )
    case 'close':
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      )
    case 'expand':
      return (
        <svg {...common}>
          <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
        </svg>
      )
    case 'scissors':
      return (
        <svg {...common}>
          <circle cx="6.5" cy="7" r="2.7" />
          <circle cx="6.5" cy="17" r="2.7" />
          <path d="M20 4.5 9.2 15.3M9.2 8.7 20 19.5M13 12h7" />
        </svg>
      )
    case 'razor':
      return (
        <svg {...common}>
          <rect x="9" y="2.5" width="6" height="5.5" rx="1" />
          <path d="M12 8v13.5M9 10.2h6" />
        </svg>
      )
    case 'drop':
      return (
        <svg {...common}>
          <path d="M12 3s6 6.6 6 11a6 6 0 1 1-12 0c0-4.4 6-11 6-11z" />
        </svg>
      )
    case 'package':
      return (
        <svg {...common}>
          <path d="M3.5 7.2 12 3l8.5 4.2L12 11.5 3.5 7.2z" />
          <path d="M3.5 7.2v9.6L12 21l8.5-4.2V7.2M12 11.5V21" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg {...common}>
          <path d="M12 3.5v3.5M12 17v3.5M5.5 12H2M22 12h-3.5M6.5 6.5l2.5 2.5M15 15l2.5 2.5M6.5 17.5 9 15M15 9l2.5-2.5" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      )
    case 'plus':
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      )
    case 'chair':
      return (
        <svg {...common}>
          <path d="M6 4h12v8H6zM4 12h16M7 12v8M17 12v8M9 20h6" />
        </svg>
      )
    case 'mirror':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="9" rx="6" ry="7" />
          <path d="M12 16v6M9 22h6" />
        </svg>
      )
    case 'talk':
      return (
        <svg {...common}>
          <path d="M4 5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
          <path d="M22 10v6a2 2 0 0 1-2 2h-1v3l-4-3" />
        </svg>
      )
    default:
      return null
  }
}
