import { motion } from "motion/react";
import { Compass, PenTool, ClipboardCheck, Drill, KeyRound } from "lucide-react";

const STEPS = [
  { 
    title: "Site Visit & Audit", 
    desc: "Our senior design consultants visit your Bengaluru home for detailed physically oriented laser measurements and structural load audits.",
    icon: Compass,
    num: "01 // INDEX"
  },
  { 
    title: "Tactile Curation", 
    desc: "We coordinate customized moodboards presenting premium stone-veining swatches, microcement panel options, and immersive 3D spatial rendering layouts.",
    icon: PenTool,
    num: "02 // LAYOUT"
  },
  { 
    title: "Zero-Creep Proposal", 
    desc: "A completely itemized transparent bill of materials. Once signed, pricing is guaranteed with absolutely zero budget leakages or timelines slip.",
    icon: ClipboardCheck,
    num: "03 // BILL"
  },
  { 
    title: "Civil Orchestration", 
    desc: "Our veteran in-house crews complete demolition, install silent plumbing lines, execute multi-layer membrane waterproofing, and layer custom masonry panels.",
    icon: Drill,
    num: "04 // ENFORCE"
  },
  { 
    title: "Peaceful Handover", 
    desc: "Pressure load tests, technical checklist validation, deep anti-dust clinical cleaning, and the final, beautiful walk-through of your quiet sanctuary.",
    icon: KeyRound,
    num: "05 // ASSIGN"
  }
];

export function Atelier() {
  return (
    <section className="bg-white py-24 md:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-primary/10 relative" id="atelier">
      {/* Blueprint grid effect background */}
      <div className="absolute inset-0 architectural-grid opacity-15 select-none pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        
        {/* Process Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="text-center mb-20 md:mb-28"
        >
          <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary mb-3 block uppercase font-semibold">Our Process</span>
          <h2 className="font-display text-4xl md:text-6xl text-on-surface leading-tight lowercase">
            from <span className="text-primary italic font-serif font-light">vision</span> to pristine completion
          </h2>
          <div className="w-16 h-[1px] bg-secondary/30 mx-auto mt-6" />
          <p className="mt-4 font-body text-xs md:text-sm text-tertiary max-w-xl mx-auto uppercase tracking-widest font-light">
            An uncompromising, highly structured 5-step journey to your luxury retreat
          </p>
        </motion.div>

        {/* Meticulous Timeline Cards Grid */}
        <div className="relative">
          {/* Subtle horizontal wire line connecting steps on large monitors */}
          <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[1px] bg-primary/10 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Fine Geometric Circular Icon Bracket */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 group-hover:border-secondary group-hover:shadow-[0_12px_40px_rgba(143,129,115,0.06)] transition-all duration-700 border border-primary/15 relative z-10 bg-gradient-to-tr from-white to-surface-container-low">
                    <IconComp className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-500 shrink-0" />
                  </div>

                  {/* Step Technical Markers */}
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#8f8173] font-semibold mb-2 block">
                    {step.num}
                  </span>

                  <h3 className="font-sans font-medium text-lg text-on-surface mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs text-tertiary leading-relaxed font-light">
                    {step.desc}
                  </p>
                  
                  {/* Chevron connector below on mobiles */}
                  {idx < STEPS.length - 1 && (
                    <div className="lg:hidden mt-8 text-primary/10">
                      <div className="w-[1px] h-8 bg-current mx-auto" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
