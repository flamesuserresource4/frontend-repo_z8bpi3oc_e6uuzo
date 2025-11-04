import { Mail, Github, Linkedin, Cloud, Server, Code, Database, Cpu, Wrench } from 'lucide-react';
import { useRef } from 'react';

const Pill = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200 shadow-sm transition hover:border-emerald-400/40 hover:bg-white/10 hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.6)]">
    {label}
  </span>
);

const Heading = ({ icon: Icon, children }) => (
  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
    <Icon className="h-4 w-4 text-emerald-300" />
    <span>{children}</span>
  </div>
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
    Backend: ['FastAPI', 'Express.js', 'Django', 'Node.js', 'RESTful APIs', 'Redis', 'WebSockets'],
    'Frontend & Mobile': ['React.js', 'Next.js', 'Flutter', 'React Native', 'Tailwind CSS', 'Figma-to-UI'],
    'AI & LLMs': ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'Vector DBs', 'NLP'],
    'DevOps & Cloud': ['Docker', 'Kubernetes', 'GitLab CI', 'Nginx', 'AWS (EC2, S3, Lambda)', 'Firebase'],
    'Automation & Tools': ['n8n', 'Zapier', 'MQTT', 'Webhooks', 'Monitoring', 'Git', 'Agile'],
  };

  const groupIcon = (group) => {
    switch (group) {
      case 'Languages':
        return Code;
      case 'Backend':
        return Server;
      case 'Frontend & Mobile':
        return Cpu;
      case 'AI & LLMs':
        return Database;
      case 'DevOps & Cloud':
        return Cloud;
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="w-full bg-black text-slate-200">
      <div
        ref={spotlightRef}
        onMouseMove={onMove}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 px-6 py-16"
        style={{
          background:
            'radial-gradient(260px 260px at var(--x, 50%) var(--y, 50%), rgba(34,197,94,0.14), transparent 60%)',
        }}
      >
        <h2 className="text-2xl font-bold text-white">Skills</h2>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Heading icon={groupIcon(group)}>{group}</Heading>
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
              className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[rgba(40,60,40,0.35)] p-4 text-white shadow-[0_10px_40px_-12px_rgba(34,197,94,0.25)] backdrop-blur-md transition hover:bg-[rgba(60,80,60,0.4)]"
              href="mailto:vishwajeet.7t@gmail.com"
            >
              <Mail className="h-5 w-5 text-emerald-400" />
              <span>Email</span>
            </a>
            <a
              className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[rgba(40,60,40,0.35)] p-4 text-white shadow-[0_10px_40px_-12px_rgba(34,197,94,0.25)] backdrop-blur-md transition hover:bg-[rgba(60,80,60,0.4)]"
              href="https://github.com/kumarvishwajeettrivedi"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5 text-emerald-400" />
              <span>GitHub</span>
            </a>
            <a
              className="group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[rgba(40,60,40,0.35)] p-4 text-white shadow-[0_10px_40px_-12px_rgba(34,197,94,0.25)] backdrop-blur-md transition hover:bg-[rgba(60,80,60,0.4)]"
              href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5 text-emerald-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
