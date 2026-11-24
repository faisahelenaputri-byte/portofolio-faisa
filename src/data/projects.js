// Proyek diambil dari CV. Field bernilai null/kosong disembunyikan otomatis.
// Gambar: taruh di public/assets/projects/ lalu ubah field `image`.
// Isi `github` / `demo` dengan URL asli, atau biarkan null agar tombolnya tidak tampil.
export const projects = [
  {
    id: 'dfour-laundry',
    placeholder: false,
    title: "D'four Laundry's Smart System",
    summary:
      'Sistem manajemen laundry berbasis web untuk merapikan operasional bisnis laundry, dengan pengelolaan data pelanggan, pemrosesan pesanan, dan pelacakan pesanan.',
    image: '/assets/projects/dfour-laundry.jpg',
    imageAlt: "Halaman beranda sistem D'four Laundry",
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    status: null, // isi mis. 'Selesai' / 'Sedang dikembangkan'
    role: null, // isi peranmu di proyek ini
    features: [
      'Manajemen data pelanggan (CRUD)',
      'Modul pemrosesan pesanan',
      'Pelacakan pesanan real-time untuk pelanggan',
      'Tampilan responsif untuk desktop dan mobile',
    ],
    github: null,
    demo: null,
  },
  {
    id: 'ppdb-smp',
    placeholder: false,
    title: 'Sistem PPDB SMP di Kota Padang',
    kind: 'Proyek kelompok akademik', // label kecil di kartu; kosongkan (null) untuk menyembunyikan
    summary:
      'Sistem penerimaan peserta didik baru (PPDB) berbasis web untuk SMP di Kota Padang. Saya terlibat dalam pengembangannya bersama tim.',
    image: '/assets/projects/ppdb-smp.jpg',
    imageAlt: 'Halaman beranda sistem PPDB SMP 2026',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    status: null,
    role: 'Anggota tim pengembang',
    features: [
      'Mengembangkan fitur sistem berdasarkan kebutuhan proyek',
      'Berkolaborasi dengan anggota tim selama proses pengembangan',
    ],
    github: null,
    demo: null,
  },
]
