import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsAndContact from './components/SkillsAndContact';

export default function App() {
  useEffect(() => {
    document.title = 'vishwajeet';
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <Navbar />
      <Hero3D />
      <ExperienceTimeline />
      <SkillsAndContact />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-white/60">
        © 2025 Vishwajeet Kumar
      </footer>
    </div>
  );
}
