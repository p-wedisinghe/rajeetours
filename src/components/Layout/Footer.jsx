import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>

                {/* Brand & About */}
                <div>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>RajeeTours</h3>
                    <p style={{ opacity: 0.9 }}>
                        Your gateway to the Pearl of the Indian Ocean. Experience the rich culture, history, and wildlife of Sri Lanka with our expert guidance.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
                    <ul style={{ lineHeight: '2' }}>
                        <li><a href="#destinations">Destinations</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div id="contact-info">
                    <h4 style={{ marginBottom: '1rem' }}>Contact Us</h4>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li>📞 <a href="tel:+94769933742">+94 76 99 33 742</a></li>
                        <li>📞 <a href="tel:+94772249558">+94 77 22 49 558</a></li>
                        <li>✉️ <a href="mailto:rajeetours@yahoo.com">rajeetours@yahoo.com</a></li>
                        <li>📍 Sri Lanka</li>
                    </ul>
                </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.9rem', opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} RajeeTours. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
