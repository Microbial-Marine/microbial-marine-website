import Link from "next/link";
import Image from "next/image";

export default function ConsultingPage() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <Image
          src="/field-dive.jpg"
          alt="Marine field work"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ocean/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Consulting</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-2xl">
            Expert guidance for<br />
            <span className="text-teal">complex ecosystems.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
            From diagnosing chronic water quality issues to managing disease outbreaks in
            industrial-scale fisheries — we work directly with operators who need more than
            an off-the-shelf product.
          </p>
          <Link
            href="/contact"
            className="bg-teal text-ocean font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocean-mid">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "Aquaculture Operations",
                title: "Microbiome strategy for production systems.",
                body: "We work with shrimp, fish, and coral aquaculture operators to build microbial management programs — reducing chemical inputs, improving survival rates, and stabilizing production.",
              },
              {
                label: "Aquarium Hobbyists & Facilities",
                title: "Solve the problems that won't go away.",
                body: "Chronic nutrient issues, recurring outbreaks, unstable parameters — we diagnose root causes and build a plan, whether it's a home reef or a public aquarium.",
              },
              {
                label: "Research & Academia",
                title: "Microbiome design for experimental systems.",
                body: "Partner with us to design and manage the microbial environment in research aquatic systems — from coral propagation to controlled experiment tanks.",
              },
              {
                label: "Marine Restoration",
                title: "Microbial support for ecosystem recovery.",
                body: "We advise restoration programs on the microbial interventions that can accelerate recovery and resilience in degraded marine environments.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-ocean border border-white/5 rounded-3xl p-8 hover:border-teal/20 transition-colors">
                <p className="text-teal text-xs font-bold tracking-widest uppercase mb-3">{item.label}</p>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/40 text-sm mb-6">Every engagement starts with a conversation about your system.</p>
            <Link
              href="/contact"
              className="bg-teal text-ocean font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
