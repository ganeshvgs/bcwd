// src/components/Events.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://bcm-backend-9ca9.onrender.com"; // change to your deployed backend URL later

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/events`).then((res) => setEvents(res.data));
  }, []);

  return (
    <section id="events" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-10">
          Events
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event._id}
              className="group bg-cream rounded-xl shadow-md p-6 text-left border-l-4 hover:border-maroon transition"
            >
              <div className="text-4xl">{event.icon}</div>
              <h3 className="text-xl font-bold text-maroon">{event.title}</h3>
              <p className="text-sm italic text-gray-600">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
