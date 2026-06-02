import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQS = [
  { 
    q: "How long does a home or sanctuary transformation take?", 
    a: "Most premium modular kitchen and luxury bathroom transformations are completed within 30 to 40 days of design sign-off. Comprehensive home and villa renovations range between 45 to 60 days depending on the structural scale." 
  },
  { 
    q: "What renovation services do you offer beyond luxury bathrooms?", 
    a: "Elan Spaces is a complete high-end residential renovation studio. Backed by the 25+ years expertise of our legacy team from Dream Designs Pvt Ltd, we specialize in gourmet modular kitchens, civil structural modifications, robust proofed waterproofing, premium flooring, and bespoke home interior expansions." 
  },
  { 
    q: "Can I hand-select my stones, quartz, and luxury fittings?", 
    a: "Absolutely. Our curated design atelier takes you through selecting rare slabs, premium quartz tech-surfaces, custom-veined marble, and professional-grade fixtures from elite global brands like Kohler, Toto, and Jaquar." 
  },
  { 
    q: "Do you work with fixed quotations and timelines?", 
    a: "Yes. One of our core values is absolute trust and transparency. Once the design board, material selections, and drawings are finalized, we issue a clear, fixed-price contract. No hidden charges, zero scope creep, and a guaranteed handover date." 
  },
  { 
    q: "Is there a warranty supporting your civil and technical works?", 
    a: "Every Elan Spaces project is covered by our comprehensive 10-year craftsmanship warranty on essential waterproofing and plumbing systems, giving you total peace of mind for decades to come." 
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-surface py-24 md:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-primary/5" id="faq">
      <div className="max-w-container-max mx-auto w-full">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary mb-3 block uppercase font-semibold">
            <HelpCircle className="w-4 h-4 text-secondary inline-block mr-1 shrink-0 align-text-bottom" />
            Curiosity
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-on-surface leading-tight lowercase">
            frequently <span className="text-primary italic font-serif font-light">asked</span> details
          </h2>
          <div className="w-16 h-[1px] bg-secondary/30 mx-auto mt-6" />
        </motion.div>
        
        {/* Interactive Accordion Layout */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.8 }}
                className="bg-white rounded-2xl border border-primary/5 shadow-[0_10px_35px_rgba(44,71,85,0.01)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className="font-sans text-base text-on-surface font-medium pr-6 group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-surface-container-low border border-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-primary" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-primary" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-primary/5 pt-4">
                        <p className="font-body text-xs md:text-sm text-tertiary leading-relaxed font-light">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
