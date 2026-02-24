"use client";

import { useEffect, useState, useRef } from "react";

// Snowflake component
function Snowflake({ delay, duration, left, size }: { delay: number; duration: number; left: string; size: number }) {
  return (
    <div
      className="absolute bg-white rounded-full opacity-80"
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
        width: "8px",
        height: "8px",
        background: "radial-gradient(circle, #ff6b35 0%, #f7931e 50%, transparent 100%)",
        animation: `firefly ${2 + Math.random()}s ease-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    />
  );
}

// Aurora Borealis (Northern Lights) ray
function AuroraRay({ color, delay, duration, top }: { color: string; delay: number; duration: number; top: string }) {
  return (
    <div
      className="absolute w-full h-32 opacity-30"
      style={{
        top,
        background: `linear-gradient(90deg, transparent 0%, ${color} 30%, ${color} 70%, transparent 100%)`,
        filter: "blur(20px)",
        animation: `aurora ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transform: "skewX(-20deg)",
      }}
    />
  );
}

export default function HeroWinterScene() {
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Show content after scene loads
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Generate snowflakes
  const snowflakes = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 4,
  }));

  // Generate fire particles
  const fireParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${45 + Math.random() * 10}%`,
    bottom: `${15 + Math.random() * 5}%`,
    delay: Math.random() * 2,
  }));

  // Aurora rays
  const auroraRays = [
    { color: "#00ff88", delay: 0, duration: 8, top: "5%" },
    { color: "#39ff14", delay: 2, duration: 10, top: "10%" },
    { color: "#7fff00", delay: 4, duration: 9, top: "8%" },
    { color: "#00fa9a", delay: 1, duration: 11, top: "12%" },
    { color: "#98fb98", delay: 3, duration: 7, top: "6%" },
  ];

  if (!mounted) return null;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#1a2d4a] to-[#2d4a3e]">
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) translateX(20px);
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
            transform: translateY(-100px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes aurora {
          0%, 100% {
            opacity: 0.2;
            transform: skewX(-20deg) translateX(-10%);
          }
          25% {
            opacity: 0.5;
            transform: skewX(-15deg) translateX(5%);
          }
          50% {
            opacity: 0.3;
            transform: skewX(-25deg) translateX(-5%);
          }
          75% {
            opacity: 0.6;
            transform: skewX(-18deg) translateX(10%);
          }
        }

        @keyframes flicker {
          0%, 100% {
            transform: scaleY(1) scaleX(1);
            opacity: 0.9;
          }
          25% {
            transform: scaleY(1.1) scaleX(0.95);
            opacity: 1;
          }
          50% {
            transform: scaleY(0.95) scaleX(1.05);
            opacity: 0.85;
          }
          75% {
            transform: scaleY(1.05) scaleX(0.98);
            opacity: 0.95;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 60px 20px rgba(255, 107, 53, 0.4),
                        0 0 100px 40px rgba(255, 140, 0, 0.2);
          }
          50% {
            box-shadow: 0 0 80px 30px rgba(255, 107, 53, 0.5),
                        0 0 120px 50px rgba(255, 140, 0, 0.3);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Stars in the sky */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${Math.random() * 40}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Aurora Borealis (Northern Lights) */}
      <div className="absolute inset-0 overflow-hidden">
        {auroraRays.map((ray) => (
          <AuroraRay key={ray.delay} {...ray} />
        ))}
      </div>

      {/* Snow falling */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" ref={containerRef}>
        {snowflakes.map((flake) => (
          <Snowflake key={flake.id} {...flake} />
        ))}
      </div>

      {/* Ground/Snow landscape */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#e8f4f8] via-[#d0e8f0] to-transparent">
        {/* Snow drifts */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-[#e8f4f8]"
          style={{
            borderRadius: "50% 50% 0 0 / 100px 100px 0 0",
            transform: "scaleX(1.5)",
          }}
        />
        <div 
          className="absolute bottom-0 left-[-20%] w-[70%] h-24 bg-[#d0e8f0]"
          style={{
            borderRadius: "50% 50% 0 0 / 60px 60px 0 0",
          }}
        />
        <div 
          className="absolute bottom-0 right-[-10%] w-[60%] h-28 bg-[#d0e8f0]"
          style={{
            borderRadius: "50% 50% 0 0 / 80px 80px 0 0",
          }}
        />
      </div>

      {/* Campfire */}
      <div className="absolute bottom-[12%] left-1/2 transform -translate-x-1/2">
        {/* Fire glow */}
        <div 
          className="absolute w-40 h-40 rounded-full -top-10 -left-10"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.6) 0%, rgba(255,140,0,0.3) 40%, transparent 70%)",
            animation: "glow 2s ease-in-out infinite",
            filter: "blur(10px)",
          }}
        />
        
        {/* Fire logs */}
        <div className="relative z-10">
          <div className="absolute bottom-0 left-[-30px] w-20 h-4 bg-[#4a3728] rounded-full transform -rotate-12" />
          <div className="absolute bottom-0 left-[-10px] w-20 h-4 bg-[#5a4230] rounded-full transform rotate-6" />
          <div className="absolute bottom-2 left-[-20px] w-16 h-4 bg-[#3d2d20] rounded-full" />
        </div>

        {/* Fire flames */}
        <div 
          className="relative w-16 h-24"
          style={{
            animation: "flicker 0.5s ease-in-out infinite",
          }}
        >
          {/* Main flame */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-20 rounded-full"
            style={{
              background: "linear-gradient(to top, #ff4500 0%, #ff6b35 30%, #ffa500 60%, #ffcc00 100%)",
              filter: "blur(2px)",
              clipPath: "polygon(20% 100%, 50% 0%, 80% 100%)",
            }}
          />
          {/* Inner flame */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-12 rounded-full"
            style={{
              background: "linear-gradient(to top, #ff6600 0%, #ff9933 50%, #ffcc66 100%)",
              filter: "blur(1px)",
              clipPath: "polygon(25% 100%, 50% 0%, 75% 100%)",
            }}
          />
        </div>

        {/* Rising fire particles */}
        {fireParticles.map((particle) => (
          <FireParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Scene Characters Container */}
      <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 flex items-end gap-4">
        
        {/* German Shepherd */}
        <div className="relative">
          <div 
            className="w-20 h-24 bg-gradient-to-b from-[#4a3728] to-[#2d1f16] rounded-2xl relative"
            style={{
              clipPath: "polygon(20% 0%, 80% 0%, 100% 40%, 90% 100%, 10% 100%, 0% 40%)",
            }}
          >
            {/* Ears */}
            <div className="absolute -top-3 left-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[20px] border-b-[#2d1f16]" />
            <div className="absolute -top-3 right-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[20px] border-b-[#2d1f16]" />
            {/* Eyes */}
            <div className="absolute top-6 left-4 w-3 h-3 bg-[#1a1a1a] rounded-full" />
            <div className="absolute top-6 right-4 w-3 h-3 bg-[#1a1a1a] rounded-full" />
            {/* Nose */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-[#0d0d0d] rounded-full" />
          </div>
          {/* Body */}
          <div className="w-16 h-20 bg-gradient-to-b from-[#5a4230] to-[#3d2d20] rounded-xl -mt-4 mx-auto" />
          <p className="text-center text-white/60 text-xs mt-2">German Shepherd</p>
        </div>

        {/* Raman (You) on chair */}
        <div className="relative flex flex-col items-center">
          {/* Chair back */}
          <div className="w-24 h-32 bg-[#3d2d20] rounded-t-xl absolute bottom-8 -z-10" />
          
          {/* Person */}
          <div className="relative z-10">
            {/* Head */}
            <div className="w-14 h-16 bg-[#d4a574] rounded-full mx-auto relative">
              {/* Face */}
              <div className="absolute top-5 left-3 w-2 h-2 bg-[#1a1a1a] rounded-full" />
              <div className="absolute top-5 right-3 w-2 h-2 bg-[#1a1a1a] rounded-full" />
              <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-[#c48b5a] rounded-full" />
              {/* Hair */}
              <div className="absolute -top-2 left-0 right-0 h-6 bg-[#1a1a1a] rounded-t-full" />
            </div>
            {/* Body */}
            <div className="w-20 h-28 bg-[#2c3e50] rounded-xl -mt-2" />
            {/* Legs */}
            <div className="flex gap-2 justify-center">
              <div className="w-6 h-16 bg-[#1a252f] rounded-b-lg" />
              <div className="w-6 h-16 bg-[#1a252f] rounded-b-lg" />
            </div>
          </div>
          
          {/* Chair seat */}
          <div className="w-28 h-4 bg-[#4a3728] rounded-lg -mt-4" />
          {/* Chair legs */}
          <div className="flex gap-20">
            <div className="w-3 h-12 bg-[#3d2d20]" />
            <div className="w-3 h-12 bg-[#3d2d20]" />
          </div>
          
          <p className="text-white/80 font-semibold mt-2">Raman</p>
        </div>

        {/* Husky */}
        <div className="relative">
          <div 
            className="w-20 h-24 bg-gradient-to-b from-[#e8e8e8] to-[#b8b8b8] rounded-2xl relative"
            style={{
              clipPath: "polygon(20% 0%, 80% 0%, 100% 40%, 90% 100%, 10% 100%, 0% 40%)",
            }}
          >
            {/* Ears */}
            <div className="absolute -top-4 left-1 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[24px] border-b-[#d0d0d0]" />
            <div className="absolute -top-4 right-1 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[24px] border-b-[#d0d0d0]" />
            {/* Eyes (Husky blue eyes) */}
            <div className="absolute top-6 left-4 w-3 h-3 bg-[#4dabf7] rounded-full border-2 border-[#1a1a1a]" />
            <div className="absolute top-6 right-4 w-3 h-3 bg-[#4dabf7] rounded-full border-2 border-[#1a1a1a]" />
            {/* Nose */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-[#0d0d0d] rounded-full" />
            {/* Markings */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-[#909090]" style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }} />
          </div>
          {/* Body */}
          <div className="w-16 h-20 bg-gradient-to-b from-[#d0d0d0] to-[#a0a0a0] rounded-xl -mt-4 mx-auto" />
          <p className="text-center text-white/60 text-xs mt-2">Husky</p>
        </div>

      </div>

      {/* Content Overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center z-20 mt-[-20vh]">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            <span className="block">Raman Subedi</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg mb-2">
            AI Engineer & DevOps Specialist
          </p>
          <p className="text-lg text-white/70 drop-shadow-md">
            From the mountains of Nepal 🏔️
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-[#0a1628] rounded-full font-semibold hover:bg-white/90 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </div>
      </div>

    </section>
  );
}
