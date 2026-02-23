import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: "Demo Drywall was incredible. They finished our basement in half the time our last contractor quoted. Speed and quality are unmatched.",
    author: "James R.",
    position: "Homeowner"
  },
  {
    text: "I've worked with many drywallers, but these guys are the cleanest. No dust in the vents, and the walls are perfectly smooth. Highly recommend.",
    author: "Sarah M.",
    position: "Property Manager"
  },
  {
    text: "Transparent pricing and they actually showed up on time. The repair they did on our water-damaged ceiling is completely invisible now.",
    author: "David K.",
    position: "Real Estate Agent"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our <span className="accent-text">Clients Say</span>
          </motion.h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="glass-card testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <strong>{t.author}</strong>
                <span>{t.position}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .testimonials {
          padding: var(--section-padding);
          background: rgba(0, 0, 0, 0.2);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .accent-text {
          color: var(--accent-teal);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }

        .quote-icon {
          color: var(--accent-mustard);
          opacity: 0.5;
        }

        .testimonial-text {
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.9;
        }

        .testimonial-author {
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }

        .testimonial-author strong {
          color: var(--accent-teal);
          font-size: 1.1rem;
        }

        .testimonial-author span {
          font-size: 0.85rem;
          opacity: 0.6;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </section>
  )
}

export default Testimonials
