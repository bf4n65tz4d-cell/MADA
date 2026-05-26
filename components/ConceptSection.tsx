"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const WORDS = ["Un", "duo", "de", "DJs,", "une", "équipe", "qui", "cherche", "éperdument", "à", "refaire", "danser", "Annecy."]

export default function ConceptSection() {
  const ref = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"])

  return (
    <section ref={ref} className="relative flex flex-col justify-center px-8 md:px-20 py-24 bg-[var(--black)] border-t border-white/10 overflow-hidden">

      {/* Silhouette gradient DJs en background */}
      <div className="absolute inset-0 opacity-55 pointer-events-none select-none" aria-hidden>
        <svg
          viewBox="0 0 600 1000"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="cs-sunset" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0"    stopColor="#ffc46b" />
              <stop offset="0.30" stopColor="#ff7a55" />
              <stop offset="0.62" stopColor="#e6428e" />
              <stop offset="1"    stopColor="#3b1466" />
            </linearGradient>
            <filter id="cs-mask-soft" x="-2%" y="-2%" width="104%" height="104%" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -0.299 -0.587 -0.114 0 1" result="invLum"/>
              <feGaussianBlur in="invLum" stdDeviation="1.4" result="smooth"/>
              <feComponentTransfer in="smooth" result="ramp">
                <feFuncA type="table" tableValues="0 0 0.02 0.08 0.22 0.55 0.86 0.97 1 1 1"/>
              </feComponentTransfer>
              <feMorphology in="ramp" operator="erode" radius="0.6" result="cleaned"/>
              <feGaussianBlur in="cleaned" stdDeviation="0.5"/>
            </filter>
            <mask id="cs-silhouette" maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="1000">
              <image href="/djs-sunset.jpg" width="600" height="1000" preserveAspectRatio="xMidYMid slice" filter="url(#cs-mask-soft)"/>
            </mask>
          </defs>
          <rect width="600" height="1000" fill="#0a0612"/>
          <rect width="600" height="1000" fill="url(#cs-sunset)" mask="url(#cs-silhouette)"/>
        </svg>
      </div>
      {/* Fondu gauche et bas pour intégration */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.2) 100%)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none" />

      {/* Ligne animée au scroll */}
      <motion.div
        style={{ width: lineWidth }}
        className="relative z-10 h-px bg-[var(--accent-rose)] mb-10 origin-left"
      />

      {/* Texte mot par mot */}
      <p ref={textRef} className="relative z-10 font-bebas text-[clamp(2.5rem,8vw,7rem)] leading-[1.05] uppercase max-w-5xl">
        {WORDS.map((word, i) => {
          const isDanser  = word === "danser"
          const isRefaire = word === "refaire"
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0.15 }}
              animate={inView ? {
                opacity: 1,
                color: isDanser ? "var(--accent-rose)" : "var(--white)",
              } : { opacity: 0.15 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: "easeOut" }}
              className="inline-block mr-[0.25em]"
              style={{ fontStyle: isRefaire ? "italic" : "normal" }}
            >
              {word}
            </motion.span>
          )
        })}
      </p>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-10 flex flex-wrap gap-3"
      >
        {["House", "Feel Good", "Annecy", "Lac", "Montagne", "Open Air"].map((tag) => (
          <span
            key={tag}
            className="font-inter text-xs tracking-[0.2em] uppercase text-[var(--muted)] border border-white/10 px-4 py-2"
          >
            {tag}
          </span>
        ))}
      </motion.div>

    </section>
  )
}
