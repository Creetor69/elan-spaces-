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
    ["rgba(215, 240, 255, 0.4)", "rgba(0, 60, 140, 0.98)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0.5)", "rgba(34, 211, 238, 0.6)"]
  );

  const navTextColor = useTransform(
    scrollY,
    [0, 80],
    ["#003366", "#ffffff"]
  );

  const NAV_LINKS = [
    { name: "Why Elan", href: "#about" },
    { name: "Packages", href: "#services" },
    { name: "Reviews", href: "#transformations" },
    { name: "How It Works", href: "#atelier" },
    { name: "Materials", href: "#materials" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Booking", href: "#booking" },
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
      className={`fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-2 md:py-3 backdrop-blur-3xl rounded-full mx-auto w-[98%] max-w-container-max border shadow-[0_10px_40px_rgba(0,120,255,0.3)] transition-all duration-500 md:scale-95 lg:scale-90 ${
        scrolled ? "bg-gradient-to-r from-blue-900/80 via-cyan-900/60 to-blue-800/80 border-cyan-400/40" : ""
      }`}
    >
      <motion.a 
        style={{ color: navTextColor }}
        className="font-display text-sm md:text-xl tracking-tighter font-bold hover:opacity-80 transition-all duration-500 ease-in-out shrink-0" 
        href="#home"
        id="nav-logo"
      >
        Elan Spaces
      </motion.a>
      
      <div className="hidden lg:flex items-center gap-1 xl:gap-2">
        {NAV_LINKS.map((link) => (
          <motion.a 
            key={link.name}
            style={{ color: navTextColor }}
            className="text-[9px] xl:text-[10px] uppercase font-mono font-bold tracking-[0.15em] hover:text-cyan-400 px-3 py-1.5 rounded-full transition-all duration-300" 
            href={link.href}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={onOpenBooking}
          className="hidden md:block font-body text-[9px] bg-cyan-400 text-blue-950 px-5 py-2 rounded-full hover:bg-white transition-all duration-500 ease-in-out shadow-xl font-bold uppercase tracking-widest"
          id="nav-inquire-btn"
        >
          Begin
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
          className="absolute top-14 left-0 right-0 mt-2 mx-auto w-[94%] rounded-3xl p-5 lg:hidden flex flex-col gap-2 z-[90] border border-cyan-400/30 shadow-[0_20px_40px_rgba(0,80,180,0.3)] bg-blue-500/95 backdrop-blur-3xl ring-1 ring-white/10"
        >
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name}
              onClick={() => setIsMenuOpen(false)}
              className="text-[10px] uppercase font-mono font-bold tracking-[0.2em] text-white hover:text-cyan-100 transition-colors py-2.5 border-b border-white/10" 
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
            className="mt-3 bg-white text-blue-600 py-3 rounded-xl font-bold uppercase tracking-widest text-[9px] shadow-lg text-center"
          >
            Begin Journey
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
