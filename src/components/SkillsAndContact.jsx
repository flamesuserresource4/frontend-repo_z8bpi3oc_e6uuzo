import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SkillsAndContact() {
  const containerRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  const skillGroups = [
    {
      title: 'Core',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    },
    {
      title: 'Backend & DB',
      items: ['Node', 'FastAPI', 'MongoDB'],
    },
    {
      title: 'Tools',
      items: ['Git', 'Spline', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1218] p-8 shadow-2xl ring-1 ring-white/5"
      >
        {/* spotlight following cursor */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-60"
          style={{
            background: `radial-gradient(400px 300px at ${spotlight.x}px ${spotlight.y}px, rgba(16,185,129,0.20), rgba(0,0,0,0) 60%)`,
          }}
        />

        <div className="relative z-10 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold text-white">Skills</h2>
            <p className="mt-2 text-white/70">A concise overview of tools and technologies.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur"
                >
                  <span className="font-medium text-white">{group.title}:</span>{' '}
                  <span className="text-white/80">{group.items.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-1 text-sm text-white/70">Let’s build something great together.</p>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:vishwajeet@example.com"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/85 hover:bg-white/10"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/85 hover:bg-white/10"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/85 hover:bg-white/10"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
