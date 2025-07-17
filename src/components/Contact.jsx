// src/components/Contact.jsx

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6">Contact Information</h2>
        <p className="text-lg text-gray-700 mb-4">
          Have questions or need more information? Reach out to us!
        </p>
        <div className="text-left mt-8 space-y-4 text-gray-800">
          <p><span className="font-semibold">📍 Address:</span> BCWD Suratkal Hostel, Near Govt College Campus, Suratkal, Karnataka</p>
          <p><span className="font-semibold">📞 Phone:</span> +91 98765 43210</p>
          <p><span className="font-semibold">✉️ Email:</span> bcwdhostel.suratkal@gov.in</p>
        </div>
      </div>
    </section>
  );
}
