import { motion } from "motion/react";

const FAQS = [
  { q: "How long is a project?", a: "We've optimized our process for high-velocity luxury; typical sanctuary transformations take only 20 days." },
  { q: "Do you offer full renovation?", a: "Yes, our services range from specialized plumbing to advanced lighting and scent automation." },
  { q: "Can I choose my stone?", a: "Absolutely. Our concierge will source rare slabs from around the globe just for your vision." },
  { q: "Is there a warranty?", a: "Every Elan space is protected by our industry-leading 10-year comprehensive warranty." },
  { q: "Do you work internationally?", a: "While we are based in Manhattan, our consulting team handles global projects." }
];

export function FAQ() {
  return (
    <section className="snap-section bg-surface flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden" id="faq">
      <div className="max-w-container-max mx-auto w-full py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-accent text-lg md:text-xl text-primary mb-2 block">Curiosity</span>
          <h2 className="font-display text-4xl md:text-6xl text-on-surface leading-tight lowercase tracking-tighter">frequently <span className="text-primary italic">asked</span></h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-blue-200/30 pb-6"
            >
              <h4 className="font-display text-xs md:text-sm text-blue-900 mb-2 uppercase tracking-widest font-bold">{faq.q}</h4>
              <p className="font-body text-xs md:text-sm text-tertiary leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
