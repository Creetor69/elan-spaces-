import { motion } from "motion/react";

const PROJECTS = [
  {
    title: "The Ethereal Villa",
    location: "Malibu, California",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
    description: "A seamless transition between indoor and outdoor bathing spaces."
  },
  {
    title: "Stone & Light",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1000",
    description: "Harnessing natural stone and morning light for a meditative core."
  },
  {
    title: "Ocean Whisper",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1000",
    description: "Minimalist arcs that frame the Mediterranean horizon."
  }
];

export function Residences() {
  return (
    <section className="h-screen flex flex-col justify-center py-8 md:py-12 px-6 md:px-margin-desktop bg-background overflow-hidden" id="portfolio">
      <div className="max-w-container-max mx-auto w-full scale-90 md:scale-85 lg:scale-80 origin-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-6"
        >
          <span className="font-accent text-sm md:text-base text-primary mb-0.5 block">Portfolio</span>
          <h2 className="font-display text-xl md:text-3xl text-on-surface">Private Residences</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/2] md:aspect-[4/5] lg:aspect-[16/10] overflow-hidden rounded-lg md:rounded-xl mb-3 md:mb-4 shadow-soft group max-h-[40vh]">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center"
                >
                   <span className="font-body font-semibold text-white uppercase tracking-widest text-[10px] border border-white/40 px-5 py-2 rounded-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                     View Project
                   </span>
                </motion.div>
              </div>
              <p className="font-label-caps text-[9px] uppercase tracking-[0.2em] text-primary mb-1.5">{project.location}</p>
              <h3 className="font-display text-xl md:text-2xl text-on-surface mb-2">{project.title}</h3>
              <p className="font-body text-xs md:text-sm text-tertiary leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
