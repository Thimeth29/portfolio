"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDownRight, Award, Code, Cloud, Cpu, Server } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const titles = [
  "Cloud Computing Undergraduate",
  "DevOps Automation Engineer",
  "Full-Stack Software Developer",
  "Cloud Security & IAM Specialist"
];

// Tech icons list with modern branding colors and grid placements
const techBadges = [
  { name: "AWS", color: "bg-[#FF9900]/10 border-[#FF9900]/30 text-[#FF9900]", icon: Cloud },
  { name: "Docker", color: "bg-[#2496ED]/10 border-[#2496ED]/30 text-[#2496ED]", icon: Server },
  { name: "Terraform", color: "bg-[#7B42BC]/10 border-[#7B42BC]/30 text-[#8B5CF6]", icon: Cpu },
  { name: "GitHub Actions", color: "bg-[#2088FF]/10 border-[#2088FF]/30 text-[#3B82F6]", icon: Code },
  { name: "Flutter", color: "bg-[#02569B]/10 border-[#02569B]/30 text-[#60A5FA]", icon: Code },
  { name: "Python", color: "bg-[#3776AB]/10 border-[#3776AB]/30 text-[#3776AB]", icon: Code },
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const parallaxX = useTransform(springX, (val) => isMobile ? 0 : val * 22);
  const parallaxY = useTransform(springY, (val) => isMobile ? 0 : val * 22);

  const orbX = useTransform(springX, (val) => isMobile ? 0 : val * -25);
  const orbY = useTransform(springY, (val) => isMobile ? 0 : val * -25);

  const badgeX0 = useTransform(springX, (val) => val * 22 + Math.cos((0 * Math.PI) / 180) * 200);
  const badgeY0 = useTransform(springY, (val) => val * 22 + Math.sin((0 * Math.PI) / 180) * 200);
  const badgeX1 = useTransform(springX, (val) => val * 24 + Math.cos((60 * Math.PI) / 180) * 200);
  const badgeY1 = useTransform(springY, (val) => val * 24 + Math.sin((60 * Math.PI) / 180) * 200);
  const badgeX2 = useTransform(springX, (val) => val * 26 + Math.cos((120 * Math.PI) / 180) * 200);
  const badgeY2 = useTransform(springY, (val) => val * 26 + Math.sin((120 * Math.PI) / 180) * 200);
  const badgeX3 = useTransform(springX, (val) => val * 28 + Math.cos((180 * Math.PI) / 180) * 200);
  const badgeY3 = useTransform(springY, (val) => val * 28 + Math.sin((180 * Math.PI) / 180) * 200);
  const badgeX4 = useTransform(springX, (val) => val * 30 + Math.cos((240 * Math.PI) / 180) * 200);
  const badgeY4 = useTransform(springY, (val) => val * 30 + Math.sin((240 * Math.PI) / 180) * 200);
  const badgeX5 = useTransform(springX, (val) => val * 32 + Math.cos((300 * Math.PI) / 180) * 200);
  const badgeY5 = useTransform(springY, (val) => val * 32 + Math.sin((300 * Math.PI) / 180) * 200);

  const badgeTransforms = [
    { x: badgeX0, y: badgeY0 },
    { x: badgeX1, y: badgeY1 },
    { x: badgeX2, y: badgeY2 },
    { x: badgeX3, y: badgeY3 },
    { x: badgeX4, y: badgeY4 },
    { x: badgeX5, y: badgeY5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3500);

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

  // Letter animation parameters for cinematic title entries
  const textContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.25 * i },
    }),
  };

  const letterAnim = {
    hidden: { y: 60, opacity: 0, filter: "blur(4px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 }
    },
  } as const;

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen pt-36 pb-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Dynamic Background Typographic Marquee - 3D layering feel */}
      <div className="absolute inset-0 flex flex-col justify-center gap-12 pointer-events-none select-none opacity-[0.025] z-0 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-[9vw] font-black tracking-tighter uppercase font-space text-stroke-thin">
          CLOUD SECURITY • DEVOPS PIPELINES • INFRASTRUCTURE AS CODE • AUTOMATION • SECURE NETWORKS •&nbsp;
          CLOUD SECURITY • DEVOPS PIPELINES • INFRASTRUCTURE AS CODE • AUTOMATION • SECURE NETWORKS •&nbsp;
        </div>
        <div className="animate-marquee-reverse whitespace-nowrap text-[9vw] font-black tracking-tighter uppercase font-space text-stroke-thin">
          AWS CERTIFIED • PYTHON MICROSERVICES • DOCKER CONTAINERS • SERVERLESS STACK • KUBERNETES •&nbsp;
          AWS CERTIFIED • PYTHON MICROSERVICES • DOCKER CONTAINERS • SERVERLESS STACK • KUBERNETES •&nbsp;
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* LEFT COLUMN: Developer Info */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#3B82F6] uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Cloud Engineer & Developer
            </span>
          </motion.div>

          {/* Splitting Letter Animation for cinematic entrance */}
          <motion.h1
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-[0.95] text-white flex flex-col mb-4 uppercase font-space"
          >
            <motion.span className="flex flex-wrap overflow-hidden py-1">
              {"Thimeth".split("").map((letter, idx) => (
                <motion.span key={idx} variants={letterAnim} className="inline-block">
                  {letter}
                </motion.span>
              ))}
            </motion.span>
            <motion.span className="flex flex-wrap overflow-hidden py-1 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-white bg-clip-text text-transparent">
              {"Chathnuka".split("").map((letter, idx) => (
                <motion.span key={idx} variants={letterAnim} className="inline-block">
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Scrolling Role Switcher */}
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
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed mb-8"
          >
            Specializing in designing secure, scalable AWS serverless architectures, deploying automated Terraform infrastructure-as-code models, and engineering robust DevOps container pipelines.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#projects"
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-[#3B82F6]/20 transition-all duration-300 flex items-center gap-2 hover-target hover:scale-105"
            >
              Explore Showcase
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href="/portfolio/Thimeth_Chathnuka_CV.pdf"
              download="Thimeth_Chathnuka_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card text-gray-300 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white font-semibold text-xs px-6 py-3.5 rounded-full transition-all duration-300 hover-target"
            >
              Download CV
            </a>
          </motion.div>

          {/* Contact Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
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
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-400 border-t border-white/5 pt-4 font-mono">
              <a
                href="tel:0714319886"
                className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors duration-200 hover-target"
              >
                <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>0714319886</span>
              </a>
              <a
                href="mailto:thimethofficial2@gmail.com"
                className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors duration-200 hover-target"
              >
                <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>thimethofficial2@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Layered Parallax Card & Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">

            {/* Glowing Accent Orbs Behind */}
            <motion.div
              style={{ x: orbX, y: orbY }}
              className="absolute w-[80%] h-[80%] bg-[#3B82F6]/15 rounded-full blur-[70px] animate-pulse duration-[6000ms]"
            />
            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_50s_linear_infinite]" />
            <div className="absolute inset-8 border border-[#3B82F6]/20 border-dashed rounded-full animate-[spin_70s_linear_infinite]" />

            {/* Layered Profile Cards - Parallax tilting */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ x: isMobile ? 0 : parallaxX, y: isMobile ? 0 : parallaxY }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="absolute inset-4 rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 hover-target group cursor-pointer bg-zinc-950"
            >
              {/* Outer decorative card shadow ring */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              
              <img
                src="/portfolio/profile.jpg"
                alt="Thimeth Chathnuka"
                className="w-full h-full object-cover object-top scale-[1.03] group-hover:scale-[1.08] transition-transform duration-700 ease-out"
              />

              {/* AWS Certified Ribbon overlay on photo */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end">
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight font-space uppercase">L.P. Thimeth</h4>
                  <p className="text-[10px] text-gray-400 font-mono">AWS Cloud Essentials Certified</p>
                </div>
                <Award className="w-5 h-5 text-[#FF9900] animate-bounce" />
              </div>
            </motion.div>

            {!isMobile && techBadges.map((badge, i) => {
              // Position coordinate maps for clean visual layout
              const angles = [0, 60, 120, 180, 240, 300];
              const rad = 200; // offset radius
              const angleRad = (angles[i] * Math.PI) / 180;
              const yPos = Math.sin(angleRad) * rad;
              const BadgeIcon = badge.icon;

              return (
                <motion.div
                  key={badge.name}
                  style={{
                    x: badgeTransforms[i].x,
                    y: badgeTransforms[i].y,
                  }}
                  animate={{
                    y: [yPos, yPos + Math.sin(i) * 10, yPos],
                  }}
                  transition={{
                    duration: 4.5 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                  className={`absolute z-20 px-3.5 py-1.5 rounded-full text-[9px] font-mono font-bold border flex items-center gap-1.5 shadow-xl backdrop-blur-md ${badge.color}`}
                >
                  <BadgeIcon className="w-3 h-3" />
                  {badge.name}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
