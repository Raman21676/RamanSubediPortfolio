"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Snowflake component
function Snowflake({ delay, duration, left, size }: { delay: number; duration: number; left: string; size: number }) {
  return (
    <div
      className="absolute bg-white rounded-full opacity-70"
      style={{
        left,
        width: `${size}px`,
        height: `${size}px`,
        animation: `snowfall ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        filter: "blur(1px)",
      }}
    />
  );
}

// Fire particle component
function FireParticle({ delay, left, bottom }: { delay: number; left: string; bottom: string }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        left,
        bottom,
        width: "6px",
        height: "6px",
        background: "radial-gradient(circle, #ff6b35 0%, #f7931e 50%, transparent 100%)",
        animation: `firefly ${2 + Math.random()}s ease-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    />
  );
}

export default function HeroWinterScene() {
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Generate snowflakes
  const snowflakes = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    size: 2 + Math.random() * 5,
  }));

  // Generate fire particles
  const fireParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${48 + Math.random() * 4}%`,
    bottom: `${8 + Math.random() * 3}%`,
    delay: Math.random() * 2,
  }));

  if (!mounted) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(110vh) translateX(30px);
            opacity: 0;
          }
        }

        @keyframes firefly {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(-80px) scale(0.3);
            opacity: 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 40px 15px rgba(255, 107, 53, 0.5),
                        0 0 80px 30px rgba(255, 140, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 60px 25px rgba(255, 107, 53, 0.6),
                        0 0 100px 40px rgba(255, 140, 0, 0.4);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes aurora-sway {
          0%, 100% { transform: translateX(0) scaleX(1); }
          50% { transform: translateX(20px) scaleX(1.1); }
        }
      `}</style>

      {/* Background Image - Norwegian Landscape */}
      <div className="absolute inset-0">
        <Image
          src="/image1.png?v=3"
          alt="Norwegian winter landscape with Aurora Borealis"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Additional Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Snow falling */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {snowflakes.map((flake) => (
          <Snowflake key={flake.id} {...flake} />
        ))}
      </div>

      {/* Main Scene - Raman with Dogs */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-[70vh] md:h-[80vh]">
        <Image
          src="/image2.png?v=3"
          alt="Raman Subedi with German Shepherd and Husky by the campfire"
          fill
          priority
          className="object-contain object-bottom"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      {/* Fire glow effect at the bottom */}
      <div 
        className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-64 h-32 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,107,53,0.4) 0%, rgba(255,140,0,0.2) 40%, transparent 70%)",
          animation: "glow 3s ease-in-out infinite",
          filter: "blur(20px)",
        }}
      />

      {/* Fire particles rising */}
      <div className="absolute inset-0 pointer-events-none">
        {fireParticles.map((particle) => (
          <FireParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Content Overlay */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-start pt-20 md:pt-32 transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="text-center z-20 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Raman Subedi
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-2 font-medium">
            AI Engineer & DevOps Specialist
          </p>
          <p className="text-base md:text-lg text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            From the mountains of Nepal 🏔️
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <a
              href="#projects"
              className="px-6 md:px-8 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 md:px-8 py-3 bg-white text-[#0a1628] rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />

    </section>
  );
}
