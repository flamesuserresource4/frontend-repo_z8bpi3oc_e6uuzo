import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ContactSection from './components/ContactSection.jsx';

export default function App() {
  useEffect(() => {
    document.title = 'vishwajeet';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 antialiased">
      <Navbar />
      <Hero3D />
      <main className="relative z-0">
        <ExperienceTimeline />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
