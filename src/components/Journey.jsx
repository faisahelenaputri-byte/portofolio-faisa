import { journey } from '../data/journey.js'
import SectionHeading from './SectionHeading.jsx'

export default function Journey() {
  return (
    <section id="perjalanan" aria-labelledby="judul-perjalanan" className="section-pad bg-lavender">
      <div className="container-x">
        <SectionHeading
          id="judul-perjalanan"
          title="Perjalanan saya"
          subtitle="Proses belajar dan pengalaman yang membentuk cara kerja saya."
        />
        <ol className="relative max-w-3xl border-l-4 border-brand-600 pl-8 sm:pl-10">
          {journey.map((j) => (
            <li key={j.title} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[2.65rem] top-1 h-5 w-5 rounded-full border-4 border-brand-600 bg-sun sm:-left-[3.15rem]"
                aria-hidden="true"
              />
              <p className="text-sm font-bold text-brand-700">{j.period}</p>
              <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">
                {j.title}
                {j.placeholder && <span className="placeholder-badge ml-2 align-middle">Contoh</span>}
              </h3>
              <p className="mt-2 max-w-xl text-lg leading-relaxed text-ink-soft">{j.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
