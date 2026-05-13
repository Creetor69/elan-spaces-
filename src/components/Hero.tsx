import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
      className="snap-section flex items-center justify-center bg-background"
    >
      {/* Cinematic Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-background/10 to-background z-10"></div>
        <img 
          alt="Luxury Bathroom Interior" 
          className="w-full h-full object-cover object-center brightness-105 contrast-95"
          src="https://lh3.googleusercontent.com/aida/ADBb0uhTai54FfMxNUoNcPGmxL8p7qd6a3a33OXJCskDf8FaYQ81N5QTuVz3iu5PMfOTMQ9n5Z0FLV-A_bLJrs8dqbXh5w4iRFCE8PNJ5KgzPH2FfVljXAZvPWjGgtQoU5C1v6PKTWQdKcgg8IY004vjV9LLmxHT987KBemTx1zNNDIzSyYvsB-pKzI0YuFEE52uDj7GMBOocSzhheLODk5kU5_6Ld5-Ox3EYKrMoMhUUY78zNKc5gXobcfYBQ"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 max-w-container-max mx-auto w-full h-full flex flex-col md:flex-row items-center md:items-center px-margin-mobile md:px-margin-desktop md:gap-12">
        {/* Desktop Left / Mobile Top: Content */}
        <div className="flex-1 flex flex-col justify-center w-full mt-16 md:mt-0 text-center md:text-left">
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
              className="font-accent text-base md:text-lg text-primary mb-1 block"
            >
              Retreats
            </motion.span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-7xl text-on-surface mb-3 md:mb-5 leading-[1.05]">
              Architecture for <br className="hidden md:block" /> the <br className="md:hidden" />
              <motion.span 
                variants={soulVariants}
                initial="hidden"
                animate="visible"
                className="text-primary inline-flex"
              >
                {soulText.split("").map((char, index) => (
                  <motion.span key={index} variants={charVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-body text-xs md:text-sm lg:text-base text-tertiary mb-5 md:mb-8 max-w-xs md:max-w-md mx-auto md:mx-0 leading-relaxed"
            >
              We craft bespoke bathroom sanctuaries that blend organic minimalism with ethereal tranquility.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <button className="bg-primary text-on-primary font-body font-semibold text-[9px] md:text-xs px-5 md:px-8 py-2.5 md:py-3.5 rounded-full uppercase tracking-widest hover:bg-on-primary-fixed transition-all duration-500 ease-in-out shadow-lg">
                  Explore Portfolio
                </button>
                <button 
                  onClick={onOpenBooking}
                  className="bg-white text-primary border border-primary/20 font-body font-semibold text-[9px] md:text-xs px-5 md:px-8 py-2.5 md:py-3.5 rounded-full uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500 ease-in-out shadow-lg"
                >
                  Book Now
                </button>
              </div>
              
              <div className="flex gap-6 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                    <span className="font-bold text-[10px]">10Y</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-tertiary">Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                    <span className="font-bold text-[10px]">20D</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-tertiary">Delivery</span>
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
            className="absolute glass-panel rounded-xl p-4 w-48 lg:w-64"
          >
             <p className="font-accent text-sm text-primary">Est. 2024</p>
             <p className="font-body text-[10px] text-tertiary mt-2">Bespoke Architectural Excellence</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
