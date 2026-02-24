"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AuroraBorealis from "./AuroraBorealis";
import SnowEffect from "./SnowEffect";
import CampfireAnimation from "./CampfireAnimation";

export default function HeroNorwegianScene() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Norwegian Winter Landscape */}
      <div className="absolute inset-0">
        <Image
          src="/Raman-background.png"
          alt="Norwegian Winter Night"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Aurora Borealis Effect */}
      <AuroraBorealis />

      {/* Snow Effect */}
      <SnowEffect />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        {/* Header Text */}
        <div className="pt-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
            >
              <span className="block">Hello, I&apos;m</span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-300"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Raman Subedi
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-light"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              AI Engineer & DevOps Specialist from Nepal
            </motion.p>
          </motion.div>
        </div>

        {/* Scene Elements - Person with Dogs and Campfire */}
        <div className="relative flex-1 flex items-end justify-center pb-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row items-end justify-between gap-4">
              {/* Campfire - Left/Center */}
              <motion.div
                className="absolute left-[5%] md:left-[15%] bottom-[5%] md:bottom-[10%] z-20 scale-75 md:scale-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <CampfireAnimation />
              </motion.div>

              {/* Person with Dogs - Right Side */}
              <motion.div
                className="relative z-10 ml-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                <div className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px]">
                  <Image
                    src="/Raman-2dogs.png"
                    alt="Raman with German Shepherd and Husky"
                    width={550}
                    height={825}
                    className="w-full h-auto object-contain"
                    priority
                  />

                  {/* Fire Glow Reflection on Person */}
                  <motion.div
                    className="absolute bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse, rgba(255, 120, 0, 0.3) 0%, transparent 70%)",
                      filter: "blur(30px)",
                    }}
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Dog Names Tooltip */}
                <motion.div
                  className="absolute -top-4 right-[20%] bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  <span className="text-white/80 text-xs sm:text-sm">My loyal companions</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-white/70 text-sm font-light tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-white/70 rounded-full"
                animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-20" />
    </section>
  );
}
