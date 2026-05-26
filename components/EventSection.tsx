"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const EVENT = {
  label:    "Prochain événement",
  name:     "Soirée MADA",
  date:     "Sam. 16.08.25",
  lieu:     "Le Pêcheur · Veyrier du Lac",
  horaire:  "18h — 23h",
  instagram: "https://www.instagram.com/mada__events/",
  youtube:   "https://www.youtube.com/@mada_event",
}

function IconInstagram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z"/>
    </svg>
  )
}

function SoonModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm px-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#0f0f0f] border border-white/10 w-full max-w-sm p-10 flex flex-col items-center text-center"
          onClick={e => e.stopPropagation()}
        >
          {/* Ligne rose décorative */}
          <div className="w-8 h-px bg-[var(--accent-rose)] mb-8" />

          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4">
            Réservations
          </p>

          <h2 className="font-bebas text-[5rem] leading-none text-white uppercase mb-4">
            Bientôt
          </h2>

          <p className="font-inter text-sm text-[var(--muted)] leading-relaxed mb-10">
            Les réservations ouvriront prochainement.<br/>Suis-nous sur Instagram pour ne rien rater.
          </p>

          <a
            href={EVENT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--accent-rose)] hover:text-white transition-colors duration-200 mb-8"
          >
            @mada__events
          </a>

          <button
            onClick={onClose}
            className="absolute top-4 right-5 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors duration-200"
          >
            Fermer
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const reveal = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function EventSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px" })
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {modalOpen && <SoonModal onClose={() => setModalOpen(false)} />}

      <section ref={ref} className="flex flex-col justify-center px-8 md:px-20 py-16 bg-[var(--black)] border-t border-white/10">

        <motion.span
          custom={0} variants={reveal} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-inter text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6"
        >
          {EVENT.label}
        </motion.span>

        <motion.h2
          custom={1} variants={reveal} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="font-bebas text-[clamp(3rem,16vw,9rem)] leading-none text-[var(--white)] uppercase"
        >
          {EVENT.name}
        </motion.h2>

        <div className="mt-8 flex flex-col gap-6">

          <motion.div custom={2} variants={reveal} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <p className="font-inter text-[var(--muted)] text-xs tracking-[0.2em] uppercase mb-2">Date</p>
            <p className="font-bebas text-4xl text-[var(--accent-blue)] tracking-wide">{EVENT.date}</p>
          </motion.div>

          <motion.div custom={3} variants={reveal} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <p className="font-inter text-[var(--muted)] text-xs tracking-[0.2em] uppercase mb-2">Lieu</p>
            <p className="font-bebas text-4xl text-[var(--accent-rose)] tracking-wide">{EVENT.lieu}</p>
          </motion.div>

          <motion.div custom={4} variants={reveal} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <p className="font-inter text-[var(--muted)] text-xs tracking-[0.2em] uppercase mb-2">Horaire</p>
            <p className="font-bebas text-4xl text-[var(--white)] tracking-wide">{EVENT.horaire}</p>
          </motion.div>

        </div>

        {/* CTA Réserver */}
        <motion.div
          custom={5} variants={reveal} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-10"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="group relative inline-flex items-center gap-3 bg-[var(--accent-rose)] px-7 py-4 font-mono text-[11px] tracking-[0.25em] uppercase text-white overflow-hidden hover:bg-white hover:text-[#0A0A0A] transition-colors duration-300"
          >
            <span className="relative z-10">Réserver ma place</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div
          custom={6} variants={reveal} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-8 flex items-center gap-5"
        >
          <a
            href={EVENT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 text-white/50 hover:text-[var(--accent-rose)] transition-colors duration-200"
            aria-label="Instagram"
          >
            <IconInstagram />
          </a>

          <a
            href={EVENT.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 text-white/50 hover:text-[var(--accent-rose)] transition-colors duration-200"
            aria-label="YouTube"
          >
            <IconYouTube />
          </a>

          {/* TikTok — bientôt */}
          <div className="flex flex-col items-center gap-1 opacity-30">
            <span className="flex items-center justify-center w-11 h-11 text-white">
              <IconTikTok />
            </span>
            <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-white/60">bientôt</span>
          </div>

        </motion.div>

      </section>
    </>
  )
}
