import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>

      {/* Content - aligned left */}
      <div className="relative z-10 mx-auto flex h-[92vh] max-w-6xl flex-col items-start justify-center px-6 text-left">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm/none text-white/80">Vishwajeet Kumar</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          I am a Software developer
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-white/85 text-lg sm:text-xl md:text-2xl font-semibold">
          I create software for the web, apps, and AI tools with a strong focus on modern architecture and design.
        </p>
      </div>
    </section>
  );
}
