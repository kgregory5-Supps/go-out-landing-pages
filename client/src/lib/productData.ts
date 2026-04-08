// ─────────────────────────────────────────────
// Go-Out Product Data — Google Ads Compliant
// All copy has been scrubbed of disease claims,
// prescription references, and trigger terms.
// ─────────────────────────────────────────────

export interface Ingredient {
  name: string;
  amount?: string;
  detail: string;
  highlight: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  heroSubhead: string;
  capsuleCount: number;
  servingSize: string;
  price: string;
  subscribePrice: string;
  shopifyUrl: string;
  bottleImage: string;
  listingImage: string;
  benefits: string[];
  problemHeadline: string;
  problemBody: string[];
  solutionHeadline: string;
  solutionBody: string[];
  ingredients: Ingredient[];
  supplementBlend?: string;
  otherIngredients: string;
  freeFrom: string;
  uniqueTitle: string;
  uniqueBody: string[];
  faq: FAQ[];
  reviewCount: number;
  rating: number;
  seoTitle: string;
  seoDescription: string;
}

const IMAGES = {
  dailyBottle: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/daily-bottle_ce06a756.jpg",
  dailyBottle2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/daily-bottle2_5cd9310b.jpg",
  dailyListing: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/daily-listing1_880da56e.jpg",
  extraBottle: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/extra-bottle_29224c22.jpg",
  extraSfb: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/extra-sfb_a18305f2.png",
  extraListing: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/extra-listing1_e84c5e1b.jpg",
  nowBottle: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/now-bottle_996a5bda.jpg",
  nowSfb: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/now-sfb_20ff13cf.png",
  nowListing: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/now-listing1_822b304d.jpg",
  lifestyleGolf: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/goout-lifestyle-golf-Tuc2nUWo89ZBhdZw43e3zR.webp",
  ingredientsFlat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663388252763/FXPBnxAEL7zm35tpn7VxY2/goout-ingredients-flat-egqAyPiUYyGPESdDaqbHzX.webp",
};

export { IMAGES };

const SHARED_FAQ: FAQ[] = [
  {
    question: "Which product should I start with?",
    answer:
      "Start with Daily Maintenance for ongoing uric acid balance. It's the foundation of the GO-OUT system. Consider the Starter Pack if you also want Extra Strength on hand for tougher days. Use GO-OUT NOW! for fast-acting support as needed.",
  },
  {
    question: "Can I take more than one GO-OUT product at a time?",
    answer:
      "Yes. The products are designed to complement each other. A common approach is Daily Maintenance every day as your baseline, with Extra Strength during periods when you need more support. GO-OUT NOW! can be used alongside either product for as-needed support.",
  },
  {
    question: "Are these non-GMO and gluten-free?",
    answer:
      "Yes. All GO-OUT products are non-GMO, gluten-free, and free from soy, salt, yeast, milk & egg products, sugar, starch, and preservatives.",
  },
  {
    question: "How long until I notice a difference?",
    answer:
      "Results vary. Many customers report noticing a difference within a few weeks of consistent use with Daily Maintenance. Extra Strength and NOW! are designed for more immediate support. Consistent use with healthy hydration and a balanced diet produces the best results.",
  },
];

