export default function About() {
  // Estimate total students since 2002 (optional logic)
  const currentYear = new Date().getFullYear();
  const yearsRunning = currentYear - 2002;
  const avgStudentsPerYear = 72; // avg of 70-75
  const estimatedTotal = yearsRunning * avgStudentsPerYear;

  return (
    <section
      id="about"
      className="bg-white py-20 px-6 md:px-10 animate-fadeSlideUp"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-2">
          About Our Hostel
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6 rounded"></div>

        <p className="text-gray-700 text-lg leading-relaxed">
          Established in <span className="font-semibold text-maroon hover:underline hover:text-yellow-600 transition duration-300">2002</span>,
          the BCWD Surathkal Hostel is a proud initiative by the
          <span className="font-semibold text-maroon hover:underline hover:text-yellow-600 transition duration-300"> Backward Class Welfare Department</span>,
          Government of Karnataka. Located in the vibrant town of
          <span className="font-semibold text-maroon hover:underline hover:text-yellow-600 transition duration-300"> Suratkal</span>,
          our hostel provides a nurturing and disciplined environment for
          <span className="font-semibold text-maroon hover:underline hover:text-yellow-600 transition duration-300"> 130+ students</span> to grow, learn, and succeed.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Since its inception, approximately <span className="text-maroon font-semibold">{estimatedTotal}+ students</span> have become part of our hostel family,
          with <span className="font-semibold text-maroon">70–75 students joining every academic year</span>. We believe in equality, cultural values,
          and youth empowerment.
        </p>

        <p className="mt-4 text-gray-700 text-lg">
          Under the leadership of our warden
          <span className="text-maroon font-semibold hover:underline hover:text-yellow-600 transition duration-300"> Sri Radhesh</span>,
          we focus on holistic development with access to modern amenities, nutritious meals, academic support,
          and cultural enrichment opportunities.
        </p>
      </div>
    </section>
  );
}
