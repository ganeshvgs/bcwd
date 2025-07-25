import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Facilities from "../components/Facilities";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import WardenMessage from "../components/WardenMessage";
import Apply from "../components/Apply";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Delay scroll to ensure element is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Events />
      <Gallery />
      <WardenMessage />
      <Apply />
      <Contact />
      <Footer />

      {/* Floating Apply Button (visible only on mobile) */}
      <button
        className="fixed bottom-4 right-4 z-50 bg-maroon text-white px-4 py-2 rounded-full shadow-md md:hidden hover:scale-105 transition"
        onClick={() => window.location.href = '#apply'}
      >
        Apply Now
      </button>
    </>
  );
}
