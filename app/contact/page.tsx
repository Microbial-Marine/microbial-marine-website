import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <Image
          src="/coral-tank.jpg"
          alt="Marine aquarium"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ocean/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Let&apos;s build<br />
            <span className="text-teal">resilient marine life.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Whether you&apos;re a reef hobbyist, an aquaculture operator, or exploring a research partnership —
            we want to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-ocean-mid">
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-teal/50 transition-colors text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-teal/50 transition-colors text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-teal/50 transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                I am a...
              </label>
              <select className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white/70 focus:outline-none focus:border-teal/50 transition-colors text-sm appearance-none">
                <option value="">Select one</option>
                <option value="hobbyist">Aquarium Hobbyist</option>
                <option value="aquaculture">Aquaculture Operator</option>
                <option value="researcher">Researcher / Academic</option>
                <option value="distributor">Retailer / Distributor</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your system, your questions, or how we can help..."
                className="bg-ocean border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-teal/50 transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-teal text-ocean font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors text-sm mt-2"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-10 border-t border-white/5 text-center">
            <p className="text-white/30 text-sm mb-2">Or reach us directly</p>
            <a
              href="mailto:hello@microbialmarine.com"
              className="text-teal hover:text-teal-light transition-colors font-medium"
            >
              hello@microbialmarine.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
