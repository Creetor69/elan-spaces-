import { motion } from "motion/react";
import { Check } from "lucide-react";

const TIERS = [
  { name: "Retreat", price: "Custom", features: ["Essential Spatial Planning", "Standard Material Selection", "Technical Consultation"], image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=400" },
  { name: "Sanctuary", price: "Premium", features: ["Full 3D Design Studio", "Global Material Sourcing", "Smart Lighting Integration", "Priority Studio Support"], image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
  { name: "Atelier", price: "Elite", features: ["Concierge Project Mgmt", "Bespoke Material R&D", "Full Home Integration", "Lifetime Vision Guarantee"], image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400" },
];

interface PricingProps {
  onOpenBooking: () => void;
}

export function Pricing({ onOpenBooking }: PricingProps) {
  return (
    <section className="snap-section bg-background flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto h-full flex flex-col justify-center w-full scale-95 md:scale-90">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-6 md:mb-10"
        >
          <span className="font-accent text-base md:text-lg text-primary mb-1 block">Involvement</span>
          <h2 className="font-display text-2xl md:text-4xl text-on-surface">Design Pathways</h2>
        </motion.div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar md:justify-center">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`min-w-[260px] md:min-w-[300px] snap-center relative rounded-xl p-8 flex flex-col group overflow-hidden shadow-xl ${tier.name === "Sanctuary" ? "border-2 border-primary/30" : "border border-white/10"}`}
            >
              <img 
                src={tier.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-30 group-hover:opacity-40" 
                alt={tier.name} 
              />
              <div className="absolute inset-0 bg-background/80 group-hover:bg-background/70 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-accent text-2xl mb-1">{tier.name}</h3>
                <p className="font-display text-sm text-primary mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-[11px] md:text-xs text-tertiary">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                 <button 
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-full border border-primary/20 text-[9px] md:text-[10px] font-semibold uppercase tracking-widest bg-white/10 hover:bg-primary hover:text-white transition-all duration-500 shadow-md"
                >
                  Discuss Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
