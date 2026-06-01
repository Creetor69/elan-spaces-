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
    ["rgba(250, 249, 246, 0.4)", "rgba(250, 249, 246, 0.98)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ["rgba(44, 71, 85, 0.05)", "rgba(44, 71, 85, 0.12)"]
  );

  const navTextColor = useTransform(
    scrollY,
    [0, 80],
    ["#121517", "#2c4755"]
  );

  const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Packages", href: "#services" },
    { name: "Atmosphere", href: "#transformations" },
    { name: "Process", href: "#atelier" },
    { name: "Legacy", href: "#legacy" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        backgroundColor: navBackground,
        borderColor: navBorder,
      }}
      className={`fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-2 md:py-3.5 backdrop-blur-md rounded-full mx-auto w-[98%] max-w-container-max border transition-all duration-500 md:scale-95 lg:scale-90 ${
        scrolled ? "shadow-[0_12px_45px_rgba(44,71,85,0.06)] bg-[#faf9f6]/98" : "shadow-[0_10px_40px_rgba(44,71,85,0.02)]"
      }`}
    >
      <motion.a 
        style={{ color: navTextColor }}
        className="font-display text-sm md:text-xl tracking-tight hover:opacity-85 transition-all duration-500 ease-in-out shrink-0 flex items-center gap-2 md:gap-3" 
        href="#home"
        id="nav-logo"
      >
        <img 
          src="https://i.ibb.co/fYpkJcgR/only-icon-no-bg.png" 
          alt="Elan Spaces Logo" 
          className="w-9 h-9 md:w-11 md:h-11 object-contain hover:rotate-12 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col text-left">
          <span className="font-accent text-sm md:text-lg tracking-[0.1em] font-medium leading-none uppercase">Elan Spaces</span>
          <span className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] text-secondary mt-0.5 uppercase">architectural beauty</span>
        </div>
      </motion.a>
      
      <div className="hidden lg:flex items-center gap-1 xl:gap-2">
        {NAV_LINKS.map((link) => (
          <motion.a 
            key={link.name}
            style={{ color: navTextColor }}
            className="text-[10px] xl:text-[11px] uppercase font-mono font-medium tracking-[0.2em] hover:text-secondary px-3.5 py-2 rounded-full transition-all duration-300 relative group" 
            href={link.href}
          >
            <span className="relative z-10">{link.name}</span>
            <span className="absolute bottom-1 left-3.5 right-3.5 h-[1px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <motion.button 
          onClick={onOpenBooking}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 25px rgba(143, 129, 115, 0.45)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="hidden md:block font-body text-[9px] bg-primary text-white px-6 py-2.5 rounded-full hover:bg-secondary transition-all duration-500 ease-in-out shadow-md font-bold uppercase tracking-widest relative overflow-hidden group cursor-pointer"
          id="nav-inquire-btn"
        >
          <span className="relative z-10">Request Site Visit</span>
          <span className="absolute inset-0 bg-secondary skew-y-12 translate-y-8 group-hover:translate-y-0 transition-transform duration-500" />
        </motion.button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2.5 rounded-full bg-primary/5 text-primary lg:hidden relative z-[100] hover:bg-primary/10 transition-colors" 
          id="mobile-menu-btn"
        >
          <Menu className={`w-4 h-4 transition-transform ${isMenuOpen ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-14 left-0 right-0 mt-2 mx-auto w-[94%] rounded-3xl p-6 lg:hidden flex flex-col gap-2 z-[90] border border-primary/5 shadow-[0_20px_50px_rgba(44,71,85,0.08)] bg-white/98 backdrop-blur-3xl"
        >
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name}
              onClick={() => setIsMenuOpen(false)}
              className="text-[11px] uppercase font-mono font-bold tracking-[0.2em] text-on-background hover:text-secondary transition-colors py-3.5 border-b border-primary/5" 
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
            className="mt-4 bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[9px] shadow-md text-center hover:bg-secondary transition-colors"
          >
            Request Site Visit
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
