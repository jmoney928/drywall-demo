import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="texture-overlay"></div>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <ContactForm id="contact" />
      </main>
      <Footer />
    </div>
  )
}

export default App
