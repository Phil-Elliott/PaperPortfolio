/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Spectral", "sans-serif"],
      serif: ["Spectral", "serif"],
      mono: ["Menlo", "monospace"],
      pixel: ["Rubik Pixels"],
    },

    screens: {
      xs: "480px",
      sm: "600px",
      md: "760px",
      lg: "984px",
      lg2: "1100px",
      lg3: "1280px",
      xl: "1740px",
      "2xl": "1860px",
    },

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
      "fluid-5xl": ["clamp(1.5rem, calc(-0.75rem + 10.00vw), 3.00rem)", 1],
      "fluid-6xl": ["clamp(1.75rem, calc(-0.75rem + 10.00vw), 3.00rem)", 1],
      "fluid-7xl": [
        "calc(4.768rem + (5.96 - 4.768) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-8xl": [
        "calc(5.96rem + (8 - 5.96) * ((100vw - 400px) / (1600 - 400)))",
        1,
      ],
      "fluid-9xl": ["clamp(2rem, calc(-0.10rem + 6.75vw), 8.00rem)", "1"],
    },

    extend: {
      animation: {
        static: "static 1s ease-in-out infinite",
      },
      keyframes: {
        static: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-.25rem)" },
        },
      },
      colors: {
        Background: "#181818",
        Primary: "#efefef",
        // Secondary: "rgba(26, 28, 26, 0.9)",
        Secondary: "#302f2b",
        // Tertiary: "rgba(199, 57, 43, 0.8)",
        Tertiary: "#cf5d52",
        Border: "rgba(26, 28, 26, 0.9)",
        Black: "#1d1d1b",
        Green: "#4CAF50",
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
