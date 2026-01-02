import React, { useState } from 'react';

// TODO: Replace with your Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzgqAbRPLDXI5S6U9ethmrrKSddLz0DNKtYH3I336D-qoRZvf3KlHAkdIPLGYhhcQc/exec';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // Map form data to exact Google Sheet headers found in the sheet
            const params = new URLSearchParams();
            params.append('Time stamp', new Date().toLocaleString()); // Added Time stamp
            params.append('Your name', formData.name);
            params.append('Phone number', formData.phone);
            params.append('Email Address', formData.email);
            params.append('I\'m interested in', formData.interest);
            params.append('How can we help', formData.message);

            await fetch(SCRIPT_URL, {
                method: 'POST',
                body: params.toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                mode: 'no-cors'
            });

            alert('Thank you for your interest! We will contact you shortly.');
            setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>

                    {/* Contact Info */}
                    <div>
                        <h2 style={{ color: 'var(--color-text-main)', marginBottom: '1rem', fontSize: '2.5rem' }}>Get in Touch</h2>
                        <p style={{ marginBottom: '2.5rem', color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
                            Ready to start your Sri Lankan adventure? Fill out the form or contact us directly. We are here to help you plan the perfect trip.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Call Us</h4>
                                <p style={{ fontSize: '1.1rem' }}>+94 76 99 33 742</p>
                                <p style={{ fontSize: '1.1rem' }}>+94 77 22 49 558</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Email</h4>
                                <p style={{ fontSize: '1.1rem' }}>rajeetours@yahoo.com</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Location</h4>
                                <p style={{ fontSize: '1.1rem' }}>Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="card-style" style={{ padding: '2.5rem' }}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-1">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>I'm interested in...</label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                >
                                    <option value="">Select an option</option>
                                    <option value="cultural">Cultural Tours</option>
                                    <option value="wildlife">Wildlife Safaris</option>
                                    <option value="beach">Beach Holiday</option>
                                    <option value="custom">Custom Tour</option>
                                </select>
                            </div>

                            <div className="mb-2">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>How can we help?</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', borderRadius: '50px', fontSize: '1.1rem' }}
                                disabled={submitting}
                            >
                                {submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
