import hostelBg from "../assets/images/hostel-hero.png";
import devarajImg from "../assets/images/devaraj.png"; // ✅ Devaraj Aras image

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
      style={{ backgroundImage: `url(${hostelBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        
        {/* 👤 Devaraj Aras Centered Image */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src={devarajImg}
            alt="Devaraj Aras"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-yellow-200 shadow-lg hover:scale-105 transition"
          />
          <p className="mt-2 text-white text-base md:text-lg font-semibold">Devaraj Aras</p>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
          Welcome to BCWD Hostel Surathkal
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-sm text-center">
          A Government of Karnataka initiative under the Backward Class Welfare Department, nurturing 1600+ bright futures since 2002.
        </p>
        <a href="#apply">
          <button className="border-2 border-maroon text-blue px-6 py-2 rounded-full hover:bg-maroon hover:text-white transition-all duration-300">
            Apply Now
          </button>
        </a>
      </div>

      {/* ↓ Scroll Indicator */}
      <div className="absolute bottom-6 animate-bounce text-white text-xl z-10">
        ↓
      </div>
    </section>
  );
}
