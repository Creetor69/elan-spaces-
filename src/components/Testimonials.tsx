import { motion } from "motion/react";

const REVIEWS = [
  { text: "Beyond luxury. It's an emotional recalibration every single morning. The 30-day timeline was met with precision in Indiranagar.", author: "Rajeshwari S., Indiranagar" },
  { text: "The light orchestration is sheer genius. My spa is my sanctuary. Their 25 years of experience truly shows in the finish.", author: "Venkatesh K., Jayanagar" },
  { text: "Pure excellence from design to the final white-glove setup. Best bathroom renovation team in Bengaluru.", author: "Lakshmi N., Sadashivnagar" },
  { text: "Elan Spaces turned my outdated bathroom into an organic masterpiece in exactly 30 days. Remarkable commitment.", author: "Karthik R., Whitefield" }
];

export function Testimonials() {
  return (
    <section className="snap-section bg-surface flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-blue-50" id="testimonials">
      <div className="max-w-container-max mx-auto w-full py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-accent text-lg md:text-xl text-primary mb-2 block">Voices</span>
          <h2 className="font-display text-4xl md:text-6xl text-on-surface leading-tight lowercase tracking-tighter">what our <span className="text-primary italic">customers</span> say</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-blue-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <p className="font-display text-sm text-blue-950 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <div className="w-8 h-px bg-blue-200 mb-4" />
                <p className="font-accent text-[10px] text-primary uppercase tracking-[0.2em] font-bold">— {review.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
