import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
