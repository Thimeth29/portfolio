"use client";

import { motion } from "framer-motion";
import { ClipboardList, Palette, Code2, ShieldCheck, Rocket, Wrench, Compass } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Planning",
    desc: "Understanding target requirements, mapping workflow charts, setting project scope, and defining cloud architectures or database models.",
    icon: ClipboardList
  },
  {
    num: "02",
    title: "Design",
    desc: "Creating pixel-perfect layout schemes, component structures, visual themes, and wireframes to ensure premium, intuitive user experiences.",
    icon: Palette
  },
  {
    num: "03",
    title: "Development",
    desc: "Writing clean, optimized, and scalable code. Engineering reusable components, modular state managers, and robust database nodes.",
    icon: Code2
  },
  {
    num: "04",
    title: "Testing",
    desc: "Executing rigorous unit, integrations, and validation testing to guarantee error-free code compile, high-contrast access, and load-speeds.",
    icon: ShieldCheck
  },
  {
    num: "05",
    title: "Deployment",
    desc: "Packaging services (Docker), orchestrating CI/CD build scripts (GitHub Actions), and publishing live exports on CDN nodes (Vercel, AWS).",
    icon: Rocket
  },
  {
    num: "06",
    title: "Maintenance",
    desc: "Continuous performance audits, deploying system-wide fixes on the fly, database back-ups, and expanding feature modules as needed.",
    icon: Wrench
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            05 / Blueprint
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Development Process
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* 3-Column Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 25 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 relative group hover-target"
              >
                {/* Connecting indicator line for desktop (steps 1, 2, 4, 5) */}
                {i < 5 && (
                  <div className="hidden lg:block absolute top-[52px] -right-[15px] w-[30px] h-[1px] border-t border-dashed border-white/10 z-0 group-hover:border-[#3B82F6]/30 transition-colors duration-300" />
                )}

                {/* Step header row */}
                <div className="flex justify-between items-center mb-6">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/8 group-hover:bg-[#3B82F6]/10 group-hover:border-[#3B82F6]/30 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-[#60A5FA] transition-colors duration-300" />
                  </div>
                  {/* Step number */}
                  <span className="font-mono text-xs text-gray-500 font-bold tracking-widest bg-white/5 border border-white/5 px-2 py-0.5 rounded-full">
                    STAGE {step.num}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#60A5FA] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
