"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Code, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Side: Text & Buttons --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neon-cyan font-medium mb-4 tracking-wider flex items-center gap-2">
            <Sparkles size={18} /> WELCOME TO MY UNIVERSE
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">Prisha</span>
            <br />Full Stack Developer
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            I craft high-performance, futuristic web applications. Specializing in React, Next.js, and pushing the boundaries of interactive UI.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold flex items-center
             gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all">
              Hire Me <ArrowRight size={18} />
            </button>
            <a 
              href="/resume.pdf" 
              download="resumefile.pdf"
              className="px-6 py-3 rounded-full glass-card hover:bg-white/10 text-white font-semibold flex items-center gap-2 transition-all cursor-pointer"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* --- Right Side: Profile Image & Floating Elements --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center mt-10 md:mt-0"
        >
          {/* Main Profile Orb */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full glass-card border-neon-purple/30 p-2 flex items-center justify-center relative overflow-hidden group shadow-[0_0_40px_rgba(168,85,247,0.2)]"
          >
            {/* Subtle color overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/10 to-neon-cyan/10 mix-blend-overlay z-10 pointer-events-none transition-opacity group-hover:opacity-50"></div>
            
            {/* The Image: Normal by default, grayscale on hover */}
            <img 
              src="/profile.jpeg" 
              alt="Prisha" 
              className="w-full h-full object-cover rounded-full filter hover:grayscale transition-all duration-700 relative z-0 group-hover:scale-110" 
            />
          </motion.div>

          {/* Floating Badge 1: Top Left */}
         
         
        </motion.div>

      </div>
    </section>
  );
}