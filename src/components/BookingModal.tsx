import { motion, AnimatePresence } from "motion/react";
import { X, MessageSquare, Mail, ChevronRight, ChevronLeft, Sparkles, Check, Heart, Shield, Calendar } from "lucide-react";
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
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectTypes: [] as string[],
    package: "None",
    startDate: "",
    vision: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    projectTypes: "",
    startDate: ""
  });

  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        projectTypes: prefill?.projectTypes || [],
        package: prefill?.package || "None"
      }));
      // If prefilled, jump to correct step
      if (prefill?.projectTypes && prefill.projectTypes.length > 0) {
        setStep(2);
      } else {
        setStep(1);
      }
    }
  }, [isOpen, prefill]);

  const handleTypeToggle = (type: string) => {
    setFormData(prev => {
      const updatedTypes = prev.projectTypes.includes(type)
        ? prev.projectTypes.filter(t => t !== type)
        : [...prev.projectTypes, type];
      return { ...prev, projectTypes: updatedTypes };
    });
    setErrors(prev => ({ ...prev, projectTypes: "" }));
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors = { name: "", email: "", projectTypes: "", startDate: "" };
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "We request your signature name.";
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = "Your direct email is necessary to communicate.";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please input a valid email configuration.";
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (formData.projectTypes.length === 0) {
        newErrors.projectTypes = "Please select at least one creative focus.";
        isValid = false;
      }
    } else if (currentStep === 3) {
      if (!formData.startDate) {
        newErrors.startDate = "Please select a target starting schedule.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleWhatsAppSubmit = () => {
    const message = `Hello Elan Spaces! I'd like to arrange an official site visit.
Name: ${formData.name}
Email: ${formData.email}
Project Type(s): ${formData.projectTypes.join(", ") || "General Inquiry"}
${formData.projectTypes.includes("Bathroom") ? `Curated Package: ${formData.package}` : ""}
Starting Timeline: ${formData.startDate || "Not Specified"}
Design Vision: ${formData.vision || "None Specified"}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919731175911?text=${encodedMessage}`, "_blank");
    onClose();
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent("Elan Spaces - Custom Site Visit Request");
    const body = encodeURIComponent(`Hello Elan Spaces! My name is ${formData.name}. I'd like to arrange an official site visit for my residence.

Full Details:
- Name: ${formData.name}
- Email Coordinate: ${formData.email}
- Project Area(s): ${formData.projectTypes.join(", ") || "General Inquiry"}
${formData.projectTypes.includes("Bathroom") ? `- Chosen Package: ${formData.package}\n` : ""}- Targeted Timeline: ${formData.startDate || "Not Specified"}

Aesthetic Vision & Notes:
${formData.vision || "No additional design details provided yet."}

Please reach out to me with the available slots for the spatial assessment.`);

    window.open(`mailto:contact@elanspacesbangalore.in?subject=${subject}&body=${body}`, "_self");
    onClose();
  };

  const projectOptions = [
    { name: "Home", isLabel: "Living, Villas & full spaces" },
    { name: "Kitchen", isLabel: "Ateliers, modular chef setup starts ₹1L+" },
    { name: "Bathroom", isLabel: "Sanctuaries, custom wellness specs" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />
          
          {/* Main Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-[0_30px_90px_rgba(28,39,44,0.18)] overflow-hidden border border-[#2c4755]/10 flex flex-col max-h-[92vh]"
          >
            {/* Top Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#faf9f6] text-[#2c4755] hover:text-[#8f8173] transition-colors z-30"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Progress indicator ribbon at very top */}
            <div className="w-full h-1 bg-slate-100 relative">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-primary"
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="p-8 md:p-10 overflow-y-auto no-scrollbar flex-grow">
              
              {/* Header Context */}
              <div className="mb-8 flex justify-between items-start">
                <div>
                  <span className="font-accent text-[10px] md:text-xs tracking-[0.25em] text-secondary block mb-1.5 uppercase font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
                    Spatial Atelier Survey
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-on-surface lowercase leading-tight">
                    curate your next <span className="text-primary italic font-serif">retreat</span>
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-tertiary bg-surface/80 border border-[#2c4755]/5 px-3 py-1 rounded-full uppercase tracking-widest font-semibold shrink-0">
                  Step {step} of {totalSteps}
                </span>
              </div>

              {/* Form Content Steps with Transition */}
              <div className="relative min-h-[220px]">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5 text-left"
                    >
                      <h4 className="font-sans font-medium text-sm text-secondary tracking-tight mb-2">
                        To tailor our blueprints, let us begin with your coordinates.
                      </h4>
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8f8173] mb-2 block font-semibold">Your Signature Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({...formData, name: e.target.value});
                            if (e.target.value.trim()) setErrors(prev => ({ ...prev, name: "" }));
                          }}
                          className={`w-full bg-[#faf9f6] border ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-[#2c4755]/10'} rounded-xl p-4 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-on-surface outline-none`} 
                          placeholder="e.g. Ananth Kumar" 
                        />
                        {errors.name && <p className="text-red-500 font-mono text-[9px] mt-1.5 font-medium">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8f8173] mb-2 block font-semibold">Direct Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({...formData, email: e.target.value});
                            if (e.target.value.trim()) setErrors(prev => ({ ...prev, email: "" }));
                          }}
                          className={`w-full bg-[#faf9f6]/80 border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-[#2c4755]/10'} rounded-xl p-4 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-on-surface outline-none`} 
                          placeholder="e.g. ananth@domain.com" 
                        />
                        {errors.email && <p className="text-red-500 font-mono text-[9px] mt-1.5 font-medium">{errors.email}</p>}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-left"
                    >
                      <h4 className="font-sans font-medium text-sm text-secondary tracking-tight">
                        What spatial zones are we redesigning?
                      </h4>
                      <p className="font-body text-xs text-tertiary font-light leading-relaxed mb-1">
                        Select one or more bespoke commissioning areas for our physical laser measurements.
                      </p>
                      
                      <div className="space-y-3 pt-1">
                        {projectOptions.map(option => {
                          const isSelected = formData.projectTypes.includes(option.name);
                          return (
                            <button
                              key={option.name}
                              type="button"
                              onClick={() => handleTypeToggle(option.name)}
                              className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left group cursor-pointer ${
                                isSelected
                                  ? "bg-gradient-to-r from-surface-container-low to-white border-secondary shadow-md ring-1 ring-secondary/20"
                                  : "bg-[#faf9f6] border-[#2c4755]/10 hover:border-[#8f8173]/50"
                              }`}
                            >
                              <div className="flex flex-col">
                                <span className="font-sans text-xs font-semibold text-on-surface uppercase tracking-wider">{option.name} Spaces</span>
                                <span className="text-[10px] text-tertiary font-body font-light mt-0.5">{option.isLabel}</span>
                              </div>
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                                isSelected ? "bg-primary border-primary text-white" : "border-[#2c4755]/20 bg-white group-hover:border-[#8f8173]"
                              }`}>
                                {isSelected && <Check className="w-3 h-3 text-white" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {errors.projectTypes && <p className="text-red-500 font-mono text-[9px] mt-2 font-medium">{errors.projectTypes}</p>}
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5 text-left"
                    >
                      <h4 className="font-sans font-medium text-sm text-secondary tracking-tight">
                        Specifications & Schedules
                      </h4>

                      {/* Prefilled standard list from Services layer when Bathroom is checked */}
                      {formData.projectTypes.includes("Bathroom") ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-2"
                        >
                          <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8f8173] mb-1 block font-semibold">Choose Preferred Bathroom Standard</label>
                          <select 
                            value={formData.package}
                            onChange={(e) => setFormData({...formData, package: e.target.value})}
                            className="w-full bg-[#faf9f6] border border-[#2c4755]/10 rounded-xl p-4 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-on-surface outline-none appearance-none cursor-pointer"
                          >
                            <option value="None">Help me choose the ideal fixtures</option>
                            <option value="Essential Suite">Essential Suite (Cera Components)</option>
                            <option value="Premium Retreat">Premium Retreat (Jaquar Concealed)</option>
                            <option value="Elite Sanctuary">Elite Sanctuary (Kohler Premium)</option>
                            <option value="Imperial Grandeur">Imperial Grandeur (Kohler & Jacuzzi)</option>
                          </select>
                        </motion.div>
                      ) : (
                        <div className="bg-[#faf9f6] p-4 rounded-xl border border-primary/5 flex items-start gap-3">
                          <Heart className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <p className="text-[10px] text-tertiary leading-normal font-body font-light">
                            Selected layout focus will be custom priced using custom wood, structural, and masonry details during structural physical auditing.
                          </p>
                        </div>
                      )}

                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8f8173] mb-2 block font-semibold">Project Starting Timeline</label>
                        <select 
                          required
                          value={formData.startDate}
                          onChange={(e) => {
                            setFormData({...formData, startDate: e.target.value});
                            if (e.target.value) setErrors(prev => ({ ...prev, startDate: "" }));
                          }}
                          className={`w-full bg-[#faf9f6] border ${errors.startDate ? 'border-red-400' : 'border-[#2c4755]/10'} rounded-xl p-4 text-xs focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-on-surface outline-none cursor-pointer`}
                        >
                          <option value="">Select Target Schedule</option>
                          <option value="Immediately">Immediately (Within next 2 weeks)</option>
                          <option value="Within 1 month">Within 1 month</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="Just exploring/Planning ahead">Just exploring</option>
                        </select>
                        {errors.startDate && <p className="text-red-500 font-mono text-[9px] mt-1.5 font-medium">{errors.startDate}</p>}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5 text-left"
                    >
                      <h4 className="font-sans font-medium text-sm text-secondary tracking-tight">
                        Your Aesthetic Vision & Sending Portfolio
                      </h4>

                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8f8173] mb-1.5 block font-semibold">Describe your vision (optional)</label>
                        <textarea 
                          value={formData.vision}
                          onChange={(e) => setFormData({...formData, vision: e.target.value})}
                          className="w-full bg-[#faf9f6] border border-[#2c4755]/10 rounded-xl p-4 text-xs h-20 focus:ring-1 focus:ring-secondary focus:border-secondary transition-all font-body text-[#121517] outline-none resize-none" 
                          placeholder="E.g. fluted wood panels, sensory shower jets, matte black brassware, warm ambient layouts..." 
                        />
                      </div>

                      {/* Joint Elite Workspace Switch */}
                      <div className="pt-2">
                        <label className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8f8173] mb-3 block font-bold text-center">// DISPATCH DIRECT SYSTEM</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <button 
                            type="button"
                            onClick={handleWhatsAppSubmit}
                            className="flex items-center justify-center gap-2.5 py-4 bg-[#25d366] hover:bg-[#20ba5a] text-white font-mono font-bold text-[10px] rounded-xl uppercase tracking-[0.18em] transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                          >
                            <MessageSquare className="w-3.5 h-3.5 text-white shrink-0" />
                            Send Over WhatsApp
                          </button>

                          <button 
                            type="button"
                            onClick={handleEmailSubmit}
                            className="flex items-center justify-center gap-2.5 py-4 bg-[#2c4755] hover:bg-secondary text-white font-mono font-bold text-[10px] rounded-xl uppercase tracking-[0.18em] transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                          >
                            <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                            Send Over Email
                          </button>
                        </div>
                      </div>

                      <div className="bg-[#faf9f6] p-3 rounded-xl border border-primary/5 flex items-center justify-center gap-2 text-[10px] text-tertiary">
                        <Shield className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span className="font-body font-light">Direct address: contact@elanspacesbangalore.in</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Action Buttons footer inside modal */}
              <div className="mt-10 pt-6 border-t border-[#2c4755]/5 flex items-center justify-between">
                <div>
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-1.5 px-4 py-2 border border-[#2c4755]/10 hover:border-secondary rounded-xl text-xs font-mono text-tertiary uppercase tracking-widest hover:text-secondary transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Back
                    </button>
                  ) : (
                    <span className="text-[10px] font-mono text-tertiary/40 uppercase tracking-widest leading-none font-semibold">
                      // start curation
                    </span>
                  )}
                </div>

                <div>
                  {step < totalSteps && (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-1 bg-primary hover:bg-secondary text-white px-5 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-widest transition-all shadow-md cursor-pointer"
                    >
                      Continue
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              <p className="text-[8px] text-center text-tertiary uppercase tracking-widest mt-6 leading-relaxed font-light font-mono">
                * Senior representative will schedule spatial audit within 12 working hours
              </p>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
