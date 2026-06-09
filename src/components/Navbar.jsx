import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#home" className="nav-logo">
          <img src="/setu_gloabal_logo.png" alt="Setu Global Logo" className="logo-icon" />
          <div className="logo-text">Setu Global<span>Solution</span></div>
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#why-germany">Why Germany</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary btn-sm nav-cta">Free Consultation</a>
        <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#home" onClick={close}>Home</a>
        <a href="#services" onClick={close}>Services</a>
        <a href="#process" onClick={close}>How It Works</a>
        <a href="#why-germany" onClick={close}>Why Germany</a>
        <a href="#programs" onClick={close}>Programs</a>
        <a href="#faq" onClick={close}>FAQ</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="#contact" className="btn btn-primary" style={{ marginTop: 8, textAlign: 'center' }} onClick={close}>
          Free Consultation →
        </a>
      </div>
    </>
  );
}
