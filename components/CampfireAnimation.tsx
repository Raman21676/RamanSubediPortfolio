"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CampfireAnimation() {
  return (
    <div className="relative w-full max-w-[400px]">
      {/* Fire Glow on Ground */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255, 100, 0, 0.4) 0%, rgba(255, 60, 0, 0.2) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fire Light Glow */}
      <motion.div
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[250px] h-[200px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255, 150, 50, 0.5) 0%, rgba(255, 80, 0, 0.2) 50%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.7, 1, 0.6, 0.7],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Fire Image */}
      <motion.div
        className="relative z-10"
        animate={{
          scale: [1, 1.02, 0.98, 1],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/Raman-campfire.png"
          alt="Campfire"
          width={400}
          height={267}
          className="w-full h-auto"
          priority
        />
      </motion.div>

      {/* Animated Flame Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[30%] left-1/2 w-[4px] h-[4px] rounded-full"
          style={{
            background: i % 2 === 0 
              ? "radial-gradient(circle, #ffaa00 0%, #ff4400 100%)" 
              : "radial-gradient(circle, #ffdd00 0%, #ff6600 100%)",
            marginLeft: `${(Math.random() - 0.5) * 80}px`,
          }}
          initial={{ 
            y: 0, 
            x: 0, 
            opacity: 1,
            scale: 1,
          }}
          animate={{ 
            y: [-20, -80 - Math.random() * 60],
            x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40],
            opacity: [1, 0],
            scale: [1, 0.2],
          }}
          transition={{
            duration: 1.5 + Math.random() * 1,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Rising Embers */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute bottom-[40%] w-[3px] h-[3px] rounded-full bg-orange-400"
          style={{
            left: `${45 + Math.random() * 10}%`,
            boxShadow: "0 0 6px 2px rgba(255, 150, 0, 0.8)",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: [-30, -120 - Math.random() * 80],
            x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Fire Flicker Overlay */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, rgba(255, 100, 0, 0.1) 0%, transparent 60%)",
          mixBlendMode: "overlay",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Heat Haze Effect */}
      <motion.div
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[200px] h-[150px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(255, 200, 100, 0.1) 0%, transparent 60%)",
          filter: "blur(15px)",
        }}
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
