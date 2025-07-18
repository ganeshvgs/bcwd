import { useState } from "react";

const facilities = [
  {
    title: "Bedsheets Provided",
    icon: "🛏️",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2021/9/TL/QA/CG/3929269/product-jpeg.jpg",
  },
  {
    title: "Meals",
    icon: "🍽️",
    image:
      "https://i.pinimg.com/736x/f5/91/dc/f591dc1a53f8be154769f9c816a610cc.jpg",
  },
  {
    title: "Sports Ground",
    icon: "🏏",
    image:
      "https://t3.ftcdn.net/jpg/00/64/01/76/360_F_64017651_wYll2mTJh8zNVj7mK6Do0gZO09X0Ezq0.jpg",
  },
  {
    title: "Computer Access",
    icon: "💻",
    image:
      "https://media.istockphoto.com/id/506340238/photo/pc-room.jpg?s=612x612&w=0&k=20&c=hClJ3bjnW6n8gXSNbotpe520ofrREJYlJNMElU5CWJA=",
  },
  {
    title: "Television",
    icon: "📺",
    image:
      "https://www.shutterstock.com/image-photo/4k-monitor-isolated-on-white-260nw-357968483.jpg",
  },
  {
    title: "CCTV Surveillance",
    icon: "🎥",
    image:
      "https://t3.ftcdn.net/jpg/00/86/09/02/360_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg",
  },
];

export default function Facilities() {
  const [hoveredFacility, setHoveredFacility] = useState(null);

  return (
    <section id="facilities" className="bg-cream py-20 px-6 md:px-10 relative">
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-10">Facilities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md p-6 flex flex-col items-center relative cursor-pointer"
              style={{ minHeight: "180px" }}
              onMouseEnter={() => setHoveredFacility(index)}
              onMouseLeave={() => setHoveredFacility(null)}
            >
              {/* Image with fade in/out */}
              <img
                src={facility.image}
                alt={facility.title}
                className={`absolute inset-0 w-full h-full rounded-xl object-cover transition-opacity duration-700 ${
                  hoveredFacility === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />

              {/* Icon and title visible under image */}
              <span
                className={`absolute left-0 top-0 h-full w-1 bg-maroon opacity-0 group-hover:opacity-100 transition-all duration-300 z-20`}
              ></span>
              <div
                className={`text-6xl mb-4 transition-opacity duration-500 ${
                  hoveredFacility === index ? "opacity-0" : "opacity-100"
                }`}
              >
                {facility.icon}
              </div>
              <h3
                className={`text-xl font-semibold text-gray-800 transition-colors duration-300 ${
                  hoveredFacility === index ? "opacity-0" : "opacity-100"
                } group-hover:text-maroon`}
              >
                {facility.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
