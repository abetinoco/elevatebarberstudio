// Placeholder gallery items — swap these out with real image imports or URLs
const galleryItems = [
  { id: 1, label: 'Skin Fade' },
  { id: 2, label: 'Classic Cut' },
  { id: 3, label: 'Beard Shape' },
  { id: 4, label: 'Temp Fade' },
  { id: 5, label: 'Drop Fade' },
  { id: 6, label: 'Textured Top' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 tracking-[0.3em] uppercase text-xs mb-3">Our Work</p>
          <h2 className="section-title">The Gallery</h2>
          <div className="gold-line" />
          <p className="text-gray-400 max-w-md mx-auto">
            A look at some of the cuts and styles we've crafted. Results speak louder than words.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square bg-dark-700 border border-dark-600 overflow-hidden group cursor-pointer"
            >
              {/* Replace this placeholder with an <img> once you have photos */}
              <div className="w-full h-full flex items-center justify-center text-gray-600 group-hover:text-gray-500 transition-colors">
                <div className="text-center">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-xs tracking-wider uppercase">{item.label}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gold-400/30" />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Follow us on Instagram{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:underline"
          >
            @elevatebarber
          </a>{' '}
          for daily inspiration.
        </p>
      </div>
    </section>
  )
}
