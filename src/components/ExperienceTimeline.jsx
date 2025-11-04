import { Briefcase } from 'lucide-react';

const WorkCard = ({ role, company, date, location, bullets }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-500" />
    <div className="flex flex-wrap items-center justify-between gap-2 pl-2">
      <h3 className="text-lg font-semibold text-white">{role}</h3>
      <p className="text-xs text-slate-400">{date}</p>
    </div>
    <p className="pl-2 text-slate-300">{company}{location ? ` • ${location}` : ''}</p>
    <ul className="mt-3 space-y-1 pl-6 text-sm text-slate-300">
      {bullets.map((b, i) => (
        <li key={i} className="list-disc">{b}</li>
      ))}
    </ul>
  </div>
);

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative w-full bg-black text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-emerald-400" />
          <h2 className="text-2xl font-bold text-white">Experience</h2>
        </div>

        {/* Education */}
        <div className="mb-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">National Institute of Technology Sikkim</h3>
            <p className="mt-1 text-slate-300">Bachelor of Technology – Electrical and Electronics Engineering (CGPA: 7.43)</p>
            <p className="mt-1 text-sm text-slate-400">Dec 2021 – May 2025 • Sikkim, India</p>
            <p className="mt-3 text-sm text-slate-300">Relevant Coursework: Data Structures & Algorithms, Operating Systems, Microprocessors, Python for Data Science</p>
          </div>
        </div>

        {/* Work */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <WorkCard
            role="Software Developer"
            company="Logizee Solutions LLP (Dasho)"
            date="Jul 2025 • Bihar, India"
            bullets={[
              'Built a scalable parcel and transportation backend using TypeScript, PostgreSQL, and Flutter.',
              'Created automation and partner tools with real-time updates.',
              'Integrated Zoho and Razorpay payments, and deployed via CI/CD pipeline.',
            ]}
          />
          <WorkCard
            role="Software Development Engineer"
            company="Eduvanz Financing Pvt. Ltd (Wizr) — Remote"
            date="Feb 2024 – Jul 2025 • Mumbai, India"
            bullets={[
              'Integrated OpenAI and Monster APIs into TypeScript backend with Redis caching and vector search.',
              'Built dynamic Next.js + TypeScript career and course pages.',
              'Developed an AI-powered chatbot using LangChain and FastAPI.',
            ]}
          />
          <WorkCard
            role="Freelance Software Development Engineer"
            company="Grozo (Grocery App)"
            date="Sep 2024 – Jan 2025 • Ravangla, Sikkim, India"
            bullets={[
              'Engineered real-time delivery app using Node.js, Flutter & Redis (6.2K+ orders in 2 months).',
              'Implemented live tracking, route optimization, and dynamic pricing.',
              'Boosted API performance by 30% with Redis caching and load balancing.',
            ]}
          />
          <WorkCard
            role="Junior Embedded & IoT Engineer"
            company="9Pointers Tech Pvt. Ltd"
            date="Jun 2024 – Aug 2024 • Jaipur, Rajasthan, India"
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
