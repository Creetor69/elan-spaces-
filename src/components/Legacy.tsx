import { motion } from "motion/react";
import { Award, ShieldCheck, Users, Briefcase } from "lucide-react";

const TEAM = [
  { name: "S. Murthy", role: "Founder & Lead Visionary", bio: "25+ years of architectural excellence. Founder of Dream Designs Pvt Ltd." },
  { name: "Priya R.", role: "Principal Designer", bio: "Specializes in organic minimalism and sustainable luxury materials." },
  { name: "Arjun K.", role: "Technical Director", bio: "Master of civil orchestration and zero-defect execution." },
];

export function Legacy() {
  return (
    <section className="bg-surface py-20 md:py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-blue-50" id="legacy">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-accent text-lg text-primary block mb-2">Our Heritage</span>
            <h2 className="font-display text-4xl md:text-6xl text-blue-950 lowercase tracking-tighter mb-8 leading-tight">
              from <span className="text-primary italic">dream designs</span> to elan spaces
            </h2>
            <div className="space-y-6 font-body text-sm text-tertiary leading-relaxed">
              <p>
                Our story began 25 years ago in the heart of Bengaluru. As the team behind <span className="text-primary font-bold">Dream Designs Pvt Ltd</span>, we have spent decades perfecting the art of civil orchestration and spatial harmony.
              </p>
              <p>
                Elan Spaces is the evolution of that journey—a dedicated studio focused exclusively on transforming bathrooms and kitchens into emotional sanctuaries. We bring the same rigor, honesty, and master-craftsmanship that has been our hallmark for a quarter-century.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: Award, title: "25+ Years", label: "of Experience" },
               { icon: ShieldCheck, title: "1500+", label: "Happy Clients" },
               { icon: Users, title: "Expert", label: "Craftsmen" },
               { icon: Briefcase, title: "Heritage", label: "Bengaluru Founded" }
             ].map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: idx * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center text-center"
               >
                 <item.icon className="w-6 h-6 text-primary mb-3" />
                 <h4 className="font-display text-xl text-blue-950 font-bold">{item.title}</h4>
                 <p className="font-mono text-[8px] uppercase tracking-widest text-tertiary">{item.label}</p>
               </motion.div>
             ))}
          </div>
        </div>

        <div className="border-t border-blue-100 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-accent text-lg text-primary block mb-2">The Atelier</span>
            <h3 className="font-display text-3xl md:text-5xl text-blue-950 lowercase tracking-tighter">meet the <span className="text-primary italic">visionaries</span></h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-white border border-blue-50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <Users className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <h4 className="font-display text-xl text-blue-950 font-bold mb-1">{member.name}</h4>
                <p className="font-mono text-[9px] uppercase tracking-widest text-primary mb-4">{member.role}</p>
                <p className="font-body text-xs text-tertiary leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
