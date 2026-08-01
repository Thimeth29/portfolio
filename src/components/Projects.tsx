"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, X, Cpu, Eye } from "lucide-react";
import { Github } from "@/components/icons";

// ==========================================
// BRAND SVG ICONS (EXACT SHAPES & COLORS)
// ==========================================

const GitIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-[#F05032]`} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" fill="#F05032" fillOpacity="0.1" />
    <circle cx="6" cy="18" r="3" fill="#F05032" fillOpacity="0.1" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

const GitHubActionsIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#2088FF]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.22 2A10.22 10.22 0 0 0 2 12.22v5.56C2 19 3 20 4.22 20h5.56A10.22 10.22 0 0 0 20 9.78V4.22C20 3 19 2 17.78 2h-5.56zm4.89 8.89a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44zm-7.78 7.78a2.22 2.22 0 1 1 0-4.44 2.22 2.22 0 0 1 0 4.44zm0-6.67a3.33 3.33 0 1 1 0-6.67 3.33 3.33 0 0 1 0 6.67z" />
  </svg>
);

const DockerIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#2496ED]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.737 0h2.119v-2.006h-2.119v2.006zm-2.737 0h2.12v-2.006h-2.12v2.006zm-2.737 0h2.119v-2.006H5.772v2.006zm-.002-2.302h2.119V6.77H5.77v2.006zm2.737 0h2.12V6.77h-2.12v2.006zm2.737 0h2.119V6.77h-2.119v2.006zm0-2.302h2.119V4.468h-2.119v2.006zm2.736 2.302h2.119V6.77h-2.119v2.006zM23.99 12.39c-.19-.06-.85-.15-1.57-.15-.65 0-1.24.1-1.63.22-.16.05-.28.16-.36.31-.19.34-.63.95-1.42.95-.79 0-1.23-.61-1.42-.95-.08-.15-.2-.26-.36-.31-.4-.12-.99-.22-1.63-.22-.65 0-1.24.1-1.63.22-.16.05-.28.16-.36.31-.19.34-.63.95-1.42.95-.79 0-1.23-.61-1.42-.95-.08-.15-.2-.26-.36-.31-.39-.12-.98-.22-1.62-.22-.65 0-1.24.1-1.63.22-.16.05-.28.16-.36.31-.19.34-.63.95-1.42.95-.79 0-1.23-.61-1.42-.95-.08-.15-.2-.26-.36-.31-.4-.12-.99-.22-1.63-.22-.61 0-1.12.09-1.52.2-.18.05-.33.15-.43.32C1.48 15.65 2.85 19 8.5 19c6.43 0 7.75-2.83 8.78-4.58.44.07.86.11.16-.22.61-.15.83 0 1.5-.16 1.94-.38.57-.29.98-.78 1.48-1.52.12-.19.12-.44-.06-.57-.09-.06-.21-.1-.31-.1-.03 0-.06 0-.09.01z" />
  </svg>
);

const AWSIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#FF9900]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.923 11.602c0-1.815-.992-2.73-2.614-2.73-.836 0-1.576.246-2.128.709-.434.363-.61.764-.32 1.157l.61.826c.22.3.565.344.877.126.311-.219.646-.356.96-.356.556 0 .848.246.848.74v.479c-.87.123-2.035.287-2.905.657-.96.41-1.464 1.157-1.464 2.052 0 1.25.927 2.146 2.378 2.146.992 0 1.841-.444 2.305-1.127.13.266.384.58.749.882.265.218.616.143.835-.09l.868-.929c.218-.232.19-.594-.066-.826a4.87 4.87 0 0 1-.94-.977l-.02-.02c.002-.132.002-.455.002-.73zm-2.014 2.453c0 .875-.543 1.34-1.246 1.34-.49 0-.808-.287-.808-.752 0-.588.45-.827 1.246-.944l.808-.116v.472zm11.393-2.776c.46-.226.5-.479.232-.82-.544-.698-1.51-1.688-2.664-1.688-.828 0-1.391.437-1.391 1.059 0 .964 1.259 1.155 2.18 1.455.92.3 2.16.71 2.16 2.036 0 1.49-1.47 2.35-3.088 2.35-1.385 0-2.425-.635-3.02-1.36-.2-.24-.132-.52.172-.73l.84-.574c.265-.18.524-.09.73.136.423.472.934.881 1.576.881.656 0 1.066-.341 1.066-.874 0-.882-1.146-1.093-2.053-1.387-.9-.294-2.28-.683-2.28-2.086 0-1.459 1.332-2.186 2.763-2.186 1.093 0 2.034.45 2.578 1.077l.033.037.712-.505.007-.002zm-6.666 4.41c.219-.24.166-.567-.093-.786a5.794 5.794 0 0 1-1.166-1.394l-.04-.075c.404-.984.795-2.277 1.173-3.693.119-.444-.093-.786-.543-.786h-1.073c-.325 0-.53.185-.63.486-.33.998-.675 2.193-.993 3.327-.278-.99-.543-2.05-.828-3.033-.1-.342-.324-.78-.795-.78H9.72c-.443 0-.642.34-.51.786.41 1.38 1.006 3.639 1.417 5.02.12.396.398.54.762.54h1.073c.311 0 .543-.13.722-.387l.211-.278.026.035c.424.58.987.97 1.564.97.662 0 1.1-.375 1.258-.574zM3.46 20.472c4.717 2.453 11.233 2.7 16.328.74.457-.176.9-.537.603-.966-.252-.363-.801-.26-1.185-.13-4.526 1.536-10.428 1.442-14.787-.714-.424-.21-.868-.04-1.047.3-.238.455.086.83.088.83l-.001-.06zm17.063-.538c-.378-.458-1.928-.293-2.656-.2-.278.035-.331-.19-.113-.356 1.41-.984 3.001-.7 3.239-.37.238.33-.285 2.219-1.577 3.129-.219.157-.404.055-.292-.218.297-.73.655-1.637 1.399-1.985z" />
  </svg>
);

const FlaskIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#47C2B4]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 19L14 10V5H15C15.55 5 16 4.55 16 4C16 3.45 15.55 3 15 3H9C8.45 3 8 3.45 8 4C8 4.55 8.45 5 9 5H10V10L5 19C4.27 20.31 5.22 21 6.5 21H17.5C18.78 21 19.73 20.31 19 19ZM11.75 6H12.25V10.2L12.92 11.4L13.75 12.9V13.4H10.25V12.9L11.08 11.4L11.75 10.2V6ZM8.08 17.5L9.67 14.6H14.33L15.92 17.5H8.08Z" />
  </svg>
);

const TerraformIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#7B42BC]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M1.44 0v7.575L8 11.362V3.787L1.44 0zm14.56 3.787v7.575l6.56-3.787V0L16 3.787zM8.72 4.21v7.575l6.56-3.787V4.21L8.72 8zM1.44 8.79v7.575L8 20.152V12.578L1.44 8.79zm14.56 3.787v7.575l6.56-3.787v-7.575l-6.56 3.787zm-7.28.423v7.575l6.56-3.787v-7.575l-6.56 3.787z" />
  </svg>
);

const MongoDBIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#47A248]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-.3 0-.6.1-.8.2C9.4 1.7 6.1 6.5 6.1 11.2c0 4.1 2.3 7.8 5.1 9.9.5.4 1.1.4 1.6 0 2.8-2.1 5.1-5.8 5.1-9.9C17.9 6.5 14.6 1.7 12.8.2c-.2-.1-.5-.2-.8-.2zm.7 19.3V2.4c1.1 1.2 3.5 5 3.5 8.8 0 3.3-1.6 6.7-3.5 8.1zm-1.4 0C9.4 17.9 7.8 14.5 7.8 11.2c0-3.8 2.4-7.6 3.5-8.8v16.9z" />
  </svg>
);

const S3Icon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} stroke-[#E05243] fill-none`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#4285F4]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

const NextjsIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 180 180" className={`${className} fill-white`} xmlns="http://www.w3.org/2000/svg">
    <mask id="nextjsMask">
      <circle cx="90" cy="90" r="90" fill="white" />
    </mask>
    <circle cx="90" cy="90" r="90" fill="black" />
    <g mask="url(#nextjsMask)">
      <path d="M149.508 157.52L69.142 54H54v72h14.4V69.757l70.198 90.264c3.92-3.808 7.502-7.986 10.91-12.501zM111.6 54h14.4v72H111.6z" fill="white" />
    </g>
  </svg>
);

const TailwindIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#06B6D4]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.036c-2.286 0-3.81 1.107-4.572 3.321 1.524-.738 2.857-.369 4 .093 1.218.49 2.091 1.724 3.056 2.9C15.938 14.162 17.545 15 20.572 15c2.286 0 3.81-1.107 4.572-3.322-1.524.739-2.857.37-4-.092-.958-.386-1.637-1.364-2.457-2.385C17.75 7.973 15.986 6.036 12 6.036zm-8 6.643c-2.286 0-3.81 1.107-4.572 3.321 1.524-.738 2.857-.369 4 .093 1.218.49 2.091 1.724 3.056 2.9 1.455 1.813 3.062 2.651 6.089 2.651 2.286 0 3.81-1.107 4.572-3.322-1.524.739-2.857.37-4-.092-.958-.386-1.637-1.364-2.457-2.385C13.75 14.615 11.986 12.679 8 12.679z" />
  </svg>
);

const ReactIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-[#61DAFB]`} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

const FramerIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#FF00C8]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 24V12h12L24 0v12H12L0 24zM24 0v12H12L24 0zM0 24h12L0 12v12z" />
  </svg>
);

// ==========================================
// DATA SCHEMAS & DEFINITIONS
// ==========================================

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  github: string;
  tech: string[];
  situation: {
    label: string;
    badge: string;
    text: string;
  };
  task: {
    label: string;
    badge: string;
    text: string;
  };
  action: {
    label: string;
    badge: string;
    points: string[];
  };
  result: {
    label: string;
    badge: string;
    text: string;
  };
  previewIcons: React.ComponentType<{ className?: string }>[];
  previewIconLabels: string[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: "ecs-pipeline",
    title: "Flask Containerization & AWS ECS Fargate GitOps Pipeline",
    subtitle: "Continuous deployment for containerized Flask apps on AWS ECS Fargate via GitHub Actions",
    category: "AWS Cloud DevOps & Automation",
    description: "A fully automated, one-command deployment pipeline containerizing a Flask application with Docker, and pushing releases to AWS ECS Fargate via GitHub Actions on every commit to main.",
    image: "/portfolio/pipeline.png",
    github: "https://github.com/Thimeth29",
    tech: ["Python", "Flask", "Docker", "AWS ECS", "AWS ECR", "GitHub Actions"],
    situation: {
      label: "Situation",
      badge: "The Problem",
      text: "Manually building, tagging, and deploying containerized applications to AWS is slow and error-prone — every code change required a developer to rebuild the Docker image, push it to a registry, and update the ECS service by hand."
    },
    task: {
      label: "Task",
      badge: "The Objective",
      text: "Build an automated CI/CD pipeline that takes a Flask application from a git push straight through to a running container on AWS, with zero manual deployment steps."
    },
    action: {
      label: "Action",
      badge: "The Execution",
      points: [
        "Containerized the Flask app with a lightweight python:3.10-slim Dockerfile exposing port 8080.",
        "Wrote a GitHub Actions workflow (deploy.yml) triggered on every push to main.",
        "The workflow authenticates to AWS, builds the Docker image, tags it with the Git commit SHA, and pushes it to Amazon ECR.",
        "It then pulls the existing ECS task definition, injects the new image, and deploys the updated task definition to the ECS service, waiting for deployment stabilization."
      ]
    },
    result: {
      label: "Result",
      badge: "The Impact",
      text: "A fully automated, one-command deployment pipeline: pushing to main is now the only action needed to get code from a developer's machine into a running, load-balanced container on AWS ECS — cutting deployment time from a manual multi-step process to a single automated GitHub Actions run."
    },
    previewIcons: [GitIcon, GitHubActionsIcon, DockerIcon, AWSIcon, FlaskIcon],
    previewIconLabels: ["Git", "Actions", "Docker", "AWS ECS", "Flask"]
  },
  {
    id: "cloud-file-share",
    title: "CloudFileShare: Secure Self-Hosted File-Sharing Platform",
    subtitle: "Infrastructure-as-Code file storage backend with DocumentDB, S3, Google OAuth, and App Runner",
    category: "AWS Cloud Infrastructure & Full-Stack Security",
    description: "A secure, self-hosted file-sharing platform featuring a Flask backend, MongoDB/DocumentDB storage, S3 object management, Google OAuth & bcrypt authentication, granular access controls, and full Terraform provisioning automatically deployed via GitHub Actions.",
    image: "/portfolio/cloud_file_share.png",
    github: "https://github.com/Thimeth29",
    tech: ["Flask", "MongoDB", "AWS S3", "Terraform", "Google OAuth", "AWS App Runner"],
    situation: {
      label: "Situation",
      badge: "The Problem",
      text: "Sharing files securely often means trusting a third-party service with your data, or spinning up ad-hoc solutions with no access control, audit trail, or expiry — a common gap for teams wanting to keep sensitive files on their own infrastructure."
    },
    task: {
      label: "Task",
      badge: "The Objective",
      text: "Design and build a secure, self-hosted cloud file-sharing platform with proper authentication, granular sharing controls, and full audit logging — deployable on real AWS infrastructure, not just a local demo."
    },
    action: {
      label: "Action",
      badge: "The Execution",
      points: [
        "Built the backend in Flask with bcrypt password hashing and Google OAuth as a login alternative.",
        "Implemented file upload/download with a 100MB size cap and file-type whitelist, storing objects in a private, encrypted S3 bucket (with automatic local-storage fallback for development).",
        "Added tokenized share links with optional password protection and configurable expiry, plus soft-delete for files.",
        "Built platform-wide access logging (IP, action, timestamp) and an admin dashboard for auditing usage and managing user roles.",
        "Defined the entire production environment in Terraform: a VPC with private subnets, a DocumentDB (MongoDB-compatible) cluster locked down to app-only access, an encrypted S3 bucket, and IAM roles scoped to least privilege.",
        "Automated builds with GitHub Actions, pushing Docker images to Amazon ECR, with AWS App Runner auto-deploying the latest image."
      ]
    },
    result: {
      label: "Result",
      badge: "The Impact",
      text: "A fully self-hosted, infrastructure-as-code file-sharing platform: every file is encrypted at rest, every access is logged, share links expire on schedule, and a single git push takes a code change from commit to a live, auto-scaled deployment on AWS — with no manual server configuration."
    },
    previewIcons: [GoogleIcon, MongoDBIcon, S3Icon, TerraformIcon, AWSIcon],
    previewIconLabels: ["OAuth", "DocumentDB", "S3", "Terraform", "App Runner"]
  },
  {
    id: "portfolio-web",
    title: "Portfolio Website",
    subtitle: "Cinematic, dark-themed Next.js portfolio utilizing Lenis smooth scroll and Framer Motion mouse-parallax",
    category: "Frontend Engineering & High-End UX",
    description: "A luxury, highly interactive portfolio built with Next.js App Router, Tailwind CSS v4, and TypeScript, featuring smooth Lenis scroll and custom spring-physics cursor animations.",
    image: "/portfolio/portfolio_mockup.png",
    github: "https://github.com/Thimeth29",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis Scroll", "TypeScript"],
    situation: {
      label: "Situation",
      badge: "The Problem",
      text: "Generic template portfolios fail to demonstrate advanced frontend and animation capabilities. I wanted to design a luxury, highly interactive, Awwwards-inspired portfolio that reflects modern web engineering standards."
    },
    task: {
      label: "Task",
      badge: "The Objective",
      text: "I designed and built this Next.js app, managing the scroll engine integration, preloader clip-path triggers, and responsive layouts."
    },
    action: {
      label: "Action",
      badge: "The Execution",
      points: [
        "Coded custom components using Next.js App Router, Tailwind CSS v4, and TypeScript.",
        "Integrated Lenis Smooth Scroll and custom cursor springs using Framer Motion to create smooth interpolation.",
        "Developed a dynamic mouse-parallax hook mapping coordinate shifts to glowing backing structures and cards.",
        "Solved Next.js hydration conflicts by dynamically importing client-only widgets with SSR disabled."
      ]
    },
    result: {
      label: "Result",
      badge: "The Impact",
      text: "Completed a premium portfolio scoring a perfect lighthouse build rating, running at a locked 60 FPS with fluid motion paths and smooth Lenis curves."
    },
    previewIcons: [NextjsIcon, TailwindIcon, ReactIcon, FramerIcon, GitHubActionsIcon],
    previewIconLabels: ["Next.js", "Tailwind", "React", "Framer", "Deploy"]
  }
];

