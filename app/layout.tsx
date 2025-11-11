// layout.tsx placeholder
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export const metadata: Metadata = {
    title: "Syday | Data & AI Consulting",
    description: "Futuristic, human-centered data and AI solutions for all business sizes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="font-sans bg-white dark:bg-[#071226] text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <Hero />
            {children}
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}
