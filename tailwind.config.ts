import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(214.3 31.8% 91.4%)",
        background: "#0f172a",
        foreground: "#f1f5f9",
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        accent: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },
      animation: {
        // Simplified animations for better performance
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        // Reduced glow animation - less CPU intensive
        "glow": "glow 3s ease-in-out infinite",
        // Faster bounce for scroll indicator
        "bounce": "bounce 1.5s infinite",
        // Spin for loading states
        "spin": "spin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(168, 85, 247, 0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  // Disable unused core plugins for smaller CSS
  corePlugins: {
    container: false, // Using custom container
  },
};

export default config;
