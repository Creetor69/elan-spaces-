import { motion } from "motion/react";

const MATERIALS = [
  { name: "Aegean Marble", origin: "Greece", image: "https://images.unsplash.com/photo-1544450172-23f2ec80bc2f?auto=format&fit=crop&q=80&w=600" },
  { name: "Oak Driftwood", origin: "Japan", image: "https://images.unsplash.com/photo-1510519133418-66a36bc4781d?auto=format&fit=crop&q=80&w=600" },
  { name: "Limestone Slate", origin: "Spain", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600" },
  { name: "Brushed Brass", origin: "Italy", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=600" },
];

export function Materials() {
  return (
    <section className="snap-section bg-surface flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto h-full flex flex-col justify-center w-full scale-90 md:scale-85 lg:scale-80">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-8 md:mb-12"
        >
          <span className="font-accent text-lg md:text-xl text-primary mb-1 block">Curation</span>
          <h2 className="font-display text-3xl md:text-5xl text-on-surface">Material Palette</h2>
        </motion.div>

        <div className="flex gap-6 md:gap-12 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar md:justify-center px-4">
          {MATERIALS.map((mat, idx) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="min-w-[220px] md:min-w-[300px] snap-center flex flex-col group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-2xl relative border border-white/20">
                 <img src={mat.image} alt={mat.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-colors" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="font-display text-xl md:text-2xl text-white mb-1">{mat.name}</h4>
                    <p className="font-body text-[10px] text-white/60 uppercase tracking-[0.2em]">{mat.origin}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
