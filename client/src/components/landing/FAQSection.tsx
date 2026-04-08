
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { ProductData } from "@/lib/productData";

interface Props {
  product: ProductData;
}

export default function FAQSection({ product }: Props) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-goout-teal mb-4" style={{ fontFamily: "var(--font-mono)" }}>
            Questions
          </p>
          <h2 className="text-3xl sm:text-4xl text-goout-navy" style={{ fontFamily: "var(--font-serif)" }}>
            Frequently Asked
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {product.faq.map((item, i) => (
              <div
                key={i}
              >
                <AccordionItem value={`faq-${i}`} className="bg-[#f7f5f0] rounded-xl border-none px-6">
                  <AccordionTrigger className="text-left text-goout-navy font-medium hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-goout-navy/70 leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
