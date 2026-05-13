import { motion } from "motion/react";

export function Philosophy() {
  return (
    <section className="relative min-h-screen flex items-center py-8 md:py-12 px-6 md:px-margin-desktop bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center scale-90 md:scale-80 lg:scale-75 origin-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative order-2 lg:order-1"
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
            alt="Organic Design Philosophy" 
            className="rounded-lg md:rounded-xl shadow-2xl w-full h-[200px] md:h-[350px] lg:h-[450px] object-cover"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-primary-container/40 blur-3xl rounded-full z-[-1]" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col justify-center order-1 lg:order-2"
        >
          <span className="font-accent text-base md:text-lg text-primary mb-1 block">Essence</span>
          <h2 className="font-display text-xl md:text-3xl text-on-surface mb-3 md:mb-4 leading-tight">
            The Art of Organic <br /> Minimalism
          </h2>
          <div className="space-y-2 md:space-y-3">
            <p className="font-body text-xs md:text-sm text-tertiary leading-relaxed">
              We believe that true luxury is not found in excess, but in the intentional curation of space, light, and materiality. 
            </p>
            <p className="font-body text-xs md:text-sm text-tertiary leading-relaxed">
              Every curve of a basin, every texture of a wall, is choreographed to serve a single purpose: your well-being.
            </p>
            <div className="pt-2 md:pt-4">
              <button 
                className="font-body font-semibold text-[8px] md:text-[9px] border-b-2 border-primary text-primary uppercase tracking-widest hover:text-on-primary-fixed transition-colors duration-300"
                id="philosophy-read-more"
              >
                Our Manifesto —
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
