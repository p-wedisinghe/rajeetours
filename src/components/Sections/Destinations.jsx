import React from 'react';
import heroImg from '../../assets/hero.jpeg'; // Reused for Sigiriya
import kandyImg from '../../assets/kandy.png';
import yalaImg from '../../assets/yala.png';

const destinationData = [
    {
        id: 1,
        title: "Sigiriya Rock",
        desc: "The Eighth Wonder of the World. Ascend the Lion Rock for breathtaking views and ancient history.",
        img: heroImg
    },
    {
        id: 2,
        title: "Temple of the Tooth",
        desc: "Immerse yourself in spirituality at the sacred Temple of the Tooth Relic in the hill capital, Kandy.",
        img: kandyImg
    },
    {
        id: 3,
        title: "Yala Safari",
        desc: "Witness the highest density of leopards in the world on a thrilling safari through the wilderness.",
        img: yalaImg
    }
];

const Destinations = () => {
    return (
        <section id="destinations" className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="text-center mb-2">
                    <h2 style={{ color: 'var(--color-text-main)', marginBottom: '0.5rem', fontSize: '2.5rem' }}>Top Destinations</h2>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>Curated experiences in the island's most iconic locations</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {destinationData.map(dest => (
                        <div key={dest.id} className="card-style">
                            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                <img src={dest.img} alt={dest.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(255,255,255,0.9)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    color: 'var(--color-primary)'
                                }}>
                                    Popular
                                </div>
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ marginBottom: '0.75rem', color: 'var(--color-text-main)', fontSize: '1.5rem' }}>{dest.title}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{dest.desc}</p>
                                <a href="#contact" className="btn btn-outline" style={{ width: '100%', borderRadius: '12px' }}>View Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
