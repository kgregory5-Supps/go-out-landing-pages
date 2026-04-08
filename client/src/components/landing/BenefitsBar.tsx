
import { Check } from "lucide-react";

interface Props {
  benefits: string[];
}

export default function BenefitsBar({ benefits }: Props) {
  return (
    <section className="bg-goout-navy py-6 lg:py-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-goout-teal/20 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-goout-teal" />
              </div>
              <p className="text-sm text-white/80 leading-snug">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
