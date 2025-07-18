export default function About() {
  const currentYear = new Date().getFullYear();
  const yearsRunning = currentYear - 2002;
  const avgStudentsPerYear = 72;
  const estimatedTotal = yearsRunning * avgStudentsPerYear;
  const formattedTotal = estimatedTotal.toLocaleString();

  // Highlight style: maroon text with subtle underline on hover
  const highlightClass =
    "font-semibold text-maroon cursor-pointer relative transition-colors duration-300 hover:text-yellow-600 hover:underline";

  return (
    <section
      id="about"
      aria-label="About BCWD Surathkal Hostel"
      className="bg-gradient-to-b from-yellow-50 to-white py-24 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-maroon mb-3 tracking-wide leading-tight">
          About Our Hostel
        </h2>

        <div className="mx-auto mb-12 w-24 h-1 bg-maroon rounded-full shadow-sm"></div>

        <article className="bg-white shadow-lg rounded-3xl p-10 text-gray-800 text-lg md:text-xl leading-relaxed">
          <p className="mb-8">
            Established in{" "}
            <span className={highlightClass}>2002</span>, the BCWD Surathkal Hostel is a proud initiative by the{" "}
            <span className={highlightClass}>Backward Class Welfare Department</span>, Government of Karnataka. Located in the vibrant town of{" "}
            <span className={highlightClass}>Suratkal</span>, our hostel provides a nurturing and disciplined environment for{" "}
            <span className={highlightClass}>130+ students</span> to grow, learn, and succeed.
          </p>

          <p className="mb-8">
            Since its inception, approximately{" "}
            <span className={`${highlightClass} font-extrabold text-maroon`}>
              {formattedTotal}+
            </span>{" "}
            students have become part of our hostel family, with{" "}
            <span className={highlightClass}>70–75 students joining every academic year</span>. We believe in equality, cultural values, and youth empowerment.
          </p>

          <p>
            Under the leadership of our warden{" "}
            <span className={highlightClass}>Sri Radhesh</span>, we focus on holistic development with access to modern amenities, nutritious meals, academic support, and cultural enrichment opportunities.
          </p>
        </article>
      </div>
    </section>
  );
}
