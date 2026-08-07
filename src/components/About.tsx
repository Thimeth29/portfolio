"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, MapPin, BookOpen, Heart, Target, Compass, Award, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "05+", label: "Projects Completed" },
  { value: "10+", label: "Technologies Mastered" },
  { value: "2+", label: "Years Engineering" },
  { value: "500+", label: "GitHub Commits" },
];

const interests = [
  "Cloud Architecture (AWS/Azure)",
  "DevOps Automation & CI/CD",
  "Serverless Orchestrations",
  "Infrastructure as Code (IaC)",
  "Containerization & Kubernetes",
  "Cloud Security & IAM Hardening",
  "Cross-Platform App Development",
  "Site Reliability & Monitoring"
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5 relative bg-[#050505]">
      {/* Background radial highlight */}
      <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-[#3B82F6]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-indigo-500/2 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-xs uppercase tracking-wider">
            <User className="w-4 h-4" />
            01 / Identity
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full animate-pulse" />
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Cell 1: Storytelling Bio (col-span-8) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 glass-card p-8 rounded-3xl border border-white/5 bento-glow-container flex flex-col justify-between text-left hover:border-white/10 transition-all duration-300"
          >
            <div>
              <h4 className="text-xs font-mono text-[#3B82F6] uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Compass className="w-4 h-4" /> Who I Am
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                I am a Cloud Computing undergraduate at Sri Lanka Technology Campus (SLTC) driven by a passion for building, deploying, and hardening scalable cloud ecosystems. 
                My focus centers on constructing secure, distributed systems, automate deployment architectures, and designing serverless APIs that scale dynamically.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Over the past two years, I have containerized microservices with Docker, provisioned private networks with Terraform (IaC), and orchestrated automated GitOps deployment pipelines via GitHub Actions.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-8 text-xs font-mono text-[#60A5FA]">
              <Target className="w-4 h-4" />
              <span>Career Aim: Senior Cloud Solutions Architect</span>
            </div>
          </motion.div>

          {/* Bento Cell 2: Education & Location (col-span-4) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 glass-card p-8 rounded-3xl border border-white/5 bento-glow-container flex flex-col justify-between text-left hover:border-white/10 transition-all duration-300"
          >
            <div>
              <h4 className="text-xs font-mono text-[#3B82F6] uppercase tracking-widest mb-6 flex items-center gap-2 font-bold">
                <GraduationCap className="w-4 h-4" /> Education
              </h4>
              <h5 className="font-extrabold text-white text-base sm:text-lg font-space leading-snug">
                BSc (Hons) in Cloud Computing
              </h5>
              <p className="text-xs text-gray-400 font-mono mt-2">
                Sri Lanka Technology Campus
              </p>
            </div>
            
            <div className="flex flex-col gap-3 mt-8 border-t border-white/5 pt-6 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                <span>Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gray-500 shrink-0" />
                <span>Active undergraduate</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Cell 3: Credentials & Certification (col-span-4) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-4 glass-panel p-8 rounded-3xl border border-[#FF9900]/10 bento-glow-container flex flex-col justify-between text-left hover:border-[#FF9900]/25 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#FF9900]/10 border border-[#FF9900]/20 flex items-center justify-center text-[#FF9900]">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[8px] font-mono font-bold tracking-widest text-[#FF9900] uppercase bg-[#FF9900]/10 px-2.5 py-1 rounded-md border border-[#FF9900]/20">
                AWS ACADEMY
              </span>
            </div>

            <div className="mt-8">
              <h5 className="font-extrabold text-white text-sm sm:text-base font-space uppercase">
                AWS Cloud Technical Essentials
              </h5>
              <p className="text-[10px] text-gray-400 font-mono mt-1">
                Issued by Coursera • Credentials verified
              </p>
            </div>

            <a
              href="https://www.coursera.org/account/accomplishments/verify/ZDDQVO1S0521"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF9900] hover:text-white transition-colors hover-target"
            >
              Verify Credential
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Bento Cell 4: Interests & Areas of Expertise (col-span-8) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 glass-card p-8 rounded-3xl border border-white/5 bento-glow-container flex flex-col justify-between text-left hover:border-white/10 transition-all duration-300"
          >
            <div>
              <h4 className="text-xs font-mono text-[#3B82F6] uppercase tracking-widest mb-6 flex items-center gap-2 font-bold">
                <Heart className="w-4 h-4" /> Core Specialities
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest}
                    className="text-xs font-mono text-gray-300 bg-white/5 border border-white/5 px-4 py-2.5 rounded-xl hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5 transition-all duration-200 flex items-center gap-2 hover-target"
                  >
                    <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Grid footer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 border-t border-white/5 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <p className="text-xl sm:text-2xl font-black text-white font-space">
                    {stat.value}
                  </p>
                  <p className="text-[9px] text-gray-400 font-mono uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
