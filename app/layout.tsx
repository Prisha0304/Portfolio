import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prisha | Full Stack Developer",
  description: "A modern, high-end developer portfolio built with Next.js, Tailwind v4, and Framer Motion, inspired by a dark futuristic aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative min-h-screen bg-navy-900 text-white overflow-x-hidden`}>
        {/* Floating Background Particle Orbs - Recreate from Vizualization Spec */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Example particles. Recreate this effect in detail. */}
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-neon-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-neon-pink/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        </div>
        
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}