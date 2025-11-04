import React from 'react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white">Experience</h2>
        <p className="mt-2 text-white/70">Work experience followed by education, presented in a clean glassmorphic layout.</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Work Experience */}
        <div>
          <h3 className="mb-6 text-xl font-medium text-white/90">Work Experience</h3>
          <div className="relative border-l border-white/10 pl-6">
            <TimelineItem
              title="Software Developer — Logizee Solutions LLP (Dasho)"
              meta="Jul 2025 | Bihar, India"
              details={[
                'Built a scalable parcel and transportation backend using TypeScript, PostgreSQL, and Flutter.',
                'Created automation and partner tools with real-time updates.',
                'Integrated Zoho and Razorpay payments, and deployed via CI/CD pipeline.',
              ]}
            />
            <TimelineItem
              title="Software Development Engineer — Eduvanz Financing Pvt. Ltd (Wizr) (Remote)"
              meta="Feb 2024 – Jul 2025 | Mumbai, India"
              details={[
                'Integrated OpenAI and Monster APIs into TypeScript backend with Redis caching and vector search.',
                'Built dynamic Next.js + TypeScript career and course pages.',
                'Developed an AI-powered chatbot using LangChain and FastAPI.',
              ]}
            />
            <TimelineItem
              title="Freelance Software Development Engineer — Grozo (Grocery App)"
              meta="Sep 2024 – Jan 2025 | Ravangla, Sikkim, India"
              details={[
                'Engineered real-time delivery app using Node.js, Flutter & Redis (6.2K+ orders in 2 months).',
                'Implemented live tracking, route optimization, and dynamic pricing.',
                'Boosted API performance by 30% with Redis caching and load balancing.',
              ]}
            />
            <TimelineItem
              title="Junior Embedded & IoT Engineer — 9Pointers Tech Pvt. Ltd"
              meta="Jun 2024 – Aug 2024 | Jaipur, Rajasthan, India"
              details={[
                'Built face detection system using OpenCV, TensorFlow on Raspberry Pi.',
                'Automated smart home controls using ESP32 & Google Home APIs.',
                'Synced devices to cloud backend via FastAPI + MQTT.',
              ]}
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="mb-6 text-xl font-medium text-white/90">Education</h3>
          <div className="relative border-l border-white/10 pl-6">
            <TimelineItem
              title="National Institute of Technology Sikkim"
              meta="Dec 2021 – May 2025"
              details={[
                'Bachelor of Technology – Electrical and Electronics Engineering (CGPA: 7.43).',
                'Relevant Coursework: Data Structures & Algorithms, Operating Systems, Microprocessors, Python for Data Science.',
              ]}
            />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="mt-16">
        <h3 className="mb-6 text-2xl font-semibold text-white text-center">Projects</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-[#0d1218] p-5 shadow-xl ring-1 ring-white/5 transition-colors hover:bg-[#101721]">
              <h4 className="text-lg font-semibold text-white">{p.title}</h4>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.actions.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/85 backdrop-blur hover:bg-white/10"
                  >
                    {a.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, meta, details }) {
  return (
    <div className="group relative pb-10 last:pb-0">
      <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border border-white/20 bg-white/10 backdrop-blur" />
      <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 shadow-sm backdrop-blur-xl transition-colors group-hover:bg-white/[0.07]">
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-base font-semibold text-white">{title}</h4>
          <span className="text-xs text-white/60">{meta}</span>
        </div>
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

const projects = [
  {
    title: 'Dasho (Parcel & Transport Platform)',
    desc: 'Logistics and parcel platform backend with Flutter integration and automation dashboard.',
    actions: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.logizee.connect_it.dasho' },
    ],
  },
  {
    title: 'Grozo (Real-time Grocery App)',
    desc: 'Real-time grocery delivery platform with live tracking and Firebase-based dynamic pricing.',
    actions: [
      { label: 'Details', href: 'https://www.linkedin.com/in/vishwajeet-kumar-5b7530242/details/projects/' },
    ],
  },
  {
    title: 'Crypto Meets UPI',
    desc: 'Hybrid Web3 + UPI payment platform integrating Razorpay, MetaMask, and Firebase.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/Crypto-meets-Upi' },
    ],
  },
  {
    title: 'WanderWise (AI-Powered Travel App)',
    desc: 'AI-based trip recommendation system using LangChain and vector databases.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/wanderWise' },
    ],
  },
  {
    title: 'RCSC 2025 Conference Website',
    desc: 'College conference site built using Next.js with responsive event layout and dynamic content.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/conference' },
      { label: 'Live', href: 'https://rcsc2025nitsk.vercel.app/' },
    ],
  },
  {
    title: 'Face Detection Greeting System',
    desc: 'Real-time face recognition and greeting system using OpenCV, TensorFlow, Flask, Raspberry Pi.',
    actions: [
      { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/face-detection-greeting-system' },
    ],
  },
];
