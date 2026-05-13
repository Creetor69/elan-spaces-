import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Transformations } from "./components/Transformations";
import { Atelier } from "./components/Atelier";
import { Materials } from "./components/Materials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Testimonials } from "./components/Testimonials";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";

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
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="transformations"><Transformations /></div>
        <div id="atelier"><Atelier /></div>
        <div id="materials"><Materials /></div>
        <div id="pricing"><Pricing onOpenBooking={() => setIsBookingOpen(true)} /></div>
        <div id="faq"><FAQ /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="booking"><Booking /></div>
        <Footer />
      </main>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

