"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, MapPin, BookOpen, Heart, Target, Compass } from "lucide-react";

const stats = [
  { value: "05+", label: "Projects Completed" },
  { value: "10+", label: "Technologies Learned" },
  { value: "2+", label: "Years Learning" },
  { value: "500+", label: "GitHub Commits" },
];

const interests = [
  "Cloud Architecture",
  "DevOps & CI/CD",
  "Serverless Systems",
  "Cloud Security & IAM",
  "Infrastructure as Code",
  "Containerization & Docker",
  "Cloud Automation",
  "Site Reliability (SRE)"
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      {/* Glow aura */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <User className="w-4 h-4" />
            01 / Identity
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Bio details (7 spans) */}
          <div className="lg:col-span-7 flex flex-col text-left">

            {/* Who I Am */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-6"
            >
              <h4 className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                <Compass className="w-3.5 h-3.5" /> Who I Am
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                I am a Cloud Computing undergraduate at Sri Lanka Technology Campus (SLTC) passionate about building and deploying cloud-based applications on AWS and Azure. Over the past few years, I've engineered serverless architectures, containerized applications with Docker, built automated CI/CD pipelines with GitHub Actions and Terraform, and integrated databases including Amazon DocumentDB, DynamoDB, MongoDB, and S3. I am constantly expanding my expertise in Cloud Architecture, DevOps automation, and proactive security IAM policies.
              </p>
            </motion.div>

            {/* Career Goals & Passion */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mb-8"
            >
              <h4 className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                <Target className="w-3.5 h-3.5" /> Career Goals & Passion
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Passionate about Cloud Computing and DevOps, with a career goal of becoming a skilled Cloud Engineer by designing scalable, secure, and efficient cloud solutions. I aim to continuously improve my knowledge of cloud technologies, automation, and modern infrastructure practices while contributing to innovative cloud-based projects.
              </p>
            </motion.div>

            {/* Interests & Specialities */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <h4 className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider mb-3 flex items-center gap-1.5 font-bold">
                <Heart className="w-3.5 h-3.5" /> Areas of Interest
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs font-mono text-gray-300 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/5 transition-colors duration-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Credentials & Stats (5 spans) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Quick Education Details Card */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col gap-4 text-left"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-[#3B82F6] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-base">BSc (Hons) in Cloud Computing</h4>
                  <p className="text-sm text-gray-400 font-mono">Sri Lanka Technology Campus, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  Sri Lanka
                </div>
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-gray-500" />
                  Active Student
                </div>
              </div>
            </motion.div>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                  className="glass-panel p-4 rounded-xl text-center border border-white/5 hover-target"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
