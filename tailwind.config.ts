import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                electric: "#00F0FF",
                navy: "#0a0f1c",
            },
            boxShadow: {
                glow: "0 0 12px rgba(0, 240, 255, 0.6)",
            },
            animation: {
                "pulse-glow": "pulseGlow 2s infinite",
            },
            keyframes: {
                pulseGlow: {
                    "0%, 100%": { boxShadow: "0 0 8px rgba(0, 240, 255, 0.7)" },
                    "50%": { boxShadow: "0 0 16px rgba(0, 240, 255, 1)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
