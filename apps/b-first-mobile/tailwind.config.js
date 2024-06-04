const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        accent: "#EB1923",
        "accent-light": "#f58e93",
        "dark-300": "#2c2d2e",
        "dark-400": "#1a1b1c",
        "dark-500": "#111112",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar-hide")],
};
