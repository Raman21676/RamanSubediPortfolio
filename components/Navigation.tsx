"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation on mount
    setIsVisible(true);
    
    // Throttled scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto rounded-2xl px-6 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-300 ${
          isScrolled 
            ? 'glass shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <Link 
          href="/" 
          className="text-lg md:text-2xl font-extrabold text-gradient tracking-wide"
        >
          RAMAN SUBEDI
        </Link>
        
        <div className="hidden md:flex gap-6 lg:gap-8">
          {['About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-sm lg:text-base"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="/Raman_Subedi_Resume.pdf"
          download
          className="px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all duration-200 font-medium text-sm md:text-base"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
