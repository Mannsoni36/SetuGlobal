const services = [
  { icon: '🎯', title: 'Study Counselling', desc: 'One-on-one guidance to assess your academic profile and career goals, and map out the ideal path to your dream German university.' },
  { icon: '🏫', title: 'University Selection', desc: 'Access our network of 50+ German partner universities. We shortlist the best options matching your program, budget, and ambitions.' },
  { icon: '📝', title: 'SOP & Documentation', desc: 'Professional Statement of Purpose writing, LOR guidance, document translation, and complete application package preparation.' },
  { icon: '🛂', title: 'Visa Guidance', desc: 'Complete end-to-end student visa support — from blocked account setup to embassy appointment — with a 98% approval success rate.' },
  { icon: '💰', title: 'Scholarship Assistance', desc: 'We identify scholarships you qualify for, including DAAD, university grants, and merit-based awards, and guide you through applications.' },
  { icon: '💳', title: 'Blocked Account Support', desc: 'Expert guidance on opening your German Sperrkonto (blocked account) with the right amount and documentation for visa compliance.' },
  { icon: '🏠', title: 'Accommodation Help', desc: 'We help you find safe, affordable student housing — from university dormitories to private apartments near your campus in Germany.' },
  { icon: '💼', title: 'Career & Job Guidance', desc: 'Resume building for the German job market, interview prep, and job search strategy to land your first role in Germany post-graduation.' },
];

export default function Services() {
  return (
    <section id="services">
      <div className="services-intro">
        <div className="section-header">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">End to end guidance,<br />from the <em>first call</em> to<br />the first semester.</h2>
        </div>
        <div className="services-intro-right">
          We handle the full arc of a study abroad application. You focus on academics and language tests, we take care of everything else — university shortlisting, applications, visa, and arrival.
        </div>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className={`service-card fade-up d${(i % 4) + 1}`}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
