export default function ExperienceTimeline() {
  const items = [
    {
      title: 'Software Developer',
      company: 'Acme Corp',
      period: '2023 — Present',
      points: [
        'Lead development of performant, accessible UI components.',
        'Integrated 3D experiences with Spline and WebGL.',
        'Drove design system adoption across teams.',
      ],
    },
    {
      title: 'Full‑Stack Engineer',
      company: 'Startup Labs',
      period: '2021 — 2023',
      points: [
        'Built end‑to‑end features across frontend and backend.',
        'Optimized build pipelines and CI/CD workflows.',
        'Collaborated closely with designers and PMs.',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Experience
        </h2>
        <div className="mt-10 space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-lg font-medium">{item.title}</div>
                <div className="text-sm text-slate-400">{item.period}</div>
              </div>
              <div className="mt-1 text-slate-300">{item.company}</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
