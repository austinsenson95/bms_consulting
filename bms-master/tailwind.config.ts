import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Technical brand colors
                cyan: {
                    DEFAULT: "hsl(165 100% 50%)",
                    50: "hsl(165 100% 95%)",
                    100: "hsl(165 100% 85%)",
                    200: "hsl(165 100% 75%)",
                    300: "hsl(165 100% 65%)",
                    400: "hsl(165 100% 55%)",
                    500: "hsl(165 100% 50%)",
                    600: "hsl(165 100% 40%)",
                    700: "hsl(165 100% 30%)",
                    800: "hsl(165 100% 20%)",
                    900: "hsl(165 100% 10%)",
                },
                amber: {
                    DEFAULT: "hsl(43 100% 50%)",
                    50: "hsl(43 100% 95%)",
                    500: "hsl(43 100% 50%)",
                    600: "hsl(43 100% 40%)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "pulse-glow": {
                    "0%, 100%": {
                        boxShadow: "0 0 20px hsla(165, 100%, 50%, 0.2), 0 0 40px hsla(165, 100%, 50%, 0.1)",
                    },
                    "50%": {
                        boxShadow: "0 0 30px hsla(165, 100%, 50%, 0.4), 0 0 60px hsla(165, 100%, 50%, 0.2)",
                    },
                },
                "shimmer": {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                "gradient-x": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "spin-slow": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                "border-beam": {
                    "0%": { offsetDistance: "0%" },
                    "100%": { offsetDistance: "100%" },
                },
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "float": "float 6s ease-in-out infinite",
                "pulse-glow": "pulse-glow 3s ease-in-out infinite",
                "shimmer": "shimmer 2s linear infinite",
                "gradient-x": "gradient-x 4s ease infinite",
                "spin-slow": "spin-slow 20s linear infinite",
                "spin-slower": "spin-slow 30s linear infinite",
                "fade-in-up": "fade-in-up 0.5s ease-out",
                "scale-in": "scale-in 0.3s ease-out",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, hsla(165, 100%, 50%, 0.15), transparent)',
                'dot-pattern': 'radial-gradient(hsla(165, 100%, 50%, 0.15) 1px, transparent 1px)',
                'grid-pattern': 'linear-gradient(hsla(165, 100%, 50%, 0.03) 1px, transparent 1px), linear-gradient(90deg, hsla(165, 100%, 50%, 0.03) 1px, transparent 1px)',
            },
            boxShadow: {
                'glow-sm': '0 0 10px hsla(165, 100%, 50%, 0.2)',
                'glow': '0 0 20px hsla(165, 100%, 50%, 0.2), 0 0 40px hsla(165, 100%, 50%, 0.1)',
                'glow-lg': '0 0 30px hsla(165, 100%, 50%, 0.3), 0 0 60px hsla(165, 100%, 50%, 0.15)',
                'glow-amber': '0 0 20px hsla(43, 100%, 50%, 0.2), 0 0 40px hsla(43, 100%, 50%, 0.1)',
                'inner-glow': 'inset 0 0 20px hsla(165, 100%, 50%, 0.1)',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
