"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function ResumeDownload() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass glow-border rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/10" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 animate-glow">
                <FileText className="w-12 h-12" />
              </div>
            </div>
            
            <h3 className="text-4xl font-bold mb-4 text-gradient">
              Want to Know More?
            </h3>
            
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Download my complete resume to explore my full experience, 
              projects, and technical skills in detail.
            </p>
            
            <a
              href="/Raman_Subedi_Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all duration-300 font-bold text-xl glow-border animate-glow group"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Download Full Resume
            </a>
            
            <p className="text-sm text-foreground/50 mt-6">
              PDF Format • Updated January 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
