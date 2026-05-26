"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import MadaLogo from "./MadaLogo"

function IconSpeakerOn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
  )
}

function IconSpeakerOff() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  )
}

export default function Hero() {
  const ref      = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onPlay  = () => setIsPlaying(true)
    const onStop  = () => setIsPlaying(false)
    audio.addEventListener("play",    onPlay)
    audio.addEventListener("playing", onPlay)
    audio.addEventListener("pause",   onStop)
    audio.addEventListener("ended",   onStop)
    audio.addEventListener("waiting", onStop)
    return () => {
      audio.removeEventListener("play",    onPlay)
      audio.removeEventListener("playing", onPlay)
      audio.removeEventListener("pause",   onStop)
      audio.removeEventListener("ended",   onStop)
      audio.removeEventListener("waiting", onStop)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const logoScale      = useTransform(scrollYProgress, [0, 0.6], [1, 1.18])
  const logoOpacity    = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const taglineY       = useTransform(scrollYProgress, [0, 0.5], [0, -40])
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  function toggleSound() {
    const next = !isMuted
    if (audioRef.current) {
      if (next) {
        audioRef.current.pause()
      } else {
        audioRef.current.volume = 0.6
        audioRef.current.play().catch(() => {})
      }
    }
    setIsMuted(next)
  }

  return (
    <section ref={ref} className="relative h-[120vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--black)]">

        {/* Audio */}
        <audio ref={audioRef} src="/hero-audio.mp3" loop preload="none" />

        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          autoPlay
          muted
          loop
          playsInline
          src="/hero-bg.mp4"
        />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-[var(--black)]/50 z-[1]" />

        {/* Fondu bas vers le noir */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0A0A0A] z-[2]" />

        {/* Logo + tagline */}
        <motion.div
          style={{ scale: logoScale, opacity: logoOpacity }}
          className="relative z-10 flex flex-col items-center gap-3 w-full"
        >
          <img
            src="/logo-transparent.png"
            alt="MADA"
            className={`logo-hero${isPlaying ? " is-playing" : ""}`}
            style={{ width: "min(72vw, 520px)" }}
            draggable={false}
          />

          <motion.p
            style={{ y: taglineY, opacity: taglineOpacity }}
            className="font-inter text-[var(--muted)] text-[11px] uppercase tracking-[0.42em] w-[min(72vw,520px)] whitespace-nowrap text-center"
          >
            Make Annecy Dance Again
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>

        {/* Bouton son */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          onClick={toggleSound}
          className="absolute bottom-10 right-6 z-10 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors duration-200"
          aria-label={isMuted ? "Activer le son" : "Couper le son"}
        >
          {isMuted ? <IconSpeakerOff /> : <IconSpeakerOn />}
          <span>{isMuted ? "Wanna Vibe?" : "Mute"}</span>
        </motion.button>

      </div>
    </section>
  )
}
