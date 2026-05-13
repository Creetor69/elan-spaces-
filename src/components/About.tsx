import { motion } from "motion/react";

export function About() {
  return (
    <section className="snap-section bg-surface flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto h-full flex flex-col md:flex-row items-center py-8 md:py-16 w-full gap-12 lg:gap-24 scale-90 md:scale-85 lg:scale-80">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex-1 w-full order-1 md:order-1 relative"
        >
          <div className="relative z-10">
            <span className="font-accent text-lg text-primary mb-2 block">The Elan Advantage</span>
            <h2 className="font-display text-4xl lg:text-7xl text-on-surface leading-[1.05] tracking-tight mb-8">
              Why <br className="hidden md:block" />
              <span className="text-primary italic font-accent">Elan Spaces</span>?
            </h2>
            <p className="font-body text-xs md:text-sm lg:text-base text-tertiary leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
              We don't just renovate; we curate. Every fixture, every stone, and every light is chosen to perform a symphony of peace.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -top-20 -left-20 w-80 h-80 bg-primary rounded-full blur-[120px] pointer-events-none"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 text-center md:text-left order-2 md:order-2"
        >
          <div className="relative rounded-2xl overflow-hidden mb-12 aspect-video shadow-2xl">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" alt="Process" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8">
             <div>
               <p className="font-display text-2xl md:text-3xl text-primary mb-0.5">12+</p>
               <p className="font-body text-[9px] text-tertiary uppercase tracking-widest">Global Studios</p>
             </div>
             <div>
               <p className="font-display text-2xl md:text-3xl text-primary mb-0.5">450</p>
               <p className="font-body text-[9px] text-tertiary uppercase tracking-widest">Sanctuaries</p>
             </div>
             <div>
               <p className="font-display text-2xl md:text-3xl text-primary mb-0.5">15</p>
               <p className="font-body text-[9px] text-tertiary uppercase tracking-widest">Awards</p>
             </div>
             <div>
               <p className="font-display text-2xl md:text-3xl text-primary mb-0.5">2024</p>
               <p className="font-body text-[9px] text-tertiary uppercase tracking-widest">Founded</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