export default function Projects() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);

  // Close modal logic
  const closeModal = () => {
    setIsOpen(false);
  };

  // Lock scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keypress listener (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const project = activeProjectIdx !== null ? PROJECTS_DATA[activeProjectIdx] : null;

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-[#3B82F6]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-indigo-500/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            03 / Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Featured Projects
          </h2>
          <p className="text-sm text-gray-400 mt-2 font-mono max-w-lg">
            Engineering project logs documenting cloud containerization, frontend systems, and secure full-stack cloud deployments.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Cinematic Grid of Poster Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center max-w-7xl mx-auto">
          {PROJECTS_DATA.map((proj, idx) => (
            <motion.div
              key={proj.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => {
                setActiveProjectIdx(idx);
                setIsOpen(true);
              }}
              className="w-full glass-card p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-[#3B82F6]/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] transition-all duration-500 flex flex-col justify-between items-center text-center cursor-pointer group relative overflow-hidden"
            >
              {/* Soft decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-full flex flex-col items-center flex-grow">
                {/* Stack Category */}
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#3B82F6] uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-6">
                  {proj.category}
                </span>

                {/* Project Image Banner */}
                <div className="w-full h-44 sm:h-56 rounded-2xl overflow-hidden border border-white/5 bg-white mb-6 relative flex items-center justify-center">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-contain p-2 hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-[#60A5FA] transition-colors duration-300 font-space uppercase leading-snug max-w-md">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed max-w-md mb-6 font-mono flex-grow">
                  {proj.description}
                </p>

                {/* Icons list showing brand logos */}
                <div className="flex justify-center items-center gap-4 sm:gap-5 mb-8">
                  {proj.previewIcons.map((Icon, iconIdx) => (
                    <div key={iconIdx} className="flex flex-col items-center gap-1.5 opacity-65 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon className="w-6 h-6" />
                      <span className="text-[7.5px] font-mono text-gray-500">{proj.previewIconLabels[iconIdx]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Details Call To Action */}
              <button
                className="relative z-10 w-full sm:w-auto bg-white/5 border border-white/10 group-hover:border-[#3B82F6] group-hover:bg-[#3B82F6]/10 text-white font-semibold text-xs px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover-target"
              >
                View Case Study Details
                <Eye className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Details Modal Dialog */}
      <AnimatePresence>
        {isOpen && activeProjectIdx !== null && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[9999] bg-[#050505]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0B0B0B] border border-white/10 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-left"
            >
              
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base sm:text-lg font-space uppercase">
                      Case Study: {project.id === 'ecs-pipeline' ? 'AWS ECS' : project.id === 'cloud-file-share' ? 'CloudFileShare' : 'Portfolio'}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-mono">
                      Engineering Project Log
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 hover-target"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 sm:p-8 flex-grow flex flex-col gap-8">
                
                {/* STAR Log Grid */}
                <div>
                  <h5 className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-4">
                    STAR Model Case Study
                  </h5>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Situation */}
                    <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono font-bold text-[#3B82F6]">{project.situation.label}</span>
                        <span className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-0.5 rounded">{project.situation.badge}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed font-mono">
                        {project.situation.text}
                      </p>
                    </div>

                    {/* Task */}
                    <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono font-bold text-indigo-400">{project.task.label}</span>
                        <span className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-0.5 rounded">{project.task.badge}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed font-mono">
                        {project.task.text}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] md:col-span-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono font-bold text-cyan-400">{project.action.label}</span>
                        <span className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-0.5 rounded">{project.action.badge}</span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] sm:text-xs text-gray-300 font-mono">
                        {project.action.points.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5 shrink-0">▪</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Result */}
                    <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] md:col-span-2">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono font-bold text-emerald-400">{project.result.label}</span>
                        <span className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-0.5 rounded">{project.result.badge}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed font-mono">
                        {project.result.text}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap justify-between items-center gap-4 px-6 py-4 border-t border-white/5 bg-white/[0.01]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-gray-400 hover:text-white transition-colors duration-200 hover-target"
                >
                  <Github className="w-4 h-4" />
                  GITHUB REPOSITORY
                </a>

                <button
                  onClick={closeModal}
                  className="bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:border-white text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover-target"
                >
                  Close Case Study
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
