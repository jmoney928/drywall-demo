import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Clock, DollarSign } from 'lucide-react'

const WhyUs = () => {
  const points = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Spotless Sites",
      desc: "We respect your space. Our crews use HEPA filtration and protective masking to leave your property as clean as we found it."
    },
    {
      icon: <DollarSign size={32} />,
      title: "Transparent Pricing",
      desc: "No hidden fees or surprise change orders. We provide detailed, itemized quotes so you know exactly what you're paying for."
    },
    {
      icon: <Clock size={32} />,
      title: "Punctual Crews",
      desc: "Time is money. We show up when we say we will and finish on schedule without sacrificing quality."
    }
  ]

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="why-us-content">
          <div className="why-us-info">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Why Homeowners <br />
              <span className="accent-text">Trust Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We've built our reputation on reliability and craftsmanship.
              Our goal isn't just to finish the job, but to exceed your expectations every step of the way.
            </motion.p>
          </div>

          <div className="points-grid">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="point-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="point-icon">{point.icon}</div>
                <div className="point-text">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .why-us {
          padding: var(--section-padding);
          background-image: linear-gradient(rgba(27, 30, 35, 0.95), rgba(42, 45, 52, 0.95)), url('https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        .why-us-content {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }

        .why-us-info h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 2rem;
        }

        .why-us-info p {
          font-size: 1.1rem;
          opacity: 0.8;
          max-width: 450px;
        }

        .accent-text {
          color: var(--accent-mustard);
        }

        .points-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .point-item {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .point-icon {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          background: rgba(0, 168, 150, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-teal);
        }

        .point-text h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-sand);
        }

        .point-text p {
          font-size: 0.95rem;
          opacity: 0.7;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .why-us-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .why-us-info {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .point-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}

export default WhyUs
