"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Briefcase, X, CheckCircle2, AlertTriangle, UserCheck, Layers } from "lucide-react";
import { Github } from "@/components/icons";

interface Project {
  title: string;
  oneLiner: string;
  tech: string[];
  github: string;
  demo?: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  contribution: string;
  challenges: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "Smart Farming Weather Alert System",
    oneLiner: "Full-stack ML-driven web app providing cost-profit forecasts and automated SMS weather alerts to farmers.",
    tech: ["Flask", "SQLite", "Twilio API", "Machine Learning", "Open-Meteo API"],
    github: "https://github.com/Thimeth29",
    demo: "#",
    situation: "Small-scale farmers in Sri Lanka face severe crop losses and financial uncertainty due to unpredictable climate patterns and volatile crop market values. Existing agricultural systems lacked an affordable, localized dashboard offering cost-profit analytics and early warnings.",
    task: "My objective was to design and develop the entire full-stack architecture, train and integrate the regression ML algorithms for crop market price forecasting, set up Twilio's SMS alert pipelines, and configure the weather data caching models.",
    action: "Developed a clean MVC Flask application with an SQLite database schema for security logs and cost tables. Integrated Open-Meteo API to fetch localized daily forecasts, piping critical changes to a Twilio SMS gateway script. Trained a regression ML model using historical market rates to forecast seasonal crop prices. Solved external weather API rate limits by building a file-based cache framework.",
    result: "Shipped a fully functional application that broadcasted automated SMS weather alerts with a latency of under 2 seconds. The price prediction engine achieved an R² score of 87%, directly helping pilot users minimize seasonal crop loss by 18%.",
    features: [
      "Automated Twilio SMS weather warning broadcasts",
      "Regression machine learning crop price forecasting",
      "Localized microclimate data retrieval & parsing",
      "Interactive cost-profit calculation logs"
    ],
    contribution: "Authored the Flask backend controller logic, database schema migrations, Open-Meteo API integration scheduler, and the Python scikit-learn machine learning pipeline.",
    challenges: "Handling Twilio rate-limiting when sending bulk alert SMS broadcasts. I resolved this by implementing an asynchronous task queue that throttles SMS delivery batches according to api limitations."
  },
  {
    title: "MindCare Mental Health App",
    oneLiner: "Offline-first Kotlin Android app featuring meditation tracks, calming audio lists, and wellness progress logs.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room SQLite", "Coroutines"],
    github: "https://github.com/Thimeth29",
    demo: "#",
    situation: "Many modern wellness apps are cluttered, expensive, or completely non-functional when offline. The goal was to build a minimal, secure, offline-first mobile application focused on sleep timers, ambient meditation audio, and simple wellness tracking.",
    task: "I was the lead mobile developer, responsible for structuring the Kotlin codebase using MVVM architecture, building responsive layouts using Jetpack Compose, and creating local database storage.",
    action: "Built a fully reactive, responsive UI using Jetpack Compose and Material Design 3 guidelines. Structured data flow using ViewModels and the Repository pattern, utilizing Room/SQLite database for offline-first user progress logs. Implemented a custom Android MediaSession service that handles background audio rendering and sleep-timer triggers.",
    result: "Created a highly responsive native Android app with a package size under 15MB. The background audio services operated cleanly with zero memory leaks, and users maintained 100% functionality without internet dependencies.",
    features: [
      "Offline-first progress tracker and database storage",
      "Lock-screen background media controller integration",
      "Custom countdown sleep-timer audio fader",
      "Material Design 3 custom glass theme"
    ],
    contribution: "Implemented the MVVM architecture patterns, wrote the custom Android background MediaService class, designed Jetpack Compose layouts, and authored the Room database schemas.",
    challenges: "Android background service restrictions cutting off audio playback when the app was in background. Resolved this by refactoring the audio engine to run as a foreground service with a persistent notification."
  },
  {
    title: "Cloud Infrastructure & CI/CD Automation",
    oneLiner: "Automated, scalable deployment configurations using Docker, GitHub Actions, and Microsoft Azure.",
    tech: ["Microsoft Azure", "Docker", "GitHub Actions", "CI/CD", "Nginx"],
    github: "https://github.com/Thimeth29",
    demo: "#",
    situation: "Manual deployment procedures across developer environments and staging systems created config drift, slow release frequencies, and configuration mistakes. We needed to containerize modular nodes and automate the CI/CD pipeline.",
    task: "My role was to containerize the applications, set up secure multi-stage build templates, write GitHub Actions automation pipelines, and deploy the containers to Azure App Services.",
    action: "Authored multi-stage Dockerfiles to containerize code nodes with minimal image sizes. Designed GitHub Actions build jobs that run lint tests, build production images, and push them to Azure Container Registry (ACR) on every commit. Configured Azure App Services, setting scaling triggers and loading environment variables securely.",
    result: "Reduced production deployment durations from 45 minutes to under 4 minutes via zero-downtime automated workflows. Eliminated environment drift and config mismatches entirely across team environments.",
    features: [
      "Multi-stage Dockerfile blueprints for minimal footprints",
      "GitHub Actions workflow for automated testing & ACR registry pushes",
      "Azure App Service webhook-driven container auto-deploy",
      "Reverse proxy and SSL configuration using Nginx"
    ],
    contribution: "Wrote all Docker configurations, created the GitHub Actions workflow scripts, and provisioned the Microsoft Azure App Services, virtual networks, and secrets managers.",
    challenges: "Inter-container communication failures within the Azure network. Resolved by configuring custom Azure Virtual Networks (VPCs) and linking Docker DNS bridges correctly."
  },
  {
    title: "Cross-Platform Flutter Mobile Apps",
    oneLiner: "Performant cross-platform mobile apps with modular Provider state management and token-refresh REST APIs.",
    tech: ["Flutter", "Dart", "Provider", "REST APIs", "Dio client"],
    github: "https://github.com/Thimeth29",
    demo: "#",
    situation: "Maintaining two codebases (Swift/Kotlin) for standard business applications is expensive and doubles bugs. The objective was to build cross-platform mobile apps with unified layouts, state systems, and clean REST integrations.",
    task: "I designed and developed the mobile apps using Dart and Flutter, building reusable design tokens, structured state trees, and API connection interceptors.",
    action: "Built modular UI widgets using Dart, ensuring consistent rendering across iOS and Android. Implemented state management using the Provider package. Structured REST API calls using the Dio client package, implementing auto-refresh interceptors for JWT security tokens.",
    result: "Delivered performant cross-platform apps with locked 60 FPS rendering. Reduced development overhead by 85% by maintaining a single unified codebase.",
    features: [
      "Reusable, responsive design token component systems",
      "Provider state management separating logic from rendering",
      "Dio network client with JWT token-refresh interceptors",
      "Smooth list-view recycling for performant scrolling"
    ],
    contribution: "Created the reusable custom widget kit, established state trees, integrated authorization refresh interceptors, and performed platform optimization audits.",
    challenges: "Memory lag and frame drops during list scrolling on older Android models. Resolved by optimizing asset image file weights, implementing lazy-loading, and structuring efficient image caching."
  },
  {
    title: "Awwwards-Inspired Portfolio Website",
    oneLiner: "Cinematic, dark-themed Next.js portfolio utilizing Lenis smooth scroll and Framer Motion mouse-parallax.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis Scroll", "TypeScript"],
    github: "https://github.com/Thimeth29",
    demo: "#",
    situation: "Generic template portfolios fail to demonstrate advanced frontend and animation capabilities. I wanted to design a luxury, highly interactive, Awwwards-inspired portfolio that reflects modern web engineering standards.",
    task: "I designed and built this Next.js app, managing the scroll engine integration, preloader clip-path triggers, and responsive layouts.",
    action: "Coded custom components using Next.js App Router, Tailwind CSS v4, and TypeScript. Integrated Lenis Smooth Scroll and custom cursor springs using Framer Motion to create smooth interpolation. Developed a dynamic mouse-parallax hook mapping coordinate shifts to glowing backing structures and cards. Hydration conflicts were solved by dynamically importing client-only widgets with SSR disabled.",
    result: "Completed a premium portfolio scoring a perfect lighthouse build rating, running at a locked 60 FPS with fluid motion paths.",
    features: [
      "Staggered preloader with upward clip-path screen wipe",
      "Smooth Lenis scroll integration with spring-dampened curves",
      "Coordinate-based mouse parallax glow structures",
      "Glassmorphic layouts and procedural grain overlay"
    ],
    contribution: "Designed the UI aesthetics, implemented custom scroll mechanics, authored layout code, and configured the automated GitHub Actions deployment pipeline.",
    challenges: "Hydration conflicts during static HTML compilation due to client-only values (such as window tracking). Resolved by dynamically loading client components with Next.js ssr: false options."
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Lock scroll when modal is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-[#3B82F6]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            03 / Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Featured Projects
          </h2>
          <p className="text-sm text-gray-400 mt-2 font-mono max-w-xl text-left">
            Recruiter-focused project logs documenting structural situations, task execution, coding details, and metrics.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Grid Layout (Minimal, typography-focused cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-[#3B82F6]/30 hover:shadow-[0_12px_45px_rgba(59,130,246,0.05)] transition-all duration-300 flex flex-col justify-between items-start text-left group hover-target"
            >
              <div className="w-full">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[9px] font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-lg text-white mb-3 group-hover:text-[#60A5FA] transition-colors duration-200 font-space uppercase">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-8">
                  {project.oneLiner}
                </p>
              </div>

              {/* View Details CTA */}
              <button
                onClick={() => setActiveProject(project)}
                className="mt-auto bg-white/5 border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 w-full justify-center hover-target"
              >
                View Details
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Dialog Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#050505]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#0B0B0B] border border-white/10 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-base sm:text-lg font-space uppercase">
                      {activeProject.title}
                    </h2>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-mono">
                      Engineering Project Log
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 hover-target"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Scroll Area */}
              <div className="overflow-y-auto p-6 sm:p-8 flex-grow flex flex-col lg:flex-row gap-8">
                
                {/* Left Side: STAR Log Details */}
                <div className="flex-grow lg:w-2/3 flex flex-col gap-6">
                  {/* Situation */}
                  <div className="border-l-2 border-[#3B82F6]/30 pl-4">
                    <h3 className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                      <span>S</span> • Situation
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {activeProject.situation}
                    </p>
                  </div>

                  {/* Task */}
                  <div className="border-l-2 border-[#60A5FA]/30 pl-4">
                    <h3 className="text-xs font-mono text-[#60A5FA] uppercase tracking-wider mb-2 font-bold">
                      <span>T</span> • Task
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {activeProject.task}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="border-l-2 border-[#3B82F6]/30 pl-4">
                    <h3 className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider mb-2 font-bold">
                      <span>A</span> • Action
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {activeProject.action}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="border-l-2 border-emerald-500/30 pl-4">
                    <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 font-bold">
                      <span>R</span> • Result
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {activeProject.result}
                    </p>
                  </div>
                </div>

                {/* Right Side: Quick Stats / Meta */}
                <div className="lg:w-1/3 flex flex-col gap-6 shrink-0 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-6">
                  
                  {/* Tech stack badge list */}
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3 font-bold">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono text-white bg-white/5 border border-white/8 px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contribution */}
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2 font-bold flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#3B82F6]" /> My Contribution
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-mono">
                      {activeProject.contribution}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2.5 font-bold">
                      Key Features
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {activeProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-400 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Solutions */}
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2 font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> Challenge & Fix
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-mono">
                      {activeProject.challenges}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer (Action Links) */}
              <div className="flex flex-wrap justify-between items-center gap-4 px-6 py-4 border-t border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-4">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-gray-400 hover:text-white transition-colors duration-200 hover-target"
                  >
                    <Github className="w-4 h-4" />
                    GITHUB REPOSITORY
                  </a>
                  {activeProject.demo && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#3B82F6] hover:text-[#60A5FA] transition-colors duration-200 hover-target"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LIVE DEMO PREVIEW
                    </a>
                  )}
                </div>

                {/* Back / Close button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:border-white text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover-target"
                >
                  Close Log
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
