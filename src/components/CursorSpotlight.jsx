import React, { useEffect } from 'react';

export default function CursorSpotlight() {
  useEffect(() => {
    const root = document.documentElement;
    const handler = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5]"
      style={{
        background: 'radial-gradient(500px circle at var(--mx,50%) var(--my,50%), rgba(99,102,241,0.25), transparent 60%)',
        mixBlendMode: 'screen',
      }}
    />
  );
}
