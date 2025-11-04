import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0f14] via-[#0b0f14] to-[#0b0f14]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vignette and gradient overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(16,185,129,0.20),rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        {/* Name capsule */}
        <div className="mb-4 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-xl shadow-lg">
          Vishwajeet Kumar
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          I am a Software developer
        </h1>

        <p className="mt-4 max-w-3xl text-base sm:text-lg text-white/80">
          I create software for the web, apps, and AI tools with a strong focus on modern architecture and design.
        </p>
      </div>
    </section>
  );
}
