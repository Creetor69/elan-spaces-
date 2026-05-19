import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Transformations } from "./components/Transformations";
import { Atelier } from "./components/Atelier";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Testimonials } from "./components/Testimonials";
import { Clients } from "./components/Clients";
import { Legacy } from "./components/Legacy";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Show booking form pop up after a short delay for instant CTA
    const timer = setTimeout(() => {
      setIsBookingOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="snap-container">
        <div id="home"><Hero onOpenBooking={() => setIsBookingOpen(true)} /></div>
        <Stats />
        <div id="about"><About /></div>
        <div id="services"><Services onOpenBooking={() => setIsBookingOpen(true)} /></div>
        <div id="transformations"><Transformations /></div>
        <div id="atelier"><Atelier /></div>
        <div id="legacy"><Legacy /></div>
        <div id="pricing"><Pricing onOpenBooking={() => setIsBookingOpen(true)} /></div>
        <div id="faq"><FAQ /></div>
        <div id="clients"><Clients /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="booking"><Booking onOpenBooking={() => setIsBookingOpen(true)} /></div>
        <Footer />
      </main>
      <FloatingActions />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

