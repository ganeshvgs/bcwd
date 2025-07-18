import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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

  const toggleLogin = () => setLoginOpen((prev) => !prev);

  // Nav items
  const navItems = [
    "home",
    "about",
    "facilities",
    "events",
    "gallery",
    "contact",
  ];

  // Handles navigation for nav buttons
  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage with hash to trigger scroll there
      navigate(`/#${section}`);
    } else {
      // If on homepage, scroll smoothly to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setLoginOpen(false);
  };

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
        <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium text-gray-700 z-10">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNavClick(item)}
                className="relative group capitalize bg-transparent border-none cursor-pointer text-gray-700"
              >
                <span className="group-hover:text-maroon transition duration-300">
                  {item}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-maroon transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}

          {/* Login Dropdown */}
          <li id="login-dropdown" className="relative cursor-pointer">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleLogin();
              }}
              className="bg-maroon text-white px-4 py-1 rounded inline-block hover:scale-105 transition select-none"
            >
              Login ▼
            </button>

            {loginOpen && (
              <ul
                className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg text-gray-700 font-medium z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <li>
                  <Link
                    to="/student-login"
                    className="block px-4 py-2 hover:bg-maroon hover:text-white transition"
                    onClick={() => setLoginOpen(false)}
                  >
                    Student Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-maroon hover:text-white transition"
                    onClick={() => setLoginOpen(false)}
                  >
                    Warden Login
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
