import React from 'react'
import { HardHat, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <HardHat size={28} color="var(--accent-teal)" />
            <span>Demo Drywall</span>
          </div>
          <p>Premier drywall contracting for residential and commercial excellence. Licensed, insured, and dedicated to perfect finishes.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Get a Quote</a>
        </div>

        <div className="footer-contact">
          <h4>Connect</h4>
          <div className="contact-item">
            <Mail size={18} />
            <span>office@antigravitydrywall.com</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>(555) 123-4567</span>
          </div>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Demo Drywall. All rights reserved.</p>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          background: var(--bg-midnight);
          padding: 5rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr;
          gap: 4rem;
          padding: 0 2rem;
          margin-bottom: 4rem;
        }

        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .footer-brand p {
          opacity: 0.6;
          font-size: 0.95rem;
          max-width: 300px;
        }

        h4 {
          color: var(--accent-mustard);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          font-size: 0.95rem;
          opacity: 0.7;
        }

        .footer-links a:hover {
          color: var(--accent-teal);
          opacity: 1;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          opacity: 0.7;
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 0.5rem;
        }

        .social-links a {
          color: var(--text-sand);
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          color: var(--accent-teal);
          opacity: 1;
          transform: translateY(-3px);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          opacity: 0.4;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .footer-brand .logo {
            justify-content: center;
          }
          .footer-brand p {
            margin: 0 auto;
          }
          .contact-item {
            justify-content: center;
          }
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
