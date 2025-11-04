import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Code2, Server, Smartphone, Brain, Cloud, Wrench } from 'lucide-react';

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
    { title: 'Languages', icon: Code2, items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'C/C++', 'SQL'] },
    { title: 'Backend', icon: Server, items: ['FastAPI', 'Express.js', 'Django', 'Node.js', 'Spring Boot', 'RESTful APIs', 'Redis', 'WebSockets'] },
    { title: 'Frontend & Mobile', icon: Smartphone, items: ['React.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS', 'Figma-to-UI'] },
    { title: 'AI & LLMs', icon: Brain, items: ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Vector Databases', 'NLP', 'Prompt Engineering'] },
    { title: 'DevOps & Cloud', icon: Cloud, items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Nginx', 'AWS (EC2, S3, Lambda)', 'Firebase'] },
    { title: 'Automation & Tools', icon: Wrench, items: ['n8n', 'Zapier', 'MQTT', 'Webhooks', 'CI/CD Pipelines', 'Monitoring', 'Git', 'Agile'] },
  ];

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl ring-1 ring-white/5"
      >
        {/* spotlight following cursor */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-60"
          style={{
            background: `radial-gradient(400px 300px at ${spotlight.x}px ${spotlight.y}px, rgba(16,185,129,0.18), rgba(0,0,0,0) 60%)`,
          }}
        />

        <div className="relative z-10">
          <h2 className="text-3xl font-semibold text-white">Skills</h2>

          {/* Pills grid with icons on headings */}
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/90">
                  {group.icon ? <group.icon size={16} className="text-white/80" /> : null}
                  <span>{group.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[#0b0b0b] px-3 py-1 text-xs text-white/85 shadow-sm transition hover:bg-[#0e0e0e]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact panel */}
          <div id="contact" className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">Contact</h3>
            <div className="mt-5 grid grid-cols-1 place-items-center gap-3 sm:grid-cols-3">
              <a
                href="mailto:vishwajeet.7t@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0b0b0b] px-4 py-2 text-sm text-white/85 hover:bg-[#0e0e0e]"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://github.com/kumarvishwajeettrivedi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0b0b0b] px-4 py-2 text-sm text-white/85 hover:bg-[#0e0e0e]"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0b0b0b] px-4 py-2 text-sm text-white/85 hover:bg-[#0e0e0e]"
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
