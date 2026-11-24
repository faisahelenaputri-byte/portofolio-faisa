import { ArrowDown, Mail } from 'lucide-react'
import { profile } from '../data/profile.js'

export default function Hero() {
  const words = profile.name.split(' ')
  const lines = words.length > 1 ? [words.slice(0, -1).join(' '), words[words.length - 1]] : [profile.name]
  const cutout = !profile.photoIsPlaceholder && profile.photoCutout

  return (
    <section id="beranda" aria-labelledby="judul-hero" className="relative overflow-hidden bg-lavender pt-28 md:pt-32">
      <div className="container-x grid items-end gap-6 px-5 sm:px-8 lg:grid-cols-12">
        <div className="pb-4 lg:col-span-7 lg:pb-24">
          <p className="text-lg font-semibold text-brand-700">{profile.greeting}</p>
          <h1
            id="judul-hero"
            className="mt-2 font-extrabold leading-[0.98] tracking-tight text-ink text-[clamp(2.6rem,7.2vw,5.75rem)]"
          >
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <span className="rise block" style={{ animationDelay: `${i * 0.12}s` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="mt-5 inline-block rounded-full bg-brand-600 px-5 py-2 text-base font-bold text-white sm:text-lg">
            {profile.role}
          </p>
          <p className="mt-7 max-w-xl font-display text-2xl font-bold leading-snug text-ink sm:text-[1.7rem]">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{profile.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#portofolio" className="btn btn-primary">
              Lihat proyek saya <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#kontak" className="btn btn-outline">
              <Mail size={16} aria-hidden="true" /> Hubungi saya
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] self-end lg:col-span-5 lg:max-w-none">
          <div className="relative mx-auto aspect-[10/11] w-full max-w-[480px]">
            <div
              className="blob-shape absolute inset-x-[4%] bottom-0 top-[10%] bg-brand-600"
              aria-hidden="true"
            />
            <div
              className="absolute right-[2%] top-[4%] h-16 w-16 rounded-full bg-sun sm:h-20 sm:w-20"
              aria-hidden="true"
            />
            {cutout ? (
              <div className="absolute inset-x-0 bottom-0 flex h-[96%] justify-center">
                <img
                  src={profile.photoCutout}
                  alt={profile.photoAlt}
                  width="760"
                  height="873"
                  fetchpriority="high"
                  className="photo-in h-full w-auto max-w-none"
                />
              </div>
            ) : (
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width="700"
                height="933"
                fetchpriority="high"
                className="photo-in blob-shape absolute inset-x-[10%] bottom-[6%] top-[14%] h-[80%] w-[80%] object-cover object-top"
              />
            )}
            {profile.sticker && (
              <p className="absolute bottom-[16%] left-0 max-w-[11rem] -rotate-6 rounded-2xl bg-sun px-4 py-2.5 text-sm font-extrabold leading-tight text-ink shadow-[4px_4px_0_0_#1A1033] sm:max-w-[13rem] sm:text-base">
                {profile.sticker}
              </p>
            )}
            {profile.photoIsPlaceholder && (
              <span className="placeholder-badge absolute bottom-3 right-3">Foto placeholder</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
