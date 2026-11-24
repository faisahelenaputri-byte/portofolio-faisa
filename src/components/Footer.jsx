import { profile } from '../data/profile.js'

const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#portofolio', label: 'Portofolio' },
  { href: '#sertifikasi', label: 'Sertifikasi' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Footer() {
  return (
    <footer className="on-dark bg-ink px-5 py-8 text-white/70 sm:px-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Semua hak dilindungi.</p>
        <nav aria-label="Tautan footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-semibold hover:text-sun">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
