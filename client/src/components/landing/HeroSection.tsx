import { ShieldCheck, Leaf, FlaskConical } from "lucide-react";
import type { ProductData } from "@/lib/productData";

interface Props {
  product: ProductData;
}

export default function HeroSection({ product }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f0] pt-6 pb-16 lg:pt-10 lg:pb-24">
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />

      <div className="container relative">
        {/* Top trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 lg:mb-14 animate-fade-in">
          <span className="flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-goout-navy/60" style={{ fontFamily: "var(--font-mono)" }}>
            <ShieldCheck className="w-3.5 h-3.5" /> GMP Certified
          </span>
          <span className="w-px h-3 bg-goout-navy/15 hidden sm:block" />
          <span className="flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-goout-navy/60" style={{ fontFamily: "var(--font-mono)" }}>
            <Leaf className="w-3.5 h-3.5" /> Made in Oregon
          </span>
          <span className="w-px h-3 bg-goout-navy/15 hidden sm:block" />
          <span className="flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-goout-navy/60" style={{ fontFamily: "var(--font-mono)" }}>
            <FlaskConical className="w-3.5 h-3.5" /> Since 2006
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-goout-teal mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              {product.slug === "daily-maintenance" && "Daily Support"}
              {product.slug === "extra-strength" && "High Potency"}
              {product.slug === "now" && "Fast Acting"}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-goout-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              {product.name}
            </h1>

            <p className="text-lg lg:text-xl text-goout-navy/70 leading-relaxed mb-8 max-w-xl">
              {product.heroSubhead}
            </p>

            {/* Price + CTA */}
            <div className="flex flex-wrap items-end gap-6 mb-8">
              <div>
                <p className="text-sm text-goout-navy/50 mb-1">One-time</p>
                <p className="text-3xl font-semibold text-goout-navy" style={{ fontFamily: "var(--font-mono)" }}>{product.price}</p>
              </div>
              <div>
                <p className="text-sm text-goout-teal font-medium mb-1">Subscribe & Save 15%</p>
                <p className="text-3xl font-semibold text-goout-teal" style={{ fontFamily: "var(--font-mono)" }}>{product.subscribePrice}</p>
              </div>
            </div>

            <a
              href={product.shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-goout-teal text-white font-semibold text-base rounded-lg hover:bg-goout-teal/90 transition-all duration-200 shadow-lg shadow-goout-teal/20 hover:shadow-xl hover:shadow-goout-teal/30 hover:-translate-y-0.5"
            >
              Shop Now
            </a>

            {/* Star rating */}
            <div className="flex items-center gap-2 mt-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-goout-gold" : "text-goout-navy/15"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-goout-navy/50" style={{ fontFamily: "var(--font-mono)" }}>
                {product.rating} ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Soft circle behind bottle */}
              <div className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full bg-white/60 blur-2xl" />
              <img
                src={product.bottleImage}
                alt={`${product.name} supplement bottle`}
                className="relative w-[280px] sm:w-[340px] lg:w-[400px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
