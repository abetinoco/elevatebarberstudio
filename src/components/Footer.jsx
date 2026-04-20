const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Now', href: '#booking' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-dark-600 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-heading text-xl font-bold text-white">ELEVATE</p>
              <p className="text-[10px] tracking-[0.3em] text-gold-400 uppercase">Barber Studio</p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium grooming for the modern man. Walk in sharp, walk out sharper.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs tracking-wider uppercase text-gray-400 mb-4 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-500 text-sm hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & socials */}
          <div>
            <h4 className="text-xs tracking-wider uppercase text-gray-400 mb-4 font-medium">
              Connect
            </h4>
            <ul className="space-y-2 mb-6">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-sm hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm">
              <a href="tel:+15550000000" className="hover:text-gold-400 transition-colors">
                (555) 000-0000
              </a>
            </p>
            <p className="text-gray-500 text-sm mt-1">123 Main Street, Your City</p>
          </div>
        </div>

        <div className="border-t border-dark-600 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {year} Barber Elevate Studio. All rights reserved.</p>
          <p>Built with ❤️ in React</p>
        </div>
      </div>
    </footer>
  )
}
