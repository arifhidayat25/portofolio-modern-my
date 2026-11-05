<div align="center">

# 🚀 Achmad Arif Hidayat — Modern Interactive Portfolio

<p align="center">
  <strong>Website Portofolio Pribadi Interaktif, Responsif, dan Berperforma Tinggi</strong><br>
  Dibangun dengan arsitektur modern menggunakan React 19, TypeScript, dan Vite.
</p>

[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange?style=for-the-badge&logo=oxc&logoColor=white)](https://oxc.rs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00d26a?style=for-the-badge)](LICENSE)

[🌐 Live Demo](#) • [✨ Fitur Utama](#-fitur-utama) • [🛠️ Tech Stack](#️-tech-stack) • [🚀 Panduan Memulai](#-panduan-instalasi--menjalankan) • [📁 Struktur Proyek](#-struktur-direktori)

---

</div>

## 📌 Tentang Proyek

Website portofolio ini dirancang khusus untuk merepresentasikan profil profesional **Achmad Arif Hidayat** — Sarjana Sistem Informasi dari Universitas Gajayana dan praktisi IT (Staff IT ITSK Dr. Soepraoen) dengan spesialisasi di bidang **Web Development**, **Server & IT Infrastructure**, serta **Network & System Administration**.

Portofolio ini mengedepankan estetika modern bertema *Fresh Emerald/Mint*, tipografi bersih (*Plus Jakarta Sans* & *JetBrains Mono*), performa web optimal (*Core Web Vitals*), serta dukungan **Dwibahasa (Bilingual: Bahasa Indonesia & English)** secara instan tanpa reload halaman.

---

## ✨ Fitur Utama

- 🌐 **Dukungan Dwibahasa Penuh (ID / EN)**:
  - Sistem i18n berbasis React Context (`LanguageContext`) dengan penyimpanan preferensi di `localStorage`.
  - Transisi teks instan pada semua komponen dan label navigasi.
  - Penyesuaian otomatis atribut `html[lang]` untuk SEO dan aksesibilitas.
- ⚡ **Optimasi Performa & Core Web Vitals (LCP & CLS)**:
  - *Preloading* responsif gambar hero utama berbasis format WebP generasi baru.
  - Pemuatan font Google Fonts non-render-blocking menggunakan teknik swap print-to-all.
  - Pemisahan bundle cerdas (*manual chunking* di Vite) untuk vendor React dan Lucide Icons.
- 🎨 **Desain Modern & Responsif**:
  - Palet warna eksklusif *Mint & Emerald Green* dengan aksen glassmorphism dan bayangan lembut.
  - Desain sepenuhnya adaptif untuk perangkat mobile, tablet, laptop, dan monitor desktop lebar.
  - Navigasi navbar pintar dengan pelacak posisi scroll (*scroll-spy* otomatis).
- 🧩 **Komponen Interaktif Lengkap**:
  - **Hero Section**: Ringkasan profil, highlight badge floating, call-to-action (Unduh CV & Kontak), dan ringkasan metrik statistik.
  - **About Me**: Penjelasan profil mendalam, pilar keahlian teknis (Troubleshooting, Server, Web Dev, Database), dan tombol hubungi langsung.
  - **Education**: Linimasa riwayat akademik, fokus studi, dan pencapaian.
  - **Experience**: Rekam jejak pengalaman kerja profesional beserta daftar teknologi yang diterapkan.
  - **Skills & Services**: Kartu layanan spesialisasi serta filter interaktif kategori keahlian teknis dengan indikator kemahiran (*proficiency bar*).
  - **Projects Showcase**: Galeri proyek kurasi dengan filter kategori, detail proyek, tautan live demo, dan repositori GitHub.
  - **Contact & Social Connect**: Formulir pesan interaktif dengan validasi input, status pengiriman, serta direct link ke LinkedIn, GitHub, Instagram, WhatsApp, dll.
  - **Floating Scroll-To-Top**: Tombol pintas kembali ke atas dengan animasi smooth.

---

## 🛠️ Tech Stack

### Frontend & Core
- **Framework**: [React 19](https://react.dev/) (Hooks, Context API, Modern React Architecture)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing & Interfaces)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/) (HMR super cepat, code splitting, target ESNext)
- **Icons**: [Lucide React](https://lucide.dev/)

### Styling & Design System
- **CSS Architecture**: Vanilla CSS Modular dengan CSS Custom Properties (`--primary-green`, `--bg-hero-mint`, dll.)
- **Typography**: 
  - `Plus Jakarta Sans` (Teks utama & judul)
  - `JetBrains Mono` (Elemen teknis & badges)
- **Animations**: CSS transitions dengan kurva easing `cubic-bezier`.

### Tooling & Quality Assurance
- **Linter**: [Oxlint](https://oxc.rs/) (Rust-based ultra-fast JavaScript/TypeScript linter)
- **Type Checking**: TypeScript Compiler (`tsc -b`)

---

## 📁 Struktur Direktori

```text
new-porto-26-10/
├── public/                     # Aset statis publik
│   ├── projects/              # Gambar tangkapan layar proyek
│   ├── cv-achmad-arif.pdf     # Berkas Curriculum Vitae (PDF)
│   ├── kacamata1.webp         # Foto hero desktop (WebP terkompresi)
│   ├── kacamata1-mobile.webp  # Foto hero mobile (WebP terkompresi)
│   ├── favicon.svg            # Favicon browser
│   └── ...
├── src/
│   ├── assets/                # Aset internal aplikasi
│   ├── components/            # Komponen UI modular
│   │   ├── About.tsx          # Section Tentang Saya (+ About.css)
│   │   ├── Contact.tsx        # Section Kontak & Form (+ Contact.css)
│   │   ├── Education.tsx      # Section Riwayat Pendidikan (+ Education.css)
│   │   ├── Experience.tsx     # Section Pengalaman Kerja (+ Experience.css)
│   │   ├── Footer.tsx         # Section Footer (+ Footer.css)
│   │   ├── Hero.tsx           # Section Hero / Beranda (+ Hero.css)
│   │   ├── Navbar.tsx         # Navigasi & Bahasa (+ Navbar.css)
│   │   ├── Projects.tsx       # Galeri Proyek & Filter (+ Projects.css)
│   │   ├── ScrollToTop.tsx    # Tombol pintas Scroll ke Atas (+ ScrollToTop.css)
│   │   ├── Skills.tsx         # Section Keahlian Teknis & Layanan (+ Skills.css)
│   │   └── SocialIcons.tsx    # Komponen helper ikon sosial media
│   ├── context/
│   │   └── LanguageContext.tsx# Provider state dwibahasa (ID / EN)
│   ├── data/
│   │   └── portfolioData.ts   # Sumber data konten terpusat (Bilingual ID/EN)
│   ├── types/
│   │   └── index.ts           # Definisi interface TypeScript
│   ├── App.tsx                # Komponen Root & pengaturan ScrollSpy
│   ├── App.css                # Style global aplikasi
│   ├── index.css              # Design system tokens, variabel warna & utilitas
│   └── main.tsx               # Entry point aplikasi React
├── index.html                 # HTML template, preloads & meta SEO
├── package.json               # Konfigurasi dependensi dan scripts npm
├── tsconfig.json              # Konfigurasi TypeScript
├── vite.config.ts             # Konfigurasi Vite & rollup manual chunks
└── README.md                  # Dokumentasi proyek
```

---

## 🚀 Panduan Instalasi & Menjalankan

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di lingkungan lokal Anda:

### 1. Prasyarat
Pastikan sistem Anda telah terpasang:
- [Node.js](https://nodejs.org/) (versi **18.x** atau yang lebih baru direkomendasikan)
- Package manager: `npm` (atau `yarn` / `pnpm`)

### 2. Kloning Repositori
```bash
git clone https://github.com/arifhidayat25/portofolio-modern-my.git
cd "new porto 26-10"
```

### 3. Instal Dependensi
```bash
npm install
```

### 4. Jalankan Development Server
```bash
npm run dev
```
Setelah server aktif, buka browser Anda di alamat default:
```text
http://localhost:5173
```

### 5. Skrip yang Tersedia

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan Vite development server dengan Hot Module Replacement (HMR). |
| `npm run build` | Menjalankan pengecekan tipe TypeScript (`tsc`) dan melakukan kompilasi file produksi ke folder `dist/`. |
| `npm run preview` | Menjalankan preview lokal dari hasil kompilasi produksi di folder `dist/`. |
| `npm run lint` | Menjalankan linting kode kilat menggunakan `oxlint`. |

---

## ⚙️ Kustomisasi Konten & Tampilan

### Mengubah Data & Konten Portofolio
Seluruh teks, riwayat pendidikan, pengalaman, proyek, dan kontak dikelola secara terpusat pada file:
```text
src/data/portfolioData.ts
```
File ini memuat dua objek bahasa utama:
- `portfolioContent.id` (Bahasa Indonesia)
- `portfolioContent.en` (English)

Anda dapat dengan mudah menambahkan atau memperbarui:
- **Data Pribadi**: Nama, peran, bio, statistik, email, nomor kontak, lokasi, dan URL CV.
- **Riwayat Pendidikan & Pengalaman**: Menambahkan riwayat baru ke array `educationData` dan `experienceData`.
- **Daftar Keahlian**: Menyesuaikan persentase dan kategori pada `skillsData`.
- **Proyek**: Menambahkan gambar proyek, tag teknologi, link demo, dan link repositori pada `projectsData`.

### Menyesuaikan Skema Warna & Tema
Seluruh token warna dan gaya visual didefinisikan dalam variabel CSS pada file:
```text
src/index.css
```
Contoh variabel utama:
```css
:root {
  --primary-green: #00d26a;         /* Warna aksen utama */
  --primary-green-dark: #00b359;    /* Hover state tombol */
  --bg-page: #f8fafc;               /* Background halaman */
  --text-dark: #0f172a;             /* Warna teks heading */
  --text-body: #475569;             /* Warna teks paragraf */
}
```

### Mengganti Foto & Berkas CV
- Letakkan foto profil baru Anda dalam format WebP di direktori `public/`.
- Letakkan berkas CV Anda dengan nama `cv-achmad-arif.pdf` (atau sesuaikan jalurnya di `portfolioData.ts`).
- Letakkan gambar proyek Anda di dalam folder `public/projects/`.

---

## 📈 Optimasi Kinerja & SEO

Proyek ini telah dikonfigurasi dengan standar performa modern:
1. **Responsive Image Preloading**: Pada `index.html`, gambar Hero di-preload secara dinamis sesuai lebar layar pengguna (`(max-width: 640px)` vs `(min-width: 641px)`) dengan prioritas `fetchpriority="high"`.
2. **Chunk Splitting**: Pada `vite.config.ts`, dependensi `react` dan `lucide-react` dipecah menjadi chunk terpisah guna memaksimalkan *caching* browser pengguna.
3. **Optimasi Font**: Font dimuat secara asynchronous tanpa memblokir rendering halaman awal (*non-render-blocking*).

---

## 👨‍💻 Profil Pengembang

**Achmad Arif Hidayat**  
*Sarjana Sistem Informasi & IT Enthusiast*

- 📍 **Lokasi**: Surabaya, Indonesia
- ✉️ **Email**: [achmadarifh25@gmail.com](mailto:achmadarifh25@gmail.com)
- 💼 **LinkedIn**: [Achmad Arif Hidayat](https://linkedin.com)
- 🐙 **GitHub**: [@arifhidayat25](https://github.com/arifhidayat25)
- 📱 **WhatsApp**: [+62 895-0660-9757](https://wa.me/6289506609757)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE). Anda bebas menggunakan, memodifikasi, dan mendistribusikan kode ini untuk keperluan personal maupun komersial.

<div align="center">
  <sub>Dibuat dengan ❤️ dan dedikasi oleh <a href="https://github.com/arifhidayat25">Achmad Arif Hidayat</a></sub>
</div>
