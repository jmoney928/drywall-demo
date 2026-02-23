import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Droplets, PenTool } from 'lucide-react'

const serviceData = [
    {
        icon: <Layers size={40} />,
        title: "Installation",
        description: "Fast, clean, and structurally superior. We handle framing and board hanging with precision for lasting durability.",
        tag: "Fast & Precise"
    },
    {
        icon: <Droplets size={40} />,
        title: "Taping & Mudding",
        description: "Seamless joints and perfectly smooth surfaces. Our multi-stage finishing process ensures walls are ready for paint.",
        tag: "Seamless Finish"
    },
    {
        icon: <PenTool size={40} />,
        title: "Repairs & Texturing",
        description: "Matching existing walls perfectly. From small holes to complete textured matching, we make damage disappear.",
        tag: "Perfect Match"
    }
]

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        className="overline"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Premium Drywall <span className="accent-text">Solutions</span>
                    </motion.h2>
                </div>

                <div className="services-grid">
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="glass-card service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <span className="service-tag">{service.tag}</span>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .services {
          padding: var(--section-padding);
          background: rgba(0, 0, 0, 0.1);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .overline {
          display: block;
          font-family: var(--font-heading);
          color: var(--accent-mustard);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
        }

        h2 {
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .accent-text {
          color: var(--accent-teal);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
          transition: all 0.3s ease;
        }

        .service-icon {
          color: var(--accent-teal);
        }

        .service-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-sand);
          opacity: 0.6;
          letter-spacing: 0.1em;
        }

        h3 {
          font-size: 1.5rem;
          color: var(--text-sand);
        }

        p {
          opacity: 0.8;
          font-size: 1rem;
        }

        .service-card:hover {
          border-color: var(--accent-teal);
          background: rgba(255, 255, 255, 0.08);
        }
      `}</style>
        </section>
    )
}

export default Services
