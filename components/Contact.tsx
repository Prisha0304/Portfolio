"use client";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    // Changed max-w-6xl to max-w-5xl to make the overall section smaller/tighter
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background Particle Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
          <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-neon-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        // Removed the giant glass-card wrapper here. It's just a grid now.
        className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
      >
        {/* --- Left Side: Get in touch & Info --- */}
        {/* Left side now sits directly on the page background */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-neon-cyan">touch</span>
          </h2>
          <p className="text-gray-400 mb-10 text-base leading-relaxed max-w-sm">
            I'm very approachable and would love to speak to you. Feel free to call, send me an email, follow me on social media, or simply complete the enquiry form.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan shrink-0">
                <Mail size={18} />
              </div>
              <span className="text-base">prisharaut03@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300 hover:text-neon-pink transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-pink shrink-0">
                <MapPin size={18} />
              </div>
              <span className="text-base">Mumbai, India</span>
            </div>
          </div>
        </div>

        {/* --- Right Side: The Contact Form --- */}
        {/* The card background is now exclusively applied to the form */}
        <div className="bg-[#0b1021]/80 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" className="w-full bg-[#121833] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan focus:bg-[#1a2247] transition-all" placeholder="Name" />
            </div>
            <div>
              <input type="email" className="w-full bg-[#121833] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan focus:bg-[#1a2247] transition-all" placeholder="Email Address" />
            </div>
            <div>
              <input type="text" className="w-full bg-[#121833] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan focus:bg-[#1a2247] transition-all" placeholder="Subject" />
            </div>
            <div>
              <textarea rows={4} className="w-full bg-[#121833] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan focus:bg-[#1a2247] transition-all resize-none" placeholder="Your message"></textarea>
            </div>
            
            <button className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-[#b963ff] to-[#43e6ff] text-white font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(67,230,255,0.4)] hover:scale-[1.02]">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}