import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react"; // ✅ Added icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const location = useLocation();
  const navigate = useNavigate();
  const navItems = ["home", "about", "facilities", "events", "gallery", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = "home";
      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });
      setActiveSection(current);
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

  // ✅ Apply dark mode class to html
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleLogin = () => setLoginOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setLoginOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-fadeSlideDown ${
        scrolled ? "bg-white shadow-md dark:bg-gray-900" : ""
      }`}
    >
      <nav className="w-full h-14 md:h-16 flex justify-between items-center px-4 md:px-10 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-maroon via-yellow-200 to-maroon animate-gradient z-0 opacity-90" />

        {/* Logo */}
        <div className="text-white font-extrabold text-xl md:text-2xl tracking-wide z-10 whitespace-nowrap">
          BCWD Surathkal
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-white dark:text-yellow-300 hover:scale-110 transition z-10 mx-2 hidden md:block"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium text-gray-700 z-10">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNavClick(item)}
                className={`relative group capitalize bg-transparent border-none cursor-pointer ${
                  activeSection === item
                    ? "text-maroon font-bold underline underline-offset-4"
                    : "text-gray-700 dark:text-white"
                } transition duration-300`}
              >
                <span className="group-hover:text-maroon">{item}</span>
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
                className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded shadow-lg text-gray-700 dark:text-white font-medium z-20"
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

        {/* Mobile Menu Button */}
        <div className="md:hidden z-10 flex items-center gap-3">
          {/* Mobile Dark Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white dark:text-yellow-300 hover:scale-110 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-4 space-y-3 text-gray-800 dark:text-white font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left capitalize py-1"
            >
              {item}
            </button>
          ))}
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/student-login"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-maroon"
            >
              Student Login
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-maroon"
            >
              Warden Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
