"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Snowflake {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export default function SnowEffect() {
  const snowflakes = useMemo<Snowflake[]>(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 5 + Math.random() * 10,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.7,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${flake.x}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
          }}
          initial={{ y: -20, x: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(flake.id) * 30, 0],
          }}
          transition={{
            y: {
              duration: flake.duration,
              repeat: Infinity,
              ease: "linear",
              delay: flake.delay,
            },
            x: {
              duration: flake.duration * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: flake.delay,
            },
          }}
        />
      ))}

      {/* Additional near snowflakes for depth */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`near-${i}`}
          className="absolute bg-white rounded-full blur-[1px]"
          style={{
            left: `${Math.random() * 100}%`,
            width: 6 + Math.random() * 4,
            height: 6 + Math.random() * 4,
            opacity: 0.4 + Math.random() * 0.4,
          }}
          initial={{ y: -30, x: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, (Math.random() - 0.5) * 50, 0],
          }}
          transition={{
            y: {
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            },
            x: {
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
}
