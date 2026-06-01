import { motion } from "motion/react";
import { Quote, Sparkles } from "lucide-react";

const REVIEWS = [
  { text: "The complete home transformation of our villa in HSR Layout was executed flawlessly. They redesigned our entire living, civil structures, and bedrooms. Truly Bengaluru's elite renovation team.", author: "Anand R., HSR Layout (Complete Home)" },
  { text: "Our gourmet kitchen in Koramangala is now a hub of beauty and functionality. From premium quartz countertops to soft-close cabinets under our exact budget—absolutely stellar job!", author: "Meera & Dev, Koramangala (Kitchen)" },
  { text: "Beyond luxury. It's an emotional recalibration every single morning. The 30-day timeline was met with absolute civil precision in Indiranagar.", author: "Rajeshwari S., Indiranagar (Bathroom)" },
  { text: "The light orchestration is sheer genius. My spa is my sanctuary. The legacy team from Dream Designs truly shows their 25+ years expertise in the final finish.", author: "Venkatesh K., Jayanagar (Bathroom)" },
  { text: "Pure excellence from design to the final white-glove setup. Best renovation and interior crew in Sadashivnagar.", author: "Lakshmi N., Sadashivnagar (Home Reno)" },
  { text: "Elan Spaces turned our outdated kitchen and bathrooms into premium organic sanctuaries under 40 days. Fixed quotation, zero hassle, beautiful outcomes.", author: "Karthik R., Whitefield (Full Reno)" }
];

export function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-primary/5" id="testimonials">
      <div className="max-w-container-max mx-auto w-full">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary mb-3 block uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-secondary inline-block mr-1.5 shrink-0 align-text-bottom animate-pulse" />
            Voices & Trust
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-on-surface leading-tight lowercase">what our <span className="text-primary italic font-serif font-light">customers</span> express</h2>
          <div className="w-16 h-[1px] bg-secondary/30 mx-auto mt-6" />
        </motion.div>
        
        {/* Testimonial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 rounded-2xl border border-primary/5 shadow-[0_15px_40px_rgba(44,71,85,0.01)] flex flex-col justify-between hover:border-secondary/35 transition-all duration-500 hover:shadow-md h-full relative"
            >
              {/* Subtle top left decorative quote symbol */}
              <div className="absolute top-6 left-6 text-primary/5 select-none pointer-events-none">
                <Quote className="w-10 h-10 transform -scale-x-100" />
              </div>

              <p className="font-display text-base text-on-surface/90 italic mb-8 leading-relaxed font-light relative z-10">
                "{review.text}"
              </p>

              <div>
                <div className="w-10 h-[1px] bg-secondary/30 mb-4" />
                <p className="font-mono text-[9px] text-[#8f8173] uppercase tracking-[0.18em] font-semibold">
                  {review.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
