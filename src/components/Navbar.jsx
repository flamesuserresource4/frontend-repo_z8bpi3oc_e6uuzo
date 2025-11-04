import { useEffect, useRef } from 'react';

export default function Navbar() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      el.style.backdropFilter = scrolled ? 'blur(10px)' : 'blur(6px)';
      el.style.background = scrolled
        ? 'linear-gradient(to bottom, rgba(15,15,15,0.75), rgba(15,15,15,0.6))'
        : 'linear-gradient(to bottom, rgba(20,20,20,0.45), rgba(20,20,20,0.35))';
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-4 z-40 flex justify-center">
      <nav
        ref={ref}
        className="pointer-events-auto flex items-center gap-6 rounded-full border border-white/10 px-6 py-2 text-sm text-slate-100 shadow-2xl"
        style={{ backdropFilter: 'blur(6px)', background: 'linear-gradient(to bottom, rgba(20,20,20,0.45), rgba(20,20,20,0.35))' }}
      >
        <a href="#home" className="hover:text-emerald-300 transition">Home</a>
        <a href="#experience" className="hover:text-emerald-300 transition">Experience</a>
        <a href="#projects" className="hover:text-emerald-300 transition">Projects</a>
        <a href="#skills" className="hover:text-emerald-300 transition">Skills</a>
        <a href="#contact" className="hover:text-emerald-300 transition">Contact</a>
      </nav>
    </div>
  );
}
