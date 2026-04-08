
import type { ProductData } from "@/lib/productData";

interface Props {
  product: ProductData;
}

export default function SolutionSection({ product }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-[#f7f5f0]">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-goout-teal mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              The Solution
            </p>
            <h2 className="text-3xl sm:text-4xl text-goout-navy leading-tight mb-8" style={{ fontFamily: "var(--font-serif)" }}>
              {product.solutionHeadline}
            </h2>
            <div className="space-y-5">
              {product.solutionBody.map((para, i) => (
                <p key={i} className="text-base lg:text-lg text-goout-navy/70 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Dosage callout */}
            <div className="mt-10 dosage-callout">
              <p className="text-sm text-goout-navy/50 mb-1" style={{ fontFamily: "var(--font-mono)" }}>Serving Size</p>
              <p className="text-lg font-medium text-goout-navy" style={{ fontFamily: "var(--font-mono)" }}>{product.servingSize}</p>
              <p className="text-sm text-goout-navy/50 mt-1" style={{ fontFamily: "var(--font-mono)" }}>{product.capsuleCount} capsules per bottle</p>
            </div>
          </div>

          {/* Product listing image */}
          <div
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-3xl bg-white/70 blur-xl" />
              <img
                src={product.listingImage}
                alt={`${product.name} product details`}
                className="relative w-full max-w-[480px] h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
