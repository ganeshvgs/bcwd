import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-cream py-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-maroon font-extrabold text-2xl tracking-wide">
          BCWD Suratkal Hostel
        </div>

        <Scrollspy
          items={["home", "about", "facilities", "events", "gallery", "contact"]}
          currentClassName="text-maroon font-bold underline"
          offset={-100}
          className="hidden md:flex gap-6 text-base font-medium text-gray-700"
        >
          <li><a href="#home" className="hover:text-maroon transition">Home</a></li>
          <li><a href="#about" className="hover:text-maroon transition">About</a></li>
          <li><a href="#facilities" className="hover:text-maroon transition">Facilities</a></li>
          <li><a href="#events" className="hover:text-maroon transition">Events</a></li>
          <li><a href="#gallery" className="hover:text-maroon transition">Gallery</a></li>
          <li><a href="#contact" className="hover:text-maroon transition">Contact</a></li>
          <li>
            <Link to="/login" className="bg-maroon text-white px-4 py-1 rounded hover:scale-105 transition">
              Login
            </Link>
          </li>
        </Scrollspy>
      </nav>
    </header>
  );
}
