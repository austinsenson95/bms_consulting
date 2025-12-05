import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Voltaic | Full-Stack BMS Platform & Engineering",
    description: "End-to-end Battery Management System solutions. From AFE drivers to Cloud AI. Production-grade firmware, safety-critical architecture, and scalable fleet intelligence.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased bg-brand-950 text-slate-200 selection:bg-brand-accent selection:text-brand-950`}>
                {children}
            </body>
        </html>
    );
}
