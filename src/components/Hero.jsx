// src/components/Hero.jsx
import { useEffect, useState } from "react";
import hostelBg from "../assets/images/hostel-hero.png";
import devarajImg from "../assets/images/devaraj.png";
import "../assets/animations.css";

export default function Hero() {
  const fullText = "Welcome to BCWD Surathkal";
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    let timeouts = [];
    [...fullText].forEach((char, index) => {
      timeouts.push(
        setTimeout(() => {
          setLetters((prev) => [...prev, char]);
        }, index * 80)
      );
    });

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 py-10 sm:py-0"
      style={{ backgroundImage: `url(${hostelBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center space-y-5 sm:space-y-6">
        
        {/* 👤 Devaraj Aras Image */}
        <div className="flex flex-col items-center">
          <img
            src={devarajImg}
            alt="Devaraj Aras"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full border-2 border-yellow-300 shadow-xl transition duration-300 hover:scale-105"
          />
          <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-yellow-100">
            Devaraj Aras
          </p>
        </div>

        {/* ✨ Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md leading-tight glow-text">
          {letters.map((char, i) => (
            <span key={i} className="inline-block animate-fade-in-letter">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* 📜 Description */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl px-2 sm:px-0 text-center text-gray-100 drop-shadow-sm">
          A Government of Karnataka initiative under the Backward Class Welfare Department, nurturing 1600+ bright futures since 2002.
        </p>

        {/* 📩 CTA Button */}
        <a href="#apply">
          <button className="mt-3 border-2 border-maroon text-white px-6 py-2 rounded-full hover:bg-maroon hover:text-white transition duration-300">
            Apply Now
          </button>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 animate-bounce text-white text-xl z-10 hidden sm:block">
        ↓
      </div>
    </section>
  );
}
