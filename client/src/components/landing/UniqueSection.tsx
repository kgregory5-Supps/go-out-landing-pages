
import type { ProductData } from "@/lib/productData";

interface Props {
  product: ProductData;
}

export default function UniqueSection({ product }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-goout-navy text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-goout-teal mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              Why This Formula
            </p>
            <h2 className="text-3xl sm:text-4xl leading-tight mb-10" style={{ fontFamily: "var(--font-serif)" }}>
              {product.uniqueTitle}
            </h2>
          </div>

          <div className="space-y-6">
            {product.uniqueBody.map((para, i) => (
              <p
                key={i}
                className="text-base lg:text-lg text-white/70 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Cross-sell hint */}
          <div
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              The Complete GO-OUT System
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Daily Maintenance", desc: "Everyday joint comfort", slug: "daily-maintenance" },
                { name: "Extra Strength", desc: "High-potency support", slug: "extra-strength" },
                { name: "NOW!", desc: "As-needed support", slug: "now" },
              ]
                .filter((p) => p.slug !== product.slug)
                .map((p) => (
                  <a
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{p.name}</p>
                      <p className="text-xs text-white/50">{p.desc}</p>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
