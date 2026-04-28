"use client";
import { motion } from "framer-motion";

// Specific color mappings for each skill to ensure safe Tailwind compilation
const skills = [
  {
    name: "Next.js", icon: "N",
    colors: {
      border: "group-hover:border-neon-purple",
      glow: "bg-neon-purple/5 group-hover:bg-neon-purple/30",
      text: "group-hover:text-neon-purple",
      ring: "border-neon-purple/50",
      shadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
    }
  },
  {
    name: "React", icon: "R",
    colors: {
      border: "group-hover:border-neon-cyan",
      glow: "bg-neon-cyan/5 group-hover:bg-neon-cyan/30",
      text: "group-hover:text-neon-cyan",
      ring: "border-neon-cyan/50",
      shadow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
    }
  },
  {
    name: "TypeScript", icon: "TS",
    colors: {
      border: "group-hover:border-neon-pink",
      glow: "bg-neon-pink/5 group-hover:bg-neon-pink/30",
      text: "group-hover:text-neon-pink",
      ring: "border-neon-pink/50",
      shadow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
    }
  },
  {
    name: "Tailwind CSS", icon: "TW",
    colors: {
      border: "group-hover:border-neon-cyan",
      glow: "bg-neon-cyan/5 group-hover:bg-neon-cyan/30",
      text: "group-hover:text-neon-cyan",
      ring: "border-neon-cyan/50",
      shadow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
    }
  },
  {
    name: "Python", icon: "PY",
    colors: {
      border: "group-hover:border-neon-purple",
      glow: "bg-neon-purple/5 group-hover:bg-neon-purple/30",
      text: "group-hover:text-neon-purple",
      ring: "border-neon-purple/50",
      shadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
    }
  },
  {
    name: "C++", icon: "C+",
    colors: {
      border: "group-hover:border-neon-pink",
      glow: "bg-neon-pink/5 group-hover:bg-neon-pink/30",
      text: "group-hover:text-neon-pink",
      ring: "border-neon-pink/50",
      shadow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
    }
  },
  {
    name: "Node.js", icon: "ND",
    colors: {
      border: "group-hover:border-neon-cyan",
      glow: "bg-neon-cyan/5 group-hover:bg-neon-cyan/30",
      text: "group-hover:text-neon-cyan",
      ring: "border-neon-cyan/50",
      shadow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
    }
  },
  {
    name: "MongoDB", icon: "DB",
    colors: {
      border: "group-hover:border-neon-purple",
      glow: "bg-neon-purple/5 group-hover:bg-neon-purple/30",
      text: "group-hover:text-neon-purple",
      ring: "border-neon-purple/50",
      shadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
    }
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto relative z-10 overflow-hidden">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech <span className="text-neon-cyan">Arsenal</span></h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      {/* Floating Node Galaxy */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-20">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            // Creates a zigzag staggered layout on desktop
            className={`relative flex flex-col items-center group w-24 md:w-28 ${index % 2 === 0 ? "md:-translate-y-12" : "md:translate-y-12"}`}
          >
            {/* The Continuous Floating Animation */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 + (index % 3), ease: "easeInOut", delay: index * 0.2 }}
              className="relative flex items-center justify-center cursor-pointer"
            >
              
              {/* Outer Spinning Orbit (Fades in on hover) */}
              <div className={`absolute -inset-6 border ${skill.colors.ring} rounded-full border-dashed animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* The Core Orb */}
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0b1021] border border-white/5 ${skill.colors.border} ${skill.colors.shadow} flex items-center justify-center relative z-10 transition-all duration-500`}>
                
                {/* Inner pulsing aura */}
                <div className={`absolute inset-2 rounded-full ${skill.colors.glow} blur-md transition-all duration-500`}></div>
                
                {/* Text Icon */}
                <span className={`text-3xl md:text-4xl font-black text-gray-600 ${skill.colors.text} relative z-20 transition-colors duration-300`}>
                  {skill.icon}
                </span>
              </div>

            </motion.div>

            {/* Skill Title */}
            <span className="mt-8 text-sm font-bold tracking-widest text-gray-500 group-hover:text-white uppercase transition-colors duration-300 text-center">
              {skill.name}
            </span>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}