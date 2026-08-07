"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, X, Cpu, Eye, ExternalLink } from "lucide-react";
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

const PythonIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#3776AB]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656v2.75H12.1v.826H3.682S0 5.766 0 11.914c0 6.149 3.207 5.945 3.207 5.945h1.914v-2.656s-.103-3.207 3.207-3.207h5.5s3.004.051 3.004-3.004V3.207S17.37 0 11.914 0zm-3.004 1.809a1.004 1.004 0 1 1 0 2.008 1.004 1.004 0 0 1 0-2.008zM12.086 24c6.094 0 5.714-2.656 5.714-2.656v-2.75H11.9v-.826h8.418s3.682.466 3.682-5.682c0-6.149-3.207-5.945-3.207-5.945h-1.914v2.656s.103 3.207-3.207 3.207h-5.5s-3.004-.051-3.004 3.004v5.727S6.63 24 12.086 24zm3.004-1.809a1.004 1.004 0 1 1 0-2.008 1.004 1.004 0 0 1 0 2.008z"/>
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

const FirebaseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#FFCA28]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.75L9.9 3.12c.16-.33.64-.33.8 0l2.02 4.21-8.83 8.42zM20.1 15.75L12.56 1.48c-.2-.37-.76-.37-.96 0L9.9 4.67l10.2 11.08zM10.74 5.38l8.28 8.87-5.59-10.45c-.2-.37-.76-.37-.96 0L10.74 5.38z" fill="#F57C00"/>
    <path d="M2.87 18.06l1.24-2.58 11.19 11.1c.36.36.95.36 1.31 0l4.31-4.31c.36-.36.36-.95 0-1.31L2.87 18.06z" fill="#FFCA28"/>
  </svg>
);

const FlutterIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-[#02569B]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M14.314 0L2.3 12 6 15.7 21.686 0H14.314zM21.686 12h-7.371l-3.7 3.7 3.7 3.7h7.371l-3.7-3.7 3.7-3.7z" />
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
    id: "weatherguard-harvest",
    title: "WeatherGuard Harvest: AWS IoT & Agriculture Analytics Platform",
    subtitle: "AWS-based telemetry processing platform for intelligent farming and risk alert telemetry",
    category: "Cloud IoT & Big Data",
    description: "An automated cloud infrastructure that ingests agriculture telemetry and real-time weather feeds, triggers Lambda evaluations, and dynamically outputs risk status dashboard logs.",
    image: "/portfolio/weather.png",
    github: "https://github.com/Thimeth29/CloudWeather",
    tech: ["AWS Lambda", "Amazon S3", "API Gateway", "DynamoDB", "Python", "React"],
    situation: {
      label: "Situation",
      badge: "The Problem",
      text: "Farms lack central telemetry collection systems that aggregate soil telemetry and weather warnings, leaving them vulnerable to unpredicted weather shifts and crop degradation."
    },
    task: {
      label: "Task",
      badge: "The Objective",
      text: "Construct a cloud telemetry analytics platform that aggregates weather telemetry in real-time, executing crop-health rule validation engine automatically."
    },
    action: {
      label: "Action",
      badge: "The Execution",
      points: [
        "Wrote AWS Lambda rules in Python 3.12 integrating crop health formulas with OpenWeather APIs.",
        "Created an Amazon S3 static client UI featuring telemetry status maps and interactive warning charts.",
        "Deployed secure routing via Amazon API Gateway using CORS policies and server-side secret integrations."
      ]
    },
    result: {
      label: "Result",
      badge: "The Impact",
      text: "Developed a secure, cloud-native agriculture tracking prototype scaling dynamically, saving telemetry history cache on AWS DynamoDB automatically."
    },
    previewIcons: [AWSIcon, S3Icon, GitIcon, GitHubActionsIcon],
    previewIconLabels: ["Lambda", "S3 Store", "Git", "GitHub Actions"]
  },
  {
    id: "mindcare-app",
    title: "MindCare: Cross-Platform Mental Health Mobile Application",
    subtitle: "Flutter mobile app for mental wellness logging, counseling location, and coping guides",
    category: "Mobile Application Engineering",
    description: "A secure, cross-platform mobile application written in Flutter connecting to Google Maps APIs and Firebase backends to track mood states and assist wellness coaching.",
    image: "/portfolio/whales.png",
    github: "https://github.com/Thimeth29",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Local Storage"],
    situation: {
      label: "Situation",
      badge: "The Problem",
      text: "Mental health support services are often fragmented, leaving users without structured logging mechanisms or immediate access to nearby counseling services."
    },
    task: {
      label: "Task",
      badge: "The Objective",
      text: "Develop a secure mobile dashboard combining private daily journals, interactive map integrations, and offline coping guides."
    },
    action: {
      label: "Action",
      badge: "The Execution",
      points: [
        "Programmed mobile layouts in Flutter with reactive Dart State Controllers.",
        "Wrote secure Firebase Auth hooks managing private user collections under strict security guidelines.",
        "Integrated Google Maps location pins fetching closest wellness clinics dynamically based on user coordinate."
      ]
    },
    result: {
      label: "Result",
      badge: "The Impact",
      text: "Shipped a clean, responsive mobile prototype running at 60 FPS across platforms with real-time Firestore synchronization."
    },
    previewIcons: [FlutterIcon, FirebaseIcon, GitIcon],
    previewIconLabels: ["Flutter", "Firebase", "Git"]
  },
  {
    id: "ecs-pipeline",
    title: "AWS ECS Fargate Dockerized GitOps Pipeline",
    subtitle: "Automated container builds, ECR pushes, and ECS service rolling updates via GitHub Actions",
    category: "DevOps & Cloud Automation",
    description: "A fully automated CI/CD infrastructure deploying Flask applications on AWS ECS Fargate, managed by Terraform IaC configurations.",
    image: "/portfolio/pipeline.png",
    github: "https://github.com/Thimeth29/assignment01-new",
    tech: ["Docker", "Terraform", "GitHub Actions", "AWS ECS", "AWS ECR", "Flask"],
    situation: {
      label: "Situation",
      badge: "The Problem",
      text: "Manual container configuration and updates to cloud services are slow and prone to staging configuration mismatches."
    },
    task: {
      label: "Task",
      badge: "The Objective",
      text: "Architect a pipeline pushing container releases to AWS ECS Fargate immediately on code check-ins."
    },
    action: {
      label: "Action",
      badge: "The Execution",
      points: [
        "Configured a lightweight Docker container exposing local Flask services.",
        "Programmed GitHub Actions workflows verifying builds and publishing image tags to Amazon ECR.",
        "Constructed a Terraform template configuring task definition definitions, target groups, and security settings."
      ]
    },
    result: {
      label: "Result",
      badge: "The Impact",
      text: "Replaced manual server deployments with a GitOps flow updating AWS container tasks securely on code updates."
    },
    previewIcons: [DockerIcon, GitHubActionsIcon, AWSIcon, TerraformIcon],
    previewIconLabels: ["Docker", "Actions", "ECS", "Terraform"]
  },
  {
    id: "cloud-file-share",
    title: "CloudFileShare: Secure Self-Hosted Storage Hub",
    subtitle: "Infrastructure-as-code cloud storage platform with S3 bucket caching and Google OAuth",
    category: "Cloud Security & Infrastructure",
    description: "A secure, self-hosted file storage platform provisioned with Terraform, executing Flask backend services inside AWS App Runner with MongoDB storage.",
    image: "/portfolio/cloud_file_share.png",
    github: "https://github.com/Thimeth29/CloudFileShare",
    tech: ["Flask", "AWS S3", "Terraform", "Google OAuth", "MongoDB", "App Runner"],
    situation: {
      label: "Situation",
      badge: "The Problem",
      text: "Exposing file sharing backends without encryption or identity validation opens platforms to database leaking."
    },
    task: {
      label: "Task",
      badge: "The Objective",
      text: "Construct a secure sharing platform integrating Google OAuth authentication and private S3 buckets."
    },
    action: {
      label: "Action",
      badge: "The Execution",
      points: [
        "Programmed Flask handlers restricting uploads to verified MIME structures.",
        "Created least-privilege IAM storage credentials inside AWS S3 buckets.",
        "Provisioned MongoDB databases and Google login callback integrations."
      ]
    },
    result: {
      label: "Result",
      badge: "The Impact",
      text: "Deployed a self-scaling backend running on AWS App Runner with Terraform, locking file storage under strict ACL guidelines."
    },
    previewIcons: [AWSIcon, S3Icon, TerraformIcon, GoogleIcon, MongoDBIcon],
    previewIconLabels: ["AWS App", "S3", "Terraform", "Google", "MongoDB"]
  },
  {
    id: "serverless-weather",
    title: "Serverless Weather Application",
    subtitle: "Serverless weather log backend using Lambda caching and DynamoDB TTL logs",
    category: "AWS Serverless Compute",
    description: "A lightweight cloud-based weather tracker using AWS Lambda API Gateway routing, static S3 asset pages, and DynamoDB log entries.",
    image: "/portfolio/portfolio_mockup.png",
    github: "https://github.com/Thimeth29/CloudWeather",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "Amazon S3", "Python", "Terraform"],
    situation: {
      label: "Situation",
      badge: "The Problem",
      text: "Always-on servers incur idle hosting charges for simple weather APIs, making serverless computational architectures ideal."
    },
    task: {
      label: "Task",
      badge: "The Objective",
      text: "Create a low-cost, pay-per-use backend logging weather search coordinates dynamically on DynamoDB."
    },
    action: {
      label: "Action",
      badge: "The Execution",
      points: [
        "Programmed Python Lambda scripts querying public weather APIs on demand.",
        "Configured a DynamoDB storage database utilizing 30-day TTL expiration metrics.",
        "Wrote Terraform code automating S3 static deployments."
      ]
    },
    result: {
      label: "Result",
      badge: "The Impact",
      text: "Constructed an auto-scaling weather platform that charges only per invocation, reducing operational expenses to near zero."
    },
    previewIcons: [AWSIcon, S3Icon, PythonIcon, TerraformIcon],
    previewIconLabels: ["Lambda", "S3", "Python", "Terraform"]
  }
];

