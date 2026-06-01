import { motion } from "motion/react";
import { Sparkles, Trophy } from "lucide-react";

const CLIENTS = [
  { 
    name: "Adarsh", 
    description: "Adarsh Developers", 
    highlight: true, 
    tagline: "Premier High-End Estates & Villas" 
  },
  { 
    name: "Prestige", 
    description: "Prestige Group", 
    highlight: true, 
    tagline: "Ultra-Luxury Living Landmarks" 
  },
  { 
    name: "Divyasree", 
    description: "DivyaSree Developers", 
    highlight: false 
  },
  { 
    name: "HAL", 
    description: "Hindustan Aeronautics Ltd", 
    highlight: false 
  },
  { 
    name: "ISRO", 
    description: "Indian Space Research Org", 
    highlight: false 
  }
];

export function Clients() {
  return (
    <section className="bg-surface py-24 md:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-primary/5 relative font-light" id="clients">
      {/* Light wire elements background */}
      <div className="absolute inset-0 architectural-grid opacity-20 select-none pointer-events-none" />

      <div className="max-w-container-max mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="mb-16 md:mb-20"
        >
          <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary mb-3 block uppercase font-semibold">
            <Trophy className="w-3.5 h-3.5 text-secondary inline-block mr-1.5 shrink-0 align-text-bottom" />
            Institutional Trust
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-on-surface leading-tight lowercase">
            our <span className="text-primary italic font-serif font-light">trusted</span> associations
          </h2>
          <div className="w-16 h-[1px] bg-secondary/35 mx-auto mt-6" />
          <p className="mt-4 font-body text-xs md:text-sm text-tertiary max-w-xl mx-auto uppercase tracking-widest leading-loose">
            Flawless civil installations delivered for Bengaluru's most notable builders and national establishments.
          </p>
        </motion.div>

        {/* Association Tiles */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {CLIENTS.map((client, idx) => {
            if (client.highlight) {
              return (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="flex-1 min-w-[280px] max-w-[360px] relative group p-8 bg-white rounded-2xl border border-primary/5 shadow-[0_15px_40px_rgba(44,71,85,0.02)] overflow-hidden transition-all duration-500 hover:border-secondary/30"
                >
                  <div className="absolute top-4 right-4 text-secondary text-[8px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/5">
                    ★ Key Partner
                  </div>
                  <div className="text-left mt-2">
                    <span className="font-display text-3xl text-on-surface font-light tracking-tight block">
                      {client.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-primary font-mono block mt-2 font-semibold">
                      {client.description}
                    </span>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-secondary font-mono mt-5 border-t border-primary/5 pt-3 mb-0 font-medium whitespace-nowrap">
                      {client.tagline}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex-1 min-w-[190px] max-w-[240px] flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-primary/5 shadow-[0_10px_35px_rgba(44,71,85,0.01)] hover:border-secondary/20 transition-all duration-500"
              >
                <span className="font-display text-2xl text-on-surface font-light tracking-tight">
                  {client.name}
                </span>
                <span className="text-[8px] uppercase tracking-[0.15em] text-secondary mt-2.5 font-mono text-center leading-tight font-semibold">
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
