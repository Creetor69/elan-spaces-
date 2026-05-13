import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export function Booking() {
  return (
    <section className="snap-section bg-surface flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-blue-100" id="booking">
      <div className="max-w-container-max mx-auto h-full flex flex-col md:flex-row items-center py-12 md:py-20 w-full gap-8 lg:gap-20">
        <div className="flex-1 text-center md:text-left">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <span className="font-accent text-base md:text-lg text-primary mb-2 block">Connection</span>
             <h2 className="font-display text-4xl lg:text-7xl text-on-surface mb-6 leading-tight lowercase tracking-tighter">begin your <br /><span className="text-primary italic">transformation</span></h2>
             <p className="font-body text-sm md:text-base text-tertiary max-w-md leading-relaxed hidden md:block">
               Our designers are ready to translate your soul's vision into a physical sanctuary. 
               Experience the Elan difference.
             </p>
           </motion.div>
        </div>

        <div className="flex-1 w-full max-w-xl relative">
            <motion.form 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-panel p-5 md:p-10 rounded-[2rem] space-y-4 md:space-y-6 border border-blue-200/30 bg-white/60 backdrop-blur-xl"
            >
               <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity">
                 <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Zen" />
               </div>
               <div className="relative z-10 space-y-3 md:space-y-5">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                   <div>
                     <label className="font-body text-[9px] uppercase tracking-widest text-blue-900 mb-1 block font-bold">Full Name</label>
                     <input type="text" className="w-full bg-white/80 border border-blue-200/50 rounded-lg p-3 md:p-4 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all font-body text-blue-950 placeholder:text-blue-900/40" placeholder="Your name" />
                   </div>
                   <div>
                     <label className="font-body text-[9px] uppercase tracking-widest text-blue-900 mb-1 block font-bold">Email Address</label>
                     <input type="email" className="w-full bg-white/80 border border-blue-200/50 rounded-lg p-3 md:p-4 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all font-body text-blue-950 placeholder:text-blue-900/40" placeholder="Email" />
                   </div>
                 </div>
                 <div>
                   <label className="font-body text-[9px] uppercase tracking-widest text-blue-900 mb-1 block font-bold">Project Type</label>
                   <div className="relative">
                    <select className="w-full bg-white/80 border border-blue-200/50 rounded-lg p-3 md:p-4 text-xs appearance-none text-blue-950 cursor-pointer">
                      <option className="bg-white text-blue-900">Residential Sanctuary</option>
                      <option className="bg-white text-blue-900">Commercial Spa</option>
                      <option className="bg-white text-blue-900">Technical Consultation</option>
                    </select>
                   </div>
                 </div>
                 <div>
                   <label className="font-body text-[9px] uppercase tracking-widest text-blue-900 mb-1 block font-bold">Your Soul's Vision</label>
                   <textarea className="w-full bg-white/80 border border-blue-200/50 rounded-lg p-3 md:p-4 text-xs h-20 md:h-32 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all font-body resize-none text-blue-950" placeholder="Atmosphere you seek..." />
                 </div>
                 <button className="w-full py-3.5 md:py-5 bg-blue-600 text-white font-body font-bold text-[10px] md:text-xs rounded-xl md:rounded-2xl uppercase tracking-[0.2em] hover:bg-blue-700 transition-all duration-500">
                   Submit for Review
                 </button>
               </div>
            </motion.form>
        </div>
      </div>
    </section>
  );
}
