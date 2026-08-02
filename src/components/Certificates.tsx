"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Cloud, ExternalLink, Eye, X, ZoomIn, CheckCircle2, Code2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";

// Direct Static Image Imports (Guarantees bundling & immediate display in Next.js)
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
    tags: ["AWS", "Cloud Architecture", "Cloud Computing", "Coursera Verified"],
  },
  {
    id: "codemania-v5",
    title: "Codemania v5.0 Algorithmic Competition",
    issuer: "IEEE Computer Society Student Branch of SLTC",
    issuedDate: "Feb 01, 2025",
    credentialId: "IEEE-SLTC-CM5-2025",
    verifyUrl: "https://sltc.ac.lk/",
    image: codemaniaCert,
    tags: ["Algorithmic Coding", "IEEE SLTC", "Competitive Programming", "Team Codex"],
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
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Header */}
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
        {/* Certificate Cards Responsive Grid (Compact Size) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl border border-white/10 hover:border-[#3B82F6]/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] transition-all duration-300 w-full text-left overflow-hidden group flex flex-col justify-between"
            >
              {/* Top Certificate Header & Image */}
              <div className="p-5 pb-3">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#60A5FA] group-hover:bg-[#3B82F6]/20 transition-all duration-300 shrink-0">
                      {cert.id.includes("aws") ? (
                        <Cloud className="w-5 h-5 text-[#FF9900]" />
                      ) : (
                        <Code2 className="w-5 h-5 text-[#10B981]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-tight group-hover:text-[#60A5FA] transition-colors duration-200 font-space">
                        {cert.title}
                      </h3>
                      <p className="text-[11px] font-mono text-gray-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="bg-black/70 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified
                  </div>
                </div>

                {/* Compact Certificate Image Preview Frame */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-full h-44 sm:h-48 bg-[#09090b] cursor-pointer overflow-hidden rounded-xl border border-white/10 group/img my-3 p-1.5 flex items-center justify-center shadow-inner"
                >
                  <img
                    src={typeof cert.image === "string" ? cert.image : cert.image.src}
                    alt={cert.title}
                    className="w-full h-full object-contain rounded-lg group-hover/img:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 text-white p-3 backdrop-blur-[2px]">
                    <div className="w-9 h-9 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shadow-md transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-white/90 uppercase">
                      Click to Expand
                    </span>
                  </div>
                </div>

                {/* Compact Metadata Details */}
                <div className="grid grid-cols-2 gap-2 border-t border-b border-white/5 py-2.5 text-[11px] font-mono text-gray-400">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-gray-500 text-[10px]">Issued Date</span>
                    <span className="text-white font-medium">{cert.issuedDate}</span>
                  </div>
                  <div className="flex flex-col gap-0.5 text-right">
                    <span className="text-gray-500 text-[10px]">Credential ID</span>
                    <span className="text-white font-medium font-mono truncate">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-0 flex items-center gap-2.5">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 hover-target"
                >
                  <Eye className="w-3.5 h-3.5 text-[#60A5FA]" />
                  Preview
                </button>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 border border-[#3B82F6]/30 hover:border-[#3B82F6]/60 text-white font-semibold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 hover-target"
                >
                  Credential
                  <ExternalLink className="w-3.5 h-3.5 text-[#3B82F6]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0D0D0E] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#3B82F6]" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-space">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all hover-target"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[450px] bg-black/80 p-4 sm:p-6 flex items-center justify-center overflow-auto">
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[450px] flex items-center justify-center">
                  <img
                    src={typeof selectedCert.image === "string" ? selectedCert.image : selectedCert.image.src}
                    alt={selectedCert.title}
                    className="max-h-[75vh] max-w-full object-contain rounded-lg border border-white/10 shadow-2xl"
                  />
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs font-mono text-gray-400 flex items-center gap-4">
                  <span>Issued: <strong className="text-white">{selectedCert.issuedDate}</strong></span>
                  <span>ID: <strong className="text-white font-mono">{selectedCert.credentialId}</strong></span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    Close
                  </button>
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-xs px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#3B82F6]/20"
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



