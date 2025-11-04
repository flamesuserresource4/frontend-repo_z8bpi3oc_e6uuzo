import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A modern, glassmorphic portfolio with 3D and motion.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Live', href: 'https://example.com' },
    ],
  },
  {
    title: 'UI Components',
    desc: 'Reusable components with Tailwind and motion.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/' },
    ],
  },
  {
    title: 'Interactive Canvas',
    desc: 'Canvas experiments, shaders, and particles.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Live', href: 'https://example.com' },
    ],
  },
  {
    title: 'Motion Design',
    desc: 'Framer Motion layouts and transitions.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/' },
    ],
  },
  {
    title: 'AI Tools',
    desc: 'Small assistants and tools powered by AI.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/' },
    ],
  },
  {
    title: 'Dashboards',
    desc: 'Clean admin dashboards with charts.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Live', href: 'https://example.com' },
    ],
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white">Projects</h2>
        <p className="mt-2 text-white/70">Six minimal dark cards with quick actions.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="group rounded-2xl border border-white/10 bg-[#0d1218] p-5 shadow-xl ring-1 ring-white/5 transition-colors hover:bg-[#101721]">
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/85 backdrop-blur hover:bg-white/10"
                >
                  {a.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
