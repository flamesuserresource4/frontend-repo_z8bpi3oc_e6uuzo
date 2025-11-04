import React, { useEffect } from 'react';
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
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main id="home">
        <Hero3D />
        <ExperienceTimeline />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-white/60">
        © 2025 Vishwajeet Kumar
      </footer>
    </div>
  );
}
