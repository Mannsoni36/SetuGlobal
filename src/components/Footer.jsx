export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="36" height="36" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="28" r="22" fill="#FF8A00" />
              <path d="M15 48 Q30 20 40 28 Q50 36 65 48" stroke="#A87DEA" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M10 54 Q25 38 40 44 Q55 50 70 38" stroke="#C8A8F0" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.7" />
            </svg>
            <div className="logo-text" style={{ color: 'white' }}>Setu Global<span>Solution</span></div>
          </div>
          <p className="footer-tagline">Bridging Ahmedabad to Germany — your trusted partner for university admissions, visa, and career guidance in Germany.</p>
          <div className="social-links">
            <a href="#" className="social-link" title="LinkedIn">in</a>
            <a href="#" className="social-link" title="Instagram">📷</a>
            <a href="#" className="social-link" title="Facebook">f</a>
            <a href="#" className="social-link" title="YouTube">▶</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {['#home:Home', '#services:Services', '#process:How It Works', '#why-germany:Why Germany', '#programs:Programs', '#faq:FAQ', '#contact:Contact Us'].map(item => {
              const [href, label] = item.split(':');
              return <li key={href}><a href={href}>{label}</a></li>;
            })}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul className="footer-links">
            {['Study Counselling', 'University Selection', 'SOP & Documentation', 'Visa Guidance', 'Scholarship Support', 'Blocked Account Help', 'Accommodation', 'Career Guidance'].map(s => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <span className="fc-icon">📞</span>
            <a href="tel:+918140881823">+91 81408 81823</a>
          </div>
          <div className="footer-contact-item">
            <span className="fc-icon">✉️</span>
            <a href="mailto:mann@setuglobalsolution.com">mann@setuglobalsolution.com</a>
          </div>
          <div className="footer-contact-item">
            <span className="fc-icon">📍</span>
            <span>Ahmedabad, Gujarat, India</span>
          </div>
          <div className="footer-contact-item">
            <span className="fc-icon">🕐</span>
            <span>Mon–Sat: 10 AM – 7 PM</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Setu Global Solution. All Rights Reserved.</span>
        <span>Made with ♥ for aspiring students in Ahmedabad</span>
      </div>
    </footer>
  );
}
