import { useState, useEffect } from "react";
import type { ProductData } from "@/lib/productData";

interface Props {
  product: ProductData;
}

export default function StickyBar({ product }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-goout-navy/5 shadow-sm transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={product.bottleImage}
              alt={product.name}
              className="w-10 h-10 object-contain hidden sm:block"
            />
            <div>
              <p className="text-sm font-semibold text-goout-navy">{product.name}</p>
              <p className="text-xs text-goout-navy/50 hidden sm:block">{product.capsuleCount} capsules</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-goout-navy/40 line-through">{product.price}</p>
              <p className="text-sm font-semibold text-goout-teal" style={{ fontFamily: "var(--font-mono)" }}>
                {product.subscribePrice}
              </p>
            </div>
            <a
              href={product.shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-goout-teal text-white font-semibold text-sm rounded-lg hover:bg-goout-teal/90 transition-all duration-200 shadow-md shadow-goout-teal/20"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
