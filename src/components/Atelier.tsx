import { motion } from "motion/react";

const STEPS = [
  { 
    title: "Discovery Call", 
    desc: "We align your vision with our technical expertise to find your sanctuary's soul.",
    image: "https://images.unsplash.com/photo-1544450172-23f2ec80bc2f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "The Workshop", 
    desc: "Collaborative 3D design phase where materials and light orchestration are born.",
    image: "https://images.unsplash.com/photo-1510519133418-66a36bc4781d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Transformation", 
    desc: "White-glove implementation by master artisans, respecting your home's peace.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800"
  }
];

export function Atelier() {
  return (
    <section className="snap-section bg-background flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto h-full flex flex-col justify-center w-full scale-90 md:scale-85 lg:scale-80">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-8 md:mb-12"
        >
          <span className="font-accent text-lg md:text-xl text-primary mb-1 block">Process</span>
          <h2 className="font-display text-3xl md:text-5xl text-on-surface">How It Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src={step.image} 
                alt={step.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-mono text-[10px] text-white/50 mb-2 block tracking-widest">PHASE {idx + 1}</span>
                <h3 className="font-display text-2xl text-white mb-3">{step.title}</h3>
                <p className="font-body text-xs text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
