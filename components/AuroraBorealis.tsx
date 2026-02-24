"use client";

import { motion } from "framer-motion";

export default function AuroraBorealis() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora Layer 1 - Green */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[60%]"
        style={{
          background: `
            linear-gradient(180deg, 
              transparent 0%,
              rgba(0, 255, 128, 0.15) 20%,
              rgba(0, 200, 100, 0.25) 40%,
              rgba(50, 255, 150, 0.2) 60%,
              transparent 100%
            )
          `,
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-10%", "10%", "-10%"],
          scaleY: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora Layer 2 - Blue-Green */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[50%]"
        style={{
          background: `
            linear-gradient(180deg, 
              transparent 0%,
              rgba(0, 255, 200, 0.2) 30%,
              rgba(0, 150, 255, 0.15) 50%,
              rgba(100, 255, 200, 0.1) 70%,
              transparent 100%
            )
          `,
          filter: "blur(60px)",
        }}
        animate={{
          x: ["5%", "-15%", "5%"],
          scaleY: [1.1, 0.9, 1.1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Aurora Layer 3 - Purple-Green */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[45%]"
        style={{
          background: `
            linear-gradient(180deg, 
              transparent 0%,
              rgba(150, 255, 100, 0.12) 25%,
              rgba(100, 200, 255, 0.18) 45%,
              rgba(200, 255, 150, 0.1) 65%,
              transparent 100%
            )
          `,
          filter: "blur(50px)",
        }}
        animate={{
          x: ["-5%", "15%", "-5%"],
          scaleY: [0.9, 1.3, 0.9],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Aurora Curtain Effect - Left */}
      <motion.div
        className="absolute top-0 left-[10%] w-[30%] h-[55%]"
        style={{
          background: `
            linear-gradient(135deg, 
              transparent 0%,
              rgba(0, 255, 150, 0.3) 50%,
              transparent 100%
            )
          `,
          filter: "blur(30px)",
          transformOrigin: "top",
        }}
        animate={{
          skewX: [-5, 5, -5],
          scaleY: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora Curtain Effect - Right */}
      <motion.div
        className="absolute top-0 right-[20%] w-[25%] h-[50%]"
        style={{
          background: `
            linear-gradient(225deg, 
              transparent 0%,
              rgba(100, 255, 200, 0.25) 50%,
              transparent 100%
            )
          `,
          filter: "blur(35px)",
          transformOrigin: "top",
        }}
        animate={{
          skewX: [5, -5, 5],
          scaleY: [1.1, 0.9, 1.1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Stars in the sky */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
