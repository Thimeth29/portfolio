"use client";

import { motion } from "framer-motion";
import { Laptop, Server, Database, Cloud, Wrench, ChevronRight, Play, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Computing",
    icon: Cloud,
    level: 95,
    skills: ["AWS (EC2, S3, IAM, Lambda)", "AWS API Gateway & DynamoDB", "AWS ECS & Fargate", "DocumentDB / RDS", "Microsoft Azure"],
  },
  {
    title: "DevOps & IaC",
    icon: Server,
    level: 92,
    skills: ["Terraform (IaC)", "Docker Containers", "GitHub Actions CI/CD", "Jenkins Automation", "Linux Shell & Git"],
  },
  {
    title: "Development Stack",
    icon: Laptop,
    level: 90,
    skills: ["JavaScript & TypeScript", "Python (Flask / FastAPI)", "React & Next.js", "Java & Node.js", "Flutter (Dart)"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    level: 88,
    skills: ["MongoDB & DocumentDB", "Amazon DynamoDB (TTL)", "PostgreSQL", "Firebase Backend", "Amazon S3 Objects"],
  },
];

const pipelineStages = [
  { stage: "Code", tech: "TS / Python / Flutter", color: "text-cyan-400" },
  { stage: "Build", tech: "Jenkins / Actions", color: "text-blue-400" },
  { stage: "Package", tech: "Docker Container", color: "text-indigo-400" },
  { stage: "Provision", tech: "Terraform IaC", color: "text-purple-400" },
  { stage: "Deploy", tech: "AWS Infrastructure", color: "text-emerald-400" },
];

export default function Skills() {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Background glow radial */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-[#3B82F6]/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-xs uppercase tracking-widest">
            <Wrench className="w-4 h-4" />
            02 / Toolbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-4 font-space">
            Tech Ecosystem
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed font-mono">
            Orchestrating code from local repositories, packaging through containers, and deploying automatically to elastic cloud architectures.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mt-6 rounded-full" />
        </div>

        {/* 1. Interactive DevOps CI/CD Pipeline Diagram */}
        <div className="mb-20 glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5 opacity-40" />
          
          <h3 className="relative z-10 font-bold text-sm text-white font-mono uppercase tracking-widest mb-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <Cpu className="w-4 h-4 text-[#3B82F6] animate-spin" />
            Visual GitOps pipeline flow
          </h3>

          {/* SVG Pipeline connectors (Desktop only) */}
          <div className="hidden lg:block absolute left-12 right-12 top-1/2 -translate-y-1/2 h-1 pointer-events-none z-0">
            <svg className="w-full h-8 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 10 4 L 920 4"
                stroke="url(#pipelineGrad)"
                strokeWidth="2"
                className="animate-pipeline-pulse"
              />
              <defs>
                <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="25%" stopColor="#60A5FA" />
                  <stop offset="50%" stopColor="#818CF8" />
                  <stop offset="75%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Stages Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {pipelineStages.map((stage, idx) => (
              <motion.div
                key={stage.stage}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 text-center flex flex-col justify-between items-center group relative hover-target"
              >
                {/* Visual Connector dot */}
                <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-3 w-2 h-2 rounded-full bg-white/20 hidden lg:block group-hover:bg-[#3B82F6]" />
                
                <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-gray-500 mb-4 block">
                  Stage 0{idx + 1}
                </span>

                <div className="flex flex-col items-center flex-grow justify-center">
                  <h4 className={`text-base font-extrabold font-space uppercase mb-1 ${stage.color}`}>
                    {stage.stage}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-mono leading-snug">
                    {stage.tech}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[8px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors duration-200">
                  <span>Triggered</span>
                  <Play className="w-2.5 h-2.5 fill-gray-500 stroke-none group-hover:fill-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Traditional Competency Gauge Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 24 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: catIdx * 0.08 }}
                className="glass-card p-6 rounded-3xl border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:border-[#3B82F6]/30 hover:bg-white/[0.03] text-left flex flex-col h-full group hover-target"
              >
                {/* Category Header with progress circle */}
                <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-4">
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-[#3B82F6]/10 group-hover:border-[#3B82F6]/20 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-[#60A5FA] transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-xs text-white font-mono uppercase tracking-widest group-hover:text-[#60A5FA] transition-colors duration-200">
                      {category.title}
                    </h3>
                  </div>

                  {/* Circular Gauge */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="20"
                        cy="20"
                        r={radius}
                        className="stroke-white/5 fill-transparent"
                        strokeWidth="2.5"
                      />
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
                <ul className="flex flex-col gap-2.5 flex-grow font-mono text-[10px]">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-150">
                      <ChevronRight className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
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
