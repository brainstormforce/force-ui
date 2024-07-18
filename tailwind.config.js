import {withForceUI} from "./src/index.js";

const config = withForceUI({
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: {
            100: "#f7f3f7",
            200: "#f0e6f0",
            300: "#e9d9e9",
            400: "#dcbfd9",
            500: "#cfb5cf",
            600: "#bfa5bf",
            700: "#9e849e",
            800: "#7d637d",
            900: "#6d536d",
          },
        }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
});

export default config;