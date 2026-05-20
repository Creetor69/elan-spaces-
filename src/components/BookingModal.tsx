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
    projectTypes: [] as string[],
    package: "None",
    startDate: "",
    vision: ""
  });

  const handleTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type) 
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type]
    }));
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Elan Spaces! I'd like to book a site visit.
Name: ${formData.name}
Email: ${formData.email}
Project Types: ${formData.projectTypes.join(", ")}
${formData.projectTypes.includes("Bathroom") ? `Package Selected: ${formData.package}` : ""}
Planning to Start: ${formData.startDate}
Vision/Notes: ${formData.vision}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919731175911?text=${encodedMessage}`, "_blank");
    onClose();
  };

  const projectOptions = ["Home", "Kitchen", "Bathroom"];

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
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-y-auto max-h-[90vh] border border-blue-100 no-scrollbar"
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
                <h3 className="font-display text-3xl text-blue-950 tracking-tighter">book site <span className="text-primary italic">visit</span></h3>
              </div>

              <form onSubmit={handleWhatsApp} className="space-y-6">
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
                  <label className="font-body text-[10px] uppercase tracking-widest text-blue-900/60 mb-3 block font-bold">Project Type (Select Multiple)</label>
                  <div className="flex flex-wrap gap-3">
                    {projectOptions.map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleTypeToggle(type)}
                        className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                          formData.projectTypes.includes(type)
                            ? "bg-primary text-white shadow-lg"
                            : "bg-blue-50 text-blue-950 border border-blue-100"
                        }`}
                      >
                        {type} {type === "Kitchen" && <span className="lowercase font-normal opacity-60 ml-1">(@1L+)</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.projectTypes.includes("Bathroom") && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-2"
                  >
                    <label className="font-body text-[10px] uppercase tracking-widest text-blue-900/60 mb-2 block font-bold">Select Bathroom Package</label>
                    <select 
                      value={formData.package}
                      onChange={(e) => setFormData({...formData, package: e.target.value})}
                      className="w-full bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs focus:ring-2 focus:ring-blue-400/40 transition-all font-body text-blue-950 outline-none appearance-none"
                    >
                      <option value="None">Help me choose</option>
                      <option value="Essential">Essential (Standard - Cera)</option>
                      <option value="Premium">Premium (Popular - Jaquar)</option>
                      <option value="Elite">Elite (Luxury - Grohe)</option>
                      <option value="Imperial">Imperial (Ultra Luxury - Kohler & Jacuzzi)</option>
                    </select>
                  </motion.div>
                )}

                <div>
                  <label className="font-body text-[10px] uppercase tracking-widest text-blue-900/60 mb-2 block font-bold">When do you plan to start?</label>
                  <select 
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    className="w-full bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs focus:ring-2 focus:ring-blue-400/40 transition-all font-body text-blue-950 outline-none appearance-none"
                  >
                    <option value="">Select Timeline</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-[10px] uppercase tracking-widest text-blue-900/60 mb-2 block font-bold">Brief Vision</label>
                  <textarea 
                    value={formData.vision}
                    onChange={(e) => setFormData({...formData, vision: e.target.value})}
                    className="w-full bg-blue-50 border border-blue-100 rounded-xl p-4 text-xs h-20 focus:ring-2 focus:ring-blue-400/40 transition-all font-body text-blue-950 outline-none resize-none" 
                    placeholder="Any specific brands or themes in mind?" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-5 bg-blue-600 text-white font-body font-bold text-xs rounded-2xl uppercase tracking-[0.2em] hover:bg-blue-700 transition-all duration-500 shadow-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  Request Site Visit
                </button>
                <p className="text-[9px] text-center text-blue-900/40 italic font-body">Expert consultation in Bengaluru within 24 hours</p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
