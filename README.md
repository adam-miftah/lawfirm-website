# Website Resmi Law Firm AKB & CO

<p align="center">
  <img src="URL_LOGO_PERUSAHAAN_ANDA_JIKA_ADA" alt="Logo Law Firm AKB & CO" width="200"/>
</p>

<p align="center">
  <strong>Profil digital modern untuk Law Firm Abdul Kodir Batubara & CO.</strong>
  <br />
  Dibangun dengan React, Vite, dan Tailwind CSS untuk performa dan SEO optimal.
</p>

<p align="center">
  <a href="https://www.lawfirmakb.com"><strong>Lihat Website »</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
  <a href="https://vercel.com/adam-miftah/lawfirm-website"><img src="https://therealsujitk-vercel-badge.vercel.app/?app=lawfirm-website" alt="Vercel status"/></a>
</p>

---

## 🏛️ Tentang Proyek

Website **Law Firm AKB & CO** adalah sebuah *Single Page Application (SPA)* yang berfungsi sebagai profil digital perusahaan, portofolio layanan, dan platform publikasi artikel hukum. Proyek ini dirancang untuk meningkatkan visibilitas online firma, menjangkau calon klien melalui optimasi mesin pencari (SEO), dan menyajikan informasi dengan antarmuka yang cepat dan modern.

Konten seperti artikel dan layanan dikelola secara statis di dalam kode untuk memastikan keamanan dan kecepatan, dengan pembaruan yang mudah dilakukan melalui proses *deployment* ulang.

---

## ✨ Fitur Unggulan

- **🚀 Performa Cepat:** Dibangun dengan Vite dan React, memastikan waktu muat yang sangat cepat menggunakan teknik modern seperti *lazy loading* dan *code splitting*.
- **📱 Desain Responsif:** Tampilan dioptimalkan untuk semua perangkat, dari ponsel hingga desktop, menggunakan Tailwind CSS.
- **🔍 SEO-Ready:** Fondasi SEO yang kuat dengan *metadata* dinamis, `sitemap.xml`, `robots.txt`, dan *JSON-LD Schema Markup* untuk meningkatkan peringkat di hasil pencarian.
- **🌐 Routing Sisi Klien:** Navigasi antar halaman yang mulus dan instan tanpa *reload*, ditangani oleh `react-router-dom`.
- **✍️ Manajemen Konten Statis:** Konten yang mudah diperbarui oleh developer dengan mengubah data terpusat di folder `src/data/`.
- **📍 Halaman Layanan Lokal:** Halaman yang ditargetkan secara spesifik untuk kata kunci SEO lokal di wilayah Jabodetabek.

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

Proyek ini dibangun menggunakan teknologi modern dan terpercaya:

| Kategori | Teknologi |
| :--- | :--- |
| **Framework** | [React.js](https://reactjs.org/) (v22.17.0) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Routing** | [React Router DOM](https://reactrouter.com/) (v6) |
| **Manajemen Head/SEO** | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| **Library Ikon** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Animasi** | [Framer Motion](https://www.framer.com/motion/) |
| **Deployment** | [Vercel](https://vercel.com/) (CI/CD) |
| **Domain & DNS** | [Hostinger](https://www.hostinger.com/) |

---

## 🚀 Memulai (Getting Started)

Untuk menjalankan proyek ini di lingkungan pengembangan lokal, ikuti langkah-langkah di bawah ini.

### Prasyarat

- **Node.js**: `v18.0` atau lebih baru.
- **Package Manager**: `npm`, `yarn`, atau `pnpm`.

### Instalasi

1.  **Kloning Repositori:**
    ```sh
    git clone [https://github.com/adam-miftah/lawfirm-website.git](https://github.com/adam-miftah/lawfirm-website.git)
    cd lawfirm-website
    ```

2.  **Instal Dependensi:**
    ```sh
    npm install
    ```

3.  **Konfigurasi Variabel Lingkungan:**
    Buat file `.env` di direktori utama dan salin konten dari `.env.example` (jika ada).
    ```sh
    cp .env.example .env
    ```
    Isi variabel yang diperlukan:
    ```env
    VITE_WHATSAPP_NUMBER=628111994484
    VITE_EMAIL_ADDRESS=lawfirmakb@gmail.com
    ```

4.  **Jalankan Server Development:**
    ```sh
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:5173`.

### Perintah Lainnya

-   **Membuat Build untuk Produksi:**
    ```sh
    npm run build
    ```
    Hasilnya akan tersedia di dalam folder `dist/`.

---

## 📁 Struktur Proyek

Struktur folder proyek ini mengikuti praktik terbaik untuk aplikasi React modern.


/
├── public/             # Aset statis (favicon, sitemap.xml, robots.txt)
├── src/
│   ├── assets/         # Aset yang diproses Vite (font, gambar)
│   ├── components/     # Komponen React yang dapat digunakan kembali
│   ├── data/           # Data statis terpusat (artikel, layanan, dll.)
│   ├── pages/          # Komponen yang mewakili halaman penuh
│   ├── App.jsx         # Pengaturan routing utama
│   ├── index.css       # File CSS global
│   └── main.jsx        # Titik masuk utama aplikasi
├── .gitignore
├── index.html
├── package.json
└── README.md


---

## 🚀 Proses Deployment

Proyek ini direkomendasikan untuk di-*deploy* menggunakan Vercel untuk alur kerja CI/CD yang mulus.

1.  Hubungkan repositori GitHub ini ke akun Vercel Anda.
2.  Konfigurasikan variabel lingkungan di pengaturan proyek Vercel.
3.  Setiap `git push` ke *branch* `main` akan secara otomatis memicu proses *build* dan *deployment* baru.
4.  Atur DNS di Hostinger agar menunjuk ke server Vercel.

---

## 🤝 Berkontribusi

Kontribusi sangat kami hargai! Jika Anda memiliki ide untuk perbaikan atau menemukan bug, silakan buat *issue* atau *pull request*.

1.  **Fork** repositori ini.
2.  Buat *branch* baru (`git checkout -b fitur/NamaFitur`).
3.  *Commit* perubahan Anda (`git commit -m 'Menambahkan fitur X'`).
4.  *Push* ke *branch* Anda (`git push origin fitur/NamaFitur`).
5.  Buat **Pull Request** baru.

---

## 📧 Kontak

Adam Miftahul Falah – [adammiftah196@gmail.com](mailto:adammiftah196@gmail.com)

Tautan Proyek: [https://github.com/adam-miftah/lawfirm-website](https://github.com/adam-miftah/lawfirm-website)
