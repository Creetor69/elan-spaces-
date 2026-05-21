import { motion } from "motion/react";
import { useState } from "react";

export function Transformations() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="snap-section bg-surface flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto h-full flex flex-col justify-center items-center py-4 md:py-8 w-full scale-95 md:scale-90">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-6 md:mb-8"
        >
          <span className="font-accent text-lg md:text-xl text-primary mb-1 block">Feedback</span>
          <h2 className="font-display text-2xl md:text-5xl text-on-surface">What our customers say</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl aspect-[16/10] md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Before Image */}
          <div className="absolute inset-0 grayscale contrast-125">
            <img 
              src="https://i.ibb.co/Swy8W69x/old.jpg" 
              className="w-full h-full object-cover" 
              alt="Before" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          {/* After Image */}
          <div 
            className="absolute inset-0 select-none pointer-events-none" 
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://i.ibb.co/4ZjRbJDR/new-batroom.jpg" 
              className="w-full h-full object-cover brightness-110 contrast-110" 
              alt="After" 
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Slider UI */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-10" 
            style={{ left: `${sliderPos}%` }}
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs shadow-xl"
            >
              ↔
            </motion.div>
          </div>
          
          {/* Labels */}
          <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-[10px] text-white pointer-events-none uppercase tracking-widest z-10">Historical</div>
          <div className="absolute top-4 right-4 glass-panel px-4 py-1.5 rounded-full text-[10px] text-white border border-primary/40 pointer-events-none uppercase tracking-widest z-10 bg-primary/20 backdrop-blur-md">Enhanced</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-display text-lg md:text-2xl text-on-surface italic max-w-2xl mx-auto leading-relaxed">
            From functional necessity to emotional sanctuary. Experience the Elan metamorphosis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
