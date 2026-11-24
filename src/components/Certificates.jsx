import { Award, ExternalLink } from 'lucide-react'
import { certificates } from '../data/certificates.js'
import SectionHeading from './SectionHeading.jsx'

export default function Certificates() {
  if (!certificates.length) return null
  return (
    <section id="sertifikasi" aria-labelledby="judul-sertifikasi" className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          id="judul-sertifikasi"
          title="Sertifikasi"
          subtitle="Kursus dan sertifikasi yang sudah saya selesaikan."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {certificates.map((c) => (
            <li key={c.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-ink bg-paper">
                {c.image && (
                  <img src={c.image} alt={`Sertifikat ${c.title}`} loading="lazy" className="aspect-[4/3] w-full border-b-2 border-ink object-cover" />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun text-ink">
                    <Award size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-ink-soft">{[c.issuer, c.year].filter(Boolean).join(' · ')}</p>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-brand-700 underline decoration-2 underline-offset-4 hover:text-brand-500"
                    >
                      Lihat sertifikat <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
