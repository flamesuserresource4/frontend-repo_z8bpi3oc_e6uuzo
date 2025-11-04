import { ExternalLink } from 'lucide-react';

const Card = ({ title, description, actions }) => (
  <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-black/60 p-6 transition hover:bg-black/70">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-slate-300">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {actions?.map((a, i) => (
        <a
          key={i}
          href={a.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[rgba(40,60,40,0.35)] px-3 py-2 text-sm text-slate-100 shadow-[0_10px_40px_-12px_rgba(16,185,129,0.25)] backdrop-blur-md transition hover:bg-[rgba(60,80,60,0.4)]"
        >
          <ExternalLink className="h-4 w-4" />
          <span>{a.label}</span>
        </a>
      ))}
    </div>
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
  </div>
);

export default function ProjectsGrid() {
  const linkedinProjects = 'https://www.linkedin.com/in/vishwajeet-kumar-5b7530242/details/projects/';

  const projects = [
    {
      title: 'Dasho (Parcel & Transport Platform)'
      , description: 'Logistics and parcel platform backend with Flutter integration and automation dashboard.',
      actions: [{ label: 'LinkedIn Projects', href: linkedinProjects }],
    },
    {
      title: 'Grozo (Real-time Grocery App)',
      description: 'Real-time grocery delivery platform with live tracking and Firebase-based dynamic pricing.',
      actions: [{ label: 'LinkedIn Projects', href: linkedinProjects }],
    },
    {
      title: 'Crypto Meets UPI',
      description: 'Hybrid Web3 + UPI payment platform integrating Razorpay, MetaMask, and Firebase.',
      actions: [
        { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/Crypto-meets-Upi' },
      ],
    },
    {
      title: 'WanderWise (AI-Powered Travel App)',
      description: 'AI-based trip recommendation system using LangChain and vector databases.',
      actions: [
        { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/wanderWise' },
      ],
    },
    {
      title: 'RCSC 2025 Conference Website',
      description: 'College conference site built using Next.js with responsive event layout and dynamic content.',
      actions: [
        { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/conference' },
        { label: 'Live', href: 'https://rcsc2025nitsk.vercel.app/' },
      ],
    },
    {
      title: 'Face Detection Greeting System',
      description: 'Real-time face recognition and greeting system using OpenCV, TensorFlow, Flask, Raspberry Pi.',
      actions: [
        { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/face-detection-greeting-system' },
      ],
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={i} title={p.title} description={p.description} actions={p.actions} />
          ))}
        </div>
      </div>
    </section>
  );
}
