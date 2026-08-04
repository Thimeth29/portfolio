"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "BSc (Hons) in Cloud Computing",
    subtitle: "Sri Lanka Technology Campus, Sri Lanka",
    date: "2024 - Present",
    desc: "Specializing in virtualization infrastructure, cloud service architectures (Azure/AWS), distributed system networks, and application containerization platforms.",
    details: "Relevant Coursework: Distributed Systems, Cloud Automation, Virtualization, Cryptographic Protocols, and Machine Learning Systems."
  },
  {
    title: "AWS Cloud Technical Essentials",
    subtitle: "Amazon Web Services Academy",
    date: "2025",
    desc: "Comprehensive hands-on training covering Amazon EC2, AWS Identity & Access Management (IAM), Amazon VPC configurations, and RDS setups.",
    details: "Focus Areas: Multi-Region Deployment, Secure Cloud Networking, and Scalability Optimization."
  },
  {
    title: "G.C.E. Advanced Level (A/L)",
    subtitle: "Engineering Technology Stream",
    date: "2021 - 2023",
    desc: "Completed secondary education specializing in engineering foundations, electronics, mechanical physics, and programming logic.",
    details: "Subject Stream: Engineering Technology (ET), Science for Technology (SFT), and Information & Communication Technology (ICT)."
  }
];

export default function Education() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 640px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="education" className="py-24 border-t border-white/5 relative overflow-hidden bg-[#050505]">
      {/* Background glow */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-[#3B82F6]/3 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            04 / Education
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Education
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-stretch">
          {/* Vertical center bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.title}
                className={`relative flex flex-col sm:flex-row items-stretch mb-12 last:mb-0 ${
                  isLeft ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* 1. Date (Desktop only) */}
                <div className="hidden sm:flex w-1/2 justify-center items-center px-8 text-right">
                  <div
                    className={`flex items-center gap-2 text-xs font-mono font-bold text-gray-500 ${
                      isLeft ? "justify-start w-full" : "justify-end w-full"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </div>
                </div>

                {/* 2. Middle Node */}
                <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-[#3B82F6] z-10 shadow-lg shadow-black/40">
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* 3. Card side */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    initial={{ opacity: 0, x: isMobile ? 0 : (isLeft ? 35 : -35), y: isMobile ? 20 : 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 text-left hover-target"
                  >
                    {/* Date (Mobile only) */}
                    <div className="flex sm:hidden items-center gap-1.5 text-[10px] font-mono font-bold text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>

                    <h3 className="font-bold text-white text-base leading-tight mb-1 font-space">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-[#3B82F6] mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Coursework details block */}
                    <div className="bg-white/[0.02] border border-white/5 p-3 rounded-lg flex items-start gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                      <p className="text-[10px] text-gray-400 leading-relaxed font-mono">
                        <strong className="text-white uppercase">Focus:</strong> {item.details}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
