import React, { useState, useEffect } from 'react'
import { HardHat } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <HardHat size={32} color="var(--accent-teal)" />
          <span>Demo Drywall</span>
        </div>
        <nav className="desktop-nav">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact" className="btn-secondary-outline">Get a Quote</a>
        </nav>
      </div>
      <style jsx="true">{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header.scrolled {
          padding: 1rem 0;
          background: rgba(42, 45, 52, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .desktop-nav a {
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.8;
        }

        .desktop-nav a:hover {
          opacity: 1;
          color: var(--accent-teal);
        }

        .btn-secondary-outline {
          border: 1px solid var(--accent-teal);
          color: var(--accent-teal) !important;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          opacity: 1 !important;
        }

        .btn-secondary-outline:hover {
          background: var(--accent-teal);
          color: white !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
