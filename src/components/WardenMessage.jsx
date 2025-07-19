import wardenImg from "../assets/images/WhatsApp Image 2025-07-19 at 08.42.19_12c96a35.jpg"; // ✅ Make sure image path is correct

export default function WardenMessage() {
  return (
    <section id="warden" className="bg-white py-16 px-6 sm:px-8 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* ✅ Left: Message Text (on mobile appears below image) */}
        <div className="w-full md:w-2/3 text-center md:text-left animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-4 sm:mb-6">
            Message from the Warden
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            "As the warden of BCWD Surathkal Hostel, I feel honored to guide and support a vibrant group of 130 students. Since our beginning in 2002,
            we’ve nurtured talent and discipline in a safe and culturally rich environment. We believe in creating a space where every student
            feels at home while pursuing excellence in their education."
          </p>
          <p className="mt-4 sm:mt-6 text-maroon font-semibold text-base sm:text-lg">
            – SRI RADHESH (MA., M.Ed., MPhil), Warden
          </p>
        </div>

        {/* ✅ Right: Circular Warden Image */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 relative group overflow-hidden rounded-full shadow-xl border-4 border-maroon transition-transform duration-500">
          <img
            src={wardenImg}
            alt="Warden"
            className="w-full h-full object-cover rounded-full group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-maroon/10 group-hover:bg-maroon/30 rounded-full transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}
