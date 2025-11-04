import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-40 pointer-events-none">
      <div className="mx-auto mt-4 flex justify-center">
        <div
          className={[
            'pointer-events-auto px-6 py-3 rounded-full transition-all duration-300',
            'backdrop-blur-xl border border-white/10 shadow-lg',
            scrolled ? 'bg-white/10' : 'bg-white/5',
            // Slightly increased width per request
            'w-[94vw] max-w-6xl',
          ].join(' ')}
        >
          <nav className="flex items-center justify-center gap-6 text-sm text-white/85">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <span className="opacity-30">•</span>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <span className="opacity-30">•</span>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <span className="opacity-30">•</span>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <span className="opacity-30">•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />
    </div>
  );
}
