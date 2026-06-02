import { motion } from "motion/react";
import { Compass, PencilRuler, Trees, ShieldAlert, Sparkles, Sliders } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Sparkles,
      title: "Tactile Materials",
      desc: "Swatches of genuine natural stone, hand-beaten metal, dry-grain oak, and organic microcement panels."
    },
    {
      icon: Trees,
      title: "Sustainable Sourcing",
      desc: "Water-conserving Kohler brassware and certified low-emission cabinetry constructed for long generational lifespans."
    },
    {
      icon: Sliders,
      title: "Waterproofing Rigor",
      desc: "Multi-layered German concrete membranes with dedicated post-application pressure-testing for flawless architectural integrity."
    }
  ];

  return (
    <section className="snap-section bg-surface flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden relative py-20 md:py-32" id="about">
      {/* Soft warm background tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background opacity-80" />

      {/* Elegant, minimalist frame accent */}
      <div className="absolute top-12 left-12 right-12 bottom-12 border border-primary/5 pointer-events-none rounded-[2.5rem] hidden lg:block" />

      <div className="max-w-container-max mx-auto h-full flex flex-col items-center justify-center relative z-10 w-full">
        
        {/* Editorial Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left"
          >
            <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary mb-3 md:mb-4 block flex items-center gap-2 uppercase font-semibold">
              <PencilRuler className="w-3.5 h-3.5 text-secondary shrink-0" />
              the spatial ethos
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-on-surface leading-[1.1] tracking-tight lowercase">
              why <span className="text-primary italic font-serif font-light">Elan Spaces</span> is the <br/> benchmark in Bengaluru
            </h2>
            <div className="w-20 h-[1px] bg-secondary/30 mt-8" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-left font-body text-xs md:text-sm text-tertiary leading-relaxed space-y-4 font-light lg:pt-8"
          >
            <p>
              Founded in Bengaluru by the veteran legacy crew behind the renowned <span className="font-medium text-primary">Dream Designs Pvt Ltd</span>, Elan Spaces represents the pure aesthetic and civil evolution of 25 years of luxury orchestration.
            </p>
            <p>
              We do not merely install tiles or align stock modular cabinets. We design with natural morning light trajectories, select stone counters with custom mineral veins, and execute flawless waterproofing arrays that last.
            </p>
          </motion.div>
        </div>

        {/* Visual Showcase & Core Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
          
          {/* Custom Visual Frame Left */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-secondary/30 pointer-events-none hidden lg:block" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-secondary/30 pointer-events-none hidden lg:block" />
            
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-[0_20px_50px_rgba(44,71,85,0.04)] bg-white border border-primary/5">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
                alt="Bespoke luxury interior composition" 
                className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </div>
          </motion.div>

          {/* Three Column Values Right */}
          <div className="lg:col-span-6 space-y-8 text-left pl-0 lg:pl-10">
            {values.map((v, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="flex gap-4 items-start relative group"
              >
                <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary bg-white shrink-0 group-hover:border-secondary transition-colors shadow-[0_8px_30px_rgba(44,71,85,0.02)]">
                  <v.icon className="w-4 h-4 text-primary shrink-0 group-hover:text-secondary transition-colors" />
                </div>
                <div>
                  <h4 className="font-sans font-medium text-base text-on-surface mb-1 tracking-tight">{v.title}</h4>
                  <p className="font-body text-xs md:text-sm text-tertiary leading-relaxed font-light">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
