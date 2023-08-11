/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#E9E7DD",
        darkGray: "#282C28",
        sparkPink: "#F05561",
        sparkBlue: "#17BDCB",
        sparkOrange: "#F68D3B",
        sparkGreen: "#87C75D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
