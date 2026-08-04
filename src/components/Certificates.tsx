"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Cloud, ExternalLink, Eye, X, CheckCircle2, Code2 } from "lucide-react";
import { StaticImageData } from "next/image";

// Direct Static Image Imports
import awsCert from "../../public/aws_certificate.png";
import codemaniaCert from "../../public/codemania_certificate.png";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId: string;
  verifyUrl: string;
  image: StaticImageData | string;
  tags: string[];
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: "aws-cloud-essentials",
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services (AWS) · Coursera",
    issuedDate: "Jul 28, 2025",
    credentialId: "ZDDQVO1S0521",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/ZDDQVO1S0521",
    image: awsCert,
    tags: ["AWS", "Cloud Architecture", "Cloud Computing"],
  },
  {
    id: "codemania-v5",
    title: "Codemania v5.0 Algorithmic Competition",
    issuer: "IEEE Computer Society Student Branch of SLTC",
    issuedDate: "Feb 01, 2025",
    credentialId: "IEEE-SLTC-CM5-2025",
    verifyUrl: "https://sltc.ac.lk/",
    image: codemaniaCert,
    tags: ["Algorithmic Coding", "IEEE SLTC", "Competitive Programming"],
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 border-t border-white/5 relative bg-[#050505] overflow-hidden">
      {/* Soft Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Simple Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-[#3B82F6] text-sm uppercase tracking-wider">
            <Award className="w-4 h-4" />
            05 / Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-space">
            Certifications & Awards
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mt-4 rounded-full" />
        </div>

        {/* Clean Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#3B82F6]/40 transition-all duration-300 w-full text-left flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#60A5FA] shrink-0">
                      {cert.id.includes("aws") ? (
                        <Cloud className="w-5 h-5 text-[#FF9900]" />
                      ) : (
                        <Code2 className="w-5 h-5 text-[#10B981]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-snug font-space group-hover:text-[#60A5FA] transition-colors duration-200">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-gray-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Clean Image Frame */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-full h-48 bg-black/50 cursor-pointer overflow-hidden rounded-xl border border-white/10 my-4 flex items-center justify-center group/img"
                >
                  <img
                    src={typeof cert.image === "string" ? cert.image : cert.image.src}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-mono">
                    <Eye className="w-4 h-4 text-[#3B82F6]" />
                    Click to View
                  </div>
                </div>

                {/* Details line */}
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 py-2 border-t border-white/5 mb-3">
                  <span>Issued: <strong className="text-white">{cert.issuedDate}</strong></span>
                  <span>ID: <strong className="text-white font-mono">{cert.credentialId}</strong></span>
                </div>

                {/* Simple Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#60A5FA]" />
                  Preview
                </button>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 border border-[#3B82F6]/30 text-white font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  Credential
                  <ExternalLink className="w-3.5 h-3.5 text-[#3B82F6]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#0D0D0E] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#3B82F6]" />
                  <div>
                    <h3 className="text-base font-bold text-white font-space">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="relative flex-1 min-h-[300px] bg-black/80 p-4 flex items-center justify-center overflow-auto">
                <img
                  src={typeof selectedCert.image === "string" ? selectedCert.image : selectedCert.image.src}
                  alt={selectedCert.title}
                  className="max-h-[70vh] max-w-full object-contain rounded-lg border border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">
                  ID: <strong className="text-white">{selectedCert.credentialId}</strong>
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
                  >
                    Verify Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



