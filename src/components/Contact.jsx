import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegQuestionCircle,
} from "react-icons/fa";

export default function Contact() {
  const [hideInfo, setHideInfo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // ✅ Replace with your own Google Form formResponse URL
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSckzAZ9DI1aXmyEqMPJh9s2RsJk6Mzmh5UFd5_Dxk6FP1tnbQ/formResponse";

  // ✅ Replace with your actual Google Form entry IDs
  const ENTRY_NAME = "entry.2087684548";
  const ENTRY_EMAIL = "entry.1598791820";
  const ENTRY_MESSAGE = "entry.840089589";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    setSubmitting(true);

    const form = new FormData();
    form.append(ENTRY_NAME, formData.name);
    form.append(ENTRY_EMAIL, formData.email);
    form.append(ENTRY_MESSAGE, formData.message);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: form,
      });

      alert("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-10 text-white overflow-hidden"
    >
      {/* ✅ Map Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="Hostel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1561.6991154555337!2d74.80265961474052!3d12.984925972327604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba351ed3b843127%3A0x337976f31d40f04c!2sBCM%20Hostel!5e1!3m2!1sen!2sin!4v1754532446077!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          onClick={() => setHideInfo(true)}
        ></iframe>
      </div>

      {/* ✅ Contact Info & Form */}
      {!hideInfo && (
        <div className="relative z-10 max-w-5xl mx-auto text-center bg-black/60 p-6 sm:p-10 rounded-xl backdrop-blur-md">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-yellow-100 mb-10 flex items-center justify-center gap-2">
            <FaRegQuestionCircle className="text-yellow-200" />
            Have questions or need more information? Reach out to us!
          </p>

          {/* ✅ Hostel Info Grid */}
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 mb-10">
            {/* Address */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-3 p-6 bg-white/90 text-maroon rounded-xl hover:shadow-lg transition zoom-in">
              <FaMapMarkerAlt className="text-maroon text-3xl" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm mt-1">
                  BCWD Hostel Surathkal,<br />
                  Near Surathkal Police Station,<br />
                  Surathkal, Karnataka – 575014
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-3 p-6 bg-white/90 text-maroon rounded-xl hover:shadow-lg transition zoom-in">
              <FaEnvelope className="text-maroon text-3xl" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:bcwdhostel.surathkal@gov.in"
                  className="hover:underline break-all text-sm mt-1"
                >
                  bcwdhostel.surathkal@gov.in
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-3 p-6 bg-white/90 text-maroon rounded-xl hover:shadow-lg transition zoom-in">
              <FaPhoneAlt className="text-maroon text-3xl" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+919876500000" className="hover:underline text-sm mt-1">
                  +91 98765 00000
                </a>
              </div>
            </div>
          </div>

          {/* ✅ Google Form Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto grid gap-6 text-left"
          >
            <h3 className="text-2xl font-semibold text-yellow-200 mb-2 text-center">
              Send Us a Message
            </h3>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-white/80 text-maroon placeholder-maroon outline-none focus:ring-2 focus:ring-yellow-300"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-white/80 text-maroon placeholder-maroon outline-none focus:ring-2 focus:ring-yellow-300"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-white/80 text-maroon placeholder-maroon outline-none focus:ring-2 focus:ring-yellow-300"
            ></textarea>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-yellow-300 text-maroon font-semibold py-3 rounded-md hover:bg-yellow-400 transition"
            >
              {submitting ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
