import React from 'react';

const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        country: "United Kingdom",
        text: "An unforgettable experience! RajeeTours took care of everything. Seeing the elephants in Minneriya was the highlight of our trip.",
        rating: 5
    },
    {
        id: 2,
        name: "Hans Müller",
        country: "Germany",
        text: "Excellent service. The driver was very professional and knowledgeable about the history of Polonnaruwa. Highly recommended!",
        rating: 5
    },
    {
        id: 3,
        name: "Li Wei",
        country: "China",
        text: "Beautiful country and friendly people. The tour was well organized and the hotels were fantastic. Thank you RajeeTours!",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
            <div className="container">
                <div className="text-center mb-2">
                    <h2 style={{ color: 'var(--color-text-main)', fontSize: '2.5rem' }}>Guest Stories</h2>
                    <p style={{ color: 'var(--color-text-light)' }}>Real experiences from our global travelers</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {reviews.map(review => (
                        <div key={review.id} className="card-style" style={{
                            padding: '2.5rem',
                            position: 'relative'
                        }}>
                            <div style={{ color: 'var(--color-accent)', fontSize: '1.25rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>
                                {'★'.repeat(review.rating)}
                            </div>
                            <p style={{
                                fontStyle: 'italic',
                                marginBottom: '2rem',
                                color: 'var(--color-text-main)',
                                fontSize: '1.1rem',
                                lineHeight: '1.7'
                            }}>"{review.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem'
                                }}>
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, color: 'var(--color-text-main)', fontSize: '1rem' }}>{review.name}</h4>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>{review.country}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
