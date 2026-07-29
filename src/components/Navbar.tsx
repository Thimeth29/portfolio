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
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/70 backdrop-blur-md border-b border-white/8 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight text-white flex items-center gap-1.5 hover-target"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-[#3B82F6] bg-clip-text text-transparent">
              Thimeth
            </span>
            <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 hover-target"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Thimeth29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover-target"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/thimeth-chathnuka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover-target"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="glass-panel text-xs font-semibold px-4 py-2.5 rounded-full text-white hover:bg-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 flex items-center gap-2 hover-target"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Burger Menu Button (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-[#050505]/98 backdrop-blur-lg border-b border-white/8 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <hr className="border-white/10 my-2" />
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
                  href="#contact"
                  className="bg-white text-black text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-2"
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
