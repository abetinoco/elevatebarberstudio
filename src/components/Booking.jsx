import { useState } from 'react'

const services = [
  'Classic Haircut',
  'Skin Fade',
  'Beard Trim & Shape',
  'Cut + Beard Combo',
  'Hot Towel Shave',
  "Kids Cut (under 12)",
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '4:00 PM',
  '4:30 PM', '5:00 PM',
]

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to booking backend / email service (e.g. EmailJS, Cal.com, etc.)
    console.log('Booking submitted:', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-dark-900">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="text-5xl mb-6">✓</div>
          <h2 className="section-title">You're Booked!</h2>
          <p className="text-gray-400 mb-8">
            Thanks, {form.name}! We'll confirm your appointment for {form.service} on{' '}
            {form.date} at {form.time} shortly.
          </p>
          <button
            className="btn-outline"
            onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '' }) }}
          >
            Book Another
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <p className="text-gold-400 tracking-[0.3em] uppercase text-xs mb-3">Ready?</p>
            <h2 className="section-title text-left">Book Your Appointment</h2>
            <div className="w-16 h-0.5 bg-gold-400 mb-8" />

            <p className="text-gray-400 leading-relaxed mb-10">
              Fill out the form and we'll get back to you within a few hours to confirm.
              Walk-ins are welcome when seats are available, but booking guarantees your spot.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-gold-400 text-xl">📍</span>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-500 text-sm">123 Main Street, Your City, ST 00000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold-400 text-xl">🕐</span>
                <div>
                  <p className="text-white font-medium">Hours</p>
                  <p className="text-gray-500 text-sm">Mon–Sat: 9:00 AM – 6:00 PM</p>
                  <p className="text-gray-500 text-sm">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold-400 text-xl">📞</span>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+15550000000" className="text-gray-500 text-sm hover:text-gold-400 transition-colors">
                    (555) 000-0000
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-dark-700 border border-dark-600 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  className="w-full bg-dark-700 border border-dark-600 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-dark-700 border border-dark-600 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                Service *
              </label>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full bg-dark-700 border border-dark-600 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-dark-700 border border-dark-600 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                  Time *
                </label>
                <select
                  name="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  className="w-full bg-dark-700 border border-dark-600 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-wider uppercase text-gray-500 mb-2">
                Notes (optional)
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Any specific requests or style references..."
                className="w-full bg-dark-700 border border-dark-600 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full text-center">
              Request Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
