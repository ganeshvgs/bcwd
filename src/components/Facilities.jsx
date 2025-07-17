// src/components/Facilities.jsx

const facilities = [
  {
    title: "Bedsheets Provided",
    icon: "🛏️",
  },
  {
    title: "Meals",
    icon: "🍽️",
  },
  {
    title: "Sports Ground",
    icon: "🏏",
  },
  {
    title: "Computer Access",
    icon: "💻",
  },
  {
    title: "Television",
    icon: "📺",
  },
  {
    title: "CCTV Surveillance",
    icon: "🎥",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-cream py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-10">Facilities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition-all duration-300 transform hover:shadow-2xl hover:scale-105 relative overflow-hidden"
            >
              {/* 🔻 Accent bar on hover */}
              <span className="absolute left-0 top-0 h-full w-1 bg-maroon opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

              <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:rotate-12">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-maroon transition-colors duration-300">
                {facility.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
