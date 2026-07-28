"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, HelpCircle, Map } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate contact form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            07 / Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Form (7 columns on large screens) */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-white/8 text-left h-full"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400">
                    <Send className="w-5 h-5 animate-pulse" />
                  </div>
                  <p className="font-bold text-white text-lg mb-1">Message Sent!</p>
                  <p className="text-sm text-gray-400">Thank you. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-gray-400 font-bold">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-gray-400 font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-gray-400 font-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                      placeholder="Collaboration, job inquiry, etc."
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-gray-400 font-bold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                      placeholder="Describe your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-sm py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-2 hover-target"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Right Column: Info & Map (5 columns on large screens) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info Cards */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-white/8 text-left flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider font-bold">Email</p>
                  <a
                    href="mailto:thimethofficial2@gmail.com"
                    className="text-sm font-semibold text-white hover:text-[#3B82F6] transition-colors hover-target"
                  >
                    thimethofficial2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-sm font-semibold text-white">Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider font-bold">Education</p>
                  <p className="text-sm font-semibold text-white">SLTC Research University Campus</p>
                </div>
              </div>
            </motion.div>

            {/* Dark premium Mock Google Map view */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl border border-white/8 overflow-hidden relative aspect-video flex-grow flex items-center justify-center group"
            >
              {/* Abstract mesh/dots representing map coordinate grid */}
              <div className="absolute inset-0 grid-bg opacity-30 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute w-24 h-24 rounded-full bg-[#3B82F6]/10 blur-xl animate-pulse" />
              
              <div className="z-10 text-center flex flex-col items-center gap-2.5">
                <Map className="w-8 h-8 text-[#3B82F6] animate-bounce" />
                <div>
                  <p className="font-bold text-white text-sm">Colombo, Sri Lanka</p>
                  <p className="text-xs text-gray-400 font-mono">6.9271° N, 79.8612° E</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
