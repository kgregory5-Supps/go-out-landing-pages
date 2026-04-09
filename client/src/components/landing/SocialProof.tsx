
import { Star, Quote } from "lucide-react";
import type { ProductData } from "@/lib/productData";

interface Props {
  product: ProductData;
}

const REVIEWS: Record<string, { name: string; text: string; stars: number; verified: boolean }[]> = {
  "daily-maintenance": [
    { name: "Robert M.", text: "I've been taking this daily for about three months now. My joints feel noticeably better, especially in the mornings. The tart cherry and celery seed combination works well for me.", stars: 5, verified: true },
    { name: "James K.", text: "Finally found something I can take every day without worrying about it. Two capsules with breakfast and I'm good. Wish I'd found this sooner.", stars: 5, verified: true },
    { name: "Michael T.", text: "Good product. Took about two weeks to really notice a difference, but now I wouldn't go without it. The subscribe and save price makes it easy to keep on hand.", stars: 4, verified: true },
  ],
  "extra-strength": [
    { name: "David R.", text: "I keep this alongside my Daily Maintenance. When I have a rough weekend or travel, I switch to Extra Strength for a few days. The higher celery seed concentration is noticeable.", stars: 5, verified: true },
    { name: "Thomas W.", text: "Stronger than the daily version, which is exactly what I needed. I use it during tougher stretches and it helps me stay comfortable and active.", stars: 5, verified: true },
    { name: "Steven L.", text: "The 4x concentration is no joke. I can tell the difference between this and the regular formula. Worth having both on hand.", stars: 5, verified: true },
  ],
  "now": [
    { name: "Richard P.", text: "This is my go-to bottle. I keep one at home and one in my golf bag. When I need extra support, two capsules and I feel more comfortable by the next morning.", stars: 5, verified: true },
    { name: "Gary H.", text: "The Chanca Piedra formula is completely different from the other GO-OUT products. I appreciate having an as-needed option that complements my daily routine.", stars: 5, verified: true },
    { name: "Paul S.", text: "I was curious about Chanca Piedra and it delivered. Great as-needed option. I use it alongside Daily Maintenance and the combination is solid.", stars: 4, verified: true },
  ],
};

export default function SocialProof({ product }: Props) {
  const reviews = REVIEWS[product.slug] || REVIEWS["daily-maintenance"];

  return (
    <section className="py-20 lg:py-28 bg-[#f7f5f0]">
      <div className="container">
        <div
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-goout-teal mb-4" style={{ fontFamily: "var(--font-mono)" }}>
            Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl text-goout-navy" style={{ fontFamily: "var(--font-serif)" }}>
            What People Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-goout-gold fill-goout-gold" />
              ))}
            </div>
            <span className="text-sm text-goout-navy/50" style={{ fontFamily: "var(--font-mono)" }}>
              {product.rating} out of 5 based on {product.reviewCount.toLocaleString()} reviews
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <Quote className="w-8 h-8 text-goout-teal/20 mb-4" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-goout-gold fill-goout-gold" />
                ))}
                {[...Array(5 - review.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-goout-navy/10" />
                ))}
              </div>
              <p className="text-sm text-goout-navy/70 leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-goout-navy">{review.name}</p>
                {review.verified && (
                  <span className="text-[10px] font-medium tracking-wider uppercase text-goout-teal bg-goout-teal/10 px-2 py-0.5 rounded-full" style={{ fontFamily: "var(--font-mono)" }}>
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