export default function Projects() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

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
      {/* Glow highlight effects */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-[#3B82F6]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-indigo-500/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-xs uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            03 / Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Project Showcase
          </h2>
          <p className="text-sm text-gray-400 mt-2 font-mono max-w-lg">
            Engineering cloud automation pipelines, mobile architectures, and secure serverless applications.
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
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => {
                setActiveProjectIdx(idx);
                setIsOpen(true);
              }}
              className="w-full glass-card p-6 sm:p-7 rounded-3xl border border-white/5 hover:border-[#3B82F6]/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] transition-all duration-500 flex flex-col justify-between items-center text-center cursor-pointer group relative overflow-hidden"
            >
              {/* Overlay hover decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-full flex flex-col items-center flex-grow">
                {/* Category tag */}
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#3B82F6] uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 mb-6">
                  {proj.category}
                </span>

                {/* Card Banner Image */}
                <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-white/5 bg-zinc-950/60 mb-6 relative flex items-center justify-center">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-contain p-3 group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 group-hover:text-[#60A5FA] transition-colors duration-300 font-space uppercase leading-snug max-w-md">
                  {proj.id === "weatherguard-harvest" ? "WeatherGuard Harvest" : proj.id === "mindcare-app" ? "MindCare Wellness" : proj.id === "ecs-pipeline" ? "AWS ECS Pipeline" : proj.id === "cloud-file-share" ? "CloudFileShare" : "Serverless Weather"}
                </h3>

                {/* Subtitle */}
                <p className="text-[10px] text-gray-400 leading-relaxed max-w-md mb-6 font-mono flex-grow">
                  {proj.subtitle}
                </p>

                {/* Technology brand badges */}
                <div className="flex justify-center items-center gap-4 mb-6">
                  {proj.previewIcons.map((Icon, iconIdx) => (
                    <div key={iconIdx} className="flex flex-col items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon className="w-5 h-5" />
                      <span className="text-[7px] font-mono text-gray-500">{proj.previewIconLabels[iconIdx]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer actions */}
              <div className="relative z-10 w-full flex items-center justify-center gap-2 mt-auto">
                <button
                  className="flex-1 bg-white/5 border border-white/10 group-hover:border-[#3B82F6] group-hover:bg-[#3B82F6]/10 text-white font-semibold text-xs py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover-target"
                >
                  Case Study
                  <Eye className="w-4 h-4 text-[#60A5FA]" />
                </button>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center hover-target"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Details Modal Dialog - Immersive Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && activeProjectIdx !== null && project && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[9999] bg-[#050505]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.96, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0B0B0B] border border-white/10 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-left"
            >
              
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base font-space uppercase">
                      {project.title}
                    </h4>
                    <p className="text-[9px] text-gray-500 font-mono">
                      Engineering Project Log • STAR Framework
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 hover-target"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div data-lenis-prevent className="overflow-y-auto p-6 sm:p-8 flex-grow flex flex-col gap-6">
                
                {/* STAR Log Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Situation */}
                  <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#3B82F6] uppercase mb-2 block">
                        [S] Situation
                      </span>
                      <p className="text-xs text-gray-300 leading-relaxed font-mono">
                        {project.situation.text}
                      </p>
                    </div>
                    <span className="text-[8px] font-mono text-gray-600 uppercase mt-4 block">{project.situation.badge}</span>
                  </div>

                  {/* Task */}
                  <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 uppercase mb-2 block">
                        [T] Task
                      </span>
                      <p className="text-xs text-gray-300 leading-relaxed font-mono">
                        {project.task.text}
                      </p>
                    </div>
                    <span className="text-[8px] font-mono text-gray-600 uppercase mt-4 block">{project.task.badge}</span>
                  </div>

                  {/* Action */}
                  <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] md:col-span-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
                      [A] Action & Implementation
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-300 font-mono">
                      {project.action.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#3B82F6] mt-0.5 shrink-0">▪</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className="p-5 rounded-2xl border border-[#34D399]/10 bg-emerald-950/5 md:col-span-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase mb-2 block">
                      [R] Result & Deliverable
                    </span>
                    <p className="text-xs text-emerald-300/90 leading-relaxed font-mono">
                      {project.result.text}
                    </p>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap justify-between items-center gap-4 px-6 py-4 border-t border-white/5 bg-white/[0.01]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-gray-400 hover:text-white transition-colors duration-200 hover-target"
                >
                  <Github className="w-4 h-4" />
                  GITHUB REPOSITORY
                  <ExternalLink className="w-3 h-3 text-[#3B82F6]" />
                </a>

                <button
                  onClick={closeModal}
                  className="bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:border-white text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover-target"
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
