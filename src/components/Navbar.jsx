import { useEffect, useRef } from 'react';

export default function Navbar() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      el.style.backdropFilter = scrolled ? 'blur(12px)' : 'blur(8px)';
      el.style.background = scrolled
        ? 'linear-gradient(to bottom, rgba(18,22,18,0.75), rgba(18,22,18,0.6))'
        : 'linear-gradient(to bottom, rgba(22,28,22,0.45), rgba(22,28,22,0.35))';
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-4 z-40 flex w-full justify-center">
      <nav
        ref={ref}
        className="pointer-events-auto mx-auto flex w-[92%] max-w-6xl items-center justify-center gap-6 rounded-full border border-white/10 px-6 py-2 text-sm text-slate-100 shadow-2xl"
        style={{ backdropFilter: 'blur(8px)', background: 'linear-gradient(to bottom, rgba(22,28,22,0.45), rgba(22,28,22,0.35))' }}
      >
        <a href="#home" className="transition hover:text-emerald-300">Home</a>
        <a href="#experience" className="transition hover:text-emerald-300">Experience</a>
        <a href="#projects" className="transition hover:text-emerald-300">Projects</a>
        <a href="#skills" className="transition hover:text-emerald-300">Skills</a>
        <a href="#contact" className="transition hover:text-emerald-300">Contact</a>
      </nav>
    </div>
  );
}
