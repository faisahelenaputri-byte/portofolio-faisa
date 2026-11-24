import { GraduationCap } from 'lucide-react'
import { profile } from '../data/profile.js'
import { education } from '../data/education.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  const [lead, ...rest] = profile.about
  return (
    <section id="tentang" aria-labelledby="judul-tentang" className="section-pad bg-paper">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading id="judul-tentang" title="Tentang saya" className="!mb-8 md:!mb-10" />
          <p className="font-display text-2xl font-semibold leading-snug text-ink sm:text-[1.7rem]">{lead}</p>
          {rest.map((p) => (
            <p key={p} className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>

        <aside aria-label="Pendidikan" className="lg:col-span-5">
          <div className="overflow-hidden rounded-[2rem] border-2 border-ink bg-white shadow-[8px_8px_0_0_#5B2EE6]">
            <div className="flex items-center gap-4 border-b-2 border-ink bg-lavender p-5">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-ink bg-brand-100">
                <img
                  src={!profile.photoIsPlaceholder && profile.photoCutout ? profile.photoCutout : profile.photo}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-display text-xl font-extrabold leading-tight">{profile.name}</p>
                <p className="text-sm font-semibold text-brand-700">{profile.role}</p>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-extrabold">
                <GraduationCap size={20} className="text-brand-600" aria-hidden="true" /> Pendidikan
              </h3>
              <ul className="mt-4 space-y-5">
                {education.map((e) => (
                  <li key={e.institution} className="border-l-4 border-brand-300 pl-4">
                    <p className="font-bold text-ink">{e.institution}</p>
                    <p className="text-ink-soft">{e.program}</p>
                    <p className="mt-0.5 text-sm font-semibold text-brand-700">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
