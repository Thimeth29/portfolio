"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Static data structure to bypass Math.random() recalculations and reflow storms
const particlesData = [
  { top: "15%", left: "10%", duration: 6, delay: 0.5 },
  { top: "25%", left: "45%", duration: 5, delay: 1.2 },
  { top: "35%", left: "80%", duration: 7, delay: 0.2 },
  { top: "50%", left: "15%", duration: 6, delay: 2.1 },
  { top: "60%", left: "65%", duration: 4, delay: 0.8 },
  { top: "70%", left: "30%", duration: 8, delay: 1.5 },
  { top: "80%", left: "90%", duration: 5, delay: 0.4 },
  { top: "90%", left: "55%", duration: 7, delay: 1.0 },
  { top: "40%", left: "70%", duration: 6, delay: 1.7 },
  { top: "85%", left: "20%", duration: 5, delay: 2.3 },
  { top: "10%", left: "85%", duration: 7, delay: 0.9 },
  { top: "75%", left: "40%", duration: 6, delay: 1.1 }
];

export default function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth movement of the background gradient glow
  const glowX = useSpring(mouseX, { damping: 40, stiffness: 120 });
  const glowY = useSpring(mouseY, { damping: 40, stiffness: 120 });

  useEffect(() => {
    // Only capture coordinates on pointer-enabled desktop systems
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
      {/* 1. Interactive Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.8]" />

      {/* 2. Interactive Mouse Glow (glows beneath grid) */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.22] blur-[100px] bg-gradient-to-r from-[#2563EB]/40 via-[#3B82F6]/30 to-transparent hidden md:block"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 3. Static/Floating Ambient Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#3B82F6]/10 blur-[130px] animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/8 blur-[150px] animate-pulse duration-[10000ms]" />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#60A5FA]/6 blur-[120px] animate-pulse duration-[7000ms]" />

      {/* 4. Tiny Floating Particle Dots */}
      <div className="absolute inset-0 opacity-[0.4]">
        {particlesData.map((part, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#60A5FA] rounded-full"
            style={{
              top: part.top,
              left: part.left,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: part.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: part.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
