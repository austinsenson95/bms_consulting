import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom tech-focused palette
                // Custom tech-focused palette - STRICT LIGHT MODE
                brand: {
                    900: '#0f172a', // Slate 900 (Text Only)
                    950: '#F8FAFC', // FORCED OFF-WHITE BACKGROUND
                    accent: '#0FB9B1', // Primary Teal (Accent Only)
                    secondary: '#0A6C6A', // Deep Teal (Text/Icons)
                    highlight: '#84cc16', // Lime 500
                },
                // Semantic Tokens - STRICT LIGHT MODE
                'bg-primary': '#F8FAFC', // Off-white
                'surface': '#FFFFFF',    // White
                'text-primary': '#0F172A', // Slate 900
                'text-secondary': '#475569', // Slate 600
                'accent': '#0FB9B1',     // Primary Teal
                'accent-deep': '#0A6C6A', // Deep Teal
                'border-subtle': '#E2E8F0', // Slate 200
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
export default config;
