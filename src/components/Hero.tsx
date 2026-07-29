"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, ArrowDownRight, Award, Briefcase, Code, Cloud } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const titles = [
  "Software Engineer",
  "Cloud Computing Undergraduate",
  "Full Stack Developer",
  "Flutter Developer",
  "Backend Developer",
  "Cloud Enthusiast",
];

// Tech icons list with background styles and coordinates for floating placement
const techIcons = [
  { name: "Flutter", color: "bg-[#02569B]", top: "10%", left: "15%" },
  { name: "Firebase", color: "bg-[#FFCA28] text-black", top: "12%", right: "15%" },
  { name: "Docker", color: "bg-[#2496ED]", top: "48%", left: "0%" },
  { name: "Azure", color: "bg-[#0078D4]", top: "82%", left: "18%" },
  { name: "Python", color: "bg-[#3776AB]", top: "84%", right: "16%" },
  { name: "Java", color: "bg-[#007396]", top: "46%", right: "0%" },
  { name: "Git", color: "bg-[#F05032]", top: "32%", left: "8%" },
  { name: "Linux", color: "bg-[#FCC624] text-black", top: "34%", right: "8%" },
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const parallaxX = useTransform(springX, (val) => isMobile ? 0 : val * 20);
  const parallaxY = useTransform(springY, (val) => isMobile ? 0 : val * 20);

  const orbX = useTransform(springX, (val) => isMobile ? 0 : val * -30);
  const orbY = useTransform(springY, (val) => isMobile ? 0 : val * -30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3200);

    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left - width / 2) / (width / 2);
    const y = (e.clientY - rect.top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen pt-32 pb-16 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* LEFT COLUMN: Text Info */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-[#3B82F6] uppercase mb-3 font-mono"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-[0.95] text-white flex flex-col mb-4 uppercase font-space"
          >
            <span>Thimeth</span>
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-white bg-clip-text text-transparent">
              Chathnuka
            </span>
          </motion.h1>

          {/* Cycling Title Subtitle */}
          <div className="h-10 sm:h-12 overflow-hidden mb-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIdx}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-base sm:text-xl font-semibold text-gray-300 font-mono flex items-center gap-2"
              >
                <Code className="w-5 h-5 text-[#60A5FA]" />
                {titles[titleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed mb-8"
          >
            I build modern, scalable, and user-focused web and mobile applications with beautiful UI, secure backends, and cloud technologies.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#projects"
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-[#3B82F6]/20 transition-all duration-300 flex items-center gap-2 hover-target"
            >
              View Projects
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="glass-card text-gray-300 hover:text-white hover:bg-white/5 font-semibold text-xs px-6 py-3.5 rounded-full transition-all duration-300 hover-target"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="glass-card text-gray-300 hover:text-white hover:bg-white/5 font-semibold text-xs px-6 py-3.5 rounded-full transition-all duration-300 hover-target"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/Thimeth29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors duration-200 hover-target"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/thimeth-chathnuka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors duration-200 hover-target"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:thimethofficial2@gmail.com"
              aria-label="Send Email"
              className="text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors duration-200 hover-target"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Interactive Portrait & Floating elements */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">
            
            {/* Glowing Accent Orbs Behind (Parallax mapped) */}
            <motion.div 
              style={{ x: orbX, y: orbY }}
              className="absolute inset-0 bg-[#3B82F6]/20 rounded-full blur-[65px] animate-pulse duration-[6000ms]" 
            />
            <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-16 border border-[#3B82F6]/25 border-dashed rounded-full animate-[spin_60s_linear_infinite]" />

            {/* Floating Code Symbols */}
            <motion.div
              animate={isMobile ? undefined : { y: [0, -12, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[15%] top-[8%] z-0 font-mono text-sm text-[#3B82F6]/30 font-bold"
            >
              {"</>"}
            </motion.div>
            <motion.div
              animate={isMobile ? undefined : { y: [0, 10, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-[22%] bottom-[12%] z-0 font-mono text-base text-[#60A5FA]/25 font-bold"
            >
              {"{ }"}
            </motion.div>
            <motion.div
              animate={isMobile ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute right-[12%] top-[40%] z-0 font-mono text-xs text-white/10 font-bold"
            >
              {"=>"}
            </motion.div>

            {/* Profile Circle Photo with hover scale & parallax displacement */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ x: isMobile ? 0 : parallaxX, y: isMobile ? 0 : parallaxY }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl z-10 hover-target"
            >
              <img
                src="/portfolio/profile.jpg"
                alt="Thimeth Chathnuka"
                className="w-full h-full object-cover object-top scale-[1.05] hover:scale-[1.12] transition-transform duration-500"
              />
            </motion.div>

            {/* Card 1: 2+ Years Learning (Top-Left) */}
            <motion.div
              style={{ x: isMobile ? 0 : parallaxX, y: isMobile ? 0 : parallaxY }}
              animate={isMobile ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -left-10 top-[18%] z-20 px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg"
            >
              <Award className="w-3.5 h-3.5 text-[#3B82F6]" />
              <div className="text-[9px] text-left">
                <p className="font-semibold text-white leading-tight">2+ Years</p>
                <p className="text-gray-400">Learning Dev</p>
              </div>
            </motion.div>

            {/* Card 2: Flutter Developer (Top-Right) */}
            <motion.div
              style={{ x: isMobile ? 0 : parallaxX, y: isMobile ? 0 : parallaxY }}
              animate={isMobile ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="glass-card absolute -right-8 top-[24%] z-20 px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg"
            >
              <Code className="w-3.5 h-3.5 text-[#60A5FA]" />
              <div className="text-[9px] text-left">
                <p className="font-semibold text-white leading-tight">Flutter Developer</p>
                <p className="text-gray-400">Mobile Apps</p>
              </div>
            </motion.div>

            {/* Card 3: Cloud Computing (Bottom-Right) */}
            <motion.div
              style={{ x: isMobile ? 0 : parallaxX, y: isMobile ? 0 : parallaxY }}
              animate={isMobile ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="glass-card absolute -right-10 top-[68%] z-20 px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg"
            >
              <Cloud className="w-3.5 h-3.5 text-[#3B82F6]" />
              <div className="text-[9px] text-left">
                <p className="font-semibold text-white leading-tight">Cloud Computing</p>
                <p className="text-gray-400">Azure & Firebase</p>
              </div>
            </motion.div>

            {/* Card 4: Open Source (Bottom-Left) */}
            <motion.div
              style={{ x: isMobile ? 0 : parallaxX, y: isMobile ? 0 : parallaxY }}
              animate={isMobile ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              className="glass-card absolute -left-8 top-[62%] z-20 px-3 py-1.5 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg"
            >
              <Briefcase className="w-3.5 h-3.5 text-purple-400" />
              <div className="text-[9px] text-left">
                <p className="font-semibold text-white leading-tight">Open Source</p>
                <p className="text-gray-400">Contributor</p>
              </div>
            </motion.div>

            {/* Floating Small Technology Badges */}
            {!isMobile && techIcons.map((icon, i) => (
              <motion.div
                key={icon.name}
                style={{ top: icon.top, left: icon.left, right: icon.right, x: parallaxX, y: parallaxY }}
                animate={{
                  y: [0, Math.sin(i) * 8, 0],
                  x: [0, Math.cos(i) * 8, 0],
                }}
                transition={{
                  duration: 3.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                className={`absolute z-20 px-2 py-1 text-[9px] font-bold text-white rounded-md shadow-md border border-white/5 ${icon.color}`}
              >
                {icon.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
