const stats = [
  { label: 'First Consultation', value: 'Free, Same Day' },
  { label: 'Our Approach', value: 'One Counsellor, Start to Finish' },
  { label: 'Visa Success Rate', value: '98%' },
  { label: 'Students Placed', value: '200+' },
];

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-row">
        {stats.map((s, i) => (
          <div key={i} className="stats-item">
            <div className="s-label-top">{s.label}</div>
            <div className="s-num">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
