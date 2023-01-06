/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "600px",
      md: "728px",
      lg: "984px",
      xl: "1740px",
      "2xl": "1860px",
    },
    // fontSize: {
    //   "fluid-1": "clamp(1.89rem, calc(1.48rem + 2.03vw), 2.93rem)",
    //   "fluid-2": "clamp(3.27rem, calc(2.31rem + 4.79vw), 5.72rem)",
    // },
    fontSize: {
      sm: ["0.8rem", "1"],
      base: ["1rem", "1"],
      lg: ["1.125rem", "1"],
      xl: ["1.25rem", "1"],
      "2xl": ["1.563rem", "1"],
      "3xl": ["1.953rem", "1"],
      "4xl": ["2.441rem", "1"],
      "5xl": ["3.052rem", "1"],
      "6xl": ["3.815rem", "1"],
      "7xl": ["4.768rem", "1"],
      "8xl": ["5.96rem", "1"],
      "9xl": ["128px", "1"],
      // Fluid font sizes
      "fluid-sm": [
        "calc(0.8rem + (1 - 0.8) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-base": [
        "calc(1rem + (1.125 - 1) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-lg": [
        "calc(1.125rem + (1.25 - 1.125) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-xl": [
        "calc(1.25rem + (1.563 - 1.25) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-2xl": [
        "calc(1.563rem + (1.953 - 1.563) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-3xl": [
        "calc(1.953rem + (2.441 - 1.953) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-4xl": [
        "calc(2.441rem + (3.052 - 2.441) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-5xl": [
        "calc(3.052rem + (3.815 - 3.052) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-6xl": [
        "calc(3.815rem + (4.768 - 3.815) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-7xl": [
        "calc(4.768rem + (5.96 - 4.768) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-8xl": [
        "calc(5.96rem + (8 - 5.96) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-9xl": ["clamp(1.5rem, calc(-0.10rem + 6.75vw), 8.00rem)", "1"],
    },
    // fontSize: {
    //   sm: ["0.8rem", "1.25rem"],
    //   base: ["1rem", "1.25rem"],
    //   xl: ["1.25rem", "1.25rem"],
    //   "2xl": ["1.563rem", "1.25rem"],
    //   "3xl": ["1.953rem", "1.25rem"],
    //   "4xl": ["2.441rem", "1.25rem"],
    //   "5xl": ["3.052rem", "1.25rem"],
    //   "6xl": ["3.815rem", "1.25rem"],
    //   "7xl": ["4.768rem", "1.25rem"],
    //   "8xl": ["5.96rem", "1.25rem"],
    //   "9xl": ["128px", "1.25rem"],
    // },
    // container: {
    //   padding: "1rem",
    // },
    extend: {
      colors: {
        // Primary: "#cdc6be",
        // #efefef:
        Primary: "#efefef",
        Secondary: "rgba(26, 28, 26, 0.9)",
        Tertiary: "rgba(199, 57, 43, 0.8)",
        Border: "rgba(26, 28, 26, 0.9)",
      },
    },
  },
  plugins: [],
};

// colors: {
//   Primary: "#cdc6be",
//   Secondary: "rgba(26, 28, 26, 0.9)",
//   Tertiary: "rgba(199, 57, 43, 0.8)",
//   Border: "#444444",
//   // Tertiary: "#c03f13",
// },

// colors: {
//   Primary: "#cdc6be",
//   Secondary: "#1d1d1b",
//   Tertiary: "#1d1d1b",
//   Border: "#444444",
//   // Tertiary: "#c03f13",
// },

// Tertiary: "#c03f13",
