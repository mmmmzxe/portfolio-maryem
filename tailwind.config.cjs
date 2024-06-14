/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "white",
        bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
        t:"rgb(210, 24, 96)"
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, rgb(218, 19, 82) 0.48%, rgba(236, 96, 141, 0.578)  100%)",
       
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
