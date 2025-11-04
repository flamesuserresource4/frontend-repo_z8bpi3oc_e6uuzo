import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsAndContact from './components/SkillsAndContact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero3D />
      <ExperienceTimeline />
      <ProjectsGrid />
      <SkillsAndContact />
      <footer className="border-t border-white/10 bg-black py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Vishwajeet Kumar. Built with care.
      </footer>
    </div>
  );
}
