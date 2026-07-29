"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, Database, Cloud, Terminal, Eye, Sparkles } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Crafting beautiful, responsive, and performance-optimized frontends using Next.js, React, and modern CSS/Tailwind systems.",
    icon: Laptop,
    badge: "Next.js / React"
  },
  {
    title: "Mobile Development",
    desc: "Building native cross-platform mobile apps for iOS and Android using Flutter with clean, scalable architectures (MVVM).",
    icon: Smartphone,
    badge: "Flutter / Kotlin"
  },
  {
    title: "Backend Development",
    desc: "Developing fast, scalable server architectures, secure APIs, and databases using Node.js, Express, Flask, and relational/NoSQL setups.",
    icon: Database,
    badge: "Node.js / Python"
  },
  {
    title: "Cloud Solutions",
    desc: "Designing and deploying cloud-native computing infrastructures on AWS and Azure, containerizing services, and scripting CI/CD lines.",
    icon: Cloud,
    badge: "AWS / Azure / Docker"
  },
  {
    title: "API Development",
    desc: "Architecting, testing, and documentation of robust RESTful and GraphQL APIs featuring secure JWT/OAuth integrations.",
    icon: Terminal,
    badge: "REST / Postman"
  },
  {
    title: "UI Implementation",
    desc: "Translating high-fidelity Figma designs into pixel-perfect, interactive code with smooth transitions and micro-interactions.",
    icon: Eye,
    badge: "Figma to Code"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background glowing aura */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            04 / Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Services
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={svc.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 25 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 rounded-2xl border border-white/5 hover:border-[#3B82F6]/40 hover:shadow-[0_12px_30px_rgba(59,130,246,0.06)] transition-all duration-300 flex flex-col justify-between items-start text-left group hover-target"
              >
                <div className="w-full">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#3B82F6]/10 group-hover:border-[#3B82F6]/40 transition-colors duration-300 mb-6">
                    <IconComponent className="w-6 h-6 text-gray-300 group-hover:text-[#60A5FA] transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#60A5FA] transition-colors duration-200">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                {/* Badge Tag */}
                <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 uppercase tracking-wider">
                  {svc.badge}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
