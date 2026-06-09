const steps = [
  { title: 'Free first call', desc: 'Thirty minutes on WhatsApp or Zoom. We review your grades, budget, and shortlist of interests. You leave the call with a university recommendation and a rough timeline.' },
  { title: 'Application prep', desc: 'We build your university shortlist, write and iterate on your SOP and CV, prepare recommendation letters, translate and apostille your documents.' },
  { title: 'Visa and logistics', desc: 'Blocked account, financial proof, consulate appointment, interview coaching, flight and accommodation checklist. You arrive prepared.' },
  { title: 'Arrival and beyond', desc: 'First week support: city registration, bank account, SIM card, health insurance, university enrolment. You stay in our group for your full program.' },
];

export default function Process() {
  return (
    <section id="process">
      <div className="process-header-row">
        <div className="section-header">
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">A structured process,<br /><em>not a sales funnel.</em></h2>
        </div>
        <p className="process-desc">
          From your first call to your first week in Germany, you know what is happening and when. Fixed milestones, no surprise fees.
        </p>
      </div>
      <div className="process-grid">
        {steps.map((s, i) => (
          <div key={i} className={`process-card fade-up d${i + 1}`}>
            <div className="step-label">Step {String(i + 1).padStart(2, '0')}</div>
            <div className="step-number">0{i + 1}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
