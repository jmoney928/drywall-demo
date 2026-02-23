import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Star, Award } from 'lucide-react'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Flawless Drywall.<br />
                        <span className="accent-text">Zero Hassle.</span><br />
                        Perfect Finish.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Expert installation, taping, and texturing for residential and commercial spaces.
                        Get your project done on time and on budget.
                    </motion.p>
                    <motion.div
                        className="hero-ctas"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a href="#contact" className="btn-primary btn-large">
                            Get My Free Quote Now
                        </a>
                    </motion.div>

                    <motion.div
                        className="trust-badges"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <div className="badge">
                            <CheckCircle size={18} />
                            <span>Licensed & Insured</span>
                        </div>
                        <div className="badge">
                            <Star size={18} />
                            <span>5-Star Rated</span>
                        </div>
                        <div className="badge">
                            <Award size={18} />
                            <span>10+ Years Experience</span>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="hero-visual">
                    <div className="abstract-shape shape-1"></div>
                    <div className="abstract-shape shape-2"></div>
                    <div className="glass-panel">
                        <div className="panel-content">
                            <h3>Next-Gen Finish</h3>
                            <p>Smooth as glass. Every time.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow: hidden;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          padding: 0 2rem;
        }

        .accent-text {
          color: var(--accent-teal);
        }

        h1 {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        p {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin-bottom: 2.5rem;
        }

        .hero-ctas {
          margin-bottom: 3rem;
        }

        .btn-large {
          font-size: 1.1rem;
          padding: 1.25rem 2.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .trust-badges {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-mustard);
        }

        .hero-visual {
          position: relative;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .abstract-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          z-index: -1;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: var(--accent-teal);
          top: 10%;
          right: 0;
        }

        .shape-2 {
          width: 250px;
          height: 250px;
          background: var(--accent-mustard);
          bottom: 10%;
          left: 0;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          width: 100%;
          max-width: 350px;
          transform: perspective(1000px) rotateY(-15deg) rotateX(10deg);
          box-shadow: 20px 40px 60px rgba(0, 0, 0, 0.3);
        }

        .panel-content h3 {
          color: var(--accent-teal);
          margin-bottom: 0.5rem;
        }

        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .trust-badges {
            justify-content: center;
          }
          .hero-visual {
            display: none;
          }
        }
      `}</style>
        </section>
    )
}

export default Hero
