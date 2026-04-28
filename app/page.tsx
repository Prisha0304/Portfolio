import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center border-t border-white/10 text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} Prisha. All rights reserved.</p>
      </footer>
    </>
  );
}