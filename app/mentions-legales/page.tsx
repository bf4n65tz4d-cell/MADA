import Link from "next/link"

export const metadata = {
  title: "Mentions légales — MADA",
}

export default function MentionsLegales() {
  return (
    <main className="bg-[var(--black)] min-h-screen px-8 md:px-20 py-20 text-[var(--white)]">

      <Link
        href="/"
        className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-white transition-colors duration-200 mb-16"
      >
        ← Retour
      </Link>

      <h1 className="font-bebas text-5xl md:text-7xl mb-12 uppercase">Mentions légales</h1>

      <div className="flex flex-col gap-10 max-w-2xl font-inter text-sm leading-relaxed text-[var(--muted)]">

        <section>
          <h2 className="text-white text-xs tracking-[0.3em] uppercase mb-4">Éditeur du site</h2>
          <p>Make Annecy Dance Again (MADA)</p>
          <p>Collectif événementiel — Annecy, France</p>
          <p>Contact : <a href="mailto:mada.annecy.events@gmail.com" className="text-[var(--accent-rose)] hover:underline">mada.annecy.events@gmail.com</a></p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-[0.3em] uppercase mb-4">Hébergement</h2>
          <p>Vercel Inc.</p>
          <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
          <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">vercel.com</a></p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-[0.3em] uppercase mb-4">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, vidéos, logo, identité visuelle) sont la propriété exclusive de MADA et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation ou diffusion sans autorisation préalable est strictement interdite.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-[0.3em] uppercase mb-4">Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle. Aucun cookie de traçage ou outil d'analyse tiers n'est utilisé. Les seuls cookies éventuellement déposés sont strictement nécessaires au bon fonctionnement technique du site.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-[0.3em] uppercase mb-4">Responsabilité</h2>
          <p>
            MADA s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité de ces informations. MADA décline toute responsabilité pour tout dommage direct ou indirect résultant de l'utilisation de ce site.
          </p>
        </section>

        <section>
          <h2 className="text-white text-xs tracking-[0.3em] uppercase mb-4">Conception & développement</h2>
          <p>Site conçu et développé par <a href="https://novupstudio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NovUp Studio</a>.</p>
        </section>

      </div>

    </main>
  )
}
