import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const CLIENTS = [
  { 
    name: "Adarsh", 
    description: "Adarsh Developers", 
    highlight: true, 
    tagline: "Premier Estate Developer" 
  },
  { 
    name: "Prestige", 
    description: "Prestige Group", 
    highlight: true, 
    tagline: "Luxury Living Landmark" 
  },
  { 
    name: "Divyasree", 
    description: "Divyasree Developers", 
    highlight: false 
  },
  { 
    name: "HAL", 
    description: "Hindustan Aeronautics Limited", 
    highlight: false 
  },
  { 
    name: "ISRO", 
    description: "Indian Space Research Organisation", 
    highlight: false 
  }
];

export function Clients() {
  return (
    <section className="bg-surface py-20 md:py-28 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-blue-50 relative" id="clients">
      {/* Decorative background grid item */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f9_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-container-max mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <span className="font-accent text-lg text-primary block mb-2">Heritage & Trust</span>
          <h2 className="font-display text-3xl md:text-5xl text-blue-950 lowercase tracking-tighter">our <span className="text-primary italic font-accent">trusted</span> clients</h2>
          <p className="mt-4 font-body text-xs md:text-sm text-tertiary max-w-xl mx-auto uppercase tracking-widest leading-relaxed">
            Pristine civil orchestrations delivered for Bengaluru's most iconic developers and premium institutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {CLIENTS.map((client, idx) => {
            if (client.highlight) {
              return (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex-1 min-w-[280px] max-w-[360px] relative group p-8 bg-gradient-to-br from-amber-50/70 to-white rounded-3xl border-2 border-amber-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-[8px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-amber-600 animate-spin" />
                    Key Associate
                  </div>
                  <div className="text-left mt-2">
                    <span className="font-display text-3xl md:text-4xl text-amber-950 font-black tracking-tight block">
                      {client.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-amber-900 font-mono block mt-1 font-bold">
                      {client.description}
                    </span>
                    <p className="text-[8px] uppercase tracking-widest text-amber-600/80 font-mono mt-4 border-t border-amber-100 pt-3 italic">
                      {client.tagline}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 min-w-[200px] max-w-[260px] flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
              >
                <span className="font-display text-2xl text-blue-900 font-bold tracking-tight">
                  {client.name}
                </span>
                <span className="text-[8px] uppercase tracking-widest text-primary mt-2 font-mono text-center leading-tight">
                  {client.description}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

