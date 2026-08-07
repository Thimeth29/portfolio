"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer to update active navigation link
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // triggers when section occupies center of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "about", "skills", "projects", "education", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-500 bg-[#0A0A0A]/85 border border-white/8 backdrop-blur-md shadow-2xl ${
            scrolled ? "max-w-2xl px-5" : "max-w-4xl"
          } w-full`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white flex items-center gap-1 hover-target hover:opacity-85 transition-opacity"
          >
            <span className="font-space uppercase tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3B82F6]">
              Thimeth
            </span>
            <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    className={`relative z-10 px-4 py-1.5 text-[10px] font-mono font-bold uppercase transition-colors duration-300 rounded-full block hover-target ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Thimeth29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover-target hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/thimeth-chathnuka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover-target hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="/portfolio/Thimeth_Chathnuka_CV.pdf"
              download="Thimeth_Chathnuka_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel text-[9px] font-bold font-mono px-3.5 py-1.5 rounded-full text-white hover:bg-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 flex items-center gap-1.5 hover-target"
            >
              <FileText className="w-3 h-3 text-[#3B82F6]" />
              CV
            </a>
          </div>

          {/* Burger Menu Button (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white p-1 hover-target"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-4 right-4 z-40 bg-[#050505]/95 border border-white/8 backdrop-blur-xl rounded-3xl md:hidden overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col px-6 py-6 gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 px-3 rounded-lg text-sm font-mono uppercase font-bold transition-colors ${
                        isActive 
                          ? "bg-[#3B82F6]/10 text-[#3B82F6] border-l-2 border-[#3B82F6]" 
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
              <hr className="border-white/5 my-2" />
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/Thimeth29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thimeth-chathnuka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="/portfolio/Thimeth_Chathnuka_CV.pdf"
                  download="Thimeth_Chathnuka_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3B82F6] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Resume
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
