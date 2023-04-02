/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: "1286px",
        },
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      fontFamily: {
        body: ["'Roboto', sans-serif"],
        coverFont: ["'Verdana', 'sans-serif'"],
      },
      boxShadow: {
        "input-focus": "0 0 3px 2px rgb(228 121 17 / 50%)",
        details: "rgba(0, 0, 0, 0.86) 0px 22px 40px 6px",
      },
      backgroundImage: {
        home: "url('/assets/hero2.jpg')",
        career: "url('/assets/images/career-hero-img-2.png')",
      },
      colors: {
        dark: {
          900: "#111111",
          800: "#212325",
          desc: "#0B0B74",
          forgot: "#006BC2",
          lightBlack: "#1F1F1F",
        },
        headerMain: "#121212",
        cover: "#B8B8B5",
        yellowLight: "#F5D382",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/aspect-ratio"),
  ],
};

