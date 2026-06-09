export default function AnnouncementBar() {
  const year = new Date().getFullYear();
  return (
    <div className="announce-bar">
      🎓 Free Consultation Available — Limited Slots for {year} Intake!
      <a href="#contact">Book Now →</a>
    </div>
  );
}
