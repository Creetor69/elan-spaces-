import { motion } from "motion/react";
import { Instagram, MessageCircle, Facebook, Linkedin } from "lucide-react";

export function FloatingActions() {
  const whatsappNumber = "919731175911"; // Official real WhatsApp contact
  const facebookUrl = "https://www.facebook.com/profile.php?id=61590353485519";
  const linkedinUrl = "https://www.linkedin.com/in/elan-spaces-9817ab410/";
  const instagramUrl = "https://www.instagram.com/elanspaces_blr/";

  const socialButtons = [
    { url: facebookUrl, icon: Facebook, color: "hover:bg-[#1877f2] hover:text-white hover:border-transparent text-primary" },
    { url: linkedinUrl, icon: Linkedin, color: "hover:bg-[#0a66c2] hover:text-white hover:border-transparent text-primary" },
    { url: instagramUrl, icon: Instagram, color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent text-primary" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 items-end select-none pointer-events-auto">
      {/* Side Social Icons */}
      {socialButtons.map((btn, idx) => (
        <motion.a
          key={idx}
          href={btn.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, x: -3 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary/10 transition-colors duration-300 ${btn.color}`}
        >
          <btn.icon className="w-4 h-4 shrink-0" />
        </motion.a>
      ))}
      
      {/* Prime WhatsApp Interactive Hotkey */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, x: -3 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-[0_15px_35px_rgba(37,211,102,0.3)] group relative border border-transparent"
      >
        <MessageCircle className="w-6 h-6 shrink-0 relative z-10" />
        <span className="absolute inset-0 bg-[#25d366] rounded-full animate-ping opacity-25" />
        <span className="absolute right-full mr-4 bg-white text-[#2c4755] border border-primary/10 shadow-lg px-3.5 py-2 rounded-xl text-[10px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-bold">
          Message Atelier
        </span>
      </motion.a>
    </div>
  );
}
