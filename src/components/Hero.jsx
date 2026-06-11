import { useState, useEffect } from 'react';

const slides = Array.from({ length: 14 }, (_, i) => `/hero-images/slide-${i + 1}.jpeg`);

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-eyebrow"><span>Study Abroad, Without The Stress</span></div>
        <h1>Your Dream of Studying<br />in <span className="gradient-text">Germany</span> Starts Here</h1>
        <p className="hero-desc">From university shortlisting to visa approval and pre-departure, we guide Indian students through every step of the journey to Germany with a 98% visa success rate.</p>
        <div className="hero-btns">
          <a href="#contact" className="btn btn-primary btn-lg">Request a free consultation →</a>
          <a href="https://wa.me/918140881823" target="_blank" rel="noopener" className="btn btn-outline btn-lg">💬 WhatsApp Us</a>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-num">50<em style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1rem', color: 'var(--orange)', fontStyle: 'normal' }}>+</em></span>
            <span className="trust-label">Partner Universities</span>
          </div>
          <div className="trust-item">
            <span className="trust-num">98<em style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1rem', color: 'var(--orange)', fontStyle: 'normal' }}>%</em></span>
            <span className="trust-label">Visa Success Rate</span>
          </div>
          <div className="trust-item">
            <span className="trust-num">200<em style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1rem', color: 'var(--orange)', fontStyle: 'normal' }}>+</em></span>
            <span className="trust-label">Students Placed</span>
          </div>
          <div className="trust-item">
            <span className="trust-num" style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1.1rem' }}>FREE</span>
            <span className="trust-label">Consultation</span>
          </div>
        </div>
      </div>
      <div className="hero-image-wrap">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`hero-image${i === current ? ' hero-image--active' : ''}`}
          />
        ))}
        <div className="hero-slide-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slide-dot${i === current ? ' slide-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
