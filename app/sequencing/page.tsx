import Link from "next/link";
import Image from "next/image";

export default function SequencingPage() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <Image
          src="/coral-purple.jpg"
          alt="Purple brain coral"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ocean/85" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Microbiome Sequencing</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-2xl">
            Learn exactly what<br />
            <span className="text-teal">your ecosystem needs.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
            With the latest sequencing technology, we can identify the microbial blueprint of your
            ecosystem — and tell you what it needs.
          </p>
          <Link
            href="/contact"
            className="bg-teal text-ocean font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors"
          >
            Inquire About Sequencing
          </Link>
        </div>
      </section>

      {/* What we sequence for */}
      <section className="py-20 px-6 bg-ocean-mid">
        <div className="max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">What We Look For</p>
          <h2 className="text-3xl font-black mb-12 max-w-xl">
            Not just who&apos;s there — what they&apos;re doing.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Strain-Level Characterization",
                body: "We go beyond low-resolution guesses — the difference between a beneficial Vibrio and a harmful one doesn't get missed.",
              },
              {
                title: "Functional Genes",
                body: "We characterize what your microbiome is capable of — nitrogen fixation, nitrification, DMSP and sulfur cycling, carbon metabolism, antibiotic resistance, and more.",
              },
              {
                title: "Health Score & Recommendations",
                body: "We don't just hand you raw data. Every report includes an ecosystem health score and actionable recommendations — what to address, what products to use, and how to manage your system going forward.",
              },
              {
                title: "Pathogen Screening",
                body: "Detect known marine pathogens and opportunistic taxa before they become a problem — especially useful after a crash or before introducing new animals.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-ocean border border-white/5 rounded-2xl p-7 hover:border-teal/20 transition-colors">
                <div className="w-8 h-0.5 bg-teal mb-4" />
                <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-ocean">
        <div className="max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">How It Works</p>
          <h2 className="text-3xl font-black mb-12">Simple process. Fast results.</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Send Us a Sample",
                body: "We'll send you a kit for sample collection.",
              },
              {
                step: "02",
                title: "We Sequence",
                body: "Your sample goes through extraction, library prep, and sequencing in our pipeline. Fast turnaround — we don't sit on samples.",
              },
              {
                step: "03",
                title: "You Get Results",
                body: "A clear report: what's in your ecosystem, what the key organisms and functions are, and what it means for your specific setup.",
              },
              {
                step: "04",
                title: "We Provide Solutions",
                body: "Based on your results, we recommend targeted interventions — whether that's one of our products, a protocol adjustment, or a consulting engagement.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-ocean-mid border border-white/5 rounded-2xl p-8 hover:border-teal/20 transition-colors">
                <p className="text-teal/30 text-4xl font-black mb-4">{item.step}</p>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-10 bg-ocean-mid rounded-3xl border border-teal/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-black mb-2">Ready to sequence your ecosystem?</h2>
              <p className="text-white/40 text-sm max-w-md">
                Get in touch and we&apos;ll walk you through sample collection and what to expect from your results.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-teal text-ocean font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
