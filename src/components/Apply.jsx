import { FaArrowRight, FaFilePdf } from "react-icons/fa";

export default function Apply() {
  return (
    <section
      id="apply"
      className="bg-cream py-20 px-6 md:px-10 text-center relative"
      aria-label="Hostel Application Section"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-4">
          Ready to Join BCWD Surathkal Hostel?
        </h2>

        <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
          Admissions to BCWD Surathkal Hostel are managed through the official Karnataka Government portal. Please ensure you meet the eligibility criteria before applying.
        </p>

        {/* PDF Link */}
        <p className="mb-8">
          <a
            href="https://bcwd.karnataka.gov.in/uploads/media_to_upload1747376070.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-maroon font-semibold hover:underline"
          >
            <FaFilePdf className="text-red-600" />
            Download Eligibility Criteria (PDF)
          </a>
        </p>

        <p className="mb-8 text-sm md:text-base italic text-gray-600">
          Note: Incomplete applications or late submissions will not be considered.
        </p>

        <a
          href="https://shp.karnataka.gov.in/bcwd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apply on Karnataka Government Website"
        >
          <button className="group inline-flex items-center gap-2 bg-maroon text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-white hover:text-maroon hover:border hover:border-maroon transition duration-300 focus:outline-none focus:ring-4 focus:ring-maroon/50">
            Apply on Government Website
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-100/30 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl animate-pulse-slow"></div>
    </section>
  );
}
