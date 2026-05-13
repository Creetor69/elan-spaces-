import { motion } from "motion/react";

const SERVICES = [
  { id: "01", title: "The Zen Suite", desc: "A minimalist sanctuary focusing on wood, stone, and natural light.", image: "https://images.unsplash.com/photo-1620626011761-9963d7b69763?auto=format&fit=crop&q=80&w=600" },
  { id: "02", title: "Modern Heritage", desc: "Classic luxury materials met with state-of-the-art smart home tech.", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=600" },
  { id: "03", title: "Luminous Oasis", desc: "Advanced lighting choreography that adjusts to your circadian rhythm.", image: "https://images.unsplash.com/photo-1507652313519-d45101a056df?auto=format&fit=crop&q=80&w=600" },
  { id: "04", title: "Technical Spa", desc: "High-performance hydrotherapy and invisible thermal controls.", image: "https://images.unsplash.com/photo-1542013936693-884638324262?auto=format&fit=crop&q=80&w=600" },
  { id: "05", title: "Organic Flow", desc: "Custom-carved natural stone basins and integrated waterfall systems.", image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=600" },
];

export function Services() {
  return (
    <section className="snap-section bg-background flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto w-full scale-95 md:scale-90">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-6 md:mb-10 text-center md:text-left"
        >
          <span className="font-accent text-base md:text-lg text-primary mb-1 block">Collections</span>
          <h2 className="font-display text-2xl md:text-4xl text-on-surface">Curated Bathroom Packages</h2>
        </motion.div>

        {/* Scrollable Container */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide no-scrollbar">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="min-w-[240px] md:min-w-[280px] lg:min-w-[320px] snap-center relative group rounded-xl overflow-hidden h-[280px] md:h-[350px] shadow-xl"
            >
              <img 
                src={service.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={service.title} 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div>
                  <span className="font-mono text-[10px] text-white/60 mb-2 block">{service.id}</span>
                  <h3 className="font-display text-lg md:text-xl text-white mb-2 leading-tight">{service.title}</h3>
                  <p className="font-body text-[11px] text-white/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-4">
                  <button className="text-[9px] uppercase tracking-widest font-semibold text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors">
                    Discover Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
