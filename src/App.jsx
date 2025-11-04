import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsAndContact from './components/SkillsAndContact';

export default function App() {
  useEffect(() => {
    document.title = 'vishwajeet';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero3D />
      <ExperienceTimeline />
      <ProjectsGrid />
      <SkillsAndContact />

      <footer className="mt-14 border-t border-white/10 bg-black/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <p className="text-sm text-slate-400">© 2025 Vishwajeet Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
