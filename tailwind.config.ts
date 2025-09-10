import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'arcade': ['"Arcade Classic"', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Custom portfolio colors
        light: '#eeeeee',
        dark: '#141313',
        darker: '#120f0f',
        accent1: '#221b1b',
        accent2: '#201212',
        'retro-black': '#0a0a0a',
        'retro-dark': '#1a1a1a',
        'retro-gray': '#333333',
        'retro-white': '#f0f0f0',
        'retro-red': '#ff1a1a',
        'retro-blue': '#0066ff',
        'retro-yellow': '#ffff00',
        'retro-green': '#00cc00',
        'retro-pink': '#ff00ff',
        'retro-cyan': '#00ffff',
        'health-red': '#ff0000',
        'health-yellow': '#ffcc00',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0, 0, 0, 0.8)',
        'retro-sm': '2px 2px 0px 0px rgba(0, 0, 0, 0.8)',
        'retro-lg': '8px 8px 0px 0px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'pixel-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'glow': {
          'from': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6' },
          'to': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff0000, 0 0 40px #ff0000' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.6s ease-out',
        'pixel-blink': 'pixel-blink 1s steps(1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      }
    }
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
