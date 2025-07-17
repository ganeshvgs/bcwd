import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Lowered scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-fadeSlideDown ${
        scrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <nav className="w-full h-14 md:h-16 flex justify-between items-center px-4 md:px-10 relative">
        {/* Gradient background with full height */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-maroon via-yellow-200 to-maroon animate-gradient z-0" />

        {/* Title */}
        <div className="text-maroon font-extrabold text-xl md:text-2xl tracking-wide z-10 whitespace-nowrap">
          BCWD Surathkal
        </div>

        {/* Navigation Menu */}
        <Scrollspy
          items={["home", "about", "facilities", "events", "gallery", "contact"]}
          currentClassName="text-maroon font-bold underline"
          offset={-100}
          className="hidden md:flex gap-6 text-sm md:text-base font-medium text-gray-700 z-10"
        >
          {["home", "about", "facilities", "events", "gallery", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="relative group capitalize">
                <span className="group-hover:text-maroon transition duration-300">
                  {item}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-maroon transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="bg-maroon text-white px-4 py-1 rounded hover:scale-105 transition"
            >
              Login
            </Link>
          </li>
        </Scrollspy>
      </nav>
    </header>
  );
}
