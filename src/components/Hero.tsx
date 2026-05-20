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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      ref={containerRef}
      className="snap-section flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Decorative Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] z-10 pointers-events-none" />
      
      {/* Hand-drawn measurement doodle element 1 */}
      <div className="absolute top-24 left-12 z-20 pointer-events-none opacity-30 hidden md:block select-none">
        <svg className="w-40 h-24 text-primary stroke-current" viewBox="0 0 160 90" fill="none">
          <line x1="10" y1="10" x2="150" y2="10" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="10" y1="5" x2="10" y2="15" strokeWidth="2" />
          <line x1="150" y1="5" x2="150" y2="15" strokeWidth="2" />
          <path d="M20,30 L10,10 L30,20" strokeWidth="1.5" />
          <path d="M140,25 L150,10 L130,15" strokeWidth="1.5" />
          <text x="50" y="32" className="font-mono text-[9px] font-bold fill-primary tracking-wider">L = 2400 mm</text>
          <circle cx="80" cy="55" r="3" className="fill-blue-400 animate-ping" />
          <circle cx="80" cy="55" r="2" className="fill-primary" />
          <text x="90" y="58" className="font-mono text-[8px] fill-tertiary">DRAIN NODE</text>
        </svg>
      </div>

      {/* Hand-drawn organic sketch doodle element 2 (Sparkles / Flower-like design) */}
      <div className="absolute bottom-16 left-8 z-20 pointer-events-none opacity-40 select-none">
        <svg className="w-16 h-16 text-primary stroke-current animate-spin" style={{ animationDuration: '25s' }} viewBox="0 0 100 100" fill="none">
          <path d="M50,10 C50,30 30,50 10,50 C30,50 50,70 50,90 C50,70 70,50 90,50 C70,50 50,30 50,10 Z" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="50" cy="50" r="5" className="fill-background stroke-primary" strokeWidth="2" />
        </svg>
      </div>

      {/* Cinematic Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-background/10 to-background z-10"></div>
        <img 
          alt="Luxury Bathroom Interior" 
          className="w-full h-full object-cover object-center brightness-105 contrast-95"
          src="https://i.ibb.co/qFJ08ntQ/screen.png"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 max-w-container-max mx-auto w-full h-full flex flex-col md:flex-row items-center md:items-center px-margin-mobile md:px-margin-desktop md:gap-12">
        {/* Desktop Left / Mobile Top: Content */}
        <div className="flex-1 flex flex-col justify-center w-full mt-16 md:mt-0 text-center md:text-left relative">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="md:scale-95 lg:scale-100 origin-left"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-accent text-base md:text-lg text-primary mb-1 block flex items-center justify-center md:justify-start gap-2"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              Retreats
            </motion.span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-7xl text-on-surface mb-3 md:mb-5 leading-[1.05] relative">
              Architecture for <br className="hidden md:block" /> the <br className="md:hidden" />
              <motion.span 
                variants={soulVariants}
                initial="hidden"
                animate="visible"
                className="text-primary inline-flex relative"
              >
                {soulText.split("").map((char, index) => (
                  <motion.span key={index} variants={charVariants}>
                    {char}
                  </motion.span>
                ))}
                {/* Hand-drawn swirl outline under Soul. */}
                <svg className="absolute top-full left-0 w-full h-4 text-primary/70 pointer-events-none select-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,2 M90,3 C60,7 30,8 10,7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-body text-xs md:text-sm lg:text-base text-tertiary mb-5 md:mb-8 max-w-xs md:max-w-md mx-auto md:mx-0 leading-relaxed"
            >
              We craft bespoke bathroom sanctuaries in Bengaluru that blend organic minimalism with ethereal tranquility.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap gap-3 justify-center md:justify-start relative">
                <button 
                  onClick={onOpenBooking}
                  className="bg-primary text-on-primary font-body font-semibold text-[9px] md:text-xs px-10 md:px-14 py-3 md:py-4 rounded-full uppercase tracking-widest hover:bg-on-primary-fixed transition-all duration-500 ease-in-out shadow-lg relative z-20"
                >
                  Book Site Visit
                </button>
                {/* Curly doodle arrow pointing to the button */}
                <div className="absolute left-[80%] bottom-[110%] z-10 pointer-events-none hidden lg:block select-none transform translate-y-2 opacity-60">
                  <svg className="w-16 h-12 text-primary stroke-current" viewBox="0 0 60 40" fill="none">
                    <path d="M10,10 Q25,35 45,15" strokeWidth="2" strokeLinecap="round" />
                    <path d="M38,16 L45,15 L43,23" strokeWidth="1.8" strokeLinecap="round" />
                    <text x="2" y="8" className="font-accent text-[9px] fill-primary italic font-bold">try here</text>
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Right / Mobile Middle: Visual Accent */}
        <div className="flex-1 hidden md:flex items-center justify-center relative">
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 lg:w-96 lg:h-96 bg-primary-container/20 rounded-full blur-[100px]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute glass-panel rounded-xl p-4 w-48 lg:w-64 border border-blue-100 z-20"
          >
             <p className="font-accent text-sm text-primary">25+ Years Experience</p>
             <p className="font-body text-[10px] text-tertiary mt-2">Pioneering Luxury in Bengaluru</p>
          </motion.div>
          
          {/* Decorative design sparkles doodle */}
          <div className="absolute right-10 top-0 pointer-events-none select-none opacity-40">
            <svg className="w-12 h-12 text-blue-400 stroke-current animate-pulse" viewBox="0 0 50 50" fill="none">
              <path d="M25,5 L25,45 M5,25 L45,25" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="25" cy="25" r="10" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

