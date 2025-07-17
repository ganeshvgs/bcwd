// src/components/About.jsx

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6">About Our Hostel</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Established in <span className="font-semibold text-maroon">2002</span>, the BCWD Suratkal Hostel is a proud initiative by the
          <span className="font-semibold text-maroon"> Backward Class Welfare Department</span>, Government of Karnataka. Located in the vibrant town of Suratkal,
          our hostel provides a nurturing and disciplined environment for <span className="font-semibold">130+ students</span> to grow, learn, and succeed.
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          We believe in equality, cultural values, and youth empowerment. Under the guidance of our warden <span className="text-maroon font-semibold">Radesh</span>,
          we focus on holistic development with access to modern amenities, healthy meals, education support, and cultural exposure.
        </p>
      </div>
    </section>
  );
}
