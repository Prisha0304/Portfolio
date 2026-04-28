"use client";
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "TruthLens",
    desc: "AI verification engine providing real-time fact-checking, citation tracing, and bias detection for LLMs.",
    tech: ["Next.js", "Python", "Tailwind", "LLMs"],
    theme: "hover:border-neon-purple hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]",
    textHover: "group-hover:text-neon-purple",
    accent: "bg-neon-purple",
    btnGlow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:border-neon-purple/50",
    githubLink: "https://github.com/Akshay-cybersec/TruthLens"
  },
  {
    title: "NeuroVibe",
    desc: "Real-time AI haptic sign language translator enabling hard-of-hearing users to feel conversations via vibrations.",
    tech: ["Nextjs", "Tailwind Css", "AI/ML", "Haptic APIs", "TypeScript"],
    theme: "hover:border-neon-cyan hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]",
    textHover: "group-hover:text-neon-cyan",
    accent: "bg-neon-cyan",
    btnGlow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-neon-cyan/50",
    githubLink: "https://github.com/Akshay-cybersec/NeuroVibe"
  },
  {
    title: "FlatScout",
    desc: "Machine learning based property scouting platform that analyzes local metrics to find undervalued real estate.",
    tech: ["Python", "Nextjs", "Tailwind Css", "Scikit-Learn", "TypeScript"],
    theme: "hover:border-neon-pink hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]",
    textHover: "group-hover:text-neon-pink",
    accent: "bg-neon-pink",
    btnGlow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:border-neon-pink/50",
    githubLink: "https://github.com/Akshay-cybersec/FlatScout"
  },
  {
    title: "Crime Lens",
    desc: "Advanced digital forensics tool that scans UDFR documents, extracts critical data, and streamlines investigations to solve cases efficiently.",
    tech: ["Nextjs", "Tailwind Css", "TypeScript", "Python", "FastApi"],
    theme: "hover:border-[#43e6ff] hover:shadow-[0_0_40px_rgba(67,230,255,0.25)]",
    textHover: "group-hover:text-[#43e6ff]",
    accent: "bg-[#43e6ff]",
    btnGlow: "hover:shadow-[0_0_20px_rgba(67,230,255,0.3)] hover:border-[#43e6ff]/50",
    githubLink: "https://github.com/Akshay-cybersec/CrimeLens"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 max-w-6xl mx-auto relative z-10">
      
      {/* Responsive Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-neon-purple/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-[-1]"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20 flex flex-col items-center md:items-center text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Featured <span className="text-neon-pink drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">Work</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
      </motion.div>

      {/* Grid Layout - 1 col on mobile, 2 cols on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5 }} // Slightly reduced lift for better mobile touch experience
            className={`relative glass-card bg-[#0b1021]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 lg:p-10 flex flex-col h-full group transition-all duration-500 rounded-3xl overflow-hidden ${project.theme}`}
          >
            {/* Animated Top Accent Line */}
            <div className={`absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${project.accent} shadow-[0_0_15px_inherit]`}></div>

            {/* Internal Hover Spotlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Project Title */}
            <h3 className={`text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white transition-colors duration-300 relative z-10 ${project.textHover}`}>
              {project.title}
            </h3>
            
            {/* Project Description */}
            <p className="text-gray-400 mb-6 md:mb-8 flex-grow text-sm md:text-base leading-relaxed relative z-10">
              {project.desc}
            </p>
            
            {/* Staggered Tech Stack Pills */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                hidden: {}
              }}
              className="flex flex-wrap gap-2 mb-8 md:mb-10 relative z-10"
            >
              {project.tech.map((t) => (
                <motion.span 
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  key={t} 
                  className="text-[10px] md:text-xs font-semibold px-3 py-1.5 md:px-4 md:py-1.5 rounded-full bg-[#121833] text-gray-300 border border-white/5 group-hover:border-white/20 hover:bg-white/10 transition-colors shadow-inner"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-white/10 relative z-10">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full sm:w-auto gap-2 text-sm font-semibold text-gray-400 hover:text-white bg-[#121833] px-6 py-3 rounded-xl transition-all duration-300 border border-white/5 ${project.btnGlow}`}
              >
                <FolderGit2 size={18} className={`transition-colors duration-300 ${project.textHover}`} />
                GitHub Link
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}