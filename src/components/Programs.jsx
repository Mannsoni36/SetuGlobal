const programs = [
  { icon: '💻', name: 'Computer Science' },
  { icon: '📊', name: 'Data Science' },
  { icon: '🤖', name: 'Artificial Intelligence' },
  { icon: '🛡️', name: 'Cybersecurity' },
  { icon: '⚙️', name: 'Mechanical Engg.' },
  { icon: '⚡', name: 'Electrical Engg.' },
  { icon: '📈', name: 'Business & MBA' },
  { icon: '💰', name: 'Finance & Fintech' },
  { icon: '🏛️', name: 'Architecture' },
  { icon: '🏥', name: 'Health Management' },
  { icon: '🌐', name: 'Supply Chain Mgmt.' },
  { icon: '🔬', name: 'Biotechnology' }
];

export default function Programs() {
  return (
    <section id="programs">
      <div className="section-header centered fade-up">
        <div className="section-eyebrow">Fields of Study</div>
        <h2 className="section-title">Popular <span className="accent">Programs</span> in Germany</h2>
        <p className="section-subtitle">Germany excels across engineering, technology, business, and sciences. Find your perfect program.</p>
      </div>
      <div className="programs-grid fade-up">
        {programs.map((p, i) => (
          <div key={i} className="program-pill">
            <span className="prog-icon">{p.icon}</span>
            <span>{p.name}</span>
          </div>
        ))}
      </div>
      <p className="programs-note fade-up">
        Can't find your program? <a href="#contact">Talk to our experts →</a> We cover 100+ programs across all major disciplines.
      </p>
    </section>
  );
}
