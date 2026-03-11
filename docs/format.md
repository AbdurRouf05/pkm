# PROPOSAL PROGRAM KREATIVITAS MAHASISWA KEWIRAUSAHAAN

**JUDUL PROGRAM:**
“SOFTWARE AS A SERVICE-ENTERPRISE RESOURCE PLANNING: MANAJEMEN STOK DAN AKUNTANSI TERINTEGRASI USAHA MIKRO KECIL DAN MENENGAH FOOD AND BEVERAGE”

**Dosen Pengampu:** Via Lailatur Asy’ari, S.Kom., M.Kom

**Penyusun:**
- Abdur Rouf : 223140118
- Adam Paundra M : 223140110
- Ahmad Rafi Hidayatullah : 223140143
- Akmal Isyroqun Najah : 223140101

**INSTITUT TEKNOLOGI DAN BISNIS WIDYAGAMA LUMAJANG**
**PROGRAM STUDI INFORMATIKA**
**SEMESTER GANJIL 2026**

---

## DAFTAR ISI
BAB I. PENDAHULUAN
1. Latar Belakang
2. Rumusan Masalah
3. Tujuan Program
4. Luaran yang Diharapkan

BAB II. GAMBARAN UMUM RENCANA USAHA
1. Analisis Peluang Pasar
2. Keunggulan Produk dan Inovasi IPTEK
3. Strategi Monetisasi dan Keberlanjutan

BAB III. METODE PELAKSANAAN
1. Tahap 1: Analisis dan Riset Pasar (Bulan 1)
2. Tahap 2: Optimasi Fitur & UI/UX (Bulan 1-2)
3. Tahap 3: Uji Coba Lapangan & Pilot Project (Bulan 3)
4. Tahap 4: Peluncuran Resmi & Scaling (Bulan 4)

BAB IV. BIAYA DAN JADWAL KEGIATAN
1. Anggaran Biaya
2. Jadwal Kegiatan

DAFTAR PUSTAKA

---

## BAB I. PENDAHULUAN

### Latar Belakang
Perekonomian Indonesia menunjukkan resiliensi yang luar biasa di tengah dinamika global. Berdasarkan laporan Badan Pusat Statistik (BPS), ekonomi Indonesia sepanjang tahun 2024 tumbuh solid sebesar 5,03%, yang mencerminkan pemulihan daya beli masyarakat yang kuat (Badan Pusat Statistik, 2025). Pertumbuhan ini didominasi oleh konsumsi rumah tangga, di mana sektor penyediaan akomodasi dan makan minum (F&B) menjadi salah satu kontributor utama. Data Kamar Dagang dan Industri (Kadin) Indonesia mencatat bahwa sektor UMKM menyumbang 61% terhadap PDB nasional dengan serapan tenaga kerja mencapai 97% (Kadin Indonesia, 2025).

Namun, tantangan fundamental muncul di tingkat mikro operasional. Berdasarkan survei APJII, meskipun penetrasi internet mencapai 79,5%, pemanfaatan teknologi digital oleh UMKM sebagian besar terbatas pada pemasaran, sementara manajemen operasional "dapur" masih mengandalkan pencatatan konvensional (APJII, 2024). Di wilayah Lumajang, ketiadaan sistem manajemen stok dan keuangan yang terintegrasi menjadi masalah seragam bagi kedai kopi dan rumah makan skala menengah.

Ketidakterhubungan antara data penjualan dan stok fisik menyebabkan "kebocoran profit" akibat *inventory loss*. Studi Nasution *et al.* (2024) menyoroti ketidakmampuan UMKM menyajikan laporan keuangan standar (SAK EMKM) karena data persediaan tidak akurat. Selain itu, ketergantungan pada koneksi internet sering menjadi penghambat operasional kasir di daerah dengan infrastruktur jaringan yang belum stabil.

Merespons hal tersebut, kami memperkenalkan **KalibraOS**, sebuah platform SaaS (*Software-as-a-Service*) multi-tenant yang dirancang sebagai "Sistem Operasi Bisnis" kuliner. KalibraOS mengusung arsitektur **Offline-First**, menjamin operasional kasir tetap berjalan 100% lancar meski internet terputus. Platform ini juga mengintegrasikan **Generative AI** untuk membantu UMKM dalam membuat konten promosi secara instan, menjadikannya solusi digital yang komprehensif, tangguh, dan sangat adaptif bagi ekosistem UMKM di Indonesia.

### Rumusan Masalah
1. Bagaimana merancang arsitektur sistem Offline-First yang menjamin sinkronisasi data aman antara database lokal dan cloud untuk operasional UMKM?
2. Bagaimana mengintegrasikan fitur *Recipe-Intelligence* dan *Generative AI* untuk meningkatkan efisiensi stok dan efektivitas pemasaran UMKM?
3. Bagaimana strategi penetrasi pasar dan monetisasi yang efektif untuk mencapai keberlanjutan bisnis jangka panjang?

### Tujuan Program
1. Mengembangkan platform **KalibraOS** yang mengintegrasikan penjualan, stok (berbasis resep), keuangan, dan AI dalam satu ekosistem Offline-First.
2. Memvalidasi efektivitas sistem melalui *pilot project* pada unit usaha kuliner di wilayah Lumajang.
3. Membangun model bisnis startup teknologi yang memiliki skalabilitas nasional dan kemandirian finansial.

### Luaran yang Diharapkan
1. **Produk Usaha:** Aplikasi Web KalibraOS (Next.js) dengan kapabilitas Offline-First dan integrasi AI.
2. **Laporan Bisnis:** Dokumen validasi pasar, analisis HPP, dan strategi scaling.
3. **Legalitas:** Pendaftaran Hak Cipta Program Komputer.

