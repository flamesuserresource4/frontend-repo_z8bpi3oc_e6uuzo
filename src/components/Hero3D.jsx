import { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { User, Keyboard } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';

export default function Hero3D() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const keyboardControls = useAnimationControls();

  // Cursor tilt on headline only
  useEffect(() => {
    const handleMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = x - rect.width / 2;
      const cy = y - rect.height / 2;
      const maxTilt = 10;
      const rotateX = (cy / rect.height) * -maxTilt;
      const rotateY = (cx / rect.width) * maxTilt;

      if (titleRef.current) {
        titleRef.current.style.transform = `translate3d(${cx * 0.02}px, ${cy * 0.02}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    const el = containerRef.current;
    el?.addEventListener('mousemove', handleMove);
    return () => el?.removeEventListener('mousemove', handleMove);
  }, []);

  // Keyboard image animation: bounce/tilt on any key press
  useEffect(() => {
    const onKeyDown = () => {
      keyboardControls.start({
        rotate: [0, -10, 8, -6, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [keyboardControls]);

  return (
    <section id="home" ref={containerRef} className="relative h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay so 3D blends with text; allow pointer to pass through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center gap-6 px-6">
        {/* Glassmorphic name pill */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white backdrop-blur-md shadow-[0_8px_40px_-12px_rgba(16,185,129,0.25)] ring-1 ring-white/10"
        >
          <User className="h-4 w-4 text-emerald-300" />
          <span className="tracking-wide">Vishwajeet Kumar</span>
        </a>

        <div ref={titleRef} className="will-change-transform transition-transform duration-200">
          <h1 className="font-extrabold tracking-tight text-white" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
            <span className="block text-5xl sm:text-6xl md:text-7xl">i am a software developer</span>
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-200/90">
            I create software for the web, apps, and AI tools with a strong focus on modern architecture and design.
          </p>
        </div>

        {/* Keyboard visual that reacts to key presses */}
        <motion.div
          animate={keyboardControls}
          initial={{ rotate: 0, scale: 1 }}
          className="pointer-events-none absolute right-6 top-24 sm:right-10 sm:top-28 md:right-14 md:top-32"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(16,185,129,0.25)]"
          >
            <Keyboard className="h-10 w-10 text-emerald-300 drop-shadow-[0_0_24px_rgba(16,185,129,0.45)]" />
          </motion.div>
          <p className="mt-2 text-xs text-slate-300/80 text-center">press any key</p>
        </motion.div>
      </div>
    </section>
  );
}
