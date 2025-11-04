import React, { useRef } from 'react';
import { Code2, Server, Smartphone, Brain, Cloud, Wrench } from 'lucide-react';

const skillGroups = [
  {
    label: 'Languages',
    icon: Code2,
    items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'C/C++', 'SQL'],
  },
  {
    label: 'Backend',
    icon: Server,
    items: ['FastAPI', 'Express.js', 'Django', 'Node.js', 'Spring Boot', 'RESTful APIs', 'Redis', 'WebSockets'],
  },
  {
    label: 'Frontend & Mobile',
    icon: Smartphone,
    items: ['React.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS', 'Figma-to-UI'],
  },
  {
    label: 'AI & LLMs',
    icon: Brain,
    items: ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Vector Databases', 'NLP', 'Prompt Engineering'],
  },
  {
    label: 'DevOps & Cloud',
    icon: Cloud,
    items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Nginx', 'AWS (EC2, S3, Lambda)', 'Firebase'],
  },
  {
    label: 'Automation & Tools',
    icon: Wrench,
    items: ['n8n', 'Zapier', 'MQTT', 'Webhooks', 'CI/CD Pipelines', 'Monitoring', 'Git', 'Agile'],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <section
      id="skills"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-14 text-white backdrop-blur"
      style={{
        backgroundImage:
          'radial-gradient(400px 400px at var(--x) var(--y), rgba(255,255,255,0.20), rgba(255,255,255,0) 60%)',
      }}
    >
      {/* Soft inner light highlight following cursor */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen" />

      <h2 className="text-center text-3xl font-semibold">Skills</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-white/70">
        A curated set of technologies I use to craft performant, beautiful products.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-white/10 bg-black/20 p-5"
          >
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/80">
              {group.icon ? <group.icon size={16} className="text-white/80" /> : null}
              {group.label}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
