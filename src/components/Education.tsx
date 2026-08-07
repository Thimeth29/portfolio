"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "BSc (Hons) in Cloud Computing",
    subtitle: "Sri Lanka Technology Campus, Sri Lanka",
    date: "2024 - Present",
    desc: "Specializing in virtualization infrastructure, distributed networks, cloud architecture design (AWS/Azure), and Docker container orchestrations.",
    focus: "Distributed Systems, Virtualization, Cryptographic Protocols, and Automation.",
  },
  {
    title: "AWS Cloud Technical Essentials",
    subtitle: "Amazon Web Services Academy",
    date: "2025",
    desc: "Hands-on cloud architecture coverage spanning AWS EC2 nodes, IAM roles, VPC subnets, RDS setups, and multi-region networking configurations.",
    focus: "IAM Least-Privilege Policies, Cloud Networking, and Scalability Systems.",
  },
  {
    title: "G.C.E. Advanced Level (A/L)",
    subtitle: "Engineering Technology Stream",
    date: "2021 - 2023",
    desc: "Completed secondary education with engineering foundations, information technology systems, and programming principles.",
    focus: "Engineering Technology, Science for Technology, and ICT.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-[#3B82F6]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-xs uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            05 / Education
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Education
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full animate-pulse" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-10">
          
          {/* Vertical Pipeline line */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[1px] bg-white/10" />

          {/* Timeline Nodes */}
          {educationData.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
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

                  {/* Coursework details block */}
                  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    <p className="text-[10px] text-gray-400 leading-relaxed font-mono">
                      <strong className="text-white uppercase">Focus Stream:</strong> {item.focus}
                    </p>
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