export const PRODUCTS: Record<string, ProductData> = {
  "daily-maintenance": {
    slug: "daily-maintenance",
    name: "GO-OUT Daily Maintenance",
    tagline: "The Foundation for Daily Uric Acid Balance",
    heroSubhead:
      "A dual-cherry, celery seed, and turmeric formula designed for daily uric acid management. 90 vegetarian capsules. Made in Oregon since 2006.",
    capsuleCount: 90,
    servingSize: "2 Vegetarian Capsules",
    price: "$29.99",
    subscribePrice: "$26.99",
    shopifyUrl: "https://go-out-test.myshopify.com/products/go-out-daily-maintenance",
    bottleImage: IMAGES.dailyBottle,
    listingImage: IMAGES.dailyListing,
    benefits: [
      "Supports healthy uric acid levels already within the normal range",
      "Dual-cherry formula with tart cherry 4:1 and black cherry 20:1 extracts",
      "Celery seed extract with 2.2% volatile oils for daily use",
      "Bromelain (1200 GDU/g) for circulatory support",
    ],
    problemHeadline: "Uric Acid Doesn't Take Days Off. Neither Should Your Support.",
    problemBody: [
      "Your body produces uric acid every single day. When levels creep up, you feel it — in your joints, in your mobility, in the things you used to do without thinking twice.",
      "Most people wait until they're uncomfortable to do something about it. By then, you're playing catch-up. The smarter approach is daily, proactive support that keeps uric acid levels balanced before they become a problem.",
    ],
    solutionHeadline: "Daily Maintenance: Your Proactive Uric Acid Strategy",
    solutionBody: [
      "GO-OUT Daily Maintenance is a six-ingredient proprietary blend built around tart cherry, black cherry, celery seed, bromelain, turmeric, and potassium citrate. It's designed for consistent, everyday use — the kind of routine that compounds over weeks and months.",
      "The dual-cherry approach (4:1 Tart Cherry + 20:1 Black Cherry) delivers a broader spectrum of anthocyanins than single-cherry formulas. The celery seed extract contains 2.2% volatile oils — calibrated for daily, long-term use rather than short bursts.",
    ],
    ingredients: [
      { name: "Celery Seed Extract", detail: "Apium graveolens, 2.2% volatile oils", highlight: "Contains 3-n-butylphthalide (3nB), which supports healthy uric acid metabolism" },
      { name: "Tart Cherry 4:1 Extract", detail: "Prunus cerasus", highlight: "Rich in anthocyanins that support a healthy inflammatory response" },
      { name: "Black Cherry 20:1 Extract", detail: "Prunus serotina", highlight: "20 lbs of raw fruit per 1 lb of extract — highly concentrated anthocyanins" },
      { name: "Bromelain", detail: "1200 GDU/g", highlight: "Proteolytic enzyme supporting healthy circulation" },
      { name: "Turmeric Root", detail: "Curcuma longa", highlight: "Curcumin supports a healthy inflammatory response" },
      { name: "Potassium Citrate", detail: "1% DV", highlight: "Supports uric acid solubility and healthy kidney function" },
    ],
    supplementBlend: "Proprietary Herbal and Nutrient Blend — 1,289 mg",
    otherIngredients: "Vegetable cellulose (preservative-free, from capsule shell), organic rice concentrate, and organic rice extract.",
    freeFrom: "NO soy, salt, yeast, gluten, milk & egg products, sugar, starch, or preservatives.",
    uniqueTitle: "What Makes Daily Maintenance Different",
    uniqueBody: [
      "This is the only GO-OUT product with the dual-cherry approach — both Black Cherry 20:1 and Tart Cherry 4:1 extracts. The 20:1 concentration means 20 pounds of raw fruit produce 1 pound of extract, delivering a highly concentrated form of beneficial anthocyanin compounds.",
      "The celery seed extract is standardized to 2.2% volatile oils, which contain the active compound 3-n-butylphthalide (3nB). This concentration is designed for safe, effective daily use over the long term.",
    ],
    faq: [
      ...SHARED_FAQ,
      {
        question: "What's the difference between Daily Maintenance and Extra Strength?",
        answer:
          "Daily Maintenance has celery seed with 2.2% volatile oils for everyday use, plus the unique dual-cherry formula. Extra Strength has 4x the volatile oil concentration (8.8%) for periods when you need more intensive support. Many customers use both.",
      },
    ],
    reviewCount: 847,
    rating: 4.8,
    seoTitle: "GO-OUT Daily Maintenance | Uric Acid Support | Tart Cherry & Celery Seed",
    seoDescription: "Support healthy uric acid levels with GO-OUT Daily Maintenance. Dual-cherry formula with celery seed extract, bromelain, and turmeric. 90 capsules. Made in Oregon since 2006.",
  },

  "extra-strength": {
    slug: "extra-strength",
    name: "GO-OUT Extra Strength",
    tagline: "Higher-Potency Support When You Need It Most",
    heroSubhead:
      "4x the celery seed volatile oil concentration of Daily Maintenance. Designed for periods when you need more intensive uric acid support. 60 vegetarian capsules.",
    capsuleCount: 60,
    servingSize: "2 Vegetarian Capsules",
    price: "$39.99",
    subscribePrice: "$35.99",
    shopifyUrl: "https://go-out-test.myshopify.com/products/go-out-extra-strength",
    bottleImage: IMAGES.extraBottle,
    listingImage: IMAGES.extraListing,
    benefits: [
      "8.8% volatile oil celery seed extract — 4x the Daily Maintenance concentration",
      "Supports healthy uric acid levels during challenging periods",
      "High-potency bromelain (1200 GDU/g) for circulatory support",
      "Pairs with Daily Maintenance for a comprehensive routine",
    ],
    problemHeadline: "Some Days Demand More Than a Maintenance Dose.",
    problemBody: [
      "You know the feeling. You've been consistent with your routine, but then a weekend of rich food, a stressful week, or travel throws your body off. Suddenly your joints are reminding you they exist.",
      "Daily Maintenance is built for the long game. But when you're in a rough stretch, you need something with more firepower — a formula designed specifically for those higher-demand periods.",
    ],
    solutionHeadline: "Extra Strength: 4x the Potency When It Counts",
    solutionBody: [
      "GO-OUT Extra Strength delivers celery seed extract standardized to 8.8% volatile oils — four times the concentration found in Daily Maintenance. That means significantly more 3-n-butylphthalide (3nB), the bioactive compound that supports healthy uric acid metabolism.",
      "The formula pairs this high-potency celery seed with tart cherry 4:1 extract, bromelain (1200 GDU/g), potassium citrate, and turmeric root. It's the same trusted ingredient profile as Daily Maintenance, just dialed up for when you need it.",
    ],
    ingredients: [
      { name: "Celery Seed Extract", detail: "Apium graveolens, 8.8% volatile oils", highlight: "4x the volatile oil concentration of Daily Maintenance — significantly more 3nB" },
      { name: "Tart Cherry 4:1 Extract", detail: "Prunus cerasus", highlight: "Concentrated anthocyanins for inflammatory response support" },
      { name: "Bromelain", detail: "1200 GDU/g", highlight: "High-potency proteolytic enzyme" },
      { name: "Potassium Citrate", detail: "1% DV", highlight: "Supports uric acid solubility" },
      { name: "Turmeric Root", detail: "Curcuma longa", highlight: "Curcumin supports healthy inflammatory response" },
    ],
    supplementBlend: "Proprietary Herbal and Nutrient Blend — 1,269 mg",
    otherIngredients: "Vegetable cellulose (preservative-free, from capsule shell), and Silicon Dioxide.",
    freeFrom: "NO soy, salt, yeast, gluten, milk & egg products, sugar, starch, or preservatives.",
    uniqueTitle: "What Makes Extra Strength Different",
    uniqueBody: [
      "The 8.8% volatile oil content in the celery seed extract is the standout differentiator. That's 4x the concentration found in Daily Maintenance. This delivers a greater concentration of 3nB, luteolin, apigenin, and beta-selenene — the bioactive compounds shown in research to support healthy uric acid metabolism.",
      "Unlike Daily Maintenance, Extra Strength does not include Black Cherry Extract. The formulation prioritizes the higher-potency celery seed extract for a more concentrated support formula.",
    ],
    faq: [
      ...SHARED_FAQ,
      {
        question: "Should I take Extra Strength every day?",
        answer:
          "Extra Strength is designed for periods when you need more intensive support. Many customers use Daily Maintenance as their everyday baseline and switch to or add Extra Strength during tougher stretches. Follow label directions and consult your healthcare professional.",
      },
    ],
    reviewCount: 523,
    rating: 4.7,
    seoTitle: "GO-OUT Extra Strength | High-Potency Uric Acid Support | 4x Celery Seed",
    seoDescription: "GO-OUT Extra Strength delivers 4x the celery seed volatile oil concentration for intensive uric acid support. Tart cherry, bromelain, and turmeric. 60 capsules.",
  },

  "now": {
    slug: "now",
    name: "GO-OUT NOW!",
    tagline: "Fast-Acting Support When You Need It Right Away",
    heroSubhead:
      "A completely different formula built around Chanca Piedra and high-dose Tart Cherry. Designed for as-needed use when you need support fast. 60 vegetarian capsules.",
    capsuleCount: 60,
    servingSize: "2 Vegetarian Capsules",
    price: "$49.99",
    subscribePrice: "$44.99",
    shopifyUrl: "https://go-out-test.myshopify.com/products/go-out-now-1",
    bottleImage: IMAGES.nowBottle,
    listingImage: IMAGES.nowListing,
    benefits: [
      "750 mg Tart Cherry Extract — the highest standalone dose in the GO-OUT lineup",
      "480 mg Chanca Piedra 10:1 Extract for kidney and urinary tract support",
      "Designed for as-needed use, not daily maintenance",
      "Two-ingredient formula — simple, potent, fast-acting",
    ],
    problemHeadline: "When Discomfort Shows Up Unannounced, You Need a Plan B.",
    problemBody: [
      "It always happens at the worst time. You're about to tee off, you've got a trip planned, or you just want to walk the dog without wincing. Your daily routine is solid, but right now you need something that works on a different timeline.",
      "That's the gap GO-OUT NOW! fills. It's not a replacement for your daily routine — it's the thing you reach for when your daily routine isn't enough.",
    ],
    solutionHeadline: "GO-OUT NOW!: A Completely Different Formula for Immediate Support",
    solutionBody: [
      "GO-OUT NOW! is built around two powerhouse ingredients: 750 mg of Tart Cherry Extract and 480 mg of Chanca Piedra 10:1 Extract. No celery seed, no turmeric — this is a fundamentally different formulation designed for a different purpose.",
      "Chanca Piedra (Phyllanthus niruri) — literally \"stone breaker\" in Spanish — has centuries of traditional use across South America, India, and China for kidney and urinary tract support. The 10:1 concentration means 10 pounds of raw plant produce 1 pound of extract.",
    ],
    ingredients: [
      { name: "Tart Cherry Fruit Extract", amount: "750 mg", detail: "Prunus cerasus", highlight: "Highest standalone tart cherry dose in the GO-OUT lineup" },
      { name: "Chanca Piedra 10:1 Extract", amount: "480 mg", detail: "Phyllanthus niruri whole plant", highlight: "\"Stone Breaker\" — centuries of traditional use for kidney and urinary support" },
    ],
    otherIngredients: "Vegetable cellulose (from capsule shell), L-Leucine, Microcrystalline Cellulose, and Silica.",
    freeFrom: "NO soy, salt, yeast, gluten, milk & egg products, sugar, starch, or preservatives.",
    uniqueTitle: "What Makes NOW! Different",
    uniqueBody: [
      "This is the only GO-OUT product built around Chanca Piedra. While Daily Maintenance and Extra Strength focus on celery seed for uric acid metabolism, NOW! takes a completely different approach with high-dose tart cherry and the traditional \"stone breaker\" herb.",
      "The dosing protocol is also different. Instead of a consistent daily dose, you take two capsules at the first sign of discomfort, with the option to take up to four on the first dose. It's designed to be kept on hand for when you need it.",
    ],
    faq: [
      ...SHARED_FAQ,
      {
        question: "How is NOW! different from Daily Maintenance and Extra Strength?",
        answer:
          "Completely different formula. Daily Maintenance and Extra Strength are built around celery seed extract for ongoing uric acid management. NOW! uses Chanca Piedra and high-dose Tart Cherry for fast-acting, as-needed support. Many customers keep all three on hand.",
      },
      {
        question: "Can I take NOW! every day?",
        answer:
          "NOW! is designed for as-needed use, not daily maintenance. For daily support, use GO-OUT Daily Maintenance. Consult your healthcare practitioner if using blood pressure support supplements.",
      },
    ],
    reviewCount: 312,
    rating: 4.6,
    seoTitle: "GO-OUT NOW! | Fast-Acting Uric Acid Support | Chanca Piedra & Tart Cherry",
    seoDescription: "Fast-acting uric acid support with 750mg Tart Cherry and 480mg Chanca Piedra 10:1 Extract. For as-needed use. Made in Oregon since 2006.",
  },
};

export function getProduct(slug: string): ProductData | null {
  return PRODUCTS[slug] ?? null;
}

export const FDA_DISCLAIMER =
  "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.";
