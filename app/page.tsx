import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
        <Image
          src="/coral-hero.jpg"
          alt="Coral colony"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-ocean" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-teal text-base font-semibold tracking-[0.2em] uppercase mb-6">
            From aquaria to aquaculture
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Marine life relies{" "}
            <span className="text-teal">on its microbes.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Microbial Marine develops products that modulate microbial processes
            in marine environments — improving water quality, suppressing pathogens,
            and building stable ecosystems across home aquaria, aquaculture, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-teal text-ocean font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors text-base"
            >
              Shop Products
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-teal hover:text-teal transition-colors text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Motivation — text left, coral image right */}
      <section className="py-24 px-6 bg-ocean">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Your tank has a microbiome. It&apos;s the foundation of its health.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-5">
                Nutrient buildup, disease pressure, water quality swings — these are microbiology problems.
                The communities living in your water cycle nutrients, suppress pathogens, and control
                water chemistry whether you manage them or not.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Our products put you in control — introducing and supporting the right microbial
                processes so your system stays stable.
              </p>
            </div>

            <div className="relative h-[480px] rounded-3xl overflow-hidden">
              <Image
                src="/coral-zoanthids.jpg"
                alt="Coral zoanthids"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Approach — coral image left, cards right */}
      <section className="py-24 px-6 bg-ocean-mid">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative h-[480px] rounded-3xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/coral-brain.jpg"
                alt="Brain coral"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ocean-mid/30" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Approach</p>
              <h2 className="text-4xl font-black leading-tight mb-10">
                Science-first.<br />Field-tested.
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Genomics-Informed",
                    body: "Every product comes from real sequencing data. We know which organisms and functions matter in marine systems and build directly from that.",
                  },
                  {
                    title: "Biological Solutions for Biological Problems",
                    body: "Bad water isn't a chemistry problem — it's a biology problem. We address the microbial root causes: nutrient cycling, pathogen pressure, organic breakdown.",
                  },
                  {
                    title: "Made for Real-World Systems",
                    body: "Easy to use, compatible with your existing biology. Developed with hobbyists in mind — you don't need a lab to see results.",
                  },
                ].map((card) => (
                  <div key={card.title} className="flex gap-4">
                    <div className="shrink-0 w-1 rounded-full bg-teal/40 mt-1" />
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{card.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{card.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image src="/coral-tank.jpg" alt="Marine aquarium" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-ocean/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/products" className="text-2xl font-black text-teal hover:text-teal-light transition-colors">
              Browse products &rarr;
            </Link>
            <span className="hidden sm:block text-white/20 text-2xl">·</span>
            <Link href="/contact" className="text-2xl font-black text-white/60 hover:text-white transition-colors">
              Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
