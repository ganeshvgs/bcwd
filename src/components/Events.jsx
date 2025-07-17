// src/components/Events.jsx

const events = [
  {
    title: "Hostel Day Celebration",
    date: "Every December",
    description:
      "An annual celebration with cultural programs, student awards, and guest speakers to honor the spirit of hostel life.",
    icon: "🎉",
  },
  {
    title: "Government Awareness Programs",
    date: "Throughout the Year",
    description:
      "Seminars and drives conducted in collaboration with the Government of Karnataka to educate and empower students.",
    icon: "🏛️",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-10">Events</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-cream rounded-xl shadow p-6 text-left hover:shadow-lg hover:scale-105 transition"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl">{event.icon}</span>
                <h3 className="text-xl font-semibold text-maroon">{event.title}</h3>
              </div>
              <p className="text-sm text-gray-600 italic mb-2">{event.date}</p>
              <p className="text-gray-700 text-base">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
