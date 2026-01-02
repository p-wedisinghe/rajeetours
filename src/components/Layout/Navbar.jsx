import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={{
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      color: scrolled ? 'var(--color-text-main)' : 'white',
      padding: '1rem 0',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo Area */}
        <a href="#" style={{
          fontSize: '1.75rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{
            color: scrolled ? 'var(--color-primary)' : 'white',
          }}>Rajee</span>
          <span style={{
            color: 'var(--color-accent)'
          }}>Tours</span>
        </a>

        {/* Desktop Menu */}
        <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Home', 'Destinations'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  fontWeight: '500',
                  fontSize: '0.95rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  transition: 'background-color 0.2s'
                }}
                className="nav-link"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
              Plan Trip
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'inherit', fontSize: '1.5rem', display: 'none', cursor: 'pointer' }}>
          Menu
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link:hover {
          background-color: rgba(128,128,128, 0.1);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
