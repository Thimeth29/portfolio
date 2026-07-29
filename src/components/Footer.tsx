"use client";

import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Footer() {
  const scrollToTop = () => {
    // If lenis smooth scroll is present, use it for back to top
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo("#home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white flex items-center gap-1 hover-target"
          >
            Thimeth
            <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
          </a>
          <p className="text-xs text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} Thimeth Chathnuka. All rights reserved.
          </p>
        </div>

        {/* Quick links & Socials */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors hover-target">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors hover-target">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors hover-target">
              Projects
            </a>
            <a href="#education" className="text-gray-400 hover:text-white transition-colors hover-target">
              Education
            </a>
          </div>

          <hr className="hidden sm:block border-white/10 h-4 w-[1px]" />

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Thimeth29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover-target"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/thimeth-chathnuka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover-target"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:thimethofficial2@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200 hover-target"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#3B82F6]/60 transition-all duration-300 hover-target"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
