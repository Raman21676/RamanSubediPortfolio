"use client";

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
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

export default function Footer() {
  const { ref, isInView } = useInView();

  return (
    <footer className="py-10 md:py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`text-center transition-all duration-600 ease-out ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-foreground/70 text-sm md:text-base">Built with Love</span>
            <span className="text-foreground/70 text-sm md:text-base">by Raman Subedi</span>
          </div>

          <p className="text-foreground/50 text-xs md:text-sm mb-4">
            Next.js • TypeScript • Tailwind CSS
          </p>
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} ramansubedi.com • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
