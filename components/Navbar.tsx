"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[var(--brand-bg)] border-b border-[var(--brand-accent)]">
      {/* TODO: Replace with real logo from public/ */}
      <div className="text-xl font-bold tracking-tight text-[var(--brand-primary)]">
        Logo
      </div>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--brand-primary)] text-[var(--brand-bg)] transition-opacity hover:opacity-90"
      >
        Nous contacter
      </motion.a>
    </nav>
  );
}
