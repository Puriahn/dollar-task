import { warning } from "framer-motion";

const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          common: "var(--color-text-common)",
          warningg:"var(--color-text-warning)",
          muted: "var(--color-text-muted)",
          invert: "var(--color-text-invert)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          hum: "var(--color-fill-humburgur)",
          "button-accent": "var(--color-button)",
          "button-accent-hover": "var(--color-button-hover)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-border)",
        },
      },
    },
  },
  plugins: [nextui()],
};
