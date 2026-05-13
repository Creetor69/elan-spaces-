import { motion, AnimatePresence } from "motion/react";
import { X, MessageSquare } from "lucide-react";
import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Residential Sanctuary",
    vision: ""
  });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Elan Spaces! I'm ${formData.name}. 
Email: ${formData.email}
Project: ${formData.type}
My Vision: ${formData.vision}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-100"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-blue-50 text-blue-900 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <span className="font-accent text-sm text-primary block mb-1">Direct Connection</span>
                <h3 className="font-display text-3xl text-blue-950 tracking-tighter">book your <span className="text-primary italic">journey</span></h3>
              </div>

              <form onSubmit={handleWhatsApp} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-[10px] uppercase tracking-widest text-blue-900/60 mb-2 block font-bold">Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs focus:ring-2 focus:ring-blue-400/40 transition-all font-body text-blue-950 outline-none" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div>
                    <label className="font-body text-[10px] uppercase tracking-widest text-blue-900/60 mb-2 block font-bold">Email</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs focus:ring-2 focus:ring-blue-400/40 transition-all font-body text-blue-950 outline-none" 
                      placeholder="Email address" 
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-[10px] uppercase tracking-widest text-blue-900/60 mb-2 block font-bold">Project Type</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs focus:ring-2 focus:ring-blue-400/40 transition-all font-body text-blue-950 outline-none appearance-none"
                  >
                    <option>Residential Sanctuary</option>
                    <option>Commercial Spa</option>
                    <option>Technical Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-[10px] uppercase tracking-widest text-blue-900/60 mb-2 block font-bold">Your Vision</label>
                  <textarea 
                    value={formData.vision}
                    onChange={(e) => setFormData({...formData, vision: e.target.value})}
                    className="w-full bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs h-24 focus:ring-2 focus:ring-blue-400/40 transition-all font-body text-blue-950 outline-none resize-none" 
                    placeholder="Describe the atmosphere you seek..." 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-5 bg-blue-600 text-white font-body font-bold text-xs rounded-2xl uppercase tracking-[0.2em] hover:bg-blue-700 transition-all duration-500 shadow-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                </button>
                <p className="text-[9px] text-center text-blue-900/40 italic font-body">Instant response typically within 15 minutes</p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
