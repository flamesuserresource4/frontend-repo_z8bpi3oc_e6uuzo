import React from 'react';

function TimelineItem({ title, subtitle, date, location, bullets }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="text-white/70 text-sm mt-0.5">{subtitle}</p>
      <p className="text-white/50 text-xs mt-0.5">{date} | {location}</p>
      <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc pl-4">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectsGrid() {
  const projects = [
    {
      title: 'Dasho (Parcel & Transport Platform)',
      desc: 'Logistics and parcel platform backend with Flutter integration and automation dashboard.',
      links: [{ label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.logizee.connect_it.dasho' }],
    },
    {
      title: 'Grozo (Real-time Grocery App)',
      desc: 'Real-time grocery delivery platform with live tracking and Firebase-based dynamic pricing.',
      links: [{ label: 'LinkedIn Projects', href: 'https://www.linkedin.com/in/vishwajeet-kumar-5b7530242/details/projects/' }],
    },
    {
      title: 'Crypto Meets UPI',
      desc: 'Hybrid Web3 + UPI payment platform integrating Razorpay, MetaMask, and Firebase.',
      links: [{ label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/Crypto-meets-Upi' }],
    },
    {
      title: 'WanderWise (AI-Powered Travel App)',
      desc: 'AI-based trip recommendation system using LangChain and vector databases.',
      links: [{ label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/wanderWise' }],
    },
    {
      title: 'RCSC 2025 Conference Website',
      desc: 'College conference site built using Next.js with responsive event layout and dynamic content.',
      links: [
        { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/conference' },
        { label: 'Live', href: 'https://rcsc2025nitsk.vercel.app/' },
      ],
    },
    {
      title: 'Face Detection Greeting System',
      desc: 'Real-time face recognition and greeting system using OpenCV, TensorFlow, Flask, Raspberry Pi.',
      links: [{ label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/face-detection-greeting-system' }],
    },
  ];

  return (
    <div id="projects" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.title} className="group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 shadow-lg hover:bg-white/7 transition">
          <div className="flex items-start justify-between gap-4">
            <h4 className="text-base font-semibold tracking-tight">{p.title}</h4>
          </div>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/20 transition">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PortfolioSections() {
  return (
    <section className="relative z-10 container mx-auto px-6 pt-16 pb-20">
      <div id="experience" className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="relative before:content-[''] before:absolute before:left-1.5 before:top-1 before:bottom-0 before:w-px before:bg-white/15">
            <TimelineItem
              title="Software Developer — Logizee Solutions LLP (Dasho)"
              subtitle=""
              date="Jul 2025"
              location="Bihar, India"
              bullets={[
                'Built a scalable parcel and transportation backend using TypeScript, PostgreSQL, and Flutter.',
                'Created automation and partner tools with real-time updates.',
                'Integrated Zoho and Razorpay payments, and deployed via CI/CD pipeline.',
              ]}
            />
            <TimelineItem
              title="Software Development Engineer — Eduvanz Financing Pvt. Ltd (Wizr) (Remote)"
              subtitle=""
              date="Feb 2024 – Jul 2025"
              location="Mumbai, India"
              bullets={[
                'Integrated OpenAI and Monster APIs into TypeScript backend with Redis caching and vector search.',
                'Built dynamic Next.js + TypeScript career and course pages.',
                'Developed an AI-powered chatbot using LangChain and FastAPI.',
              ]}
            />
            <TimelineItem
              title="Freelance Software Development Engineer — Grozo (Grocery App)"
              subtitle=""
              date="Sep 2024 – Jan 2025"
              location="Ravangla, Sikkim, India"
              bullets={[
                'Engineered real-time delivery app using Node.js, Flutter & Redis (6.2K+ orders in 2 months).',
                'Implemented live tracking, route optimization, and dynamic pricing.',
                'Boosted API performance by 30% with Redis caching and load balancing.',
              ]}
            />
            <TimelineItem
              title="Junior Embedded & IoT Engineer — 9Pointers Tech Pvt. Ltd"
              subtitle=""
              date="Jun 2024 – Aug 2024"
              location="Jaipur, Rajasthan, India"
              bullets={[
                'Built face detection system using OpenCV, TensorFlow on Raspberry Pi.',
                'Automated smart home controls using ESP32 & Google Home APIs.',
                'Synced devices to cloud backend via FastAPI + MQTT.',
              ]}
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}
