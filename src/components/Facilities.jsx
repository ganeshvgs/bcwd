// src/components/Facilities.jsx

const facilities = [
  {
    title: "Free Wi-Fi",
    icon: "📶",
  },
  {
    title: "Bedsheets Provided",
    icon: "🛏️",
  },
  {
    title: "Nutritious Meals",
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
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold text-maroon">{facility.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
