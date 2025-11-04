import React from 'react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white">Experience</h2>
        <p className="mt-2 text-white/70">A concise vertical timeline for education and work.</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Education */}
        <div>
          <h3 className="mb-6 text-xl font-medium text-white/90">Education</h3>
          <div className="relative border-l border-white/10 pl-6">
            <TimelineItem
              title="Bachelor of Technology"
              subtitle="Computer Science"
              meta="2019 – 2023"
              details={["Key coursework in algorithms, systems, and UX."]}
            />
            <TimelineItem
              title="Senior Secondary"
              subtitle="Science"
              meta="2017 – 2019"
              details={["Maths, Physics, Chemistry focus."]}
            />
          </div>
        </div>

        {/* Work */}
        <div>
          <h3 className="mb-6 text-xl font-medium text-white/90">Work Experience</h3>
          <div className="relative border-l border-white/10 pl-6">
            <TimelineItem
              title="Frontend Developer"
              subtitle="Freelance"
              meta="2023 – Present"
              details={["Built modern sites with React, motion, and 3D.", "Collaborated with designers to ship performant UI."]}
            />
            <TimelineItem
              title="Intern"
              subtitle="Web Development"
              meta="2022"
              details={["Assisted with component libraries and dashboards."]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, subtitle, meta, details }) {
  return (
    <div className="group relative pb-10 last:pb-0">
      <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border border-white/20 bg-white/10 backdrop-blur" />
      <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 shadow-sm backdrop-blur-xl transition-colors group-hover:bg-white/[0.07]">
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-base font-semibold text-white">{title}</h4>
          <span className="text-xs text-white/60">{meta}</span>
        </div>
        <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        {Array.isArray(details) && details.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-white/75">
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
