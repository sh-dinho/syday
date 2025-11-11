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
        },
    },
    plugins: [],
};
export default config;
