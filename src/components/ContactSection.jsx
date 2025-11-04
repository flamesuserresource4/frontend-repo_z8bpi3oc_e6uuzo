import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold">Let’s build something great</h2>
          <p className="mt-2 text-white/70">
            I’m open to opportunities and collaborations. If you have a project in mind or just want to say hi, drop a message.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:vishwajeet.7t@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://github.com/kumarvishwajeettrivedi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
