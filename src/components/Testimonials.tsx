"use client";

import { motion } from "framer-motion";
import { MessageSquare, Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Dr. Priyantha Kumar",
    role: "Senior Lecturer in Computing",
    org: "SLTC Research University",
    text: "Thimeth exhibits an exceptional grasp of software architectures and cloud fundamentals. His project implementations are consistently well-structured, modular, and performant.",
    rating: 5
  },
  {
    name: "Alex Mercer",
    role: "Lead Mobile Architect",
    org: "DevFlow Labs",
    text: "Working alongside Thimeth on cross-platform application modules was an absolute pleasure. He writes clean, predictable Flutter code and adopts modern state management patterns seamlessly.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "DevOps Specialist",
    org: "NexaCloud Solutions",
    text: "Thimeth's understanding of containerization (Docker) and cloud pipelines is impressive for an undergraduate. He designed robust, automated CI/CD configurations that built with zero issues.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Glow aura */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            06 / Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.name}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col justify-between items-start text-left relative group hover-target"
            >
              {/* Quote icon watermark */}
              <Quote className="absolute right-6 top-6 w-8 h-8 text-white/3 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300" />

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-[#3B82F6] text-[#3B82F6]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-300 leading-relaxed italic mb-8 relative z-10">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3">
                {/* Text credentials */}
                <div className="text-left">
                  <h4 className="font-bold text-white text-sm">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-[#A1A1AA] font-mono mt-0.5">
                    {rev.role} • <span className="text-[#3B82F6]">{rev.org}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
