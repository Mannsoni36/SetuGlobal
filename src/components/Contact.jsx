import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="contact-info fade-up">
          <div className="section-eyebrow" style={{ marginBottom: 20 }}>Start Here</div>
          <h3>Tell us where you are, we'll tell you what's possible.</h3>
          <p>Share a few details, a counsellor will reach out within one business day. No cost, no commitment.</p>

          <div className="contact-what-happens">
            <h4>What happens next</h4>
            <ul>
              <li>A counsellor replies on your preferred channel, usually the same day.</li>
              <li>Thirty minute profile review and a realistic country shortlist.</li>
              <li>Clear written plan with timelines and fixed milestones.</li>
            </ul>
          </div>

          <div className="contact-detail">
            <div className="detail-icon">📞</div>
            <div className="detail-text">
              <a href="tel:+918140881823">+91 81408 81823</a>
            </div>
          </div>
          <div className="contact-detail">
            <div className="detail-icon">✉️</div>
            <div className="detail-text">
              <a href="mailto:setuglobalsolution@gmail.com">setuglobalsolution@gmail.com</a>
            </div>
          </div>
          <div className="contact-detail">
            <div className="detail-icon">📍</div>
            <div className="detail-text">
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div className="contact-detail">
            <div className="detail-icon">🕐</div>
            <div className="detail-text">
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

        <div className="contact-form fade-up d2">
          <p className="form-title">Request a free consultation</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (with country code)</label>
                <input type="tel" id="phone" placeholder="+91 00000 00000" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="you@example.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="program">Program level</label>
                <select id="program">
                  <option value="">Select level</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>PhD</option>
                  <option>Language Course</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget range (optional)</label>
                <select id="budget">
                  <option value="">Pick a range</option>
                  <option>Under 15,000 EUR per year</option>
                  <option>15,000 to 25,000 EUR per year</option>
                  <option>25,000 to 40,000 EUR per year</option>
                  <option>Over 40,000 EUR per year</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="field">Field of study (optional)</label>
              <select id="field">
                <option value="">Select a field</option>
                <option>Computer Science / IT</option>
                <option>Data Science / AI / ML</option>
                <option>Cybersecurity</option>
                <option>Mechanical Engineering</option>
                <option>Electrical Engineering</option>
                <option>Civil Engineering</option>
                <option>Business / MBA</option>
                <option>Finance / Fintech</option>
                <option>Architecture</option>
                <option>Biotechnology / Life Sciences</option>
                <option>Health Management</option>
                <option>Supply Chain / Logistics</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (optional)</label>
              <textarea id="message" placeholder="Tell us a little about your background or what you want to study..." />
            </div>
            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={submitted}
            >
              {submitted ? '✓ Sent! We\'ll be in touch shortly.' : 'Request a free consultation →'}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: 12 }}>
              We respond within one business day. No spam, no shared lists.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
