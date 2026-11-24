import { Code2, Database, Layout, Server, Wrench } from 'lucide-react'
import { skillGroups } from '../data/skills.js'
import SectionHeading from './SectionHeading.jsx'

const icons = { Code2, Layout, Database, Wrench, Server }

export default function Skills() {
  return (
    <section id="keahlian" aria-labelledby="judul-keahlian" className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          id="judul-keahlian"
          title="Keahlian"
          subtitle="Teknologi dan tools yang saya gunakan."
        />
        <dl className="border-t-2 border-ink">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon] || Code2
            return (
              <div
                key={g.title}
                className="grid gap-4 border-b border-ink/15 py-7 md:grid-cols-[17rem_1fr] md:items-center"
              >
                <dt className="flex items-center gap-3 font-display text-xl font-extrabold">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lavender text-brand-700">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  {g.title}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2.5">
                    {g.items.map((it) => (
                      <li key={it} className="chip !text-base">
                        {it}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
