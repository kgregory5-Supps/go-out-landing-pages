
import { IMAGES, type ProductData } from "@/lib/productData";

interface Props {
  product: ProductData;
}

export default function IngredientsSection({ product }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-goout-teal mb-4" style={{ fontFamily: "var(--font-mono)" }}>
            What's Inside
          </p>
          <h2 className="text-3xl sm:text-4xl text-goout-navy" style={{ fontFamily: "var(--font-serif)" }}>
            Every Ingredient, Explained
          </h2>
          {product.supplementBlend && (
            <p className="mt-4 text-sm text-goout-navy/50" style={{ fontFamily: "var(--font-mono)" }}>
              {product.supplementBlend}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.ingredients.map((ingredient, i) => (
            <div
              key={i}
              className="group relative bg-[#f7f5f0] rounded-xl p-6 hover:bg-white hover:shadow-lg hover:shadow-goout-navy/5 transition-all duration-300 border border-transparent hover:border-goout-teal/10"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-goout-navy" style={{ fontFamily: "var(--font-serif)" }}>
                  {ingredient.name}
                </h3>
                {ingredient.amount && (
                  <span className="text-xs font-medium text-goout-teal bg-goout-teal/10 px-2 py-1 rounded-full" style={{ fontFamily: "var(--font-mono)" }}>
                    {ingredient.amount}
                  </span>
                )}
              </div>
              <p className="text-xs text-goout-navy/40 mb-3 italic">{ingredient.detail}</p>
              <p className="text-sm text-goout-navy/70 leading-relaxed">{ingredient.highlight}</p>
            </div>
          ))}
        </div>

        {/* Other ingredients + free-from */}
        <div
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-[#f7f5f0] rounded-xl p-6">
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-goout-navy/50 mb-3" style={{ fontFamily: "var(--font-mono)" }}>
              Other Ingredients
            </h4>
            <p className="text-sm text-goout-navy/60 leading-relaxed">{product.otherIngredients}</p>
          </div>
          <div className="bg-goout-teal/5 rounded-xl p-6 border border-goout-teal/10">
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-goout-teal mb-3" style={{ fontFamily: "var(--font-mono)" }}>
              Free From
            </h4>
            <p className="text-sm text-goout-navy/60 leading-relaxed">{product.freeFrom}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
