const values = [
  { title: 'Precision', description: 'Every cut is measured, intentional, and executed with expert technique.' },
  { title: 'Respect', description: 'Your time is valuable. We run on schedule and treat every client like family.' },
  { title: 'Craft', description: 'We stay sharp — attending industry events and refining our skills constantly.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual block */}
          <div className="relative">
            <div className="bg-dark-700 border border-dark-600 aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 flex items-center justify-center">
              {/* Placeholder for a real photo — swap src when ready */}
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">✂️</div>
                <p className="text-sm tracking-wider uppercase">Add your photo here</p>
              </div>
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold-400/30 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold-400/20 hidden lg:block" />
          </div>

          {/* Right — text */}
          <div>
            <p className="text-gold-400 tracking-[0.3em] uppercase text-xs mb-3">Our Story</p>
            <h2 className="section-title text-left mb-4">
              More Than a Haircut.
              <br />
              It's an Experience.
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mb-6" />

            <p className="text-gray-400 leading-relaxed mb-6">
              Barber Elevate Studio was built on a simple belief: everyone deserves to look and
              feel their best. From the moment you walk in, you'll notice the difference — a
              welcoming atmosphere, skilled barbers who listen, and a commitment to craft that
              shows in every detail.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Whether you're coming in for a fresh fade or a full grooming session, we bring
              the same level of care and precision to every chair.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map(({ title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-1 bg-gold-400 flex-shrink-0 rounded-full" />
                  <div>
                    <h4 className="font-heading font-semibold text-white mb-1">{title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
