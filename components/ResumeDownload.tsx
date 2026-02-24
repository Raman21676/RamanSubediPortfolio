"use client";

import { Download, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Custom hook for intersection observer
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

export default function ResumeDownload() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={ref}
          className={`glass glow-border rounded-2xl md:rounded-3xl p-8 md:p-12 text-center relative overflow-hidden transition-all duration-600 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Background decoration - static gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-accent-600/5" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600">
                <FileText className="w-10 h-10 md:w-12 md:h-12" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Want to Know More?
            </h3>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Download my complete resume to explore my full experience, 
              projects, and technical skills in detail.
            </p>
            
            <a
              href="/Raman_Subedi_Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all duration-300 font-bold text-lg md:text-xl glow-border group"
            >
              <Download className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
              Download Full Resume
            </a>
            
            <p className="text-sm text-foreground/50 mt-6">
              PDF Format • Updated February 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
