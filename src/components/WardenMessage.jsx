// src/components/WardenMessage.jsx

import wardenImg from "../assets/images/src/assets/images/WhatsApp Image 2025-07-19 at 08.42.19_12c96a35.jpg"; // Replace with your image

export default function WardenMessage() {
  return (
    <section id="warden" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* ✅ Left: Warden Message */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-6">
            Message from the Warden
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            "As the warden of BCWD Surathkal Hostel, I feel honored to guide and support a vibrant group of 130 students. Since our beginning in 2002,
            we’ve nurtured talent and discipline in a safe and culturally rich environment. We believe in creating a space where every student
            feels at home while pursuing excellence in their education."
          </p>
          <p className="mt-6 text-maroon font-semibold text-lg">– SRI RADHESH (MA., M.Ed., Mphil), Warden</p>
        </div>

        {/* ✅ Right: Circular Warden Image with Hover Effect */}
        <div className="w-64 h-64 md:w-72 md:h-72 relative group overflow-hidden rounded-full shadow-xl border-4 border-maroon">
          <img
            src={wardenImg}
            alt="Warden"
            className="w-full h-full object-cover rounded-full transform group-hover:scale-105 group-hover:brightness-110 transition-all duration-500 ease-in-out"
          />
          {/* Optional soft overlay on hover */}
          <div className="absolute inset-0 bg-maroon/10 group-hover:bg-maroon/30 rounded-full transition-all duration-500"></div>
        </div>
      </div>
    </section>
  );
}
