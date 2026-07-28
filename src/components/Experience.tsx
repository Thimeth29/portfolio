"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, Code } from "lucide-react";

const experienceData = [
  {
    type: "education",
    title: "BSc (Hons) in Cloud Computing",
    subtitle: "SLTC Research University",
    date: "2024 - Present",
    desc: "Focusing on virtualization, cloud service architectures (Azure/AWS), application security, ethical hacking, and machine learning models.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    type: "project",
    title: "Final Year Project — WHALES Simulator",
    subtitle: "SLTC Computing Faculty",
    date: "2027",
    desc: "Spearheaded the architecture and implementation of an AI finance coaching platform with sandbox investment markets for Sri Lankan financial literacy.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    type: "freelance",
    title: "Freelance Flutter & Backend Developer",
    subtitle: "Self-Employed",
    date: "2025 - 2026",
    desc: "Shipped fully functional custom applications connecting cross-platform Dart codebases with Flask/FastAPI REST integrations.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    type: "project",
    title: "Banking Security Risk Mitigation",
    subtitle: "Academic Research project",
    date: "2026",
    desc: "Performed a root-cause remediation analysis of the Cargills Bank breach, publishing the defensive engineering architecture report in IEEE guidelines.",
    icon: <Code className="w-5 h-5" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            04 / Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-stretch">
          
          {/* Vertical center bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* Timeline Nodes */}
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.title}
                className={`relative flex flex-col sm:flex-row items-stretch mb-12 last:mb-0 ${
                  isLeft ? "sm:flex-row-reverse" : ""
                }`}
              >
                
                {/* 1. Date side (Desktop only) */}
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

                {/* 2. Middle Circle Node */}
                <div className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#111827] flex items-center justify-center text-[#3B82F6] z-10 shadow-lg shadow-black/40">
                  {item.icon}
                </div>

                {/* 3. Card side */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55 }}
                    className="glass-card p-6 rounded-2xl border border-white/8 text-left"
                  >
                    {/* Date (Mobile only) */}
                    <div className="flex sm:hidden items-center gap-1.5 text-[10px] font-mono font-bold text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>

                    <h3 className="font-bold text-white text-lg leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-[#3B82F6] mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
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
