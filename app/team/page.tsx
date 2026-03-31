import Image from "next/image";

const team = [
  { name: "Salem Clemens", title: "Chief Executive Officer", image: "/team-salem.png" },
  { name: "Braden Tierney, Ph.D.", title: "Chief Operating Officer", image: "/team-braden.jpg" },
  { name: "Krista Ryon", title: "Chief Science Officer", image: "/team-krista.png" },
  { name: "James Henriksen", title: "Director, R&D", image: "/team-james.jpg" },
  { name: "April Johns", title: "Director, Culturomics", image: "/team-april.jpg" },
  { name: "Colin Foord", title: "Director, Coral Husbandry", image: "/team-colin.png" },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <Image
          src="/coral-blue.jpg"
          alt="Electric blue brain coral"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ocean/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">The Team</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-3xl">
            World-class microbiome science <span className="text-teal">for marine ecosystems.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Our team unites microbiome science, genomics, data science, and hands-on marine biology
            to build products and tools that work at the biology level.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6 bg-ocean-mid">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-ocean border border-white/5 rounded-3xl p-8 hover:border-teal/20 transition-colors flex flex-col"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden bg-ocean-light border border-white/5 mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h2 className="text-xl font-black text-white mb-0.5">{member.name}</h2>
                <p className="text-teal text-sm font-medium">{member.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 bg-ocean">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Capabilities</p>
          <h2 className="text-4xl font-black mb-12">What we bring to the table.</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Microbial Biotech Commercialization",
              "Best-in-Class Genomics",
              "Microbiome Data Analysis",
              "Marine Ecosystem Science",
            ].map((cap) => (
              <div key={cap} className="bg-ocean-mid border border-white/5 rounded-2xl px-6 py-8">
                <div className="w-6 h-0.5 bg-teal mx-auto mb-4" />
                <p className="text-white font-semibold text-sm leading-snug">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
