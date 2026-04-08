
import { IMAGES, type ProductData } from "@/lib/productData";

interface Props {
  product: ProductData;
}

export default function ProblemSection({ product }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Lifestyle image */}
          <div
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={IMAGES.lifestyleGolf}
                alt="Active lifestyle — golf, walking, and outdoor activities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-goout-navy/30 to-transparent" />
            </div>
          </div>

          {/* Copy */}
          <div
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-goout-cherry mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl text-goout-navy leading-tight mb-8" style={{ fontFamily: "var(--font-serif)" }}>
              {product.problemHeadline}
            </h2>
            <div className="space-y-5">
              {product.problemBody.map((para, i) => (
                <p key={i} className="text-base lg:text-lg text-goout-navy/70 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
