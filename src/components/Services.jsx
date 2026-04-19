const services = [
  {
    name: 'Classic Haircut',
    description: 'A timeless cut tailored to your face shape and style preference.',
    price: '$35',
    duration: '30 min',
  },
  {
    name: 'Skin Fade',
    description: 'Clean, graduated fade from skin to your desired length on top.',
    price: '$45',
    duration: '45 min',
  },
  {
    name: 'Beard Trim & Shape',
    description: 'Precision beard sculpting to keep your facial hair sharp and defined.',
    price: '$25',
    duration: '20 min',
  },
  {
    name: 'Cut + Beard Combo',
    description: 'Full haircut plus beard trim and shape — the complete package.',
    price: '$60',
    duration: '60 min',
  },
  {
    name: 'Hot Towel Shave',
    description: 'Traditional straight-razor shave with a hot towel and premium oils.',
    price: '$40',
    duration: '30 min',
  },
  {
    name: 'Kids Cut (under 12)',
    description: 'A patient, precise cut for the little ones in your crew.',
    price: '$25',
    duration: '25 min',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 tracking-[0.3em] uppercase text-xs mb-3">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <div className="gold-line" />
          <p className="text-gray-400 max-w-md mx-auto">
            Every service is delivered with attention to detail and a commitment to quality.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-dark-700 border border-dark-600 p-8 group hover:border-gold-400/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
                  {service.name}
                </h3>
                <span className="text-gold-400 font-bold text-lg">{service.price}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
              <p className="text-gray-600 text-xs tracking-wider uppercase">{service.duration}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#booking" className="btn-primary">
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  )
}
