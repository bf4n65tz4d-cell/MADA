import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-8 md:px-20 py-12 bg-[var(--black)] flex flex-col gap-6">

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <img
          src="/logo-transparent.png"
          alt="MADA"
          style={{ width: 140 }}
          draggable={false}
        />

        <div className="flex flex-col gap-1 md:text-right">
          <p className="font-inter text-xs text-[var(--muted)] tracking-widest uppercase">
            Make Annecy Dance Again
          </p>
          <p className="font-inter text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} MADA
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 pt-4">
        <Link
          href="/mentions-legales"
          className="font-inter text-[10px] text-[var(--muted)] tracking-[0.2em] uppercase hover:text-white transition-colors duration-200"
        >
          Mentions légales
        </Link>
      </div>

    </footer>
  )
}
