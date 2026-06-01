import { motion } from "motion/react";
import { Award, ShieldCheck, Users, Briefcase } from "lucide-react";

export function Legacy() {
  const achievements = [
    { icon: Award, title: "25+ Years", label: "of Legacy" },
    { icon: ShieldCheck, title: "1,500+", label: "Completed Spaces" },
    { icon: Users, title: "Master Artisans", label: "Civil Experts" },
    { icon: Briefcase, title: "Bengaluru Core", label: "Founded & Guided" }
  ];

  return (
    <section className="bg-surface py-24 md:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-primary/5 relative" id="legacy">
       {/* Delicate structural architectural lines */}
       <div className="absolute top-0 bottom-0 left-10 w-px bg-primary/5 pointer-events-none hidden lg:block" />
       
       <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Narrative Block Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left"
          >
            <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary block mb-3 uppercase font-semibold">Our Heritage</span>
            <h2 className="font-display text-4xl md:text-6xl text-on-surface leading-tight lowercase tracking-tight mb-8">
              from <span className="text-primary italic font-serif font-light">dream designs</span> to elan spaces
            </h2>
            <div className="space-y-6 font-body text-xs md:text-sm lg:text-base text-tertiary leading-relaxed font-light">
              <p>
                Our story began 25 years ago in the heart of Bengaluru. As the core engineering forces behind the renowned <span className="text-primary font-medium">Dream Designs Pvt Ltd</span>, we have spent decades perfecting high-end civil orchestration, rigid waterproofing layout development, and complex domestic masonry.
              </p>
              <p>
                Elan Spaces is the direct premium evolution of that multi-decade journey—a specialized boutique design atelier conceived to craft flawless high-end bathroom retreats and designer kitchen sanctuaries. We bring the exact same rigorous material inspections, transparent honesty, and master craftsmanship that has defined our family legacy for over a quarter of a century.
              </p>
            </div>
            <div className="w-20 h-[1px] bg-secondary/35 mt-10" />
          </motion.div>

          {/* Achievement Grid Right */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
             {achievements.map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 15 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                 viewport={{ once: true }}
                 className="bg-white p-6 rounded-2xl border border-primary/5 shadow-[0_12px_40px_rgba(44,71,85,0.02)] flex flex-col items-center text-center hover:border-secondary/30 transition-all duration-500 hover:shadow-md"
               >
                 <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary mb-4 bg-[#faf9f6]">
                   <item.icon className="w-4 h-4 text-primary shrink-0" />
                 </div>
                 <h4 className="font-display text-lg md:text-xl text-on-surface font-light">{item.title}</h4>
                 <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-secondary mt-1.5 font-semibold">{item.label}</p>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
