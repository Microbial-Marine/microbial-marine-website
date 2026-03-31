import Link from "next/link";
import Image from "next/image";

const areas = [
  {
    codename: "Proteus",
    area: "Remove Small Organics",
  },
  {
    codename: "Thetis",
    area: "Remove Large Organics",
  },
  {
    codename: "Galatea",
    area: "Nitrous",
  },
  {
    codename: "Easy Trace",
    area: "Easy Trace",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <Image
          src="/coral-polyps.jpg"
          alt="Coral polyps"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ocean/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Products</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-2xl">
            Marine ecosystem management,<br />
            <span className="text-teal">from the biology up.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Each of our products targets a specific mechanism driving instability in marine systems —
            developed from sequencing data and field-tested in real settings.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-6 bg-ocean-mid">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Coming April 1st</p>
            <h2 className="text-3xl font-black mb-4">Our first products are coming soon.</h2>
            <p className="text-white/50 leading-relaxed">
              Full product details, formulation information, and purchasing will be available at launch.
              In the meantime, here&apos;s a look at what we&apos;re targeting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {areas.map((item) => (
              <div
                key={item.codename}
                className="bg-ocean border border-white/5 rounded-3xl p-8 hover:border-teal/20 transition-colors"
              >
                <span className="text-teal/40 text-xs font-bold tracking-widest uppercase block mb-4">
                  {item.codename}
                </span>
                <h3 className="text-xl font-black text-white">{item.area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mailing List */}
      <section className="py-24 px-6 bg-ocean">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Stay in the loop.</h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Get notified when products launch and be first to learn about new formulations and sequencing services.
          </p>
          <Link
            href="/contact"
            className="bg-teal text-ocean font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
