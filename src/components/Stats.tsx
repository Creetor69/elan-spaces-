import { motion } from "motion/react";

export function Stats() {
  const stats = [
    { label: "completed sanctuaries", value: "1,500", suffix: "+" },
    { label: "customer satisfaction", value: "98", suffix: "%" },
    { label: "master artisans", value: "30", suffix: "+" },
    { label: "years of legacy", value: "25", suffix: "+" },
  ];

  return (
    <section className="bg-surface py-16 md:py-24 px-margin-mobile md:px-margin-desktop border-y border-primary/5 relative overflow-hidden">
      {/* Blueprint Grid Overlay subtle */}
      <div className="absolute inset-0 architectural-grid opacity-30 select-none pointer-events-none" />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary uppercase block mb-3 font-semibold">Heritage in Bengaluru</span>
          <h2 className="font-display text-3xl md:text-5xl text-on-surface leading-tight font-light lowercase">
            our legacy in <span className="text-primary italic font-serif">sanctuary design</span>
          </h2>
          <div className="w-16 h-[1px] bg-secondary/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="font-display text-4xl md:text-6xl text-primary font-light mb-3 flex items-baseline justify-center">
                <span>{stat.value}</span>
                <span className="text-xl md:text-2xl text-secondary ml-1 font-sans font-light">{stat.suffix}</span>
              </div>
              <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-tertiary font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
