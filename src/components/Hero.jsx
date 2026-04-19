export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold-400/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold-400/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold-400 tracking-[0.4em] uppercase text-xs md:text-sm mb-6 font-body font-medium">
          Premium Grooming Experience
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          Elevate Your
          <br />
          <span className="text-gold-400">Style</span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-body">
          Precision cuts. Sharp fades. Timeless style. Walk in looking good —
          walk out looking legendary.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#booking" className="btn-primary">
            Book an Appointment
          </a>
          <a href="#services" className="btn-outline">
            View Services
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-dark-600 pt-8">
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '2K+', label: 'Happy Clients' },
            { value: '4.9★', label: 'Average Rating' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-heading text-2xl font-bold text-gold-400">{value}</p>
              <p className="text-gray-500 text-xs tracking-wider uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-widest uppercase text-gray-500">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
