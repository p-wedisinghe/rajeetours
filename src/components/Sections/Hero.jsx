import React, { useState, useEffect } from 'react';
import hero1 from '../../assets/hero1.jpeg';
import hero2 from '../../assets/hero2.jpeg';
import hero3 from '../../assets/hero3.jpeg';

const heroImages = [hero1, hero2, hero3];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" style={{
            position: 'relative',
            height: '85vh',
            minHeight: '650px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            overflow: 'hidden'
        }}>
            {/* Background Images */}
            {heroImages.map((img, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        opacity: currentImageIndex === index ? 1 : 0,
                        transition: 'opacity 1s ease-in-out'
                    }}
                >
                    <img
                        src={img}
                        alt={`Sri Lanka Scenery ${index + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {/* Premium Gradient Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%)'
                    }}></div>
                </div>
            ))}

            <div className="container text-center" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                    marginBottom: '1rem',
                    textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    letterSpacing: '-0.03em'
                }}>
                    Discover the Wonders of <br />
                    <span style={{ color: 'var(--color-accent)' }}>Sri Lanka</span>
                </h1>

                <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.95, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                    Authentic journeys. Premium comfort. Unforgettable memories.
                </p>

                <a href="#destinations" className="btn btn-primary" style={{ padding: '0.75rem 2.5rem', borderRadius: '40px', fontSize: '1.1rem' }}>
                    Explore Destinations
                </a>

                <style>{`
          .hero-search:hover { transform: translateY(-2px); }
          @media (max-width: 600px) {
             .hero-search { flex-direction: column; border-radius: 24px; padding: 1rem; gap: 1rem; }
             .hero-search > div { border-right: none !important; width: 100%; }
             .hero-search .btn { width: 100%; }
          }
        `}</style>

            </div>
        </section>
    );
};

export default Hero;
