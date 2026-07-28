"use client";

import { motion as m } from "framer-motion";
import { Terminal, Smartphone, Server, Database, Cloud, Wrench, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Terminal className="w-6 h-6 text-[#3B82F6] transition-transform duration-300 group-hover:rotate-12" />,
    skills: ["Dart", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6 text-[#3B82F6] transition-transform duration-300 group-hover:rotate-12" />,
    skills: ["Flutter", "Android Dev", "Material Design", "Responsive UI", "MVVM Arch"],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-[#3B82F6] transition-transform duration-300 group-hover:rotate-12" />,
    skills: ["Flask", "REST APIs", "Authentication", "CRUD Ops", "API Integration"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-[#3B82F6] transition-transform duration-300 group-hover:rotate-12" />,
    skills: ["SQLite", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-[#3B82F6] transition-transform duration-300 group-hover:rotate-12" />,
    skills: ["Microsoft Azure", "Docker", "Git", "GitHub", "CI/CD Basics"],
  },
  {
    title: "Tools & Tech",
    icon: <Wrench className="w-6 h-6 text-[#3B82F6] transition-transform duration-300 group-hover:rotate-12" />,
    skills: ["VS Code", "Android Studio", "Power BI", "Jinja2", "Firebase", "Supabase", "Twilio API", "Open-Meteo"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/5 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-widest">
            <Wrench className="w-4 h-4" />
            02 / Toolbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-4">
            Technical Skills
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed font-mono">
            "I enjoy building scalable mobile applications, cloud-based solutions, and backend systems while continuously learning modern technologies."
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mt-6 rounded-full" />
        </div>

        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 items-stretch">
          {skillCategories.map((category, catIdx) => (
            <m.div
              key={category.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: catIdx * 0.08 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
                borderColor: "rgba(59, 130, 246, 0.4)"
              }}
              className="glass-card p-5 rounded-2xl border border-white/8 transition-colors duration-300 hover:bg-white/[0.04] text-left flex flex-col h-full group"
            >
              {/* Category Header */}
              <div className="flex flex-col gap-4 border-b border-white/5 pb-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-[#3B82F6]/10 group-hover:border-[#3B82F6]/25 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-sm text-white font-mono uppercase tracking-wide group-hover:text-[#60A5FA] transition-colors duration-200">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="flex flex-col gap-2.5 flex-grow">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors duration-150">
                    <ChevronRight className="w-3 h-3 text-[#3B82F6] shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
