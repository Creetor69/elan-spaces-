import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

interface BookingSectionProps {
  onOpenBooking: () => void;
}

export function Booking({ onOpenBooking }: BookingSectionProps) {
  return (
    <section className="bg-[#1c272c] text-white flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/5 py-24 md:py-32 relative" id="booking">
      {/* Blueprint grid subtle */}
      <div className="absolute inset-0 architectural-grid opacity-5 select-none pointer-events-none" />

      <div className="max-w-container-max mx-auto w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary mb-3 block uppercase font-semibold">Get Started</span>
          <h2 className="font-display text-4xl lg:text-7xl text-white mb-8 leading-tight lowercase">
            begin your <span className="text-secondary italic font-serif font-light">transformation</span> today
          </h2>
          <p className="font-body text-xs md:text-sm lg:text-base text-white/70 max-w-xl mx-auto mb-12 leading-relaxed font-light">
            From physical laser assessment to white-glove artisan implementation, our senior designers are prepared to translate your aesthetic goals into clean reality.
          </p>
          
          <button 
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-4 bg-[#faf9f6]/95 hover:bg-secondary text-primary hover:text-white font-mono font-bold text-[10px] md:text-xs px-12 md:px-16 py-4 md:py-5 rounded-full uppercase tracking-[0.2em] transition-all duration-500 shadow-xl overflow-hidden scale-105"
          >
            <span className="relative z-10">Arrange Site Visit</span>
            <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition-colors relative z-10" />
          </button>
          
          {/* Authentic contact details in structured row */}
          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-12 opacity-95 max-w-4xl mx-auto border-t border-white/5 pt-12 text-left">
             <div className="flex items-start gap-3.5">
               <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                 <Phone className="w-3.5 h-3.5" />
               </div>
               <div>
                 <p className="font-mono text-[8px] uppercase tracking-widest text-[#8f8173] font-semibold">call direct</p>
                 <a href="tel:+919731175911" className="text-white font-mono text-xs hover:text-secondary transition-colors mt-0.5 block font-bold">+91 97311 75911</a>
               </div>
             </div>

             <div className="flex items-start gap-3.5">
               <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                 <Mail className="w-3.5 h-3.5" />
               </div>
               <div>
                 <p className="font-mono text-[8px] uppercase tracking-widest text-[#8f8173] font-semibold">email office</p>
                 <a href="mailto:elanspacesblr@gmail.com" className="text-white font-mono text-xs hover:text-secondary transition-colors mt-0.5 block font-bold">elanspacesblr@gmail.com</a>
               </div>
             </div>

             <div className="flex items-start gap-3.5 max-w-sm">
               <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary shrink-0">
                 <MapPin className="w-3.5 h-3.5" />
               </div>
               <div>
                 <p className="font-mono text-[8px] uppercase tracking-widest text-[#8f8173] font-semibold">bengaluru atelier</p>
                 <span className="text-white/80 font-body text-xs leading-relaxed mt-0.5 block font-light">
                   Sarvagna Circle, 88, 1st Main Rd, AGS Layout, Bengaluru, Karnataka 560061
                 </span>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
