import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur ring-1 ring-white/5">
        <h2 className="text-3xl font-semibold text-white">Let’s build something great</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          I’m open to opportunities and collaborations. If you have a project in mind or just want to say hi, drop a message.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:vishwajeet.7t@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0f1620] px-4 py-2 text-sm text-white/85 hover:bg-[#121c28]"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://github.com/kumarvishwajeettrivedi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0f1620] px-4 py-2 text-sm text-white/85 hover:bg-[#121c28]"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0f1620] px-4 py-2 text-sm text-white/85 hover:bg-[#121c28]"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
