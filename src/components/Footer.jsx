export default function Footer() {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Facilities", id: "facilities" },
    { name: "Events", id: "events" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#4B0000] via-[#5A0000] to-[#300000] text-white py-10 px-4 overflow-hidden shadow-inner">
      {/* 🔴 Background Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

      {/* ✨ Animations */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-yellow-100/10 rounded-full blur-3xl animate-pulse-slow z-0"></div>
      <div className="absolute -bottom-24 right-10 w-64 h-64 bg-yellow-200/10 rounded-full blur-2xl animate-spin-slow z-0"></div>

      {/* ✅ Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* 🟡 Logo + Dept Info */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src="https://images.seeklogo.com/logo-png/40/1/the-karnataka-government-kannada-logo-png_seeklogo-407164.png"
            alt="Karnataka Government Logo"
            className="h-14 w-14 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300 rounded-full"
          />
          <div className="text-sm font-medium leading-snug text-white">
            <p className="font-semibold">Backward Class Welfare Department</p>
            <p>Government of Karnataka</p>
          </div>
        </div>

        {/* ℹ️ About Hostel */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About the Hostel</h4>
          <p className="text-sm leading-relaxed text-yellow-100">
            BCWD Surathkal Hostel provides a nurturing environment for students from backward classes, with modern facilities and support since 2002.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:underline hover:text-yellow-200 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 🌐 External / Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
          <ul className="text-sm text-yellow-100 space-y-1">
            <li>
              <a
                href="https://bcwd.karnataka.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-300 transition"
              >
                BCWD Karnataka Website
              </a>
            </li>
            <li>
              <a
                href="https://ssp.postmatric.karnataka.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-300 transition"
              >
                SSP Scholarship Portal
              </a>
            </li>
            <li>
              📞 +91-XXXXXXXXXX
            </li>
            <li>
              📧 bcwdsuratkal@gov.in
            </li>
          </ul>
        </div>
      </div>

      {/* 🧾 Divider */}
      <div className="border-t border-yellow-900 mt-10 pt-4 text-center relative z-10">
        <p className="text-xs text-yellow-100">
          &copy; {new Date().getFullYear()} BCWD Suratkal Hostel — All rights reserved.
          <br />
          Protected under Copyright Act 1957.
        </p>
      </div>

      {/* 🔼 Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 z-50 bg-yellow-300 text-maroon rounded-full p-3 shadow-lg hover:bg-yellow-400 transition duration-300"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
