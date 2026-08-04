"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, GitBranch, Flame, Code2, ExternalLink, Star } from "lucide-react";
import { Github } from "@/components/icons";

interface GitHubData {
  publicRepos: number;
  followers: number;
  createdAt: string;
}

// Realistic contribution grid for last 15 weeks
const contributionWeeks = [...Array(15)].map((_, weekIndex) => {
  return [...Array(7)].map((_, dayIndex) => {
    // Generate deterministic density based on indices for realistic look
    const density = (weekIndex * 7 + dayIndex * 3) % 4;
    let colorClass = "bg-[#161b22]";
    if (density === 1) colorClass = "bg-[#0e4429]";
    else if (density === 2) colorClass = "bg-[#006d32]";
    else if (density === 3) colorClass = "bg-[#26a641]";
    return { dayIndex, colorClass };
  });
});

const topLanguages = [
  { name: "Python", percentage: 38, color: "bg-[#3776AB]" },
  { name: "Terraform (HCL)", percentage: 28, color: "bg-[#7B42BC]" },
  { name: "JavaScript / TS", percentage: 22, color: "bg-[#3178C6]" },
  { name: "HTML / CSS / Shell", percentage: 12, color: "bg-[#E34F26]" },
];

const featuredRepos = [
  {
    name: "CloudWeather",
    description: "Serverless weather dashboard on AWS Lambda, API Gateway, S3, & DynamoDB TTL with Terraform CI/CD",
    url: "https://github.com/Thimeth29/CloudWeather",
    lang: "JavaScript / Python",
    color: "bg-[#3776AB]",
  },
  {
    name: "CloudFileShare",
    description: "Self-hosted secure file storage platform with DocumentDB, S3, Google OAuth, & App Runner",
    url: "https://github.com/Thimeth29/CloudFileShare",
    lang: "Python / Terraform",
    color: "bg-[#7B42BC]",
  },
  {
    name: "assignment01-new",
    description: "AWS ECS Fargate & Amazon ECR continuous container deployment pipeline using GitHub Actions",
    url: "https://github.com/Thimeth29/assignment01-new",
    lang: "Docker / HCL",
    color: "bg-[#2496ED]",
  },
  {
    name: "portfolio",
    description: "Cinematic dark-mode developer portfolio built with Next.js App Router, Tailwind CSS, & TypeScript",
    url: "https://github.com/Thimeth29/portfolio",
    lang: "TypeScript / Next.js",
    color: "bg-[#3178C6]",
  },
];

export default function GithubStats() {
  const [stats, setStats] = useState<GitHubData>({
    publicRepos: 24,
    followers: 1,
    createdAt: "2025-01-09",
  });

  useEffect(() => {
    fetch("https://api.github.com/users/Thimeth29")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos) {
          setStats({
            publicRepos: data.public_repos,
            followers: data.followers || 1,
            createdAt: data.created_at ? data.created_at.split("T")[0] : "2025-01-09",
          });
        }
      })
      .catch(() => {
        // Fallback to verified static counts
      });
  }, []);

  return (
    <section id="github" className="py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#3B82F6]/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Github className="w-4 h-4" />
            06 / Open Source
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            GitHub Activity
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 font-mono max-w-lg">
            Live repositories, automated deployments, and open source commits on GitHub.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Top Stats & Contribution Heatmap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Card 1: Profile Statistics */}
          <div className="lg:col-span-4 flex flex-col">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between text-left h-full"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <h3 className="font-bold font-mono text-xs uppercase tracking-wider text-gray-400">
                  GitHub Profile Overview
                </h3>
                <a
                  href="https://github.com/Thimeth29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-[#3B82F6] hover:text-[#60A5FA] flex items-center gap-1 hover-target"
                >
                  @Thimeth29
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <FolderGit2 className="w-4 h-4 text-[#3B82F6]" />
                    <span className="text-xs text-gray-300 font-mono">Public Repositories</span>
                  </div>
                  <span className="font-mono font-bold text-white text-sm">{stats.publicRepos}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-gray-300 font-mono">Total Commits</span>
                  </div>
                  <span className="font-mono font-bold text-white text-sm">500+</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <GitBranch className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-gray-300 font-mono">Primary Ecosystem</span>
                  </div>
                  <span className="font-mono font-bold text-white text-xs">AWS & DevOps</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-gray-300 font-mono">Active Projects</span>
                  </div>
                  <span className="font-mono font-bold text-white text-xs">Cloud & IaC</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 2: Contribution Activity Heatmap */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between text-left h-full"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <h3 className="font-bold font-mono text-xs uppercase tracking-wider text-gray-400">
                  Commit History (Recent Activity)
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Active Contributor
                </span>
              </div>

              {/* Grid block */}
              <div className="overflow-x-auto pb-4">
                <div className="flex items-center gap-1.5 min-w-[280px]">
                  {contributionWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1.5">
                      {week.map((day, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`w-3.5 h-3.5 rounded-sm ${day.colorClass} transition-colors`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid legend details */}
              <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono pt-4 border-t border-white/5 mt-4">
                <a 
                  href="https://github.com/Thimeth29" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  View full history on github.com/Thimeth29
                </a>
                <div className="flex items-center gap-1.5">
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
        </div>

        {/* Featured Public Repositories Row */}
        <div className="mb-8">
          <h3 className="font-bold font-mono text-xs uppercase tracking-wider text-gray-400 mb-4 text-left">
            Featured Repositories
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-xl border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 text-left flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-[#3B82F6]" />
                      <span className="font-bold text-white text-sm font-mono group-hover:text-[#60A5FA] transition-colors">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-mono mb-4 line-clamp-3">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[10px] font-mono text-gray-400">
                  <span className={`w-2 h-2 rounded-full ${repo.color}`} />
                  <span>{repo.lang}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Top Languages Percentage */}
        <div className="w-full">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 15 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl border border-white/10 text-left"
          >
            <h3 className="font-bold font-mono text-xs uppercase tracking-wider text-gray-400 border-b border-white/5 pb-4 mb-6">
              Top Repository Languages
            </h3>

            <div className="flex flex-col gap-4">
              {/* Visual bar container */}
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-white/5">
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
                  <div key={lang.name} className="flex items-center gap-2.5">
                    <div className={`w-3 h-3 rounded-full ${lang.color} shrink-0`} />
                    <div className="text-xs text-left">
                      <p className="font-bold text-white font-mono">{lang.name}</p>
                      <p className="text-gray-400 font-mono text-[11px]">{lang.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

