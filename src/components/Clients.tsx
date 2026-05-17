import { motion } from "motion/react";

const CLIENTS = [
  { name: "HAL", description: "Hindustan Aeronautics Limited" },
  { name: "ISRO", description: "Indian Space Research Organisation" },
  { name: "BHEL", description: "Bharat Heavy Electricals Limited" },
  { name: "HMT", description: "Hindustan Machine Tools" },
  { name: "Airtel", description: "Bharti Airtel" },
  { name: "BSNL", description: "Bharat Sanchar Nigam Limited" }
];

export function Clients() {
  return (
    <section className="bg-surface py-16 md:py-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-blue-50" id="clients">
      <div className="max-w-container-max mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 md:mb-16"
        >
          <span className="font-accent text-lg text-primary block mb-2">Partnerships</span>
          <h2 className="font-display text-3xl md:text-5xl text-blue-950 lowercase tracking-tighter">our <span className="text-primary italic">trusted</span> clients</h2>
          <p className="mt-4 font-body text-xs md:text-sm text-tertiary max-w-xl mx-auto">
            Decades of excellence in Bengaluru, serving the nation's most prestigious organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {CLIENTS.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white/50 rounded-2xl border border-blue-100/50 backdrop-blur-sm"
            >
              <span className="font-display text-2xl md:text-3xl text-blue-900 font-bold tracking-tighter">{client.name}</span>
              <span className="text-[8px] uppercase tracking-widest text-primary mt-2 font-mono text-center leading-tight">{client.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
