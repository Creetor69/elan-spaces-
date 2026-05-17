import { motion } from "motion/react";
import { Instagram, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const whatsappNumber = "911234567890"; // Example number
  const instagramHandle = "elanspaces_blr"; // Example handle

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <motion.a
        href={`https://instagram.com/${instagramHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-600 shadow-xl border border-pink-100 group"
      >
        <Instagram className="w-5 h-5 group-hover:animate-pulse" />
      </motion.a>
      
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl group"
      >
        <MessageCircle className="w-7 h-7 group-hover:animate-bounce" />
        <span className="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg text-[10px] font-bold text-green-600 shadow-lg border border-green-50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
}
