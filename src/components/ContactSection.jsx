export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Have a project in mind or want to collaborate? Drop a message and let's build something great together.
          </p>
          <form
            className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! I will get back to you soon.');
            }}
          >
            <input
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/50"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/50"
              placeholder="Email address"
              required
            />
            <textarea
              className="md:col-span-2 min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-cyan-400/50"
              placeholder="Your message"
              required
            />
            <div>
              <button
                type="submit"
                className="rounded-full bg-white text-slate-900 px-5 py-2 text-sm font-medium shadow/50 shadow-white/10 hover:shadow-white/20 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
