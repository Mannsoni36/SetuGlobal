const reasons = [
  { icon: '🏛️', highlight: '€0 Tuition', title: 'Virtually Free Education', desc: 'Public universities charge little to no tuition fees — even for international students — saving you lakhs every year.' },
  { icon: '🎓', highlight: 'World Top 100', title: 'World-Class Universities', desc: 'TU Munich, RWTH Aachen, Heidelberg — globally ranked institutions with cutting-edge research and world-class faculty.' },
  { icon: '💼', highlight: '18-Month Work Permit', title: 'Excellent Career Prospects', desc: "Germany's powerful economy — home to BMW, SAP, Siemens, Bosch — offers 18-month post-study job seeker visa for graduates." },
  { icon: '🌍', highlight: 'English Programs', title: 'Study in English', desc: 'Hundreds of English-taught master\'s programs available. No German required to start — learn the language while you study.' },
  { icon: '🛡️', highlight: 'Very Safe', title: 'Safe & Student Friendly', desc: 'Germany consistently ranks among the world\'s safest countries with strong student welfare systems and a vibrant international community.' },
  { icon: '👨‍💻', highlight: 'Work 120 Days/yr', title: 'Work While You Study', desc: 'International students can work up to 120 full days per year to support living expenses during studies.' },
  { icon: '🏥', highlight: 'Affordable Living', title: 'Low Cost of Living', desc: 'Student cities like Leipzig and Dresden offer a high quality of life for just €700–€1,000/month in total expenses.' },
  { icon: '🇪🇺', highlight: 'EU Gateway', title: 'Gateway to Europe', desc: "A degree from Germany opens doors across the European Union's 450 million-person job market and beyond." },
];

export default function WhyGermany() {
  return (
    <section id="why-germany">
      <div className="section-header fade-up">
        <div className="section-eyebrow">Your Future Destination</div>
        <h2 className="section-title">Why <em>Study in Germany?</em></h2>
        <p className="section-subtitle">Germany is the world's most sought-after destination for Indian students — here's why.</p>
      </div>
      <div className="why-grid">
        {reasons.map((r, i) => (
          <div key={i} className={`why-card fade-up d${(i % 4) + 1}`}>
            <span className="why-icon">{r.icon}</span>
            <div className="why-highlight">{r.highlight}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
