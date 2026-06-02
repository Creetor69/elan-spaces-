import { motion, AnimatePresence } from "motion/react";
import { X, MessageSquare, Mail } from "lucide-react";
import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    projectTypes?: string[];
    package?: string;
  } | null;
}

export function BookingModal({ isOpen, onClose, prefill }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectTypes: [] as string[],
    package: "None",
    startDate: "",
    vision: ""
  });

  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        projectTypes: prefill?.projectTypes || [],
        package: prefill?.package || "None"
      }));
    }
  }, [isOpen, prefill]);

  const handleTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type) 
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type]
    }));
  };

  const [submitMethod, setSubmitMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  const handleWhatsApp = () => {
    const message = `Hello Elan Spaces! I'd like to arrange an official site visit.
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectTypes.join(", ") || "General Inquiry"}
${formData.projectTypes.includes("Bathroom") ? `Curated Package: ${formData.package}` : ""}
Starting Timeline: ${formData.startDate || "Not Specified"}
Design Vision: ${formData.vision || "None Specified"}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919731175911?text=${encodedMessage}`, "_blank");
    onClose();
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Elan Spaces - Custom Site Visit Request");
    const body = encodeURIComponent(`Hello Elan Spaces! I'd like to arrange an official site visit.

Full Name: ${formData.name}
Client Email: ${formData.email}
Project Type(s): ${formData.projectTypes.join(", ") || "General Inquiry"}
${formData.projectTypes.includes("Bathroom") ? `Curated Package: ${formData.package}\n` : ""}Starting Timeline: ${formData.startDate || "Not Specified"}

Design Vision Details:
${formData.vision || "None specified."}

Sent from Elan Spaces Bangalore Portal.`);

    window.open(`mailto:contact@elanspacesbangalore.in?subject=${subject}&body=${body}`, "_self");
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitMethod === 'whatsapp') {
      handleWhatsApp();
    } else {
      handleEmail();
    }
  };

  const projectOptions = ["Home", "Kitchen", "Bathroom"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#121517]/50 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-[0_30px_70px_rgba(44,71,85,0.15)] overflow-y-auto max-h-[92vh] border border-[#2c4755]/10 no-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface text-primary transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8">
                <span className="font-accent text-xs md:text-sm tracking-[0.25em] text-secondary block mb-1 uppercase font-semibold">Direct Connection</span>
                <h3 className="font-display text-2xl md:text-3xl text-on-surface lowercase">
                  arrange a private <span className="text-primary italic font-serif">site visit</span>
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-tertiary mb-2 block font-medium">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#faf9f6] border border-[#2c4755]/10 rounded-xl p-4 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-on-surface outline-none" 
                      placeholder="e.g. Ananth Kumar" 
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-tertiary mb-2 block font-medium">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#faf9f6] border border-[#2c4755]/10 rounded-xl p-4 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-on-surface outline-none" 
                      placeholder="e.g. ananth@domain.com" 
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-tertiary mb-3 block font-medium">Project Focus (Select Multiple)</label>
                  <div className="flex flex-wrap gap-2.5">
                    {projectOptions.map(type => {
                      const selected = formData.projectTypes.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleTypeToggle(type)}
                          className={`px-5 py-2.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] transition-all font-medium ${
                            selected
                              ? "bg-primary text-white shadow-md border-transparent"
                              : "bg-[#faf9f6] text-on-surface border border-[#2c4755]/10 hover:border-secondary"
                          }`}
                        >
                          {type} {type === "Kitchen" && <span className="lowercase font-light font-sans opacity-60 ml-0.5">(starts ₹1L+)</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {formData.projectTypes.includes("Bathroom") && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-2"
                  >
                    <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-tertiary mb-2 block font-medium">Choose Prefilled Bathroom Standard</label>
                    <select 
                      value={formData.package}
                      onChange={(e) => setFormData({...formData, package: e.target.value})}
                      className="w-full bg-[#faf9f6]/90 border border-[#2c4755]/10 rounded-xl p-4 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-on-surface outline-none appearance-none"
                    >
                      <option value="None">Help me choose the ideal fixtures</option>
                      <option value="Essential Suite">Essential Suite (Cera Components)</option>
                      <option value="Premium Retreat">Premium Retreat (Jaquar Concealed)</option>
                      <option value="Elite Sanctuary">Elite Sanctuary (Kohler Premium)</option>
                      <option value="Imperial Grandeur">Imperial Grandeur (Kohler & Jacuzzi)</option>
                    </select>
                  </motion.div>
                )}

                <div>
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8f8173] mb-2 block font-semibold">Project Starting Timeline</label>
                  <select 
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    className="w-full bg-[#faf9f6] border border-[#2c4755]/10 rounded-xl p-4 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-on-surface outline-none"
                  >
                    <option value="">Select Target Schedule</option>
                    <option value="Immediately">Immediately (Within next 2 weeks)</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="Just exploring/Planning ahead">Just exploring</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-tertiary mb-2 block font-medium">Describe your vision</label>
                  <textarea 
                    value={formData.vision}
                    onChange={(e) => setFormData({...formData, vision: e.target.value})}
                    className="w-full bg-[#faf9f6] border border-[#2c4755]/10 rounded-xl p-4 text-xs h-20 focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-[#121517] outline-none resize-none" 
                    placeholder="E.g. fluted wood paneling, open walk-in wet room, matte black brassware..." 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    type="submit"
                    onClick={() => setSubmitMethod('whatsapp')}
                    className="flex items-center justify-center gap-2.5 py-4 bg-[#25d366] hover:bg-[#20ba5a] text-white font-mono font-bold text-[9px] md:text-[10px] rounded-xl uppercase tracking-[0.16em] md:tracking-[0.2em] transition-all duration-300 shadow-md group cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-white animate-bounce shrink-0" />
                    Send via WhatsApp
                  </button>

                  <button 
                    type="submit"
                    onClick={() => setSubmitMethod('email')}
                    className="flex items-center justify-center gap-2.5 py-4 bg-primary hover:bg-secondary text-white font-mono font-bold text-[9px] md:text-[10px] rounded-xl uppercase tracking-[0.16em] md:tracking-[0.2em] transition-all duration-300 shadow-md group cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-white shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    Send via Email
                  </button>
                </div>
                <p className="text-[8px] text-center text-tertiary uppercase tracking-widest font-light">Senior representative will schedule visit within 12 working hours</p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
