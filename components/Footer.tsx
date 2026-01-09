"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-foreground/70">Built with Love</span>
            <span className="text-foreground/70">by Raman Subedi</span>
          </div>


          <p className="text-foreground/50 text-sm mb-4">
            Next.js • TypeScript • Tailwind CSS • Framer Motion
          </p>
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} ramansubedi.com • All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
