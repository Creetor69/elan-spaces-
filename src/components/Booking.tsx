import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

interface BookingSectionProps {
  onOpenBooking: () => void;
}

export function Booking({ onOpenBooking }: BookingSectionProps) {
  return (
    <section className="snap-section bg-blue-950 flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-white/10 py-20" id="booking">
      <div className="max-w-container-max mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="font-accent text-lg md:text-xl text-primary mb-2 block">Direct Connection</span>
          <h2 className="font-display text-4xl lg:text-7xl text-white mb-8 leading-tight lowercase tracking-tighter">
            begin your <span className="text-primary italic">transformation</span> <br className="hidden md:block" /> today
          </h2>
          <p className="font-body text-sm md:text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            From technical consultation to white-glove implementation, our designers are ready to translate your soul's vision into a physical sanctuary. 
          </p>
          
          <button 
            onClick={onOpenBooking}
            className="group relative inline-flex items-center gap-4 bg-primary text-white font-body font-bold text-xs md:text-sm px-10 md:px-16 py-5 md:py-6 rounded-2xl uppercase tracking-widest hover:bg-white hover:text-blue-950 transition-all duration-500 shadow-2xl overflow-hidden scale-110 md:scale-125"
          >
            <span className="relative z-10">Book Site Visit</span>
            <div className="w-2 h-2 bg-white rounded-full group-hover:bg-blue-950 animate-pulse" />
          </button>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
             <div className="flex items-center gap-3">
               <Phone className="w-5 h-5 text-primary" />
               <span className="text-white font-mono text-[10px] tracking-widest uppercase">+91 12345 67890</span>
             </div>
             <div className="flex items-center gap-3">
               <Mail className="w-5 h-5 text-primary" />
               <span className="text-white font-mono text-[10px] tracking-widest uppercase">hello@elanspaces.com</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
