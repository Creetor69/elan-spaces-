import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const soulText = "Soul.";
  const soulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      ref={containerRef}
      className="snap-section min-h-[95dvh] flex items-center justify-center bg-background relative overflow-hidden px-4 md:px-0"
    >
      {/* Delicate Architectural Blueprint lines for human crafted, highly artistic feel */}
      <div className="absolute top-24 left-0 right-0 h-px bg-primary/5 pointer-events-none" />
      <div className="absolute bottom-24 left-0 right-0 h-px bg-primary/5 pointer-events-none" />
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-primary/5 pointer-events-none hidden lg:block" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-primary/5 pointer-events-none hidden lg:block" />

      {/* Decorative Technical Coordinates (Asymmetrical elegant detail) */}
      <div className="absolute top-28 left-6 font-mono text-[9px] tracking-widest text-[#8f8173]/40 uppercase hidden md:block select-none">
        lat: 12.9716° n // long: 77.5946° e (bengaluru)
      </div>
      <div className="absolute bottom-28 right-6 font-mono text-[9px] tracking-widest text-[#8f8173]/40 uppercase hidden md:block select-none">
        system scale: full structure // ref: dd-2026
      </div>

      {/* Dynamic light ambient glow */}
      <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Cinematic Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/45 to-background z-10" />
        <img 
          alt="Luxury Bathroom Interior" 
          className="w-full h-full object-cover object-center brightness-105 contrast-[0.98] transition-transform duration-[4000ms] ease-out-quint scale-[1.03]"
          src="https://i.ibb.co/qFJ08ntQ/screen.png"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 max-w-container-max mx-auto w-full h-full flex flex-col md:flex-row items-center justify-center py-20 px-margin-mobile md:px-margin-desktop md:gap-16">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center w-full text-center md:text-left relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-accent text-[11px] md:text-xs tracking-[0.25em] text-secondary mb-3 block flex items-center justify-center md:justify-start gap-2 uppercase font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse shrink-0" />
              SOCIALLY CURATED RETREATS
            </motion.span>

            <h1 className="font-display text-4xl md:text-6xl lg:text-8xl text-on-surface mb-6 md:mb-8 leading-[1.05] tracking-tight">
              architecture <br className="hidden md:block" /> for the <br />
              <motion.span 
                variants={soulVariants}
                initial="hidden"
                animate="visible"
                className="text-primary inline-flex relative italic font-serif font-light"
              >
                {soulText.split("").map((char, index) => (
                  <motion.span key={index} variants={charVariants} className="inline-block hover:text-secondary hover:skew-x-3 transition-transform duration-300">
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.2 }}
              className="font-body text-xs md:text-sm lg:text-base text-tertiary mb-8 md:mb-12 max-w-xs md:max-w-md mx-auto md:mx-0 leading-relaxed font-light"
            >
              We compose bespoke bathroom and culinary retreats in Bengaluru, marrying rough organic elements with architectural lighting to elevate your morning sequence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              className="flex justify-center md:justify-start"
            >
              <button 
                onClick={onOpenBooking}
                className="group relative bg-primary text-white font-body font-medium text-[10px] md:text-xs px-10 md:px-14 py-4 rounded-full uppercase tracking-widest hover:bg-secondary hover:shadow-xl transition-all duration-500 ease-in-out shadow-lg z-20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore private sanctuaries
                </span>
                <div className="absolute inset-0 bg-secondary skew-y-12 translate-y-12 group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side Visual Panel */}
        <div className="flex-1 hidden md:flex items-center justify-end relative pl-12">
          {/* Subtle spinning star circle backdrop representing architectural detail */}
          <div className="absolute -left-12 top-1/4 select-none pointer-events-none opacity-20 text-primary animate-spin" style={{ animationDuration: '40s' }}>
            ✶ ✶ ✶
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-2xl p-8 w-64 lg:w-80 border border-primary/5 z-20 shadow-[0_30px_70px_rgba(44,71,85,0.08)] bg-white/80"
          >
             <p className="font-accent text-sm text-secondary font-semibold tracking-[0.2em] uppercase">25+ Years of Trust</p>
             <div className="w-12 h-[1px] bg-secondary/30 my-4" />
             <p className="font-body text-xs text-tertiary leading-relaxed font-light">
               Perfecting sophisticated structural engineering and hand-carved stone artistry in Bengaluru's most discerning luxury communities.
             </p>
             <p className="font-mono text-[8px] text-[#8f8173]/60 uppercase tracking-widest mt-6">
               ESTABLISHED 2001 // DREAM DESIGNS LEGACY
             </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative center scroll mouse/line element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="font-mono text-[8px] text-tertiary uppercase tracking-[0.3em]">scroll</span>
        <div className="w-[1px] h-10 bg-primary/25 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 h-4 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}

