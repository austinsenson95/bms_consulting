import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Voltaic | Full-Stack BMS Platform & Engineering",
    description: "End-to-end Battery Management System solutions. From AFE drivers to Cloud AI. Production-grade firmware, safety-critical architecture, and scalable fleet intelligence.",
    keywords: ["BMS", "Battery Management System", "Firmware", "Embedded Systems", "ISO 26262", "AUTOSAR"],
};

import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-foreground`}>
                {/* Global background effects */}
                <div className="fixed inset-0 bg-dot-pattern opacity-30 pointer-events-none z-0" />
                <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background/95 pointer-events-none z-0" />

                <Navbar />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
