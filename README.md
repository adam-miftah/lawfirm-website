Website Resmi Law Firm AKB & CO

Ini adalah repositori untuk kode sumber website resmi Law Firm Abdul Kodir Batubara & CO. Proyek ini dibangun sebagai Single Page Application (SPA) menggunakan React dan Vite, serta di-style dengan Tailwind CSS.


Website ini berfungsi sebagai profil digital perusahaan, portofolio layanan, dan platform publikasi artikel hukum untuk meningkatkan visibilitas online dan menjangkau calon klien.

Tautan Langsung
Website Produksi: https://www.lawfirmakb.com

Fitur Utama
Sepenuhnya Responsif: Desain dioptimalkan untuk bekerja dengan baik di semua perangkat, dari ponsel hingga desktop.

Performa Cepat: Dibangun dengan fokus pada kecepatan muat tinggi, menggunakan teknik modern seperti lazy loading gambar, code splitting, dan aset yang dioptimalkan.

SEO-Ready: Dilengkapi dengan fondasi SEO yang kuat, termasuk:

Metadata dinamis per halaman (<title>, <meta name="description">) menggunakan react-helmet-async.

sitemap.xml untuk membantu Google mengindeks semua halaman.

robots.txt untuk memberikan instruksi pada crawler.

JSON-LD Schema Markup untuk Attorney dan LocalBusiness guna meningkatkan visibilitas di hasil pencarian.

Manajemen Konten Statis: Semua konten artikel, layanan, dan data lainnya dikelola secara terpusat di dalam folder src/data/, memungkinkan pembaruan konten yang mudah dengan melakukan deploy ulang.

Routing Sisi Klien: Navigasi yang mulus dan instan antar halaman tanpa reload, ditangani oleh react-router-dom.

Halaman Layanan per Lokasi: Halaman-halaman yang dibuat khusus untuk menargetkan kata kunci SEO lokal di wilayah Jabodetabek.

Tumpukan Teknologi (Tech Stack)
Framework: React.js (v18+)

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router DOM (v6)

Manajemen Head/SEO: React Helmet Async

Library Ikon: React Icons

Animasi (Carousel): Framer Motion

Hosting & Deployment:

Awalnya di-deploy di Hostinger (menggunakan .htaccess untuk routing).

Kemudian dimigrasikan ke Vercel untuk alur kerja CI/CD.

Domain & DNS: Dikelola melalui Hostinger.

Struktur Proyek
Proyek ini mengikuti struktur folder standar untuk aplikasi React:


/
├── public/             # Aset statis seperti gambar, favicon, sitemap.xml
├── src/
│   ├── assets/         # Aset yang diproses oleh Vite (font, gambar profil)
│   ├── components/     # Komponen React yang bisa dipakai ulang (Header, Footer, SEO, dll.)
│   ├── data/           # Data statis terpusat (articles.js, locationServices.js)
│   ├── pages/          # Komponen yang mewakili satu halaman penuh (HomePage, AboutPage, dll.)
│   ├── App.jsx         # Pengaturan routing utama
│   ├── index.css       # File CSS global
│   └── main.jsx        # Titik masuk utama aplikasi React
├── .env                # Variabel lingkungan (tidak di-commit)
├── .gitignore
├── index.html          # Template HTML utama
├── package.json
└── README.md

Persiapan & Instalasi
Untuk menjalankan proyek ini di lingkungan development lokal, ikuti langkah-langkah berikut.

Prasyarat
Node.js (v22.17.0 atau lebih baru direkomendasikan)

npm (atau package manager lain seperti pnpm/yarn)

1. Kloning Repositori
git clone [URL_REPOSITORI_ANDA]
cd lawfirm-web

2. Instal Dependensi
npm install

3. Konfigurasi Variabel Lingkungan (.env)
Buat file bernama .env di root direktori proyek dan tambahkan variabel yang diperlukan (jika ada).

# Contoh variabel
VITE_WHATSAPP_NUMBER=628111994484
VITE_EMAIL_ADDRESS=lawfirmakb@gmail.com

Menjalankan Proyek
Menjalankan Server Development
Di terminal, dari direktori root proyek:

npm run dev

Aplikasi React akan berjalan di http://localhost:5173.

Membuat Build untuk Produksi
Untuk membuat versi produksi yang dioptimalkan:

npm run build

Hasilnya akan tersedia di dalam folder dist/, yang siap untuk diunggah ke penyedia hosting.

Mengelola Konten
Semua konten artikel, layanan per lokasi, dan data lainnya dikelola secara statis di dalam folder src/data/. Setiap perubahan pada file-file di folder ini memerlukan proses build dan deploy ulang agar bisa tampil di website yang sudah online.

Proses Deployment
Proyek ini dikonfigurasi untuk dua metode deployment:

Manual (ke cPanel/Hostinger):

Jalankan npm run build.

Unggah isi dari folder dist/ ke public_html di server hosting.

Pastikan file .htaccess yang sesuai untuk SPA React sudah ada di public_html.

Otomatis (CI/CD dengan Vercel - Direkomendasikan):

Hubungkan repositori GitHub ini ke akun Vercel.

Setiap git push ke branch main akan secara otomatis memicu proses build dan deployment baru.

Atur DNS di Hostinger agar menunjuk ke server Vercel.
