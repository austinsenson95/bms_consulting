import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Voltaic | Full-Stack BMS Platform & Engineering",
    description: "End-to-end Battery Management System solutions. From AFE drivers to Cloud AI. Production-grade firmware, safety-critical architecture, and scalable fleet intelligence.",
};

import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-foreground`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
