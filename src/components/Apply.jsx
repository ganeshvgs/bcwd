import { FaArrowRight } from "react-icons/fa";

export default function Apply() {
  return (
    <section
      id="apply"
      className="bg-cream py-20 px-6 md:px-10 text-center relative"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-4">
          Ready to Join Us?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
          Admissions to BCWD Surathkal Hostel are managed through the official Karnataka Government portal. Please ensure you meet the eligibility criteria before applying.
        </p>

        <a
          href="https://shp.karnataka.gov.in/bcwd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group inline-flex items-center gap-2 bg-maroon text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-white hover:text-maroon hover:border hover:border-maroon transition-all duration-300">
            Apply on Government Website
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </a>
      </div>

      {/* Optional subtle background design (matching traditional style) */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-100/30 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl animate-pulse-slow"></div>
    </section>
  );
}
