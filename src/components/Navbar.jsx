import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center p-4">
      <nav
        className={`pointer-events-auto w-[94vw] max-w-6xl rounded-full border backdrop-blur transition-colors ${
          scrolled ? 'border-white/15 bg-white/10' : 'border-white/10 bg-white/5'
        }`}
      >
        <ul className="flex items-center justify-center gap-6 px-6 py-3 text-sm font-medium text-white/80">
          <li><a href="#home" className="hover:text-white">Home</a></li>
          <li><a href="#experience" className="hover:text-white">Experience</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
