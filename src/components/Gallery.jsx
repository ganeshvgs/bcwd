const images = [
  {
    src: "https://drive.google.com/file/d/1OF9H7sfzU0nYOfdjJSY6HmNiAHm4E0DF/view?usp=sharing",
    caption: "Front View of Hostel",
  },
  {
    src: "https://drive.google.com/file/d/1GFmpXE9lqhaH1k2BXY1wUDm3DES0Veh1/view?usp=sharing",
    caption: "Group Photo of Students",
  },
  {
    src: "https://drive.google.com/file/d/186cofqJOANv2VMqYwxW27jaYyreA6Ur-/view?usp=sharing",
    caption: "Hostel Day / Festival Celebration",
  },
  {
    src: "https://drive.google.com/file/d/1bFlJEjsmt7gsV4_ce635Kt7gLoGIlXqT/view?usp=sharing",
    caption: "Sports Achievements",
  },
  {
    src: "https://drive.google.com/file/d/1ze2h2nR0wG3WDmp0CiWeK7sv1y8cLh4A/view?usp=sharing",
    caption: "Main Entrance Area",
  },
  {
    src: "https://drive.google.com/file/d/1xA_o4A8zs6SvL3vLQUWQ166XVszl551_/view?usp=sharing",
    caption: "Meal / Dining",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow transition duration-300 hover:scale-105 hover:ring-4 hover:ring-maroon"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
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
