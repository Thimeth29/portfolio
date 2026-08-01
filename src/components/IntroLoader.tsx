"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [showLoader, setShowLoader] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0); // 0: Name, 1: Subtitle, 2: Done

  useEffect(() => {
    // Check session storage on mount
    const hasPlayed = sessionStorage.getItem("intro-played");
    if (hasPlayed === "true") {
      onComplete();
      return;
    }

    setShowLoader(true);
    document.body.style.overflow = "hidden"; // Disable scroll

    // Progress counter (0 to 100 in 2.2 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random incremental steps for realistic load feel
        const next = prev + Math.floor(Math.random() * 8) + 2;
        return Math.min(next, 100);
      });
    }, 45);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  useEffect(() => {
    if (!showLoader) return;

    if (progress >= 35 && progress < 70) {
      setStage(1);
    } else if (progress >= 100) {
      setStage(2);
      // Wait for exit animation to trigger
      const timeout = setTimeout(() => {
        sessionStorage.setItem("intro-played", "true");
        document.body.style.overflow = ""; // Enable scroll
        onComplete();
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [progress, showLoader, onComplete]);

  if (!showLoader) return null;

  const firstName = "THIMETH";
  const lastName = "CHATHNUKA";

  const letterAnimation: any = {
    initial: { y: 80, opacity: 0, filter: "blur(6px)", scale: 0.92 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // cinematic easeOutExpo
        delay: i * 0.04,
      },
    }),
  };

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-[#050505] z-[99999] flex flex-col justify-between p-12 text-white overflow-hidden select-none"
        >
          {/* Top Title/Subtexts */}
          <div className="flex justify-between items-start text-[10px] sm:text-xs font-mono text-[#A1A1AA] tracking-widest uppercase">
            <div>Thimeth Chathnuka</div>
            <div>© 2026 Portfolio</div>
          </div>

          {/* Center Name */}
          <div className="flex flex-col items-center justify-center flex-grow text-center">
            {stage >= 0 && (
              <h1 className="text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-none mb-6 font-space flex flex-wrap justify-center overflow-hidden">
                {/* First Name */}
                <span className="flex mr-4">
                  {firstName.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterAnimation}
                      initial="initial"
                      animate="animate"
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                {/* Last Name */}
                <span className="flex">
                  {lastName.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index + firstName.length}
                      variants={letterAnimation}
                      initial="initial"
                      animate="animate"
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>
            )}

            {/* Sub-Roles */}
            <div className="h-6 overflow-hidden relative w-full flex justify-center items-center">
              <AnimatePresence mode="wait">
                {stage === 1 && (
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-xs sm:text-sm font-mono text-[#A1A1AA] tracking-widest uppercase"
                  >
                    AI Enthusiast • Cloud Undergraduate • Cloud Security Enthusiast 
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Progress Counter & Loading Bar */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end font-mono text-[#A1A1AA] text-xs">
              <div>INITIALIZING SYSTEMS</div>
              <div className="text-lg text-white font-bold">{progress}%</div>
            </div>
            
            {/* The Loading Line */}
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
