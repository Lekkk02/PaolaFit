/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(14,18,59,0.81) ",
      "orange-md": "0px 20px 40px -15px rgba(14,18,59,0.81) ",
      "orange-lg": "0px 40px 60px -15px rgba(14,18,59,0.81) ",

      none: "none",
    },
    dropShadow: {
      xxl: "0 25px 25px rgba(0, 0, 0, 0.5)",
    },
    extend: {
      colors: {
        transparent: "transparent",
        black: {
          500: "#4F5665",
          600: "#0B132A",
        },
        orange: {
          100: "#ececff",
          500: "#0e123b",
        },
        green: {
          500: "#2FAB73",
        },
        white: {
          300: "#F8F8F8",
          500: "#fff",
        },
        purple: {
          500: "#0e123b",
        },
        gray: {
          100: "#EEEFF2",
          400: "#AFB5C0",
          500: "#DDDDDD",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
