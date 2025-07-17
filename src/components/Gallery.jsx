// src/components/Gallery.jsx

const images = [
  "https://source.unsplash.com/600x400/?hostel",
  "https://source.unsplash.com/600x400/?students",
  "https://source.unsplash.com/600x400/?education",
  "https://source.unsplash.com/600x400/?campus",
  "https://source.unsplash.com/600x400/?library",
  "https://source.unsplash.com/600x400/?sports",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow hover:scale-105 transition">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
