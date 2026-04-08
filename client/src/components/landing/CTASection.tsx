
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { FDA_DISCLAIMER, type ProductData } from "@/lib/productData";

interface Props {
  product: ProductData;
}

export default function CTASection({ product }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-[#f7f5f0]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div
          >
            <h2 className="text-3xl sm:text-4xl text-goout-navy mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Ready to Take Control of Your Uric Acid Levels?
            </h2>
            <p className="text-lg text-goout-navy/60 mb-10 max-w-xl mx-auto">
              Join thousands of customers who trust GO-OUT for daily uric acid support. Made in Oregon since 2006.
            </p>
          </div>

          {/* Price card */}
          <div
            className="bg-white rounded-2xl shadow-lg shadow-goout-navy/5 p-8 mb-10 max-w-md mx-auto"
          >
            <img
              src={product.bottleImage}
              alt={product.name}
              className="w-32 h-auto mx-auto mb-6 drop-shadow-lg"
            />
            <h3 className="text-xl font-semibold text-goout-navy mb-2" style={{ fontFamily: "var(--font-serif)" }}>
              {product.name}
            </h3>
            <p className="text-sm text-goout-navy/50 mb-6">{product.capsuleCount} capsules</p>

            <div className="flex items-center justify-center gap-6 mb-6">
              <div>
                <p className="text-xs text-goout-navy/40 mb-1">One-time</p>
                <p className="text-2xl font-semibold text-goout-navy" style={{ fontFamily: "var(--font-mono)" }}>{product.price}</p>
              </div>
              <div className="w-px h-10 bg-goout-navy/10" />
              <div>
                <p className="text-xs text-goout-teal font-medium mb-1">Subscribe & Save</p>
                <p className="text-2xl font-semibold text-goout-teal" style={{ fontFamily: "var(--font-mono)" }}>{product.subscribePrice}</p>
              </div>
            </div>

            <a
              href={product.shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-goout-teal text-white font-semibold text-base rounded-lg hover:bg-goout-teal/90 transition-all duration-200 shadow-lg shadow-goout-teal/20 hover:shadow-xl hover:shadow-goout-teal/30 hover:-translate-y-0.5"
            >
              Shop Now
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 mb-10"
          >
            <div className="flex items-center gap-2 text-goout-navy/40">
              <Truck className="w-5 h-5" />
              <span className="text-sm font-medium">Free Shipping $50+</span>
            </div>
            <div className="flex items-center gap-2 text-goout-navy/40">
              <RotateCcw className="w-5 h-5" />
              <span className="text-sm font-medium">30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-goout-navy/40">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm font-medium">GMP Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
