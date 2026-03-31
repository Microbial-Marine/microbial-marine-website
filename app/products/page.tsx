import Link from "next/link";

// TODO: Replace shopifyUrl values with live Shopify product page URLs when store is connected
// TODO: Replace shopifyUrl values with live Shopify product page URLs when store is connected
const products = [
  {
    id: 1,
    codename: "Proteus",
    name: "Labile DOC Management",
    tagline: "Shift your system toward a more oligotrophic state.",
    description:
      "Proteus is formulated to reduce labile dissolved organic carbon in marine systems. By lowering labile DOC, it helps shift water chemistry away from nutrient-enriched conditions and toward the stable, low-nutrient environment characteristic of healthy reef systems.",
    targets: ["Labile DOC", "Water quality", "Reef & mixed reef systems"],
    shopifyUrl: "#",
  },
  {
    id: 2,
    codename: "Thetis",
    name: "Refractory DOC Management",
    tagline: "Improve water clarity and light penetration.",
    description:
      "Thetis targets refractory dissolved organics — compounds that contribute to water yellowing, reduced light penetration, and decreased trace element accessibility. Addressing refractory DOC upstream also helps reduce the labile DOC load that results as these compounds break down over time.",
    targets: ["Refractory DOC", "Water clarity", "Light penetration"],
    shopifyUrl: "#",
  },
  {
    id: 3,
    codename: "Galatea",
    name: "Organic Nitrogen Supplement",
    tagline: "A biologically preferred nitrogen source for reef systems.",
    description:
      "Galatea provides organic nitrogen in forms that are naturally prevalent in reef environments. Unlike inorganic nitrate, these nitrogen sources support different microbial and chemical dynamics in the water column. Formulated to support a more balanced nitrogen cycle without driving eutrophication.",
    targets: ["Nitrogen cycling", "Water chemistry", "Reef systems"],
    shopifyUrl: "#",
  },
  {
    id: 4,
    codename: "Triton",
    name: "Dinoflagellate Bloom Support",
    tagline: "Address the water chemistry conditions that favor dino blooms.",
    description:
      "Dinoflagellate blooms are associated with specific dissolved organic nitrogen imbalances — high refractory DON relative to labile DON. Triton is formulated to help shift that balance, supporting water chemistry conditions more favorable to diatoms. For best results, use alongside Thetis to address both sides of the DON profile.",
    targets: ["DON balance", "Water chemistry", "Reef & mixed reef systems"],
    shopifyUrl: "#",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-ocean relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(43,191,191,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">Q1 2026 — Now Available</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-2xl">
            Products built from<br />
            <span className="text-teal">the biology up.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Each product targets a specific mechanism driving instability in marine systems —
            developed from sequencing data and field-tested in real tanks.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 bg-ocean-mid">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="bg-ocean border border-white/5 rounded-3xl p-8 flex flex-col hover:border-teal/20 transition-colors group"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-teal/40 text-xs font-bold tracking-widest uppercase">
                    {product.codename}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-teal/20 flex items-center justify-center group-hover:border-teal/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-teal/40 group-hover:bg-teal transition-colors" />
                  </span>
                </div>

                <h2 className="text-2xl font-black text-white mb-2">{product.name}</h2>
                <p className="text-teal text-sm font-medium mb-4">{product.tagline}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{product.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {product.targets.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-teal/5 border border-teal/10 text-teal/70 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={product.shopifyUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold bg-teal text-ocean px-5 py-2.5 rounded-full hover:bg-teal-light transition-colors w-fit"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-ocean text-center">
        <h2 className="text-3xl font-black mb-4">Not sure where to start?</h2>
        <p className="text-white/50 mb-8 max-w-xl mx-auto">
          Get in touch and we&apos;ll help you identify the right product for your system.
        </p>
        <Link
          href="/contact"
          className="bg-teal text-ocean font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
