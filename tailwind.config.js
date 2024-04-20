export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        grid1: "60% 24%",
        grid2: "50% 20%",
        grid3: "24% 60%",
        normal: "100%",
        maxy: "repeat(auto-fit, minmax(240px, 350px))",
      },
    },
  },
  plugins: [],
};
