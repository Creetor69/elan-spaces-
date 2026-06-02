import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Transformations } from "./components/Transformations";
import { Atelier } from "./components/Atelier";
import { FAQ } from "./components/FAQ";
import { Testimonials } from "./components/Testimonials";
import { Clients } from "./components/Clients";
import { Legacy } from "./components/Legacy";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(true);
  const [bookingPrefill, setBookingPrefill] = useState<{
    projectTypes?: string[];
    package?: string;
  } | null>(null);

  const handleOpenBooking = (prefill?: { projectTypes?: string[]; package?: string }) => {
    if (prefill) {
      setBookingPrefill(prefill);
    } else {
      setBookingPrefill(null);
    }
    setIsBookingOpen(true);
  };

  // We let clients explore the visual portfolios in a relaxed manner, keeping the CTAs readily accessible across all sections.
  return (
    <div className="relative overflow-hidden">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <main className="snap-container">
        <div id="home"><Hero onOpenBooking={() => handleOpenBooking()} /></div>
        <Stats />
        <div id="about"><About /></div>
        <div id="services">
          <Services onOpenBooking={(prefill) => handleOpenBooking(prefill)} />
        </div>
        <div id="transformations"><Transformations /></div>
        <div id="atelier"><Atelier /></div>
        <div id="legacy"><Legacy /></div>
        <div id="faq"><FAQ /></div>
        <div id="clients"><Clients /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="booking"><Booking onOpenBooking={() => handleOpenBooking()} /></div>
        <Footer />
      </main>
      <FloatingActions />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => {
          setIsBookingOpen(false);
          setBookingPrefill(null);
        }} 
        prefill={bookingPrefill}
      />
    </div>
  );
}

