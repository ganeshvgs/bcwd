import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginOpen && !e.target.closest("#login-dropdown")) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [loginOpen]);

  // Toggle dropdown on click
  const toggleLogin = () => setLoginOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-fadeSlideDown ${
        scrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <nav className="w-full h-14 md:h-16 flex justify-between items-center px-4 md:px-10 relative">
        {/* Gradient background */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-maroon via-yellow-200 to-maroon animate-gradient z-0" />

        {/* Title */}
        <div className="text-white font-extrabold text-xl md:text-2xl tracking-wide z-10 whitespace-nowrap">
          BCWD Surathkal
        </div>

        {/* Navigation Menu */}
        <Scrollspy
          items={["home", "about", "facilities", "events", "gallery", "contact"]}
          currentClassName="text-white font-bold underline"
          offset={-100}
          className="hidden md:flex gap-6 text-sm md:text-base font-medium text-gray-700 z-10"
        >
          {["home", "about", "facilities", "events", "gallery", "contact"].map(
            (item) => (
              <li key={item}>
                <a href={`#${item}`} className="relative group capitalize">
                  <span className="group-hover:text-maroon transition duration-300">
                    {item}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-maroon transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            )
          )}

          {/* Login Dropdown */}
          <li id="login-dropdown" className="relative cursor-pointer">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent document click from closing dropdown immediately
                toggleLogin();
              }}
              className="bg-maroon text-white px-4 py-1 rounded inline-block hover:scale-105 transition select-none"
            >
              Login ▼
            </button>

            {loginOpen && (
              <ul
                className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg text-gray-700 font-medium z-20"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside dropdown
              >
                <li>
                  <Link
                    to="/student-login"
                    className="block px-4 py-2 hover:bg-maroon hover:text-white transition"
                    onClick={() => setLoginOpen(false)} // close dropdown on link click
                  >
                    Student Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-maroon hover:text-white transition"
                    onClick={() => setLoginOpen(false)} // close dropdown on link click
                  >
                    Warden Login
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </Scrollspy>
      </nav>
    </header>
  );
}
