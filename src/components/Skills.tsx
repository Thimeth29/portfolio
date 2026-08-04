"use client";

import { motion } from "framer-motion";
import { Laptop, Server, Smartphone, Database, Cloud, Wrench, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    level: 95,
    skills: ["AWS (EC2, S3, IAM)", "Lambda & API Gateway", "ECS, ECR & App Runner", "DocumentDB & S3", "Microsoft Azure"],
  },
  {
    title: "DevOps & IaC",
    icon: Server,
    level: 92,
    skills: ["Docker Containers", "Terraform (IaC)", "GitHub Actions CI/CD", "Git Version Control", "Linux Administration"],
  },
  {
    title: "Languages & Frameworks",
    icon: Laptop,
    level: 90,
    skills: ["Python & Flask", "JavaScript & TypeScript", "Java & React / Node.js", "Express.js", "Flutter (Cross-Platform)"],
  },
  {
    title: "Databases & BaaS",
    icon: Database,
    level: 88,
    skills: ["MongoDB & DocumentDB", "AWS DynamoDB (TTL)", "MySQL & SQLite", "Supabase", "Firebase"],
  },
  {
    title: "Security & Observability",
    icon: Wrench,
    level: 88,
    skills: ["IAM Policies & Hardening", "CloudWatch Logs & Metrics", "AI Workflow Agents", "REST APIs & Postman", "VS Code & Figma"],
  },
];

export default function Skills() {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-[#3B82F6]/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-widest">
            <Wrench className="w-4 h-4" />
            02 / Toolbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-4 font-space">
            Technical Skills
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed font-mono">
            "I enjoy building scalable mobile applications, cloud-based solutions, and backend systems while continuously learning modern technologies."
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mt-6 rounded-full" />
        </div>

        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 24 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: catIdx * 0.08 }}
                className="glass-card p-5 rounded-2xl border border-white/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] hover:border-[#3B82F6]/40 hover:bg-white/[0.04] text-left flex flex-col h-full group hover-target"
              >
                {/* Category Header with SVG progress ring */}
                <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-4">
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-[#3B82F6]/10 group-hover:border-[#3B82F6]/25 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-[#60A5FA] transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-sm text-white font-mono uppercase tracking-wide group-hover:text-[#60A5FA] transition-colors duration-200">
                      {category.title}
                    </h3>
                  </div>

                  {/* Circular Progress Gauge */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Grey background circle */}
                      <circle
                        cx="20"
                        cy="20"
                        r={radius}
                        className="stroke-white/5 fill-transparent"
                        strokeWidth="2.5"
                      />
                      {/* Blue animated circle */}
                      <motion.circle
                        cx="20"
                        cy="20"
                        r={radius}
                        className="stroke-[#3B82F6] fill-transparent"
                        strokeWidth="2.5"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: circumference - (category.level / 100) * circumference }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: catIdx * 0.1 }}
                      />
                    </svg>
                    <span className="absolute text-[8px] font-mono text-gray-400 font-bold group-hover:text-white transition-colors duration-200">
                      {category.level}%
                    </span>
                  </div>
                </div>

                {/* Skills list */}
                <ul className="flex flex-col gap-2.5 flex-grow font-mono text-[11px]">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-150">
                      <ChevronRight className="w-3 h-3 text-[#3B82F6] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
