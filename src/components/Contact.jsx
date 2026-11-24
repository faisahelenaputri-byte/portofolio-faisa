import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <section id="kontak" aria-labelledby="judul-kontak" className="on-dark relative overflow-hidden bg-brand-600 px-5 py-20 text-white sm:px-8 md:py-28">
      <div className="blob-shape pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 bg-brand-700" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-10 top-10 h-24 w-24 rounded-full bg-sun" aria-hidden="true" />
      <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 id="judul-kontak" className="text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[1] tracking-tight">
            Mari terhubung.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
            Punya pertanyaan, ide, atau sekadar ingin menyapa? Kirim email, saya akan membalas secepatnya.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 lg:col-span-5">
          <a href={`mailto:${profile.email}`} className="btn btn-sun !px-6 !py-4 !text-base">
            <Mail size={20} aria-hidden="true" /> {profile.email}
          </a>
          <div className="flex flex-wrap gap-3">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                <Github size={18} aria-hidden="true" /> GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                <Linkedin size={18} aria-hidden="true" /> LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
