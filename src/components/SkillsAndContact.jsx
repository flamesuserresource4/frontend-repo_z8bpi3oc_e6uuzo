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
    { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'C/C++', 'SQL'] },
    { title: 'Backend', items: ['FastAPI', 'Express.js', 'Django', 'Node.js', 'Spring Boot', 'RESTful APIs', 'Redis', 'WebSockets'] },
    { title: 'Frontend & Mobile', items: ['React.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS', 'Figma-to-UI'] },
    { title: 'AI & LLMs', items: ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Vector Databases', 'NLP', 'Prompt Engineering'] },
    { title: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Nginx', 'AWS (EC2, S3, Lambda)', 'Firebase'] },
    { title: 'Automation & Tools', items: ['n8n', 'Zapier', 'MQTT', 'Webhooks', 'CI/CD Pipelines', 'Monitoring', 'Git', 'Agile'] },
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

        <div className="relative z-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-white">Skills</h2>
            <p className="mt-2 text-white/70">Compact, elegant badges with a subtle glow on hover.</p>

            {/* Pills grid */}
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="mb-2 text-sm font-semibold text-white/90">{group.title}</div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-[#0f1620] px-3 py-1 text-xs text-white/85 shadow-sm transition hover:bg-[#121c28]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-1 text-sm text-white/70">Clean and minimal with quick links.</p>
            <div className="mt-4 grid gap-3">
              <a
                href="mailto:vishwajeet.7t@gmail.com"
                className="flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-[#0f1620] px-3 py-3 text-sm text-white/85 hover:bg-[#121c28]"
              >
                <span className="flex items-center gap-2"><Mail size={16} /> Email</span>
                <span className="text-white/60">vishwajeet.7t@gmail.com</span>
              </a>
              <a
                href="https://github.com/kumarvishwajeettrivedi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-[#0f1620] px-3 py-3 text-sm text-white/85 hover:bg-[#121c28]"
              >
                <span className="flex items-center gap-2"><Github size={16} /> GitHub</span>
                <span className="text-white/60">@kumarvishwajeettrivedi</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-[#0f1620] px-3 py-3 text-sm text-white/85 hover:bg-[#121c28]"
              >
                <span className="flex items-center gap-2"><Linkedin size={16} /> LinkedIn</span>
                <span className="text-white/60">/in/vishwajeet-kumar-5b7530242</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
