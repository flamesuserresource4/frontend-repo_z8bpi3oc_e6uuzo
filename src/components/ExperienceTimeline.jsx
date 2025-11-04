import { Briefcase, GraduationCap } from 'lucide-react';

const Node = () => (
  <div className="relative z-10 h-3.5 w-3.5 -translate-x-[6px] rounded-full border border-emerald-300/40 bg-emerald-400/30 shadow-[0_0_0_4px_rgba(16,185,129,0.08)]" />
);

const Small = ({ children }) => (
  <p className="text-xs text-slate-400">{children}</p>
);

const TimelineItem = ({ title, subtitle, meta, bullets }) => (
  <div className="relative grid grid-cols-1 gap-4 md:grid-cols-[1fr_10px_3fr]">
    <div className="hidden md:block" />
    <div className="relative">
      <div className="absolute inset-0 mx-auto w-px bg-gradient-to-b from-emerald-500/60 via-emerald-400/30 to-transparent" />
      <div className="relative pl-6">
        <Node />
      </div>
    </div>
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      {subtitle && <p className="text-sm text-slate-300">{subtitle}</p>}
      {meta && <Small>{meta}</Small>}
      {bullets?.length ? (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}
    </div>
  </div>
);

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative w-full bg-black text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Education */}
        <div className="mb-8 flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-emerald-400" />
          <h2 className="text-2xl font-bold text-white">Education</h2>
        </div>

        <div className="space-y-8">
          <TimelineItem
            title="National Institute of Technology Sikkim"
            subtitle="Bachelor of Technology – Electrical and Electronics Engineering (CGPA: 7.43)"
            meta="Dec 2021 – May 2025"
            bullets={[
              'Relevant Coursework: Data Structures & Algorithms, Operating Systems, Microprocessors, Python for Data Science',
            ]}
          />
        </div>

        {/* Work Experience */}
        <div className="mt-14 mb-8 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-emerald-400" />
          <h2 className="text-2xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="space-y-8">
          <TimelineItem
            title="Software Developer — Logizee Solutions LLP (Dasho)"
            subtitle="Bihar, India"
            meta="Jul 2025"
            bullets={[
              'Built a scalable parcel and transportation backend using TypeScript, PostgreSQL, and Flutter.',
              'Created automation and partner tools with real-time updates.',
              'Integrated Zoho and Razorpay payments, and deployed via CI/CD pipeline.',
            ]}
          />

          <TimelineItem
            title="Software Development Engineer — Eduvanz Financing Pvt. Ltd (Wizr) (Remote)"
            subtitle="Mumbai, India"
            meta="Feb 2024 – Jul 2025"
            bullets={[
              'Integrated OpenAI and Monster APIs into TypeScript backend with Redis caching and vector search.',
              'Built dynamic Next.js + TypeScript career and course pages.',
              'Developed an AI-powered chatbot using LangChain and FastAPI.',
            ]}
          />

          <TimelineItem
            title="Freelance Software Development Engineer — Grozo (Grocery App)"
            subtitle="Ravangla, Sikkim, India"
            meta="Sep 2024 – Jan 2025"
            bullets={[
              'Engineered real-time delivery app using Node.js, Flutter & Redis (6.2K+ orders in 2 months).',
              'Implemented live tracking, route optimization, and dynamic pricing.',
              'Boosted API performance by 30% with Redis caching and load balancing.',
            ]}
          />

          <TimelineItem
            title="Junior Embedded & IoT Engineer — 9Pointers Tech Pvt. Ltd"
            subtitle="Jaipur, Rajasthan, India"
            meta="Jun 2024 – Aug 2024"
            bullets={[
              'Built face detection system using OpenCV, TensorFlow on Raspberry Pi.',
              'Automated smart home controls using ESP32 & Google Home APIs.',
              'Synced devices to cloud backend via FastAPI + MQTT.',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
