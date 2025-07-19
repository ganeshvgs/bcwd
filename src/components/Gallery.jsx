import photo1 from "../assets/gallery/photo1.jpg";
import photo2 from "../assets/gallery/photo2.jpg";
import photo3 from "../assets/gallery/photo3.jpg";
import photo4 from "../assets/gallery/photo4.jpg";
import photo5 from "../assets/gallery/photo5.jpg";
import photo6 from "../assets/gallery/photo6.png";

const images = [
  { src: photo1, caption: "Front View of Hostel" },
  { src: photo2, caption: "Group Photo of Students" },
  { src: photo3, caption: "Hostel Day / Festival Celebration" },
  { src: photo4, caption: "Sports Achievements" },
  { src: photo5, caption: "Main Entrance Area" },
  { src: photo6, caption: "Meal / Dining" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-10">Gallery</h2>

        {/* Responsive Grid: 1 col on small, 2 on medium, 3 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow transition duration-300 hover:scale-105 hover:ring-4 hover:ring-maroon"
            >
              {/* Image with responsive height */}
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[200px] sm:h-[250px] md:h-64 object-cover"
              />

              {/* Overlay Caption */}
              <div className="absolute bottom-[-100%] left-0 w-full bg-black/70 text-white text-sm px-3 py-2 group-hover:bottom-0 backdrop-blur-sm transition-all duration-500">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
