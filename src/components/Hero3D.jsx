import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Previous floating-aurora animation (restored) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft radial glow */}
        <motion.div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -10, 25, 0],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{
            x: [0, -20, 15, 0],
            y: [0, 15, -10, 0],
            scale: [1, 0.97, 1.04, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Gentle grain gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-300">Vishwajeet Kumar</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            I am a Software developer
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-slate-300">
            Building dark, glassmorphic experiences with 3D, performance, and polish.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#skills"
              className="rounded-full bg-white text-slate-900 px-5 py-2 text-sm font-medium shadow/50 shadow-white/10 hover:shadow-white/20 transition"
            >
              Explore Skills
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
