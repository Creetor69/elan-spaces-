import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const facebookUrl = "https://www.facebook.com/profile.php?id=61590353485519";
  const linkedinUrl = "https://www.linkedin.com/in/elan-spaces-9817ab410/";
  const instagramUrl = "https://www.instagram.com/elanspaces_blr/";

  const navLinks = [
    { name: "About Space", href: "#about" },
    { name: "Curated Packages", href: "#services" },
    { name: "Process Index", href: "#atelier" },
    { name: "Legacy History", href: "#legacy" },
    { name: "FAQ Board", href: "#faq" }
  ];

  return (
    <footer className="relative bg-[#faf9f6] pt-24 pb-16 px-margin-mobile md:px-margin-desktop z-10 border-t border-primary/5 text-left">
      {/* Decorative Technical grid lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-primary/5 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-primary/5 pointer-events-none hidden lg:block" />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-primary/5">
          
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-6">
              <img 
                src="https://i.ibb.co/fYpkJcgR/only-icon-no-bg.png" 
                alt="Elan Spaces Symbol" 
                className="w-12 h-12 object-contain hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-accent text-lg tracking-[0.15em] font-semibold text-primary uppercase">Elan Spaces</span>
                <span className="font-mono text-[7px] tracking-[0.25em] text-secondary uppercase font-medium mt-0.5">architectural beauty</span>
              </div>
            </div>
            <p className="font-display text-sm md:text-base text-tertiary font-light italic leading-relaxed max-w-sm mb-6">
              Compose bespoke bathroom sanctuaries and gourmet kitchen environments designed, certified, and engineered in Bengaluru.
            </p>
            {/* Visual Social Row */}
            <div className="flex gap-4">
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:text-white hover:bg-[#ee2a7b] transition-all duration-300">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8f8173] font-bold mb-6">sitemap index</h4>
            <ul className="grid grid-cols-1 gap-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-body text-xs md:text-sm text-tertiary hover:text-primary tracking-wide transition-colors font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8f8173] font-bold mb-1">bengaluru atelier</h4>
            
            <div className="flex gap-3.5 items-start max-w-sm">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <span className="font-body text-xs md:text-sm text-tertiary leading-relaxed font-light">
                Sarvagna Circle, 88, 1st Main Rd, AGS Layout, Bengaluru, Karnataka 560061
              </span>
            </div>

            <div className="flex gap-3.5 items-center">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <a href="mailto:contact@elanspacesbangalore.in" className="font-mono text-xs text-tertiary hover:text-primary tracking-wide font-medium">
                contact@elanspacesbangalore.in
              </a>
            </div>

            <div className="flex gap-3.5 items-center">
              <Phone className="w-4 h-4 text-secondary shrink-0" />
              <a href="tel:+919731175911" className="font-mono text-xs text-tertiary hover:text-primary tracking-wide font-bold">
                +91 97311 75911
              </a>
            </div>
          </div>

        </div>

        {/* Brand signature footer baseline */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-950/40 font-medium">
            © {currentYear} Elan Spaces // All rights reserved. Built with presence.
          </p>
          <div className="flex gap-6 opacity-40 font-mono text-[9px] tracking-widest uppercase">
            <a href="#" className="hover:text-primary">legal</a>
            <span className="select-none">•</span>
            <a href="#" className="hover:text-primary">spatial policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
