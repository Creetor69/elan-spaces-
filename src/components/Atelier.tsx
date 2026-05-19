import { motion } from "motion/react";

const STEPS = [
  { 
    title: "Site Visit", 
    desc: "Our experts visit your Bengaluru home for technical assessment and measurements.",
    icon: "01"
  },
  { 
    title: "Design Studio", 
    desc: "We curate material boards and 3D renders based on your soul's vision.",
    icon: "02"
  },
  { 
    title: "Approval", 
    desc: "Detailed quotation and timeline finalization for a seamless experience.",
    icon: "03"
  },
  { 
    title: "Execution", 
    desc: "Master artisans execute civil, plumbing, and electrical works with precision.",
    icon: "04"
  },
  { 
    title: "Handover", 
    desc: "Deep cleaning and final walkthrough of your new sanctuary.",
    icon: "05"
  }
];

export function Atelier() {
  return (
    <section className="bg-white py-20 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-blue-50" id="atelier">
      <div className="max-w-container-max mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16 md:mb-24"
        >
          <span className="font-accent text-lg md:text-xl text-primary mb-2 block">Our Process</span>
          <h2 className="font-display text-3xl md:text-5xl text-blue-950 lowercase tracking-tighter">from <span className="text-primary italic">vision</span> to reality</h2>
          <p className="mt-4 font-body text-xs md:text-sm text-tertiary max-w-xl mx-auto uppercase tracking-widest">A simple 5-step journey to your sanctuary</p>
        </motion.div>

        <div className="relative">
          {/* Vertical/Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-blue-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-blue-100">
                  <span className="font-display text-xl font-bold">{step.icon}</span>
                </div>
                <h3 className="font-accent text-xl text-blue-950 mb-3">{step.title}</h3>
                <p className="font-body text-[10px] md:text-xs text-tertiary leading-relaxed px-4">
                  {step.desc}
                </p>
                
                {/* Arrow for mobile/md */}
                {idx < STEPS.length - 1 && (
                  <div className="lg:hidden mt-8 text-blue-100">
                    <div className="w-px h-8 bg-current mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
