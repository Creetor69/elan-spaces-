import { motion } from "motion/react";
import { Check, Sparkles, Gem, Star, Landmark } from "lucide-react";

const TIERS = [
  { 
    name: "Essential Suite", 
    icon: Star,
    price: "₹1,31,548", 
    subtitle: "+ GST | Starting for 4' x 7' Layout",
    brand: "Fixtures: Cera Premium Components",
    features: [
      "Rigid floor protection & dust-managed demolition",
      "Siegling waterproofing concrete membranes",
      "Full masonry levelling & brick ledge preparation",
      "Complete plumbing layout & wall chase fabrication",
      "Premium Somany/Kajaria ceramic tile arrays (8' Height)",
      "Granite vanity countertop installation (40mm thickness)",
      "Complete debris cleaning & ready-to-use sanitization"
    ], 
    popular: false,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Premium Retreat", 
    icon: Sparkles,
    price: "₹1,59,745", 
    popular: true,
    subtitle: "+ GST | Starting for 4' x 7' Layout",
    brand: "Fixtures: Jaquar Concealed Series",
    features: [
      "Everything in Essential, plus:",
      "Jaquar Premium Series concealed valves",
      "Multi-flow sensory hand shower with slide rail",
      "EWC wall-hung closets with silent flush plates",
      "Vitrified jointless ceramic surfaces (Full height)",
      "Polished quartz counter slab configuration",
      "Modular kitchen packages available from ₹1 Lakh"
    ], 
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Elite Sanctuary", 
    icon: Gem,
    price: "₹2,09,842", 
    popular: false,
    subtitle: "+ GST | Starting for 4' x 7' Layout",
    brand: "Fixtures: Grohe & Kohler Curation",
    features: [
      "Everything in Premium, plus:",
      "Thermostatic temperature safety controls",
      "German-milled Grohe pressure balancing valves",
      "Architectural linear wall drains in stainless steel",
      "Italian mineral composite basins",
      "Double-coat acrylic liquid rubber waterproofing",
      "Lifetime structural craftsmanship warranty"
    ], 
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Imperial Grandeur", 
    icon: Landmark,
    price: "₹3,50,000+", 
    popular: false,
    subtitle: "+ GST | Bespoke Remodeling Curation",
    brand: "Fixtures: Kohler & Jacuzzi custom series",
    features: [
      "Everything in Elite, plus:",
      "Custom multi-jet hydrotherapy installations",
      "Advanced quiet-fill pressure boosting pump setups",
      "Imported premium Italian marble wall frames",
      "Defogging smart vanity mirrors with ambient lighting",
      "Bespoke cedar-lined acoustic accent integrations",
      "10-Year structural leakproof indemnity guarantee"
    ], 
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400" 
  },
];

interface ServicesProps {
  onOpenBooking: (prefill?: { projectTypes?: string[]; package?: string }) => void;
}

export function Services({ onOpenBooking }: ServicesProps) {
  return (
    <section className="bg-white py-24 md:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-primary/10 relative" id="services">
      
      <div className="max-w-container-max mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="mb-16 md:mb-24 text-center"
        >
          <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary mb-3 block uppercase font-semibold">Remodeling Packages</span>
          <h2 className="font-display text-4xl md:text-6xl text-on-surface leading-tight lowercase">
            transparent <span className="text-primary italic font-serif font-light">curations</span> for your residence
          </h2>
          <p className="mt-4 font-body text-xs text-tertiary max-w-lg mx-auto uppercase tracking-[0.25em] leading-relaxed font-light">
            premium material specs. fixed transparent quotations. zero cost-creep. <br className="hidden md:block"/> Modular kitchen setups start from ₹1 Lakh.
          </p>
        </motion.div>

        {/* Horizontal Scroll Containers */}
        <div className="flex gap-8 overflow-x-auto pb-10 pt-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:-mx-12 md:px-12 scroll-smooth">
          {TIERS.map((tier, idx) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 flex flex-col group overflow-hidden bg-white shrink-0 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[390px] snap-center transition-all duration-700 ${
                  tier.popular 
                    ? "ring-1 ring-secondary border-transparent shadow-[0_30px_60px_rgba(143,129,115,0.08)] bg-gradient-to-b from-white to-surface-container-low" 
                    : "border border-primary/10 shadow-[0_15px_45px_rgba(44,71,85,0.01)] hover:border-secondary/30 hover:shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-5 right-5 z-20">
                    <span className="bg-secondary text-white text-[8px] font-mono font-bold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      ✶ recommended
                    </span>
                  </div>
                )}

                {/* Subtle top background card illustration */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/20 via-secondary/30 to-primary/20" />
                
                <div className="relative z-10 flex flex-col h-full mt-2">
                  <div className="mb-6 flex gap-4 items-start pb-4 border-b border-primary/5">
                    <div className="p-3 rounded-2xl bg-surface text-primary border border-primary/5 shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-medium text-xl text-on-surface tracking-tight">{tier.name}</h3>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="font-display text-2xl text-primary font-semibold">{tier.price}</span>
                        <span className="font-mono text-[8px] text-tertiary uppercase tracking-widest">{tier.subtitle.split("|")[0]}</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-mono text-[9px] text-secondary uppercase tracking-[0.2em] font-semibold mb-4 bg-surface px-3 py-1.5 rounded-lg border border-primary/5 self-start">
                    {tier.brand}
                  </p>

                  <ul className="space-y-3.5 mb-8 flex-grow">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-[11px] text-on-surface/85 border-b border-primary/5 pb-2.5 last:border-0 font-body font-light">
                        <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => onOpenBooking({ projectTypes: ["Bathroom"], package: tier.name })}
                    className="w-full py-4 rounded-xl bg-[#2c4755] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-secondary hover:shadow-xl transition-all duration-500 shadow-md relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Inquire Site Visit</span>
                    <span className="absolute inset-0 bg-secondary skew-y-12 translate-y-12 group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </button>
                  <p className="text-[8px] text-center text-tertiary uppercase tracking-widest mt-4 leading-relaxed font-light">*Package specs adaptable for larger spatial volumes.</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Swipe instructions indicator */}
        <div className="flex justify-center items-center gap-3 mt-6 text-primary/30 text-[9px] font-mono tracking-[0.25em] uppercase select-none">
          <span className="animate-pulse">←</span> 
          <span>Swipe horizontally to compare configurations</span>
          <span className="animate-pulse">→</span>
        </div>
      </div>
    </section>
  );
}
