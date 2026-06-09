const testimonials = [
  {
    initials: 'RP',
    name: 'Rahul Patel',
    program: 'MSc Computer Science • TU Munich',
    quote: 'Setu Global made the entire Germany admission process completely stress-free. From shortlisting TU Munich to getting my visa in the first attempt — they handled everything professionally. My counsellor was available on WhatsApp every single day!',
  },
  {
    initials: 'PS',
    name: 'Priya Shah',
    program: 'MSc Mechanical Engineering • University of Stuttgart',
    quote: 'As a girl from Ahmedabad going abroad alone, I was nervous. Setu Global did not just handle my visa — they guided me on accommodation, blocked account, and even helped me find Indian students already in Stuttgart. Truly end-to-end support!',
  },
  {
    initials: 'AM',
    name: 'Aryan Mehta',
    program: 'MBA International Business • EBS University Wiesbaden',
    quote: 'If you want to come to Germany from Gujarat, Setu Global is the one-stop solution. Their SOP was so well written that I got a scholarship from my university. The visa process took only 7 weeks. Could not have done it without their team!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section-header centered fade-up">
        <div className="section-eyebrow">Student Stories</div>
        <h2 className="section-title">What Our <span className="accent">Students Say</span></h2>
        <p className="section-subtitle">Real stories from students who trusted Setu Global for their Germany journey.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className={`testimonial-card fade-up d${i + 1}`}>
            <div className="stars">{'★★★★★'.split('').map((s, j) => <span key={j} className="star">{s}</span>)}</div>
            <p className="quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initials}</div>
              <div className="author-info">
                <strong>{t.name}</strong>
                <span>{t.program}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
