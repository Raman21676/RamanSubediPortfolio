"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [showSecret, setShowSecret] = useState(false);
  const [secretInput, setSecretInput] = useState("");

  const handleSecretCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSecretInput(val);
    if (val === "10737412") {
      window.open(
        "https://drive.google.com/file/d/1nC5dcDjrJU_cCEu6EQLSnLujr3w_GKRH/view?usp=share_link",
        "_blank"
      );
      setSecretInput("");
      setShowSecret(false);
    }
  };

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
            <span className="text-foreground/70">Built with</span>
            <button
              onClick={() => setShowSecret(!showSecret)}
              className="focus:outline-none cursor-default hover:scale-110 transition-transform"
              aria-label="Heart"
            >
              <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
            </button>
            <span className="text-foreground/70">by Raman Subedi</span>
          </div>

          {showSecret && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mb-4"
            >
              <input
                type="password"
                value={secretInput}
                onChange={handleSecretCheck}
                placeholder="..."
                className="bg-transparent border-b border-white/20 text-center text-sm focus:outline-none focus:border-red-500 transition-colors w-24 text-foreground/70"
                autoFocus
              />
            </motion.div>
          )}

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
