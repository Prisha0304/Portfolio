"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react"; // Imported Menu and X icons

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  // New state for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  // Function to handle clicking a link (works for both desktop and mobile)
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        // Keep background solid if scrolled OR if mobile menu is open
        scrolled || isMobileMenuOpen ? "bg-[#0b1021]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative">
        
        {/* --- Left Side: Logo --- */}
        <div className="flex items-center gap-2 text-xl font-bold tracking-tighter shrink-0 text-white z-50">
          <Sparkles className="text-neon-cyan" size={22} />
          <span>Portfolio</span>
        </div>

        {/* --- Middle: Curved Border Links (Desktop Only) --- */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-full p-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            {links.map((link) => {
              const isActive = activeLink === link;
              return (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase()}`}
                    onClick={() => handleLinkClick(link)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${
                      isActive 
                        ? "text-neon-cyan bg-white/10 shadow-[0_0_15px_rgba(34,211,238,0.3)] border border-neon-cyan/30" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* --- Right Side: Mobile Menu Toggle & Desktop Spacer --- */}
        <div className="flex justify-end md:w-24 z-50">
          {/* Mobile Hamburger/Close Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-neon-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0b1021]/95 backdrop-blur-xl border-b border-white/10 absolute top-full left-0 w-full shadow-2xl"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {links.map((link) => {
                const isActive = activeLink === link;
                return (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={`#${link.toLowerCase()}`}
                      onClick={() => handleLinkClick(link)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActive 
                          ? "text-neon-cyan bg-white/10 border border-neon-cyan/30" 
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}