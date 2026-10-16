import { MotionConfig } from 'framer-motion'
import { ContactModalProvider } from './hooks/useContactModal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientsMarquee from './components/ClientsMarquee'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import ContactSection from './components/ContactSection'
import ContactModal from './components/ContactModal'
import WhatsAppFloat from './components/WhatsAppFloat'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ContactModalProvider>
        <Navbar />
        <main>
          <Hero />
          <ClientsMarquee />
          <Services />
          <HowItWorks />
          <ContactSection />
        </main>
        <Footer />
        <ContactModal />
        <WhatsAppFloat />
      </ContactModalProvider>
    </MotionConfig>
  )
}
