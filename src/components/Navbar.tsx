import { motion, useScroll, useTransform } from "motion/react";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  const navBackground = useTransform(
    scrollY,
    [0, 80],
    ["rgba(215, 240, 255, 0.4)", "rgba(181, 226, 250, 0.94)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0.5)", "rgba(14, 165, 233, 0.35)"]
  );

  const navTextColor = useTransform(
    scrollY,
    [0, 80],
    ["#003366", "#002855"]
  );

  const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Packages", href: "#services" },
    { name: "Atmosphere", href: "#transformations" },
    { name: "Process", href: "#atelier" },
    { name: "Legacy", href: "#legacy" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ 
        backgroundColor: navBackground,
        borderColor: navBorder,
      }}
      className={`fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-2 md:py-3 backdrop-blur-3xl rounded-full mx-auto w-[98%] max-w-container-max border transition-all duration-500 md:scale-95 lg:scale-90 ${
        scrolled ? "shadow-[0_12px_45px_rgba(14,165,233,0.25)] border-sky-300/40" : "shadow-[0_10px_40px_rgba(0,120,255,0.12)] border-white/20"
      }`}
    >
      <motion.a 
        style={{ color: navTextColor }}
        className="font-display text-sm md:text-xl tracking-tighter font-bold hover:opacity-80 transition-all duration-500 ease-in-out shrink-0 flex items-center gap-2 md:gap-3" 
        href="#home"
        id="nav-logo"
      >
        <img 
          src="https://i.ibb.co/fYpkJcgR/only-icon-no-bg.png" 
          alt="Elan Spaces Logo" 
          className="w-9 h-9 md:w-12 md:h-12 object-contain"
          referrerPolicy="no-referrer"
        />
        <span>Elan Spaces</span>
      </motion.a>
      
      <div className="hidden lg:flex items-center gap-1 xl:gap-2">
        {NAV_LINKS.map((link) => (
          <motion.a 
            key={link.name}
            style={{ color: navTextColor }}
            className="text-[11px] xl:text-[12px] uppercase font-mono font-bold tracking-[0.1em] hover:text-cyan-400 px-4 py-2 rounded-full transition-all duration-300" 
            href={link.href}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={onOpenBooking}
          className="hidden md:block font-body text-[9px] bg-cyan-400 text-blue-950 px-6 py-2.5 rounded-full hover:bg-white transition-all duration-500 ease-in-out shadow-xl font-bold uppercase tracking-widest"
          id="nav-inquire-btn"
        >
          Book Site Visit
        </button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-xl bg-blue-600/10 text-blue-900 lg:hidden relative z-[100]" 
          id="mobile-menu-btn"
        >
          <Menu className={`w-5 h-5 transition-transform ${isMenuOpen ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay - Semi-transparent Crystal Blue */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-14 left-0 right-0 mt-2 mx-auto w-[94%] rounded-3xl p-5 lg:hidden flex flex-col gap-2 z-[90] border border-cyan-300/40 shadow-[0_20px_45px_rgba(14,165,233,0.18)] bg-sky-50/95 backdrop-blur-3xl ring-1 ring-white/20"
        >
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name}
              onClick={() => setIsMenuOpen(false)}
              className="text-[12px] uppercase font-mono font-bold tracking-[0.2em] text-blue-950 hover:text-primary transition-colors py-3.5 border-b border-blue-100/55" 
              href={link.href}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-3 bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[9px] shadow-lg text-center hover:bg-blue-950 transition-colors"
          >
            Book Site Visit
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
