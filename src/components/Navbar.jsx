import { Menu, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 ring-1 ring-white/20" />
          <span className="font-semibold tracking-tight">Vishwajeet Kumar</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/5 transition" title="GitHub">
            <Github size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/5 transition" title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <button className="md:hidden p-2 rounded-md hover:bg-white/5 transition" aria-label="Menu">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
