// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./public/index.html",  // ✅ include this
    "./src/**/*.{js,jsx}",  // ✅ scan all React files
  ],
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
