import { motion } from "motion/react";
import { Instagram, MessageCircle, Facebook, Linkedin } from "lucide-react";

export function FloatingActions() {
  const whatsappNumber = "919731175911"; // Real WhatsApp contact number
  const instagramHandle = "elanspaces_blr"; // Example handle
  const facebookUrl = "https://facebook.com/elanspaces";
  const linkedinUrl = "https://linkedin.com/company/elanspaces";

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3 items-end">
      {/* Facebook Link */}
      <motion.a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl border border-blue-100 group"
      >
        <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </motion.a>

      {/* LinkedIn Link */}
      <motion.a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 shadow-xl border border-blue-100 group"
      >
        <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </motion.a>

      {/* Instagram Link */}
      <motion.a
        href={`https://instagram.com/${instagramHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 shadow-xl border border-pink-100 group"
      >
        <Instagram className="w-4 h-4 group-hover:animate-pulse" />
      </motion.a>
      
      {/* WhatsApp Link */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl group relative"
      >
        <MessageCircle className="w-7 h-7 group-hover:animate-bounce" />
        <span className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg text-[10px] font-bold text-green-600 shadow-lg border border-green-50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest pointer-events-none">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
}

