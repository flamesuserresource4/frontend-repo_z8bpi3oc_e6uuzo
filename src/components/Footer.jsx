import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-4xl px-6 py-12 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-white">Let’s build something great</h3>
        <p className="mt-2 text-white/70">I’m open to opportunities and collaborations. If you have a project in mind or just want to say hi, drop a message.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="mailto:vishwajeet.7t@gmail.com" className="rounded-full bg-emerald-500/90 hover:bg-emerald-400 text-black px-5 py-2 text-sm font-medium">Email</a>
          <a href="https://github.com/kumarvishwajeettrivedi" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 hover:border-white/40 text-white px-5 py-2 text-sm font-medium">GitHub</a>
          <a href="https://linkedin.com/in/vishwajeet-kumar-5b7530242" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 hover:border-white/40 text-white px-5 py-2 text-sm font-medium">LinkedIn</a>
        </div>
        <p className="mt-10 text-xs text-white/50">© 2025 Vishwajeet Kumar</p>
      </div>
    </footer>
  );
}
