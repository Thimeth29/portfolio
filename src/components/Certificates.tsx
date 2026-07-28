"use client";

import { motion } from "framer-motion";
import { Award, Cloud, ExternalLink } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 border-t border-white/5 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Award className="w-4 h-4" />
            05 / Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Centered Single Premium Certificate Card */}
        <div className="flex justify-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, borderColor: "rgba(59, 130, 246, 0.4)" }}
            className="glass-card p-8 rounded-2xl border border-white/8 hover:shadow-[0_15px_40px_rgba(59,130,246,0.1)] transition-all duration-300 max-w-xl w-full text-left group"
          >
            {/* Header info with AWS styled icon */}
            <div className="flex items-start justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FF9900]/10 border border-[#FF9900]/20 flex items-center justify-center text-[#FF9900] group-hover:bg-[#FF9900]/20 transition-all duration-300">
                  <Cloud className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl leading-snug group-hover:text-[#60A5FA] transition-colors duration-200">
                    AWS Cloud Technical Essentials
                  </h3>
                  <p className="text-sm font-mono text-gray-400 mt-1">
                    Amazon Web Services (AWS)
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="flex flex-col gap-3 border-t border-b border-white/5 py-5 mb-6 text-sm font-mono text-gray-400">
              <div className="flex justify-between items-center">
                <span>Issued Date:</span>
                <span className="text-white font-semibold">July 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Credential ID:</span>
                <span className="text-white font-semibold select-all">ZDDQVO1S0521</span>
              </div>
            </div>

            {/* Show credential link */}
            <div className="flex justify-end">
              <a
                href="https://www.coursera.org/account/accomplishments/verify/ZDDQVO1S0521"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 text-white font-semibold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover-target"
              >
                Show credential
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
