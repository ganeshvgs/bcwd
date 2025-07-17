// src/components/Events.jsx

const events = [
  {
    title: "Hostel Day Celebration",
    date: "Every December",
    description:
      "An annual celebration with cultural programs, student awards, and guest speakers to honor the spirit of hostel life, Dj night's party.",
    icon: "🎉",
  },
  {
    title: "Sports Day",
    date: "Every September",
    description:
      "Tournaments and friendly matches are organized to build sportsmanship and community among students.",
    icon: "🏏",
  },
];

export default function Events() {
  return (
    <section id="events" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-10 animate-fadeSlideDown">
          Events
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-cream rounded-xl shadow-md p-6 text-left border-l-4 border-transparent hover:border-maroon transition-all duration-300 hover:shadow-2xl hover:scale-[1.035] cursor-pointer relative overflow-hidden"
            >
              {/* Subtle background shimmer animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-yellow-100 to-maroon blur-xl transition duration-500 z-0"></div>

              <div className="relative z-10 flex items-start gap-4 mb-3">
                <div className="text-4xl group-hover:scale-125 transform transition duration-300">
                  {event.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-maroon group-hover:text-yellow-900 transition duration-300">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 italic">{event.date}</p>
                </div>
              </div>

              <p className="text-gray-700 text-base relative z-10 leading-relaxed group-hover:text-black transition duration-300">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
