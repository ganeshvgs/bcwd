const images = [
  {
    src: "https://photos.fife.usercontent.google.com/pw/AP1GczMhyUzkZKSsJ-KBePTerp3pMDBpeZ_avESh5sfme9bs4fggHaWJTn33=w293-h220-no?authuser=0",
    caption: "Front View of Hostel",
  },
  {
    src: "https://photos.fife.usercontent.google.com/pw/AP1GczPW8MzVJe63EdMA3khmnRQPYKnLcOsc_49Pm35BMedQNxPtSLshMVfn=w905-h679-s-no-gm?authuser=0",
    caption: "Group Photo of Students",
  },
  {
    src: "https://photos.fife.usercontent.google.com/pw/AP1GczPYRkFXgCXce0ct0VlmMBomesT4VRKEJ7xOkoU8O5qnv9Jo_AqjOPwQ=w314-h679-s-no-gm?authuser=0",
    caption: "Hostel Day / Festival Celebration",
  },
  {
    src: "https://photos.fife.usercontent.google.com/pw/AP1GczMkKcjhT8gxvfMirVr-_IgLrDgGIzStbCLpPPT9rXMVUuXjTU93qfe3=w1207-h679-s-no-gm?authuser=0",
    caption: "Sports Achievements",
  },
  {
    src: "https://photos.fife.usercontent.google.com/pw/AP1GczMJbZn47gLzc-RRIqRpxsKeEZnFGIbFbkBiPo9O28U1J0nZ8-VaHBs9=w905-h679-s-no-gm?authuser=0",
    caption: "Main Entrance Area",
  },
  {
    src: "https://photos.fife.usercontent.google.com/pw/AP1GczPrztBXY5to_vFsbnF9XsGtXZ2amN9C7ypaLXnrj-sV7kMOV9_YWINF=w453-h679-s-no-gm?authuser=0",
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
