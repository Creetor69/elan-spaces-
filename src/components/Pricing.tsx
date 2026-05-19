import { motion } from "motion/react";
import { Check } from "lucide-react";

const TIERS = [
  { 
    name: "Essential", 
    price: "₹1,31,548", 
    subtitle: "+ GST | Starting Price for 4' x 7'",
    brand: "Fixtures: Cera*",
    features: [
      "Floor Guarding & Demolition",
      "Wall Plastering & Floor leveling",
      "Ledge wall (1000x200x1200mm)",
      "High-Grade Waterproofing",
      "New Plumbing lines & Fixture Install",
      "Ceramic Premium Somany Tiles (8' H)",
      "Basin counter Granite (40mm)",
      "Cera: Wall Diverter, Shower, Basin mixer",
      "Full frame cistern & Flush plate",
      "Debris removal & Deep cleaning"
    ], 
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Premium", 
    price: "₹1,59,745", 
    popular: true,
    subtitle: "+ GST | Starting Price for 4' x 7'",
    brand: "Fixtures: Jaquar*",
    features: [
      "Everything in Essential plus:",
      "Jaquar Premium Series Fitting",
      "Wall Diverter (Exposed/Concealed)",
      "Multi-flow Shower head & spout",
      "EWC ledge wall granite (20mm)",
      "Jaquar Basin & Basin mixer",
      "Connection pipes & Angle valves",
      "Health faucet & Flush plate",
      "Removal of electrical fittings",
      "Kitchen Reno starts @ 1L"
    ], 
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" 
  },
  { 
    name: "Elite", 
    price: "₹2,09,842", 
    subtitle: "+ GST | Starting Price for 4' x 7'",
    brand: "Fixtures: Grohe*",
    features: [
      "Everything in Premium plus:",
      "Elite Grohe/Toto Integration",
      "Designer somany wall tiles",
      "Precision PCC & Tile laying",
      "German-Engineered Diverters",
      "Luxury Hand shower with rail",
      "Premium Granite Finishes",
      "Advanced Plumbing Layout",
      "Deep cleaning & Site ready",
      "Limited Lifetime Craftsmanship"
    ], 
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400" 
  },
];

interface PricingProps {
  onOpenBooking: () => void;
}

export function Pricing({ onOpenBooking }: PricingProps) {
  return (
    <section className="snap-section bg-background flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden py-20" id="pricing">
      <div className="max-w-container-max mx-auto h-full flex flex-col justify-center w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12 md:mb-16"
        >
          <span className="font-accent text-base md:text-lg text-primary mb-1 block">Renovation Packages</span>
          <h2 className="font-display text-3xl md:text-5xl text-on-surface tracking-tighter lowercase">transparent <span className="text-primary italic">pricing</span> for your home</h2>
          <p className="mt-4 font-body text-xs text-tertiary max-w-lg mx-auto uppercase tracking-widest leading-loose">Premium finishes. Fixed quotes. Zero surprises. <br /> Kitchen renovations start from ₹1 Lakh.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 flex flex-col group overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 ${tier.popular ? "ring-2 ring-primary/50" : "border border-blue-100"}`}
            >
              {tier.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-primary text-on-primary text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Most Popular</span>
                </div>
              )}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="font-accent text-3xl text-blue-950 mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <p className="font-display text-2xl text-primary font-bold">{tier.price}</p>
                    <span className="font-body text-[9px] text-tertiary uppercase tracking-widest">{tier.subtitle}</span>
                  </div>
                  <p className="font-mono text-[9px] text-primary uppercase tracking-[0.2em] font-bold mt-2">{tier.brand}</p>
                </div>

                <ul className="space-y-3 mb-10 flex-grow">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-[10px] md:text-[11px] text-blue-900/70 border-b border-blue-50 pb-2 last:border-0 font-body">
                      <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                 <button 
                  onClick={onOpenBooking}
                  className="w-full py-4 rounded-2xl bg-blue-950 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-xl"
                >
                  Book Site Visit
                </button>
                <p className="text-[7px] text-center text-tertiary uppercase tracking-widest mt-4 leading-relaxed">*Package includes select fixtures; final pricing may vary based on selections.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