---

## BAB II. GAMBARAN UMUM RENCANA USAHA

### Analisis Peluang Pasar
Target pasar utama (*Serviceable Obtainable Market*) KalibraOS adalah UMKM Kuliner menengah yang mengelola minimal 3 karyawan dan memerlukan pengawasan stok yang ketat. Kebutuhan akan sistem yang "anti-lemot" dan "anti-putus internet" menjadi celah pasar besar, karena mayoritas kompetitor masih berbasis 100% online cloud yang rentan terhadap gangguan sinyal.

### Keunggulan Produk dan Inovasi IPTEK
1. **Offline-First Architecture (The Reliability King):** Menggunakan Dexie.js dan IndexedDB, data transaksi tetap tersimpan di browser saat offline dan otomatis tersinkronisasi ke Supabase Cloud saat internet kembali tersedia.
2. **Recipe-Intelligence (Precision Inventory):** Pengurangan stok bahan baku (level gram/ml) secara otomatis berdasarkan resep setiap kali menu terjual, menghitung HPP secara presisi menggunakan metode *Average Weighted Cost*.
3. **Generative AI Integration:** Fitur AI Promotion Generator untuk menciptakan ide kampanye dan deskripsi menu yang kreatif guna membantu pemasaran owner.
4. **Automated Accounting:** Jurnal otomatis dari setiap transaksi penjualan dan pembelian bahan baku langsung ke Laporan Laba Rugi dan Neraca.

### Strategi Monetisasi dan Keberlanjutan
Model bisnis berbasis langganan (B2B SaaS):
- **Paket Start-Up:** Fokus pada fitur kasir dan stok dasar.
- **Paket Professional (Kalibra Pro):** Mencakup fitur AI, manajemen resep mendalam, dan multi-branch.
Struktur biaya Cloud yang efisien memastikan margin keuntungan tinggi seiring bertambahnya jumlah tenant di platform.

---

## BAB III. METODE PELAKSANAAN

### Tahap 1: Analisis dan Riset Pasar (Bulan 1)
Identifikasi kebutuhan spesifik dari 10-15 tenant potensial di wilayah strategis Lumajang untuk memetakan prioritas fitur UI/UX.

### Tahap 2: Optimasi Fitur & UI/UX (Bulan 1-2)
Penyempurnaan 15 modul inti (Penjualan, Inventaris, Keuangan, CRM, AI) menggunakan stack Next.js 15 dan Tailwind CSS untuk memastikan antarmuka yang responsif dan cepat.

### Tahap 3: Uji Coba Lapangan & Pilot Project (Bulan 3)
Implementasi sistem pada 3-5 unit usaha kuliner mitra sebagai *early adopters* untuk menguji ketahanan sinkronisasi offline-online di kondisi lapangan yang bervariasi.

### Tahap 4: Peluncuran Resmi & Scaling (Bulan 4)
Publikasi digital, demo day ke komunitas pengusaha kuliner, dan penyusunan laporan keberlanjutan usaha.

---

## BAB IV. BIAYA DAN JADWAL KEGIATAN

### Anggaran Biaya

| No | Jenis Pengeluaran | Besaran Dana (Rp) | Keterangan |
|---|---|---|---|
| 1 | Ruang Lingkup Infrastruktur Cloud | Rp 3.500.000 | Langganan Supabase Pro, Vercel Pro, dan Storage Aset (1 Tahun) |
| 2 | Lisensi & Nama Domain | Rp 1.500.000 | Domain [.id], SSL Certificate Business, dan Workspace Email Premium |
| 3 | Penggunaan API & Generative AI | Rp 1.500.000 | Credit Usage Google Gemini API, Firebase Genkit, dan AI Image API |
| 4 | Publikasi & Pemasaran Digital | Rp 1.500.000 | Meta Ads, Google Ads untuk akuisisi user, dan publikasi jurnal/media |
| **TOTAL** | | **Rp 8.000.000** | |

### Jadwal Kegiatan

| No | Kegiatan | Bulan 1 | Bulan 2 | Bulan 3 | Bulan 4 |
|---|---|:---:|:---:|:---:|:---:|
| 1 | Riset Pasar & Pemetaan Tenant | ✓ | | | |
| 2 | Optimasi Fitur & UI/UX Refinement | ✓ | ✓ | | |
| 3 | Integrasi Generative AI & Cloud | | ✓ | | |
| 4 | Pilot Project (Uji Coba Lapangan) | | | ✓ | |
| 5 | Evaluasi Sinkronisasi & Bug Fixing | | | ✓ | |
| 6 | Grand Launching & Marketing Campaign | | | | ✓ |
| 7 | Penyusunan Laporan Akhir & Scaling | | | | ✓ |

---

## DAFTAR PUSTAKA
1. APJII, (2024), “APJII Jumlah Pengguna Internet Indonesia Tembus 221 Juta Orang”, https://apjii.or.id/berita/d/apjii-jumlah-pengguna-internet-indonesia-tembus-221-juta-orang.
2. Nasution, et al., (2024), “Analisis Efisiensi UMKM melalui Sistem Akuntansi Digital”, Jurnal Riset Akuntansi.
3. Kadin Indonesia, (2024), “Profil UMKM”, https://kadin.id/data-dan-statistik/umkm-indonesia/.
4. Pramatamansyah, R., (2024), “Transformasi Digital dan Pertumbuhan UMKM di Indonesia”, Economics Pubmedia.
