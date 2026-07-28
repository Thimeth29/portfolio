"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smooth movement of the background gradient glow
  const glowX = useSpring(mouseX, { damping: 40, stiffness: 120 });
  const glowY = useSpring(mouseY, { damping: 40, stiffness: 120 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#09090B]">
      {/* 1. Interactive Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.8]" />

      {/* 2. Interactive Mouse Glow (glows beneath grid) */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.22] blur-[100px] bg-gradient-to-r from-[#2563EB]/40 via-[#3B82F6]/30 to-transparent"
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
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#60A5FA] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
