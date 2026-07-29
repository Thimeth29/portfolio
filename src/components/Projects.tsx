"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import Image from "next/image";

const projects = [
  {
    title: "Smart Farming Weather Alert System",
    desc: "Full-stack web application providing weather alerts, crop management, cost-profit analysis, and market price prediction for farmers.",
    tech: ["Flask", "SQLite", "Twilio API", "Machine Learning", "APIs"],
    image: "weather.png",
    github: "https://github.com/Thimeth29",
    demo: "#",
  },
  {
    title: "MindCare Mental Health App",
    desc: "Android mobile application including meditation tracks, calming music lists, sleep timer, and wellness activities.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "SQLite"],
    image: "ai_agent.png",
    github: "https://github.com/Thimeth29",
    demo: "#",
  },
  {
    title: "Flutter Mobile Applications",
    desc: "Cross-platform mobile applications focused on reusable rendering widgets, state management, and responsive layout designs.",
    tech: ["Flutter", "Dart", "MVVM Architecture", "REST APIs"],
    image: "whales.png",
    github: "https://github.com/Thimeth29",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/5 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4" />
            03 / Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 28 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/8 hover:border-[#3B82F6]/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col h-full text-left group"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-65" />
              </div>

              {/* Content Panel */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#60A5FA] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-semibold font-mono text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-xs font-semibold hover-target"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-xs font-semibold hover-target"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
