// src/components/Apply.jsx

export default function Apply() {
  return (
    <section id="apply" className="bg-maroon py-20 px-6 md:px-10 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Us?</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Admissions to BCWD Suratkal Hostel are managed through the official Karnataka Government BCWD portal.
        Please ensure you meet the eligibility criteria before applying.
      </p>
      <a
        href="https://shp.karnataka.gov.in/bcwd/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-maroon transition-all duration-300">
          Apply on Government Website
        </button>
      </a>
    </section>
  );
}