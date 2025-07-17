// src/components/WardenMessage.jsx

export default function WardenMessage() {
  return (
    <section id="warden" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-8">Message from the Warden</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          "As the warden of BCWD Suratkal Hostel, I feel honored to guide and support a vibrant group of 130 students. Since our beginning in 2002,
          we’ve nurtured talent and discipline in a safe and culturally rich environment. We believe in creating a space where every student
          feels at home while pursuing excellence in their education."
        </p>
        <p className="mt-6 text-maroon font-semibold text-lg">- Radesh, Warden</p>
      </div>
    </section>
  );
}
