/**
 * GO-OUT Landing Page — Clinical Authority Design
 * ─────────────────────────────────────────────────
 * Design: Science-forward minimalist. Near-white backgrounds,
 * extreme restraint, teal accent on CTAs, DM Serif Display
 * headlines, DM Sans body, IBM Plex Mono for dosages.
 * ─────────────────────────────────────────────────
 * Google Ads Compliant: Zero disease claims, zero Rx references.
 */

import { useEffect } from "react";
import { getProduct, FDA_DISCLAIMER, IMAGES, type ProductData } from "@/lib/productData";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsBar from "@/components/landing/BenefitsBar";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import IngredientsSection from "@/components/landing/IngredientsSection";
import UniqueSection from "@/components/landing/UniqueSection";
import SocialProof from "@/components/landing/SocialProof";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import StickyBar from "@/components/landing/StickyBar";

interface Props {
  slug: string;
}

export default function LandingPage({ slug }: Props) {
  const product = getProduct(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (product) {
      document.title = product.seoTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", product.seoDescription);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = product.seoDescription;
        document.head.appendChild(newMeta);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <StickyBar product={product} />
      <HeroSection product={product} />
      <BenefitsBar benefits={product.benefits} />
      <ProblemSection product={product} />
      <SolutionSection product={product} />
      <IngredientsSection product={product} />
      <UniqueSection product={product} />
      <SocialProof product={product} />
      <FAQSection product={product} />
      <CTASection product={product} />
      <Footer />
    </div>
  );
}
