import { motion } from "motion/react";
import { useState } from "react";
import { Sparkles, HelpCircle } from "lucide-react";

export function Transformations() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="snap-section bg-[#1c272c] text-white flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden py-24 md:py-32 relative" id="transformations">
      
      {/* Structural technical backdrop overlay */}
      <div className="absolute inset-0 architectural-grid opacity-5 select-none pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 pointer-events-none" />

      <div className="max-w-container-max mx-auto h-full flex flex-col justify-center items-center w-full relative z-10">
        
        {/* Upper Editorial Titles */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="text-center mb-16 md:mb-20"
        >
          <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary mb-3 block uppercase font-semibold">Metamorphosis</span>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight lowercase">
            before & <span className="text-secondary italic font-serif font-light">after</span> transitions
          </h2>
          <p className="mt-4 font-body text-xs text-white/55 uppercase tracking-[0.25em] leading-relaxed max-w-lg mx-auto font-light">
            drag the cursor separator horizontally to witness the absolute spatial refinement.
          </p>
        </motion.div>

        {/* Visual interactive slider workspace */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-white/5 bg-[#12191b]"
        >
          {/* Historical Before View (Grayscale & grain) */}
          <div className="absolute inset-0 grayscale brightness-90 contrast-[1.12]">
            <img 
              src="https://i.ibb.co/Swy8W69x/old.jpg" 
              className="w-full h-full object-cover select-none pointer-events-none" 
              alt="Historical Bathroom structure" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/35 blend-multiply" />
          </div>
          
          {/* Enhanced After View (Color & vibrancy) */}
          <div 
            className="absolute inset-0 select-none pointer-events-none" 
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://i.ibb.co/4ZjRbJDR/new-batroom.jpg" 
              className="w-full h-full object-cover brightness-105 contrast-[1.05]" 
              alt="Enhanced Elan luxury bathroom sanctuary" 
              referrerPolicy="no-referrer"
            />
          </div>

          {/* HTML Slider Range Input Controller */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />

          {/* Polished sliding wire and brass bar */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-secondary shadow-2xl pointer-events-none z-10" 
            style={{ left: `${sliderPos}%` }}
          >
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-secondary text-white flex items-center justify-center text-xs shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-md"
            >
              <span className="font-mono text-[9px] tracking-widest font-semibold text-white select-none">↔</span>
            </motion.div>
            <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-px bg-white/20" />
          </div>
          
          {/* Glass floating tags */}
          <div className="absolute bottom-6 left-6 glass-panel px-4 py-2 rounded-lg text-[9px] text-white/70 pointer-events-none uppercase tracking-[0.25em] z-20 border border-white/5 bg-black/40 font-mono">
            HISTORICAL CONFIGURATION
          </div>
          <div className="absolute bottom-6 right-6 glass-panel px-4 py-2 rounded-lg text-[9px] text-secondary pointer-events-none uppercase tracking-[0.25em] z-20 border border-secondary/20 bg-[#1c272c]/80 font-mono font-semibold">
            ELAN WELLNESS SANCTUARY
          </div>
        </motion.div>
        
        {/* Summary Design Annotation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 text-center max-w-2xl px-4"
        >
          <p className="font-display text-lg md:text-xl text-white/80 italic leading-relaxed font-light">
            "We reconstruct spatial volumes to bring out balanced light, engineered concealments, and flawless technical waterproofing. Experience the physical metamorphosis."
          </p>
          <span className="font-mono text-[8px] text-[#8f8173]/70 uppercase tracking-widest block mt-4 font-semibold">// elan spaces design commission</span>
        </motion.div>
      </div>
    </section>
  );
}
