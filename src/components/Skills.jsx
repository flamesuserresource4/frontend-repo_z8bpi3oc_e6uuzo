import React, { useEffect, useRef } from 'react';

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 hover:border-white/30 transition-colors shadow-sm">
    {children}
  </span>
);

export default function Skills() {
  const spotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const el = spotRef.current;
      if (!el) return;
      const x = e.clientX;
      const y = e.clientY + window.scrollY;
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const groups = [
    {
      title: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'C/C++', 'SQL'],
    },
    {
      title: 'Backend',
      items: ['FastAPI', 'Express.js', 'Django', 'Node.js', 'Spring Boot', 'RESTful APIs', 'Redis', 'WebSockets'],
    },
    {
      title: 'Frontend & Mobile',
      items: ['React.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS', 'Figma-to-UI'],
    },
    {
      title: 'AI & LLMs',
      items: ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Vector Databases', 'NLP', 'Prompt Engineering'],
    },
    {
      title: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Nginx', 'AWS (EC2, S3, Lambda)', 'Firebase'],
    },
    {
      title: 'Automation & Tools',
      items: ['n8n', 'Zapier', 'MQTT', 'Webhooks', 'CI/CD Pipelines', 'Monitoring', 'Git', 'Agile'],
    },
  ];

  return (
    <section id="skills" className="relative py-20">
      <div
        ref={spotRef}
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(600px 600px at var(--x,50%) var(--y,30%), rgba(16,185,129,0.12), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <h3 className="text-white font-semibold mb-3">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
