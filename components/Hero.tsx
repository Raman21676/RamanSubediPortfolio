"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Simple fade-in animation using CSS instead of Framer Motion
export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 md:pt-6 relative overflow-hidden">
      {/* Static background gradient orbs - no animation for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb-primary -top-1/4 -left-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px]" />
        <div className="gradient-orb-accent -bottom-1/4 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div 
            className={`text-center md:text-left order-2 md:order-1 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="mb-4">
              <span className="text-primary-400 font-medium">Welcome to my portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Engineering Intelligence.
              <br />
              <span className="text-gradient">Crafting the Future.</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 mb-8">
              Hi, I am <span className="text-primary-400 font-semibold">Raman Subedi</span>. 
              I build AI solutions that matter.
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#projects"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all duration-300 font-semibold text-lg glow-border"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div 
            className={`order-1 md:order-2 flex justify-center mt-8 md:mt-0 transition-all duration-700 delay-200 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Static glow instead of animated pulse */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-2xl" />
              
              <div className="relative w-full h-full">
                <Image
                  src="/profile.png"
                  alt="Raman Subedi"
                  width={500}
                  height={500}
                  className="rounded-full glass p-2 relative z-10 w-full h-full object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLz21vL7/2wBDAX…"
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - simplified */}
        <div 
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href="#about" className="inline-block animate-bounce">
            <ArrowDown className="w-8 h-8 text-primary-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
