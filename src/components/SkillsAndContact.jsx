import { Mail, Github, Linkedin } from 'lucide-react';
import { useRef } from 'react';

const Pill = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200 shadow-sm transition hover:border-emerald-400/40 hover:bg-white/10 hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.6)]">
    {label}
  </span>
);

export default function SkillsAndContact() {
  const spotlightRef = useRef(null);

  const onMove = (e) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  const skills = {
    Languages: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'C/C++', 'SQL'],
    Backend: ['FastAPI', 'Express.js', 'Django', 'Node.js', 'Spring Boot', 'RESTful APIs', 'Redis', 'WebSockets'],
    'Frontend & Mobile': ['React.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS', 'Figma-to-UI'],
    'AI & LLMs': ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Vector Databases', 'NLP', 'Prompt Engineering'],
    'DevOps & Cloud': ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Nginx', 'AWS (EC2, S3, Lambda)', 'Firebase'],
    'Automation & Tools': ['n8n', 'Zapier', 'MQTT', 'Webhooks', 'CI/CD Pipelines', 'Monitoring', 'Git', 'Agile'],
  };

  return (
    <section id="skills" className="w-full bg-black text-slate-200">
      <div
        ref={spotlightRef}
        onMouseMove={onMove}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 px-6 py-16"
        style={{
          background:
            'radial-gradient(240px 240px at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.15), transparent 60%)',
        }}
      >
        <h2 className="text-2xl font-bold text-white">Skills</h2>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <Pill key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold text-white">Let’s build something great</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            I’m open to opportunities and collaborations. If you have a project in mind or just want to say hi, drop a message.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a
              className="group flex items-center justify-center gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-white/10 transition hover:bg-slate-800"
              href="mailto:vishwajeet.7t@gmail.com"
            >
              <Mail className="h-5 w-5 text-emerald-400" />
              <span className="text-slate-100">Email</span>
            </a>
            <a
              className="group flex items-center justify-center gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-white/10 transition hover:bg-slate-800"
              href="https://github.com/kumarvishwajeettrivedi"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5 text-emerald-400" />
              <span className="text-slate-100">GitHub</span>
            </a>
            <a
              className="group flex items-center justify-center gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-white/10 transition hover:bg-slate-800"
              href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5 text-emerald-400" />
              <span className="text-slate-100">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
