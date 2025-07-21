// tailwind.config.js
module.exports = {
  darkMode: 'class', // ✅ Add this line
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8E1",
        maroon: "#800000",
        maroonDark: "#6b0000",
      },
    },
  },
  plugins: [],
};
