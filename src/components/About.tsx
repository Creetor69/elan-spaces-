import { motion } from "motion/react";
import { Compass, PencilRuler } from "lucide-react";

export function About() {
  return (
    <section className="snap-section bg-surface flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-70 pointer-events-none" />

      {/* Angle compass overlay in top right */}
      <div className="absolute top-8 right-12 opacity-20 pointer-events-none hidden lg:block select-none">
        <svg className="w-32 h-32 text-primary stroke-current" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="25" strokeWidth="1" />
          <line x1="10" y1="50" x2="90" y2="50" strokeWidth="1" />
          <line x1="50" y1="10" x2="50" y2="90" strokeWidth="1" />
          <line x1="20" y1="20" x2="80" y2="80" strokeWidth="0.5" strokeDasharray="4 4" />
          <text x="54" y="24" className="font-mono text-[7px] fill-primary tracking-widest font-black">45° ATELIER OFFSET</text>
        </svg>
      </div>

      <div className="max-w-container-max mx-auto h-full flex flex-col md:flex-row items-center py-8 md:py-16 w-full gap-12 lg:gap-24 scale-90 md:scale-85 lg:scale-80 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex-1 w-full order-1 md:order-1 relative"
        >
          <div className="relative z-10">
            <span className="font-accent text-lg text-primary mb-2 block flex items-center gap-2">
              <PencilRuler className="w-4 h-4 text-primary" />
              The Elan Advantage
            </span>
            <h2 className="font-display text-4xl lg:text-7xl text-on-surface leading-[1.05] tracking-tight mb-8 relative">
              Why <br className="hidden md:block" />
              <span className="text-primary italic font-accent">Elan Spaces</span>?
              
              {/* Little vector star doodle under heading */}
              <span className="absolute -right-4 top-0 text-amber-400 animate-spin" style={{ animationDuration: '6s' }}>✦</span>
            </h2>
            <p className="font-body text-xs md:text-sm lg:text-base text-tertiary leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              Founded in Bengaluru by the visionary team behind <span className="font-bold text-primary">Dream Designs Pvt Ltd</span>, Elan Spaces brings over 25 years of mastery in transforming houses into sanctuaries.
            </p>
            <p className="font-body text-xs md:text-sm lg:text-base text-tertiary leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
              We don't just renovate; we curate. Every fixture, every stone, and every light is chosen to perform a symphony of peace, grounded in our rich heritage of South Indian craftsmanship and modern innovation.
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
          className="flex-1 text-center md:text-left order-2 md:order-2 relative"
        >
          {/* Architectural draft corner annotations */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40 pointer-events-none hidden lg:block" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40 pointer-events-none hidden lg:block" />
          
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-white border border-blue-100">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" alt="Process" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
          
          <p className="text-[9px] font-mono text-primary/60 mt-4 text-right uppercase tracking-[0.2em] hidden lg:block">
            Fig 1.2 — Spatial harmony layout blueprint reference
          </p>
        </motion.div>
      </div>
    </section>
  );
}

