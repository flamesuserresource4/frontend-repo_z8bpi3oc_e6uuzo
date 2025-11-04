import { Code2, Server, Smartphone, Brain, Cloud, Wrench } from 'lucide-react';
import { useState } from 'react';

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL', 'REST', 'GraphQL'],
  },
  {
    title: 'Frontend & Mobile',
    icon: Smartphone,
    items: ['React', 'Vite', 'Next.js', 'Tailwind CSS', 'React Native', 'Framer Motion'],
  },
  {
    title: 'AI & LLMs',
    icon: Brain,
    items: ['LangChain', 'OpenAI', 'Vector DBs', 'RAG', 'Whisper', 'Fine‑tuning'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    items: ['Docker', 'GitHub Actions', 'Vercel', 'Netlify', 'AWS', 'Nginx'],
  },
  {
    title: 'Automation & Tools',
    icon: Wrench,
    items: ['Zapier', 'Make (Integromat)', 'Postman', 'Figma', 'Jest', 'Vitest'],
  },
];

export default function SkillsSection() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section id="skills" className="relative py-20">
      {/* radial spotlight that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0"
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      >
        <div
          className="absolute h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
          style={{ transform: `translate(${pos.x - 128}px, ${pos.y - 128}px)` }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                <Icon size={16} />
                <span className="text-sm font-medium">{title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-gradient-to-b from-white/10 to-white/5 px-3 py-1 text-xs text-slate-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
