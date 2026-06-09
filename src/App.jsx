import { useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Services from './components/Services';
import Process from './components/Process';
import WhyGermany from './components/WhyGermany';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <AnnouncementBar />
        <Navbar />
      </header>
      <Hero />
      <StatsStrip />
      <Services />
      <Process />
      <WhyGermany />
      <Programs />
      <WhyChooseUs />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
      <a href="https://wa.me/918140881823" className="wa-float" target="_blank" rel="noopener" title="Chat on WhatsApp">💬</a>
    </>
  );
}
