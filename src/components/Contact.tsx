"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Magnetic button animation refs and springs
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const btnX = e.clientX - (rect.left + rect.width / 2);
    const btnY = e.clientY - (rect.top + rect.height / 2);
    x.set(btnX * 0.35); // shift magnitude factor
    y.set(btnY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API pipeline submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute left-1/3 bottom-0 w-96 h-96 bg-indigo-500/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-xs uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            06 / Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-400 mt-2 font-mono max-w-lg">
            Let&apos;s discuss automated infrastructures, cloud architectures, or internship roles.
          </p>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* LEFT: Info details (5 spans) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="flex flex-col gap-6 text-left">
              <h3 className="text-2xl font-extrabold text-white font-space uppercase">
                Let&apos;s Build Something Scalable
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">
                Feel free to reach out via the secure contact portal or directly through email. I&apos;m always open to talking about DevOps, AWS deployments, or security IAM policy architectures.
              </p>

              {/* Direct links */}
              <div className="flex flex-col gap-4 mt-6">
                
                <a
                  href="mailto:thimethofficial2@gmail.com"
                  className="glass-card p-4 rounded-2xl border border-white/5 hover:border-[#3B82F6]/30 flex items-center gap-4 transition-all duration-300 hover-target group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left font-mono">
                    <p className="text-[10px] text-gray-500 uppercase">Email Address</p>
                    <p className="text-xs text-white group-hover:text-[#60A5FA] transition-colors">thimethofficial2@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:0714319886"
                  className="glass-card p-4 rounded-2xl border border-white/5 hover:border-[#3B82F6]/30 flex items-center gap-4 transition-all duration-300 hover-target group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left font-mono">
                    <p className="text-[10px] text-gray-500 uppercase">Phone contact</p>
                    <p className="text-xs text-white group-hover:text-[#60A5FA] transition-colors">0714319886</p>
                  </div>
                </a>

                <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-left font-mono">
                    <p className="text-[10px] text-gray-500 uppercase">HQ Location</p>
                    <p className="text-xs text-white">Colombo, Sri Lanka</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social linkages footer */}
            <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-8">
              <a
                href="https://github.com/Thimeth29"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl transition-all duration-300 text-gray-400 hover:text-white hover-target"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/thimeth-chathnuka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl transition-all duration-300 text-gray-400 hover:text-white hover-target"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* RIGHT: Glass Contact Form (7 spans) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/5 flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
              
              {/* Name */}
              <div className="flex flex-col gap-2 font-mono">
                <label htmlFor="form-name" className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  Your Identifier / Name
                </label>
                <input
                  id="form-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="bg-white/5 border border-white/8 hover:border-white/15 focus:border-[#3B82F6] focus:bg-[#050505] text-white text-xs px-5 py-4 rounded-xl outline-none transition-all duration-300 hover-target"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 font-mono">
                <label htmlFor="form-email" className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  Email Endpoint
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  placeholder="e.g. client@network.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="bg-white/5 border border-white/8 hover:border-white/15 focus:border-[#3B82F6] focus:bg-[#050505] text-white text-xs px-5 py-4 rounded-xl outline-none transition-all duration-300 hover-target"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 font-mono">
                <label htmlFor="form-message" className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  Message Payload
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={5}
                  placeholder="Let me know details about your project or open position..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-white/5 border border-white/8 hover:border-white/15 focus:border-[#3B82F6] focus:bg-[#050505] text-white text-xs px-5 py-4 rounded-xl outline-none transition-all duration-300 resize-none hover-target"
                />
              </div>

              {/* Submit Container with Magnetic Button wrapper */}
              <div
                className="mt-4 flex justify-start items-center"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  ref={buttonRef}
                  style={{ x: springX, y: springY }}
                  type="submit"
                  disabled={isSubmitting || success}
                  className="bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-emerald-600 text-white font-bold text-xs px-8 py-4 rounded-xl shadow-lg shadow-[#3B82F6]/10 flex items-center justify-center gap-2 transition-colors duration-300 hover-target disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>Deploying Message...</>
                  ) : success ? (
                    <>Payload Shipped successfully!</>
                  ) : (
                    <>
                      Ship Payload
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </motion.button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
