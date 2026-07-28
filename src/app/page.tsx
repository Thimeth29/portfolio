"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });
const BackgroundEffects = dynamic(() => import("@/components/BackgroundEffects"), { ssr: false });
const GithubStats = dynamic(() => import("@/components/GithubStats"), { ssr: false });

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Spring config for smooth indicator tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* 1. Custom Interactive Cursor */}
      <Cursor />

      {/* 2. Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-white origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* 3. Immersive Animated Background */}
      <BackgroundEffects />

      {/* 4. Main Site Layout Structure */}
      <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-[#3B82F6] selection:text-black">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <GithubStats />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
