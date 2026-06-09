const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSepOeA-0WMDyi1HgOTLGWoTqWMRDK3Cg_0uw4IFQ5aoorUdMA/viewform?embedded=true';

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header fade-up">
        <span className="section-eyebrow">Get In Touch</span>
        <h2 className="section-title">Start Your <span className="accent">Germany Journey</span> Today</h2>
        <p className="section-subtitle">
          Book a free consultation. Our expert counsellors will guide you from university selection all the way to landing in Germany.
        </p>
        <div className="section-divider" />
      </div>

      <div className="contact-grid">
        {/* ── LEFT: contact info ── */}
        <div className="contact-info fade-up">
          <div className="section-eyebrow" style={{ marginBottom: 16 }}>Start Here</div>
          <h3>Tell us where you are,<br />we'll tell you what's possible.</h3>
          <p>
            Fill the form and a counsellor will reach out within one business day.
            No cost, no commitment.
          </p>

          <div className="contact-what-happens">
            <h4>What happens next</h4>
            <ul>
              <li>A counsellor replies on your preferred channel, usually the same day.</li>
              <li>30-minute profile review and a realistic university shortlist.</li>
              <li>Clear written plan with timelines and fixed milestones.</li>
            </ul>
          </div>

          <div className="contact-detail">
            <div className="detail-icon">📞</div>
            <div className="detail-text">
              <strong>Phone</strong>
              <a href="tel:+918140881823">+91 81408 81823</a>
            </div>
          </div>
          <div className="contact-detail">
            <div className="detail-icon">✉️</div>
            <div className="detail-text">
              <strong>Email</strong>
              <a href="mailto:mann@setuglobalsolution.com">mann@setuglobalsolution.com</a>
            </div>
          </div>
          <div className="contact-detail">
            <div className="detail-icon">📍</div>
            <div className="detail-text">
              <strong>Location</strong>
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div className="contact-detail">
            <div className="detail-icon">🕐</div>
            <div className="detail-text">
              <strong>Office Hours</strong>
              <span>Mon–Sat, 10:00 AM – 7:00 PM</span>
            </div>
          </div>

          <a href="https://wa.me/918140881823" target="_blank" rel="noopener" className="whatsapp-cta">
            <span className="whatsapp-icon">💬</span>
            <div className="whatsapp-cta-text">
              <strong>Chat on WhatsApp</strong>
              <span>Get instant replies — usually within minutes</span>
            </div>
          </a>
        </div>

        {/* ── RIGHT: Google Form iframe ── */}
        <div className="gform-wrapper fade-up d2">
          <p className="form-title">Request a Free Consultation</p>
          <iframe
            src={GOOGLE_FORM_URL}
            title="Setu Global – Free Consultation Form"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            allowFullScreen
          >
            Loading form…
          </iframe>
        </div>
      </div>
    </section>
  );
}
