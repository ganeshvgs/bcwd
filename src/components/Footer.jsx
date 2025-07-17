export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#4B0000] via-[#5A0000] to-[#300000] text-white py-10 px-4 overflow-hidden shadow-inner">
      {/* 🔴 Background Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      {/* ✨ Floating Animation Decorations (optional) */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-yellow-100/10 rounded-full blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute -bottom-24 right-10 w-64 h-64 bg-yellow-200/10 rounded-full blur-2xl animate-spin-slow z-0"></div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left: Logo + Info */}
        <div className="flex items-center gap-4">
          <img
            src="https://images.seeklogo.com/logo-png/40/1/the-karnataka-government-kannada-logo-png_seeklogo-407164.png"
            alt="Karnataka Government Logo"
            className="h-14 w-14 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
          <div className="text-sm md:text-base font-medium leading-snug text-white">
            <p className="font-semibold">Backward Class Welfare Department</p>
            <p>Government of Karnataka</p>
          </div>
        </div>

        {/* Right: Copyright */}
        <p className="text-sm md:text-base text-white leading-snug">
          &copy; {new Date().getFullYear()} BCWD Suratkal Hostel<br />
          All rights reserved. Protected under Copyright Act 1957.
        </p>
      </div>
    </footer>
  );
}
