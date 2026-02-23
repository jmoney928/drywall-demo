import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const ContactForm = ({ id }) => {
    const [status, setStatus] = useState('idle')

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')
        // Simulate API call
        setTimeout(() => {
            setStatus('success')
        }, 1500)
    }

    return (
        <section id={id} className="contact-section">
            <div className="container contact-container">
                <div className="glass-card contact-card">
                    <div className="contact-header">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Let's Get Your <span className="accent-text">Project Started</span>
                        </motion.h2>
                        <p>Fill out the form below for a fast, no-obligation quote.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="(555) 000-0000" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Project Type</label>
                                <select required>
                                    <option value="">Select Project Type</option>
                                    <option value="repair">Repair</option>
                                    <option value="room">Full Room</option>
                                    <option value="house">Whole House</option>
                                    <option value="commercial">Commercial</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Tell us about the job</label>
                            <textarea placeholder="Describe your project goals..." rows="4"></textarea>
                        </div>

                        <div className="form-footer">
                            <button
                                type="submit"
                                className={`btn-accent btn-large submit-btn ${status}`}
                                disabled={status !== 'idle'}
                            >
                                {status === 'idle' && (
                                    <>
                                        <span>Claim My Free Quote</span>
                                        <Send size={18} />
                                    </>
                                )}
                                {status === 'sending' && <span>Processing...</span>}
                                {status === 'success' && <span>Quote Requested!</span>}
                            </button>
                            <p className="microcopy">No obligation. We reply within 24 hours.</p>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx="true">{`
        .contact-section {
          padding: var(--section-padding);
          position: relative;
        }

        .contact-container {
          max-width: 800px;
        }

        .contact-card {
          padding: 3.5rem;
          border-color: rgba(233, 196, 106, 0.2);
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-header h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          margin-bottom: 0.5rem;
        }

        .accent-text {
          color: var(--accent-mustard);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-sand);
          opacity: 0.8;
        }

        input, select, textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.9rem 1.2rem;
          color: white;
          font-family: var(--font-body);
          transition: all 0.3s ease;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-mustard);
          box-shadow: 0 0 15px rgba(233, 196, 106, 0.1);
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 1.1rem;
        }

        .submit-btn.success {
          background-color: var(--accent-teal);
          color: white;
        }

        .form-footer {
          margin-top: 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .microcopy {
          font-size: 0.85rem;
          opacity: 0.5;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-card {
            padding: 2rem;
          }
        }
      `}</style>
        </section>
    )
}

export default ContactForm
