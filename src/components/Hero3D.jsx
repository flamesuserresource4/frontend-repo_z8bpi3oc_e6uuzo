import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vignette overlay (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)]" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center gap-5 px-6">
        {/* Glassmorphic capsule name */}
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-[0_10px_40px_-12px_rgba(16,185,129,0.25)] backdrop-blur-md">
          Vishwajeet Kumar
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">I am a software developer</h1>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-300">
            I create software for the web, apps, and AI tools with a strong focus on modern architecture and design.
          </p>
        </div>
        {/* Intentionally removed any hero buttons (e.g., Get in touch) as requested */}
      </div>
    </section>
  );
}
