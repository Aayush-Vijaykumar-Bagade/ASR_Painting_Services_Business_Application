import './App.css'

// Import all components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Packages from './components/Packages/Packages'
import HowWeWork from './components/HowWeWork/HowWeWork'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages />
      <HowWeWork />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
