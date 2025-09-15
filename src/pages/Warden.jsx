import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useClerk,
} from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import axios from "axios";

// 🔥 Use deployed backend instead of localhost
const API_URL = "https://bcm-backend-9ca9.onrender.com";

export default function Warden() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    description: "",
    icon: "🎉",
  });
  const [editingId, setEditingId] = useState(null);
  const { signOut } = useClerk();

  const fetchEvents = () =>
    axios.get(`${API_URL}/events`).then((res) => setEvents(res.data));

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`${API_URL}/events/${editingId}`, form);
      setEditingId(null);
    } else {
      if (events.length >= 2) {
        alert("You can only have 2 events");
        return;
      }
      await axios.post(`${API_URL}/events`, form);
    }
    setForm({ title: "", date: "", description: "", icon: "🎉" });
    fetchEvents();
  };

  const handleEdit = (ev) => {
    setEditingId(ev._id);
    setForm({
      title: ev.title,
      date: ev.date,
      description: ev.description,
      icon: ev.icon,
    });
  };

  // ✅ Delete event
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await axios.delete(`${API_URL}/events/${id}`);
      fetchEvents();
    }
  };

  return (
    <>
      <SignedIn>
        {/* Header */}
        <div className="bg-maroon text-white p-4 flex justify-center items-center">
          <h1 className="text-2xl font-bold">Warden Dashboard</h1>
        </div>

        <div className="p-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-maroon mb-4">Manage Events</h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-xl p-4 mb-6 space-y-4"
          >
            <input
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <input
              name="date"
              placeholder="Date"
              value={form.date}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <input
              name="icon"
              placeholder="Emoji"
              value={form.icon}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            />
            <button
              type="submit"
              className="bg-maroon text-white px-4 py-2 rounded-lg"
            >
              {editingId ? "Update Event" : "Add Event"}
            </button>
          </form>

          {/* Existing Events */}
          <h2 className="text-xl font-semibold mb-3">Existing Events</h2>
          <div className="space-y-4 mb-6">
            {events.map((ev) => (
              <div
                key={ev._id}
                className="bg-cream rounded-xl shadow p-4 flex justify-between items-start"
              >
                <div>
                  <div className="text-2xl">{ev.icon}</div>
                  <h3 className="font-bold text-maroon">{ev.title}</h3>
                  <p className="text-sm italic">{ev.date}</p>
                  <p>{ev.description}</p>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(ev)}
                    className="bg-gray-200 px-3 py-1 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ev._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Logout */}
          <div className="flex justify-center">
            <button
              onClick={() => signOut(() => (window.location.href = "/"))}
              className="bg-maroon text-white px-6 py-2 rounded-lg shadow-lg hover:bg-maroonDark transition"
            >
              Logout
            </button>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
