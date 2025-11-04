import React from 'react';

function TimelineItem({ title, org, time, location, points = [] }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="text-base font-semibold text-white">{title}</h4>
          <span className="text-xs text-white/60">{time}</span>
        </div>
        <div className="mt-1 text-sm text-white/70">{org} • {location}</div>
        {points.length > 0 && (
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function SectionHeader({ children }) {
  return (
    <div className="sticky top-20 z-10 -ml-1 mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
      <div className="h-2 w-2 rounded-full bg-emerald-400" />
      <span>{children}</span>
    </div>
  );
}

function ProjectCard({ title, desc, links = [] }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
      <h5 className="font-semibold text-white">{title}</h5>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      {links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20 text-white">
      {/* Two-column layout without a big heading */}
      <div className="grid gap-10 md:grid-cols-2">
        {/* Work Experience */}
        <div>
          <SectionHeader>Work Experience</SectionHeader>
          <div className="relative border-l border-white/10 pl-4">
            <TimelineItem
              title="Software Developer — Logizee Solutions LLP (Dasho)"
              org="Logizee Solutions LLP (Dasho)"
              time="Jul 2025"
              location="Bihar, India"
              points={[
                'Built a scalable parcel and transportation backend using TypeScript, PostgreSQL, and Flutter.',
                'Created automation and partner tools with real-time updates.',
                'Integrated Zoho and Razorpay payments, and deployed via CI/CD pipeline.',
              ]}
            />
            <div className="my-4 h-6 w-px bg-transparent" />
            <TimelineItem
              title="Software Development Engineer — Eduvanz Financing Pvt. Ltd (Wizr) (Remote)"
              org="Eduvanz Financing Pvt. Ltd (Wizr)"
              time="Feb 2024 – Jul 2025"
              location="Mumbai, India"
              points={[
                'Integrated OpenAI and Monster APIs into TypeScript backend with Redis caching and vector search.',
                'Built dynamic Next.js + TypeScript career and course pages.',
                'Developed an AI-powered chatbot using LangChain and FastAPI.',
              ]}
            />
            <div className="my-4 h-6 w-px bg-transparent" />
            <TimelineItem
              title="Freelance Software Development Engineer — Grozo (Grocery App)"
              org="Grozo"
              time="Sep 2024 – Jan 2025"
              location="Ravangla, Sikkim, India"
              points={[
                'Engineered real-time delivery app using Node.js, Flutter & Redis (6.2K+ orders in 2 months).',
                'Implemented live tracking, route optimization, and dynamic pricing.',
                'Boosted API performance by 30% with Redis caching and load balancing.',
              ]}
            />
            <div className="my-4 h-6 w-px bg-transparent" />
            <TimelineItem
              title="Junior Embedded & IoT Engineer — 9Pointers Tech Pvt. Ltd"
              org="9Pointers Tech Pvt. Ltd"
              time="Jun 2024 – Aug 2024"
              location="Jaipur, Rajasthan, India"
              points={[
                'Built face detection system using OpenCV, TensorFlow on Raspberry Pi.',
                'Automated smart home controls using ESP32 & Google Home APIs.',
                'Synced devices to cloud backend via FastAPI + MQTT.',
              ]}
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <SectionHeader>Education</SectionHeader>
          <div className="relative border-l border-white/10 pl-4">
            <TimelineItem
              title="Bachelor of Technology – Electrical and Electronics Engineering (CGPA: 7.43)"
              org="National Institute of Technology Sikkim"
              time="Dec 2021 – May 2025"
              location="Sikkim, India"
              points={['Relevant Coursework: Data Structures & Algorithms, Operating Systems, Microprocessors, Python for Data Science']}
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="mt-16">
        <h3 className="mb-6 text-center text-2xl font-semibold">Projects</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Dasho (Parcel & Transport Platform)"
            desc="Logistics and parcel platform backend with Flutter integration and automation dashboard."
            links={[{ label: 'Link', href: 'https://play.google.com/store/apps/details?id=com.logizee.connect_it.dasho' }]}
          />
          <ProjectCard
            title="Grozo (Real-time Grocery App)"
            desc="Real-time grocery delivery platform with live tracking and Firebase-based dynamic pricing."
            links={[{ label: 'Link', href: 'https://www.linkedin.com/in/vishwajeet-kumar-5b7530242/details/projects/' }]}
          />
          <ProjectCard
            title="Crypto Meets UPI"
            desc="Hybrid Web3 + UPI payment platform integrating Razorpay, MetaMask, and Firebase."
            links={[{ label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/Crypto-meets-Upi' }]}
          />
          <ProjectCard
            title="WanderWise (AI-Powered Travel App)"
            desc="AI-based trip recommendation system using LangChain and vector databases."
            links={[{ label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/wanderWise' }]}
          />
          <ProjectCard
            title="RCSC 2025 Conference Website"
            desc="College conference site built using Next.js with responsive event layout and dynamic content."
            links={[
              { label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/conference' },
              { label: 'Live', href: 'https://rcsc2025nitsk.vercel.app/' },
            ]}
          />
          <ProjectCard
            title="Face Detection Greeting System"
            desc="Real-time face recognition and greeting system using OpenCV, TensorFlow, Flask, Raspberry Pi."
            links={[{ label: 'GitHub', href: 'https://github.com/kumarvishwajeettrivedi/face-detection-greeting-system' }]}
          />
        </div>
      </div>
    </section>
  );
}
