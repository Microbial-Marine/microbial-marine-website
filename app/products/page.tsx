import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "easy-trace",
    name: "Easy Trace",
    tagline: "15 Major & Trace Elements",
    description:
      "A complete trace element solution formulated from USP- and ACS-grade ingredients. Provides rapidly consumed elements without raising alkalinity, calcium, or magnesium. No EDTA or strong chelators.",
    dosing: "1 mL per 10 gallons daily",
    highlights: ["USP & ACS grade", "No EDTA", "Dosing pump compatible", "Shelf stable 1+ year"],
    image: "/products/easy-trace.png",
    size: "500 mL",
    price: "$24.99",
    accent: "from-purple-500/20 to-yellow-400/10",
    border: "border-purple-500/20 hover:border-purple-400/40",
  },
  {
    id: "nitrous",
    name: "Nitrous",
    tagline: "Full-Spectrum Nitrogen Supplement",
    description:
      "Delivers ammonium and urea — the nitrogen sources corals preferentially uptake. Promotes faster growth, better coloration, and denser tissue. Also accelerates new tank cycling.",
    dosing: "1 mL per 10 gallons daily",
    highlights: ["Ammonium + urea", "Supports coral growth", "Speeds tank cycling", "Dosing pump compatible"],
    image: "/products/nitrous.png",
    size: "500 mL",
    price: "$19.99",
    accent: "from-orange-500/20 to-teal-400/10",
    border: "border-orange-500/20 hover:border-orange-400/40",
  },
  {
    id: "reduce-doc",
    name: "Reduce DOC Organics",
    tagline: "Activated Carbon + Macroporous Resin",
    description:
      "A premium blend of coconut-based activated carbon and macroporous adsorption resin. Removes both short- and long-chain organics — improving water clarity, PAR, and trace element availability while reducing conditions that favor dinoflagellate blooms.",
    dosing: "25–100 mL per 10 gallons depending on DOC level",
    highlights: ["Removes short & long-chain DOC", "Improves water clarity & PAR", "Reduces dino bloom conditions", "Ozone compatible"],
    sizes: [
      { label: "8 oz",  price: "$24.99", image: "/products/reduce-doc-8oz.png",  h: 160, w: 145 },
      { label: "16 oz", price: "$34.99", image: "/products/reduce-doc-16oz.png", h: 240, w: 218 },
      { label: "32 oz", price: "$59.99", image: "/products/reduce-doc-32oz.png", h: 320, w: 164 },
    ],
    accent: "from-pink-500/20 to-cyan-400/10",
    border: "border-pink-500/20 hover:border-pink-400/40",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <video
          src="/videos/elegance.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ocean/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Products</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-2xl">
            Marine ecosystem management,<br />
            <span className="text-teal">from the biology up.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-6">
            Each product targets a specific mechanism driving instability in marine systems —
            developed from sequencing data and field-tested in real settings.
          </p>
          <span className="inline-block bg-teal/10 border border-teal/30 text-teal text-sm font-semibold px-5 py-2 rounded-full tracking-wide">
            Launching Summer 2026
          </span>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 bg-ocean-mid">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">

          {/* Easy Trace + Nitrous */}
          <div className="grid md:grid-cols-2 gap-8">
            {products.slice(0, 2).map((product) => (
              <div
                key={product.id}
                className={`bg-ocean border ${product.border} rounded-3xl p-8 flex flex-col transition-colors`}
              >
                <div className={`relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${product.accent} mb-8 flex items-center justify-center`}>
                  <Image
                    src={product.image!}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-black text-white">{product.name}</h2>
                  <div className="flex flex-col items-end gap-1 mt-1">
                    <span className="text-lg font-black text-teal">{product.price}</span>
                    <span className="text-xs text-white/30 border border-white/10 rounded-full px-3 py-1">{product.size}</span>
                  </div>
                </div>
                <p className="text-teal text-sm font-semibold mb-4">{product.tagline}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.highlights.map((h) => (
                    <span key={h} className="text-xs bg-teal/5 border border-teal/10 text-teal/70 px-3 py-1 rounded-full">{h}</span>
                  ))}
                </div>
                <div className="border-t border-white/5 pt-5">
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Dosing</p>
                  <p className="text-white/60 text-sm">{product.dosing}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reduce DOC — full width */}
          {(() => {
            const product = products[2];
            return (
              <div className={`bg-ocean border ${product.border} rounded-3xl p-8 md:p-12 transition-colors`}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-black text-white mb-2">{product.name}</h2>
                    <p className="text-teal text-sm font-semibold mb-5">{product.tagline}</p>
                    <p className="text-white/50 leading-relaxed mb-6">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.highlights.map((h) => (
                        <span key={h} className="text-xs bg-teal/5 border border-teal/10 text-teal/70 px-3 py-1 rounded-full">{h}</span>
                      ))}
                    </div>
                    <div className="border-t border-white/5 pt-5">
                      <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Dosing</p>
                      <p className="text-white/60 text-sm">{product.dosing}</p>
                    </div>
                  </div>
                  <div className={`flex gap-10 items-end justify-center bg-gradient-to-br ${product.accent} rounded-2xl p-10`}>
                    {product.sizes!.map((s: { label: string; image: string; h: number; w: number }) => (
                      <div key={s.label} className="flex flex-col items-center gap-3">
                        <Image src={s.image} alt={`Reduce DOC ${s.label}`} width={s.w} height={s.h} className="object-contain drop-shadow-lg" />
                        <span className="text-sm font-black text-teal">{s.price}</span>
                        <span className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-ocean">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-4">Not sure where to start?</h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Get in touch and we&apos;ll help you identify the right product for your system.
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
