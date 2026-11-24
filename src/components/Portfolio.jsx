import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import { projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'

function ProjectModal({ project, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dlg = ref.current
    if (project && dlg && !dlg.open) dlg.showModal()
    if (!project && dlg?.open) dlg.close()
  }, [project])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="judul-modal"
      className="w-[calc(100%-2rem)] max-w-2xl rounded-[2rem] border-2 border-ink p-0 backdrop:bg-ink/70"
    >
      {project && (
        <div className="max-h-[85vh] overflow-y-auto">
          <img src={project.image} alt={project.imageAlt} className="aspect-[1200/552] w-full border-b-2 border-ink object-cover object-top" />
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 id="judul-modal" className="text-2xl font-extrabold leading-tight">{project.title}</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup detail proyek"
                className="rounded-full p-2 hover:bg-brand-50"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {project.kind && <span className="chip">{project.kind}</span>}
              {project.status && <span className="chip">Status: {project.status}</span>}
              {project.placeholder && <span className="placeholder-badge">Proyek contoh</span>}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{project.summary}</p>

            {project.role && (
              <>
                <h4 className="mt-6 text-lg font-extrabold">Peran saya</h4>
                <p className="mt-1 text-ink-soft">{project.role}</p>
              </>
            )}

            {project.features?.length > 0 && (
              <>
                <h4 className="mt-6 text-lg font-extrabold">Sorotan proyek</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-ink-soft marker:text-brand-500">
                  {project.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </>
            )}

            {project.tech.length > 0 && (
              <>
                <h4 className="mt-6 text-lg font-extrabold">Teknologi</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => <li key={t} className="chip">{t}</li>)}
                </ul>
              </>
            )}

            {(project.github || project.demo) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <Github size={16} aria-hidden="true" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} aria-hidden="true" /> Lihat demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}

export default function Portfolio() {
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="portofolio"
      aria-labelledby="judul-portofolio"
      className="on-dark section-pad bg-ink text-white"
    >
      <div className="container-x">
        <SectionHeading
          light
          id="judul-portofolio"
          title="Portofolio"
          subtitle="Proyek-proyek yang saya kerjakan."
        />

        <div className="space-y-20 md:space-y-28">
          {projects.map((p, i) => (
            <article key={p.id} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="overflow-hidden rounded-2xl border-2 border-white bg-white shadow-[10px_10px_0_0_#8F68F7]">
                  <div className="flex items-center gap-2 border-b-2 border-ink bg-lavender px-4 py-2.5" aria-hidden="true">
                    <span className="h-3 w-3 rounded-full bg-ink/80" />
                    <span className="h-3 w-3 rounded-full bg-sun" />
                    <span className="h-3 w-3 rounded-full bg-brand-500" />
                  </div>
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      width="1200"
                      height="552"
                      className="aspect-[1200/552] w-full object-cover object-top"
                    />
                    {p.placeholder && <span className="placeholder-badge absolute left-3 top-3">Contoh</span>}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                {p.kind && (
                  <p className="inline-block rounded-full bg-sun px-3 py-1 text-sm font-bold text-ink">{p.kind}</p>
                )}
                <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{p.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-white/75">{p.summary}</p>
                {p.tech.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => <li key={t} className="chip-dark">{t}</li>)}
                  </ul>
                )}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button type="button" onClick={() => setSelected(p)} className="btn btn-sun">
                    Lihat detail
                  </button>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub ${p.title}`} className="rounded-full p-2.5 text-white/80 hover:bg-white/10 hover:text-white">
                      <Github size={22} />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`Demo ${p.title}`} className="rounded-full p-2.5 text-white/80 hover:bg-white/10 hover:text-white">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
