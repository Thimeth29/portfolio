"use client";

import { motion } from "framer-motion";
import { User, Award, BookOpen, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "05+", label: "Projects Completed" },
  { value: "10+", label: "Technologies Used" },
  { value: "800+", label: "Learning Hours" },
  { value: "06+", label: "Certificates" },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <User className="w-4 h-4" />
            01 / Identity
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image wrapper */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[340px] aspect-[1/1.1] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-[#3B82F6]/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <Image
                src="/profile.jpg"
                alt="Thimeth Chathnuka Portrait"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Right Column: Bio details */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.h3
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mb-6"
            >
              Translating code into scalable products.
            </motion.h3>

            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-6"
            >
              I am an undergraduate pursuing a degree in Computing & IT at SLTC. My path centers around developing secure, robust solutions across mobile apps (Flutter), cloud computing infrastructure, and backend integrations. I seek to bridge the gap between design concepts and scalable, robust deployments.
            </motion.p>

            {/* Quick Education Details Card */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl border border-white/10 mb-8 flex flex-col gap-4 text-left"
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-[#3B82F6] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-base">BSc (Hons) in Cloud Computing</h4>
                  <p className="text-sm text-gray-400">SLTC Research University, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 font-mono">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="glass-panel p-4 rounded-xl text-center border border-white/5"
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
