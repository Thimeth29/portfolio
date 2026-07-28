"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Flame, Code2 } from "lucide-react";
import { Github } from "@/components/icons";

// Generated grid squares representing commits over the last 15 weeks
const contributionWeeks = [...Array(15)].map((_, weekIndex) => {
  return [...Array(7)].map((_, dayIndex) => {
    // Randomize commit density (0 = none, 1 = low, 2 = medium, 3 = high)
    const commitCount = Math.floor(Math.random() * 4);
    let colorClass = "bg-[#161b22]"; // no commits
    if (commitCount === 1) colorClass = "bg-[#0e4429]"; // low
    else if (commitCount === 2) colorClass = "bg-[#006d32]"; // med
    else if (commitCount === 3) colorClass = "bg-[#26a641]"; // high
    
    return { dayIndex, colorClass };
  });
});

const topLanguages = [
  { name: "Dart (Flutter)", percentage: 48, color: "bg-[#02569B]" },
  { name: "Python", percentage: 32, color: "bg-[#3776AB]" },
  { name: "Java", percentage: 12, color: "bg-[#007396]" },
  { name: "TypeScript", percentage: 8, color: "bg-[#3178C6]" },
];

export default function GithubStats() {
  return (
    <section id="github" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Github className="w-4 h-4" />
            06 / Open Source
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            GitHub Activity
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Grid Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Main Stats (4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-white/8 flex flex-col justify-between text-left flex-grow"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <h3 className="font-bold font-mono text-xs uppercase tracking-wider text-gray-400">
                  Profile Statistics
                </h3>
                <Github className="w-4 h-4 text-gray-500" />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-gray-300">Stars Earned</span>
                  </div>
                  <span className="font-mono font-bold text-white">42</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">Forks Created</span>
                  </div>
                  <span className="font-mono font-bold text-white">18</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-300">Total Commits</span>
                  </div>
                  <span className="font-mono font-bold text-white">640+</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-gray-300">Pull Requests</span>
                  </div>
                  <span className="font-mono font-bold text-white">32</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 2: Contribution Heatmap Grid (8 columns on large screens) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-white/8 flex flex-col justify-between text-left h-full"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <h3 className="font-bold font-mono text-xs uppercase tracking-wider text-gray-400">
                  Contributions (Last 15 Weeks)
                </h3>
                <a
                  href="https://github.com/Thimeth29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#3B82F6] hover:text-[#60A5FA] flex items-center gap-1 hover-target"
                >
                  @Thimeth29
                </a>
              </div>

              {/* Grid block */}
              <div className="overflow-x-auto pb-4">
                <div className="flex items-center gap-1 min-w-[280px]">
                  {contributionWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`w-3.5 h-3.5 rounded-sm ${day.colorClass}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid legend details */}
              <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono pt-4 border-t border-white/5 mt-4">
                <span>Learn more at GitHub</span>
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 bg-[#161b22] rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-[#0e4429] rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-[#006d32] rounded-sm" />
                  <div className="w-2.5 h-2.5 bg-[#26a641] rounded-sm" />
                  <span>More</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 3: Top Languages Percentage (12 columns) */}
          <div className="lg:col-span-12">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-white/8 text-left"
            >
              <h3 className="font-bold font-mono text-xs uppercase tracking-wider text-gray-400 border-b border-white/5 pb-4 mb-6">
                Top Code Languages
              </h3>

              <div className="flex flex-col gap-4">
                {/* Visual bar container */}
                <div className="w-full h-4 rounded-full overflow-hidden flex">
                  {topLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.percentage}%` }}
                      className={`h-full ${lang.color}`}
                    />
                  ))}
                </div>

                {/* Badges and descriptions */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                  {topLanguages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${lang.color}`} />
                      <div className="text-xs text-left">
                        <p className="font-bold text-white">{lang.name}</p>
                        <p className="text-gray-400 font-mono">{lang.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
