"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experienceData = [
  {
    title: "Final Year Project — WHALES Simulator",
    subtitle: "Sri Lanka Technology Campus Faculty of Computing",
    date: "2027",
    desc: "Spearheaded the defensive engineering and database architecture of an AI finance coaching platform with sandbox investment markets designed to scale for national financial literacy initiatives.",
    tech: ["Python", "FastAPI", "MongoDB", "AI Agents", "React"],
  },
  {
    title: "Freelance Flutter & Backend Developer",
    subtitle: "Self-Employed",
    date: "2025 - 2026",
    desc: "Designed and shipped responsive cross-platform mobile apps for clients. Integrated mobile clients with Flask backend APIs, automated user authentications, and managed Firebase databases.",
    tech: ["Flutter", "Dart", "Flask", "Firebase", "PostgreSQL"],
  },
  {
    title: "Banking Security Risk Mitigation Analysis",
    subtitle: "Academic CyberSecurity Research",
    date: "2026",
    desc: "Conducted root-cause remediation research mapping a local bank security breach, authoring a defense security report outlining IAM roles and network subnet isolation.",
    tech: ["IAM Policy Hardening", "Network Subnets", "Defensive Security"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-[#3B82F6]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-xs uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            04 / Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Experience
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full animate-pulse" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-10">
          
          {/* Vertical Pipeline line */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[1px] bg-white/10" />

          {/* Timeline Nodes */}
          {experienceData.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative mb-12 last:mb-0 text-left"
              >
                {/* Visual Pipeline Node Circle */}
                <div className="absolute -left-[25px] sm:-left-[35px] top-1.5 w-[13px] h-[13px] rounded-full border border-[#3B82F6]/40 bg-[#050505] flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-ping" />
                </div>

                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:shadow-[0_15px_30px_rgba(59,130,246,0.04)] transition-all duration-300 hover-target">
                  {/* Date Badge */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#3B82F6] mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-extrabold text-white text-lg leading-tight mb-1 font-space uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mb-4">
                    {item.subtitle}
                  </p>
                  
                  <p className="text-xs text-gray-400 leading-relaxed mb-6 font-mono">
                    {item.desc}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
