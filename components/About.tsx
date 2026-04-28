"use client";
import { motion } from "framer-motion";
import { Terminal, Layout, Zap, Rocket } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-16 md:py-24 px-6 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        // Forces 1 column on mobile/tablet, 2 columns on desktop
        className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center"
      >
        {/* --- Left Side: Text Content --- */}
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              About <span className="text-neon-cyan">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full mb-6 md:mb-8"></div>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-300 text-base md:text-lg leading-relaxed">
            I’m an <span className="text-white font-semibold">IT Engineer</span> who loves building software that actually makes a difference. From crafting responsive web interfaces to developing complete full-stack applications, I focus on writing clean, efficient code and creating smooth user experiences.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-gray-300 text-base md:text-lg leading-relaxed">
            I enjoy working with modern technologies like <span className="text-neon-cyan font-medium">React, Next.js</span>, and more to bring ideas to life. Whether it's developing a project from scratch or improving an existing system, I’m always driven by <span className="text-neon-pink font-medium">problem-solving and innovation</span>.
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-300 text-base md:text-lg leading-relaxed">
            Currently, I’m focused on sharpening my development skills and building projects that reflect real-world impact.
          </motion.p>
        </div>

        {/* --- Right Side: Visual Elements (Bento Grid) --- */}
        <motion.div 
          variants={containerVariants}
          // 1 column on tiny mobile, 2 columns on small screens and up
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 lg:mt-0"
        >
          {/* Card 1 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-card bg-[#121833]/50 p-5 md:p-6 rounded-2xl border border-neon-purple/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:border-neon-purple/50 transition-all"
          >
            <Terminal className="text-neon-purple mb-4" size={28} />
            <h3 className="text-white font-bold mb-2">Clean Code</h3>
            <p className="text-sm text-gray-400">Writing scalable, efficient, and maintainable logic.</p>
          </motion.div>

          {/* Card 2 (Offset only applies on sm screens and larger) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-card bg-[#121833]/50 p-5 md:p-6 rounded-2xl border border-neon-cyan/20 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:border-neon-cyan/50 transition-all sm:mt-8"
          >
            <Layout className="text-neon-cyan mb-4" size={28} />
            <h3 className="text-white font-bold mb-2">Smooth UI/UX</h3>
            <p className="text-sm text-gray-400">Crafting engaging and responsive web interfaces.</p>
          </motion.div>

          {/* Card 3 (Offset only applies on sm screens and larger) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-card bg-[#121833]/50 p-5 md:p-6 rounded-2xl border border-neon-pink/20 shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:border-neon-pink/50 transition-all sm:-mt-8"
          >
            <Zap className="text-neon-pink mb-4" size={28} />
            <h3 className="text-white font-bold mb-2">Performance</h3>
            <p className="text-sm text-gray-400">Optimizing applications for maximum speed.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-card bg-[#121833]/50 p-5 md:p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all"
          >
            <Rocket className="text-white mb-4" size={28} />
            <h3 className="text-white font-bold mb-2">Innovation</h3>
            <p className="text-sm text-gray-400">Building projects with real-world impact.</p>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}