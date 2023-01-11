/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        navy: "#1D2029",
        "alice-blue": "#f6f9fc",
        "russian-black": "#1D2029",
      },
    },
  },
  plugins: [require("daisyui")],
};
