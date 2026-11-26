import type { Language, PortfolioContent } from '../types';

export const portfolioContent: Record<Language, PortfolioContent> = {
  id: {
    personalInfo: {
      name: 'Achmad Arif Hidayat',
      brandName: 'ARFID',
      badge: "HALO, SAYA",
      headlineRole: 'IT Enthusiast.',
      bioShort:
        'Lulusan Sarjana Sistem Informasi dari Universitas Gajayana (2022-2026, IPK 3,45) dengan pengalaman praktis Staff IT di ITSK Dr. Soepraoen, berdedikasi menghadirkan solusi teknologi dan operasional IT yang handal.',
      bioLong: [
        'Sarjana Sistem Informasi dari Universitas Gajayana (2022 - 2026, IPK 3,45) dan alumni SMA Widya Dharma (2019 - 2022, Peminatan IPS). Memiliki pengalaman praktis sebagai Staff IT di ITSK Dr. Soepraoen dengan keahlian dalam troubleshooting perangkat keras & lunak, konfigurasi server, pemeliharaan website, serta pengelolaan database secara terstruktur guna mendukung kelancaran operasional teknologi perusahaan.',
      ],
      contactEmail: 'achmadarifh25@gmail.com',
      phone: '+62 895-0660-9757',
      location: 'Surabaya, Indonesia',
      availableForHire: true,
      stats: {
        experienceYears: '3.45',
        experienceYearsLabel: 'IPK / S1 Sistem Informasi',
        completedProjects: 'Staff IT',
        completedProjectsLabel: 'ITSK Dr. Soepraoen',
        happyClients: '100%',
        happyClientsLabel: 'Dedikasi & Problem Solving',
        technologiesMastered: '12+',
        technologiesMasteredLabel: 'Teknologi Dikuasai',
      },
      cvUrl: '/ATS_AchmadArif_Bindo.pdf',
      cvUrls: {
        id: '/ATS_AchmadArif_Bindo.pdf',
        en: '/ATS_AchmadArif_Bing.pdf',
      },
    },
    ui: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        education: 'Pendidikan',
        experience: 'Pengalaman',
        skills: 'Keahlian',
        projects: 'Proyek',
        contact: 'Kontak',
        letsTalk: 'Ayo Bicara',
      },
      hero: {
        viewPortfolio: 'Lihat Portofolio',
        contactMe: 'Unduh CV',
        downloadCv: 'Unduh CV',
        cvDropdown: {
          title: 'Pilih Bahasa CV',
          idLabel: 'Bahasa Indonesia',
          idSub: 'Format ATS (PDF)',
          enLabel: 'Bahasa Inggris',
          enSub: 'Format ATS (PDF)',
        },
        scrollDown: 'Gulir ke Bawah',
        toExplore: 'untuk Menjelajah',
        badgeLeft: 'IT Support & Systems',
        badgeRight: 'Network & Infrastructure',
      },
      about: {
        tag: 'Izinkan saya memperkenalkan diri',
        title: 'Tentang Saya',
        lead: 'Membangun solusi teknologi terstruktur dari infrastruktur hingga aplikasi web modern.',
        contactTitle: 'Kontak Langsung',
        contactPrompt: 'Ingin berkolaborasi atau mendiskusikan peluang IT? Hubungi saya di:',
        hireMe: 'Hubungi Saya',
        downloadCv: 'Unduh CV',
        highlights: [
          {
            title: 'Troubleshooting & Support',
            desc: 'Instalasi, konfigurasi, & perbaikan PC/hardware',
            icon: 'Monitor',
          },
          {
            title: 'Server & Infrastruktur',
            desc: 'Setup server & pemeliharaan keandalan sistem',
            icon: 'Server',
          },
          {
            title: 'Website Development',
            desc: 'Pengembangan & pemeliharaan web modern',
            icon: 'Globe',
          },
          {
            title: 'Database & Data Mgmt',
            desc: 'Pengelolaan basis data & pengolahan data',
            icon: 'Database',
          },
        ],
      },
      education: {
        tag: 'Latar Belakang Akademis',
        title: 'Pendidikan & Sertifikasi',
        desc: 'Riwayat pendidikan formal, pelatihan kejuruan, dan sertifikasi kredibel yang mendasari kompetensi teknis saya.',
      },
      experience: {
        tag: 'Peta Karir',
        title: 'Pengalaman Kerja',
        desc: 'Perjalanan karir dan kontribusi nyata saya dalam mengelola infrastruktur IT, pengembangan software, dan administrasi sistem.',
      },
      skills: {
        tag: 'Layanan & Keahlian',
        title: 'Keahlian & Layanan',
        desc: 'Kombinasi kemampuan pengembangan aplikasi modern, manajemen sistem IT, dan perancangan arsitektur jaringan yang handal.',
        techMasteryTag: 'Penguasaan Teknis',
        techMasteryTitle: 'Skills & Tech Stack',
        categories: ['Semua', 'IT Support & Systems', 'Networking', 'Cloud & Server', 'Web Development'],
      },
      projects: {
        tag: 'Sorotan Portofolio',
        title: 'Proyek Pilihan',
        desc: 'Kumpulan proyek nyata yang mencakup pembuatan web aplikasi modern, otomatisasi sistem, serta implementasi infrastruktur jaringan.',
        allCategory: 'Semua',
        viewDetails: 'Lihat Detail',
        techUsed: 'Teknologi & Tools:',
        visitDemo: 'Kunjungi Live Demo',
        viewSource: 'Lihat Source Code',
      },
      contact: {
        ctaTag: 'Mari Berkolaborasi',
        ctaHeadline: 'Tertarik Bekerja Sama atau Butuh Solusi IT?',
        ctaSubtext:
          'Baik untuk pengembangan aplikasi web baru, penanganan sistem jaringan, maupun konsultasi kebutuhan IT, saya siap berdiskusi dengan Anda.',
        ctaBtn: 'Mulai Percakapan',
        tag: 'Hubungi Saya',
        title: 'Kontak & Media Sosial',
        desc: 'Jangan ragu untuk menyapa atau menanyakan detail proyek. Saya akan merespons secepat mungkin.',
        emailLabel: 'Email Langsung',
        phoneLabel: 'Telepon / WhatsApp',
        locationLabel: 'Domisili',
        locationVal: 'Surabaya, Indonesia (Terbuka untuk Remote & Relokasi)',
        socialTitle: 'Terhubung di Media Sosial',
        formTitle: 'Kirim Pesan',
        formSub: 'Isi formulir di bawah ini dan saya akan membalas ke email Anda dalam waktu 24 jam.',
        nameLabel: 'Nama Lengkap',
        emailInputLabel: 'Alamat Email',
        subjectLabel: 'Subjek / Topik',
        messageLabel: 'Pesan',
        namePlaceholder: 'contoh: Budi Santoso',
        emailPlaceholder: 'contoh: budi@example.com',
        subjectPlaceholder: 'contoh: Penawaran Proyek Website / IT Support',
        messagePlaceholder: 'Tuliskan detail pesan atau pertanyaan Anda di sini...',
        submitBtn: 'Kirim Pesan Sekarang',
        submittingBtn: 'Mengirim Pesan...',
        successAlert: 'Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.',
      },
      footer: {
        tagline: 'IT Enthusiast & Tech Solutionist',
        copyright: 'Hak cipta dilindungi. Dibangun dengan React & Vite.',
        backToTop: 'Kembali ke atas',
      },
    },
    serviceCardsData: [
      {
        id: 'it-support',
        projectsCount: '',
        title: 'System & IT Support',
        description:
          'Pemeliharaan hardware & software, troubleshooting workstation dan periferal, instalasi OS Linux & Windows, serta penanganan helpdesk end-user.',
        icon: 'Laptop',
        isFeatured: true,
      },
      {
        id: 'network-admin',
        projectsCount: '',
        title: 'Network Administration',
        description:
          'Konfigurasi jaringan LAN/WAN, routing & switching Mikrotik/Cisco, segmentasi VLAN, routing protocol, firewall security, dan monitoring konektivitas.',
        icon: 'Network',
        isFeatured: true,
      },
      {
        id: 'cloud-devops',
        projectsCount: '',
        title: 'Server & Cloud Infrastructure',
        description:
          'Deployment server Linux, manajemen web server Nginx, containerization dengan Docker, serta pengelolaan basis data relasional (MySQL, PostgreSQL).',
        icon: 'Server',
        isFeatured: true,
      },
      {
        id: 'web-dev',
        projectsCount: '',
        title: 'Web & Application Dev',
        description:
          'Pengembangan aplikasi web modern, dashboard sistem internal, dan integrasi backend REST API menggunakan Laravel, React, dan Tailwind CSS.',
        icon: 'Code2',
        isFeatured: true,
      },
    ],
    educationData: [
      {
        id: 'edu-1',
        degree: 'S1 Sistem Informasi',
        institution: 'Universitas Gajayana',
        period: '2022 - 2026',
        location: 'Malang, Jawa Timur',
        description:
          'Fokus studi pada Rekayasa Sistem Informasi, Manajemen Basis Data, Analisis & Perancangan Sistem, serta Tata Kelola IT. Lulus dengan predikat Sangat Memuaskan (IPK 3,45/4.00).',
        achievements: [
          'Sarjana Sistem Informasi dengan IPK 3.45',
          'Pengalaman riset dan implementasi sistem informasi berbasis web',
          'Aktif dalam praktikum laboratorium sistem informasi dan basis data',
        ],
      },
      {
        id: 'edu-2',
        degree: 'Sekolah Menengah Atas',
        institution: 'SMA Widya Dharma',
        period: '2019 - 2022',
        location: 'Indonesia',
        description:
          'Mempelajari ilmu sosial, komunikasi, analisis data dasar, dan kepemimpinan organisasi siswa yang membentuk pola pikir analitis dan kemampuan interpersonal yang kuat.',
        achievements: [
          'Lulusan SMA Widya Dharma',
          'Aktif dalam kegiatan organisasi kesiswaan dan pengembangan diri',
          'Mengembangkan kemampuan komunikasi terstruktur dan kerja sama tim',
        ],
      },
      {
        id: 'edu-3',
        degree: 'Certified Cybersecurity Educator Professional (CCEP)',
        institution: 'Red Team Leaders',
        period: '2026',
        location: 'Kredensial Profesional Internasional',
        description:
          'Sertifikasi profesional kredibel yang memvalidasi penguasaan 8 domain teknis keamanan siber komprehensif serta kapabilitas merancang materi edukasi dan transfer pengetahuan mitigasi ancaman siber secara terstruktur.',
        achievements: [
          'Penguasaan 8 Domain: Network Security, IAM, Cloud Security, SecOps, hingga Incident Response',
          'Tervalidasi dalam kapabilitas edukasi teknis & perancangan materi Security Awareness organisasi',
          'Lulus evaluasi scenario-based assessment berstandar industri dari Red Team Leaders (2026)',
        ],
      },
    ],
    experienceData: [
      {
        id: 'exp-1',
        role: 'Staff IT (Internship / Magang)',
        company: 'ITSK Dr. Soepraoen',
        period: 'Juli 2025 - September 2025',
        location: 'Malang, Jawa Timur',
        description: [
          'Melakukan instalasi, konfigurasi, dan pemeliharaan perangkat komputer serta periferal kantor.',
          'Membantu proses instalasi dan konfigurasi server institusi untuk mendukung keandalan sistem operasional.',
          'Terlibat aktif dalam pengembangan dan pemeliharaan modul website serta portal institusi.',
          'Menangani troubleshooting teknis hardware/software, pengelolaan database, dan pengolahan data terstruktur.',
        ],
        skills: ['IT Support', 'Hardware Troubleshooting', 'Server Installation', 'Web Development', 'Database Management', 'Data Processing'],
      },
      {
        id: 'exp-2',
        role: 'Admin & Teknisi Jaringan',
        company: 'iBill Network',
        period: 'Juli 2024 - Agustus 2024',
        location: 'Malang, Indonesia',
        description: [
          'Mengelola data dan administrasi billing untuk 100+ pelanggan aktif menggunakan Microsoft Excel, termasuk registrasi baru, pembaruan paket, dan verifikasi pembayaran bulanan.',
          'Bertindak sebagai pusat penerima laporan gangguan (helpdesk), mengelola jadwal kunjungan perbaikan harian, serta menyusun rekap riwayat kendala pelanggan.',
          'Melakukan instalasi jaringan internet rata-rata 5 titik per minggu, mulai dari penarikan kabel, hingga pengaturan SSID, IP, dan koneksi PPPoE/Hotspot pada router pelanggan.',
          'Menangani troubleshooting tingkat pertama baik secara remote maupun kunjungan langsung ke lokasi pelanggan untuk meminimalkan downtime koneksi.',
        ],
        skills: ['Network Administration', 'PPPoE & Hotspot', 'Router Configuration', 'Network Troubleshooting', 'IT Helpdesk', 'Billing Administration'],
      },
      {
        id: 'exp-3',
        role: 'IT Support (Intern)',
        company: 'KRI Bilqis Clinic Center',
        period: 'Juli 2023 - Agustus 2023',
        location: 'Malang, Indonesia',
        description: [
          'Membantu pemeliharaan rutin dan troubleshooting dasar pada komputer operasional, printer, serta perangkat pendukung di area pendaftaran dan pelayanan klinik.',
          'Mendukung kestabilan jaringan lokal (LAN/Wi-Fi) serta membantu staf menangani kendala teknis ringan pada penggunaan aplikasi operasional klinik sehari-hari.',
        ],
        skills: ['IT Support', 'Hardware Troubleshooting', 'Printer Maintenance', 'LAN & Wi-Fi', 'End-User Support'],
      },
    ],
    skillsData: [
      // IT Support & Systems
      { name: 'Hardware Repair & PC Diagnostics', category: 'IT Support & Systems', proficiency: 92 },
      { name: 'Workstation & Peripherals Troubleshooting', category: 'IT Support & Systems', proficiency: 95 },
      { name: 'Windows & Linux OS Administration', category: 'IT Support & Systems', proficiency: 90 },
      { name: 'IT Helpdesk & End-User Support', category: 'IT Support & Systems', proficiency: 92 },
      { name: 'Printer & Office Device Maintenance', category: 'IT Support & Systems', proficiency: 88 },

      // Networking
      { name: 'LAN/WAN Cabling & Wi-Fi Setup', category: 'Networking', proficiency: 90 },
      { name: 'Mikrotik RouterOS & Winbox', category: 'Networking', proficiency: 88 },
      { name: 'Cisco Routing & Switching (Packet Tracer)', category: 'Networking', proficiency: 82 },
      { name: '802.1Q VLAN, NAT & Inter-VLAN Routing', category: 'Networking', proficiency: 85 },
      { name: 'PPPoE, Hotspot & Access Control (ACL)', category: 'Networking', proficiency: 86 },

      // Cloud & Server
      { name: 'Linux Server (Ubuntu/Debian)', category: 'Cloud & Server', proficiency: 89 },
      { name: 'Database (MySQL & PostgreSQL)', category: 'Cloud & Server', proficiency: 88 },
      { name: 'Nginx Web Server', category: 'Cloud & Server', proficiency: 85 },
      { name: 'Docker & Containerization', category: 'Cloud & Server', proficiency: 82 },
      { name: 'Git & GitHub Workflow', category: 'Cloud & Server', proficiency: 90 },

      // Web Development
      { name: 'PHP & Modern Frameworks (Laravel)', category: 'Web Development', proficiency: 84 },
      { name: 'JavaScript / TypeScript', category: 'Web Development', proficiency: 88 },
      { name: 'React & Modern Frontend', category: 'Web Development', proficiency: 88 },
      { name: 'HTML5, CSS3 & Tailwind CSS', category: 'Web Development', proficiency: 94 },
      { name: 'REST API & Web Integration', category: 'Web Development', proficiency: 88 },
      { name: 'Python / Scripting Basics', category: 'Web Development', proficiency: 80 },
    ],
    projectsData: [
            {
        id: 'proj-1',
        title: 'Sistem Antrean Bengkel',
        category: 'Web App',
        description:
          'Aplikasi antrean modern untuk mengoptimalkan penerimaan servis dan alur kerja bengkel secara real-time.',
        longDescription:
          'Sistem Antrean Bengkel adalah platform digital yang dirancang untuk mengatasi masalah penumpukan pelanggan dan ketidakteraturan jadwal perbaikan di bengkel. Dengan menggunakan sistem ini, staf bengkel dapat mendaftarkan pelanggan, memantau status pengerjaan secara real-time, dan mengelola giliran servis dengan lebih transparan. Tersedia peran berbeda seperti Kasir dan Owner untuk memudahkan akses informasi dan manajemen bengkel secara profesional.<br/><br/>Demo Aplikasi: <a href="https://host.achmadarha.site" target="_blank" rel="noopener noreferrer">https://host.achmadarha.site</a><br/>Login Admin/Kasir/Owner: <a href="https://host.achmadarha.site/admin" target="_blank" rel="noopener noreferrer">https://host.achmadarha.site/admin</a><br/>Akun Kasir: kasir@bengkel.com<br/>Akun Owner: owner@bengkel.com<br/>Password: password',
        tags: ['Laravel', 'MySQL'],
        imageUrl:
          'https://i.ibb.co.com/CpFbw6QC/bengkell.png',
        demoUrl: 'https://host.achmadarha.site',
        githubUrl: '',
        featured: true,
      },
      {
        id: 'proj-9',
        title: 'Infrastruktur Jaringan Enterprise Puskesmas 2 Lantai',
        category: 'Networking',
        description:
          'Perancangan & simulasi infrastruktur jaringan Puskesmas 2 lantai dengan segmentasi VLAN, Inter-VLAN Routing (SVI), DHCP, NAT, Extended ACL, Port Security, SSHv2, dan monitoring CCTV IoT menggunakan Cisco Packet Tracer.',
        longDescription:
          'Fasilitas pelayanan kesehatan tingkat pertama seperti Puskesmas menangani dua jenis lalu lintas jaringan dengan tingkat sensitivitas yang bertolak belakang: operasional klinis-manajerial (SIMPUS, bridging PCare BPJS, dan CCTV) serta akses publik (Wi-Fi ruang tunggu pasien). Proyek ini merancang dan mensimulasikan infrastruktur jaringan Puskesmas 2 Lantai yang memisahkan lalu lintas berdasarkan fungsi ruang, mengamankan aset kritis dengan kebijakan access control berlapis, serta memastikan konektivitas lokal dan eksternal (bridging BPJS) berjalan stabil.',
        tags: ['Cisco Packet Tracer', '802.1Q VLAN', 'Inter-VLAN SVI', 'NAT/PAT', 'Extended ACL', 'Port Security', 'SSHv2', 'DHCP', 'IoT CCTV'],
        imageUrl: '/projects/cisco-topology.PNG',
        demoUrl: '',
        githubUrl: '',
        featured: true,
      },
      {
        id: 'proj-2',
        title: 'Sistem Informasi LPPM Kampus',
        category: 'Web App',
        description:
          'Platform pengelolaan administrasi penelitian dan pengabdian masyarakat (LPPM) untuk dosen dan staf kampus.',
        longDescription:
          'Sistem Informasi LPPM (Lembaga Penelitian dan Pengabdian kepada Masyarakat) adalah aplikasi berbasis web untuk memfasilitasi seluruh proses pengajuan, review, hingga pelaporan kegiatan penelitian dan pengabdian oleh dosen. Sistem ini dilengkapi dengan portal khusus bagi dosen untuk melacak status usulan mereka, dan portal bagi admin/reviewer untuk melakukan verifikasi, penilaian proposal, serta pengelolaan luaran publikasi.<br/><br/>Demo Aplikasi: <a href="https://lppm.achmadarha.site" target="_blank" rel="noopener noreferrer">https://lppm.achmadarha.site</a><br/><br/>Admin Portal: <a href="https://lppm.achmadarha.site/admin/login" target="_blank" rel="noopener noreferrer">https://lppm.achmadarha.site/admin/login</a><br/>Email: superadmin@lppm.ac.id<br/>Password: password<br/><br/>Dosen Portal: <a href="https://lppm.achmadarha.site/dosen/login" target="_blank" rel="noopener noreferrer">https://lppm.achmadarha.site/dosen/login</a><br/>NIDN: 0802028802<br/>Password: password',
        tags: ['Laravel', 'MySQL'],
        imageUrl:
          'https://i.ibb.co.com/wNNBRmxS/lppm.png',
        demoUrl: 'https://lppm.achmadarha.site',
        githubUrl: '',
        featured: true,
      },
      {
        id: 'proj-3',
        title: 'Skripsi Repository Sistem',
        category: 'Web App',
        description:
          'Platform digital repositori skripsi untuk mengelola, menyimpan, dan mempublikasikan karya akhir mahasiswa.',
        longDescription:
          'Skripsi Repository adalah sistem perpustakaan digital khusus yang dibangun untuk menyimpan arsip skripsi mahasiswa. Aplikasi ini membantu universitas dalam mendokumentasikan karya tulis secara rapi sekaligus mempermudah akses pencarian literatur akademik oleh publik, mahasiswa, maupun staf dosen. Sistem dilengkapi manajemen akses pengguna yang berbeda-beda untuk memastikan keamanan dan prosedur unggah dokumen sesuai standar akademik kampus.<br/><br/>Demo Aplikasi: <a href="https://skripsi.achmadarha.site/" target="_blank" rel="noopener noreferrer">https://skripsi.achmadarha.site/</a><br/><br/>Admin Portal: <a href="https://skripsi.achmadarha.site/admin" target="_blank" rel="noopener noreferrer">https://skripsi.achmadarha.site/admin</a><br/>Email: admin@repo.ac.id<br/>Password: password<br/><br/>Portal Mahasiswa: <a href="https://skripsi.achmadarha.site/login" target="_blank" rel="noopener noreferrer">https://skripsi.achmadarha.site/login</a><br/>NIM: 20200001<br/>Password: password<br/><br/>Akses Publik: <a href="https://skripsi.achmadarha.site/login" target="_blank" rel="noopener noreferrer">https://skripsi.achmadarha.site/login</a><br/>Email: irwan@gmail.com<br/>Password: password',
        tags: ['Laravel', 'MySQL'],
        imageUrl:
          'https://i.ibb.co.com/7t37YmRb/SKRIPSI.png',
        demoUrl: 'https://skripsi.achmadarha.site/',
        githubUrl: '',
        featured: true,
      },
      {
        id: 'proj-4',
        title: 'Gudang App — Warehouse Management System',
        category: 'Web App',
        description:
          'Aplikasi manajemen gudang modern berbasis web untuk mengelola stok, inventaris, dan alur keluar masuk barang dengan lebih efisien.',
        longDescription:
          'Gudang App adalah sistem manajemen gudang komprehensif yang membantu bisnis mengelola inventaris mereka secara real-time. Aplikasi ini menyediakan fitur untuk melacak stok masuk dan keluar, memantau tingkat persediaan, mengelola riwayat transaksi, dan menghasilkan laporan analitik untuk mendukung pengambilan keputusan bisnis yang lebih baik. Sistem dirancang dengan antarmuka modern, responsif, dan mudah digunakan untuk meningkatkan efisiensi operasional gudang.<br/><br/>Demo Aplikasi: <a href="https://gudang.achmadarha.site" target="_blank" rel="noopener noreferrer">https://gudang.achmadarha.site</a>',
        tags: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
        imageUrl:
          'https://i.ibb.co.com/MDrV0gm6/gudang.png',
        demoUrl: 'https://gudang.achmadarha.site',
        githubUrl: '',
        featured: false,
      },
      {
        id: 'proj-5',
        title: 'ARF Bus - Sistem Reservasi Bus Antar Kota',
        category: 'Web App',
        description:
          'Sistem reservasi bus modern berbasis web untuk mengelola pemesanan tiket, jadwal keberangkatan, dan data penumpang dengan lebih efisien.',
        longDescription:
          'ARF Bus adalah sistem reservasi bus komprehensif yang dirancang untuk memudahkan proses pemesanan tiket perjalanan antar kota. Aplikasi ini menyediakan platform yang user-friendly bagi penumpang untuk mencari jadwal, memesan kursi, dan melakukan pembayaran secara online. Bagi operator bus, sistem ini menawarkan alat manajemen yang efisien untuk mengelola armada, rute, serta melacak reservasi dan pendapatan harian.',
        tags: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
        imageUrl:
          'https://i.ibb.co.com/VWkJpLVV/bus.png" alt="bus" border="0"',
        demoUrl: '',
        githubUrl: '',
        featured: false,
      },
      {
        id: 'proj-6',
        title: 'HRIS (Human Resources Information System)',
        category: 'Web App',
        description:
          'Sistem informasi manajemen SDM terpadu untuk mengelola data kepegawaian, absensi, pengajuan cuti, dan penggajian karyawan secara otomatis.',
        longDescription:
          'HRIS (Human Resources Information System) adalah platform manajemen sumber daya manusia berbasis web yang dirancang untuk merampingkan operasional administrasi personalia. Sistem ini mencakup pengelolaan master data karyawan, pencatatan absensi digital, manajemen alur persetujuan cuti & izin, perhitungan payroll (gaji) otomatis beserta potongan/tunjangan, hingga pelaporan metrik produktivitas kerja untuk divisi HRD secara terpusat dan terstruktur.',
        tags: ['Laravel', 'MySQL', 'PHP', 'Tailwind CSS'],
        imageUrl:
          'https://i.ibb.co.com/xKWZQDcB/absensi.png',
        demoUrl: '',
        githubUrl: '',
        featured: false,
      },
      {
        id: 'proj-7',
        title: 'Aplikasi Cafe — Sistem Manajemen Cafe Modern',
        category: 'Web App',
        description:
          'Sistem Manajemen Cafe Modern dengan Ekosistem yang Terintegrasi Penuh.',
        longDescription:
          'Sistem manajemen restoran & cafe lengkap dengan backend Laravel, admin panel Filament, POS Console, dan aplikasi frontend terintegrasi. Memungkinkan pencatatan pesanan kasir yang cepat, sinkronisasi stok bahan baku secara otomatis, manajemen meja, serta rekapitulasi laporan transaksi penjualan harian dan bulanan secara akurat.',
        tags: ['Laravel', 'Filament PHP', 'MySQL', 'POS Console', 'Tailwind CSS'],
        imageUrl:
          'https://i.ibb.co.com/cSGxt6Xm/COFFE.png',
        demoUrl: '',
        githubUrl: '',
        featured: false,
      },
      {
        id: 'proj-8',
        title: 'Muslim Lifestyle PWA',
        category: 'Web App',
        description:
          'Aplikasi Muslim Lengkap untuk Kehidupan Islami Sehari-hari.',
        longDescription:
          'Muslim Lifestyle PWA adalah aplikasi web progresif yang dirancang untuk mendukung ibadah dan rutinitas harian umat Muslim secara praktis dan terpadu. Dibangun menggunakan React 18 dan Vite 6, aplikasi ini menyediakan jadwal sholat akurat berbasis geolokasi, penunjuk arah kiblat interaktif, Al-Qur\'an digital, doa harian, dan dzikir counter. Mendukung kapabilitas Progressive Web App (PWA) sehingga dapat diinstal di smartphone maupun desktop serta tetap responsif dan cepat diakses secara offline.',
        tags: ['React 18', 'Vite 6', 'TypeScript', 'PWA', 'Tailwind CSS'],
        imageUrl:
          'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1280&h=720&fit=crop',
        demoUrl: '',
        githubUrl: '',
        featured: false,
      }
    ],
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/arifhidayat25', icon: 'Github' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/arifhidayat25', icon: 'Linkedin' },
      { name: 'Instagram', url: 'https://instagram.com/arifhidayat.25', icon: 'Instagram' },
      { name: 'WhatsApp', url: 'https://wa.me/6289506609757', icon: 'Whatsapp' },
      { name: 'Email', url: 'mailto:achmadarifh25@gmail.com', icon: 'Mail' },
    ],
  },

  en: {
    personalInfo: {
      name: 'Achmad Arif Hidayat',
      brandName: 'ARFID',
      badge: "HELLO, I'M",
      headlineRole: 'IT Enthusiast.',
      bioShort:
        'Information Systems graduate from Universitas Gajayana (2022-2026, GPA 3.45) with practical IT Staff experience at ITSK Dr. Soepraoen, dedicated to reliable IT operations and modern web technologies.',
      bioLong: [
        'Information Systems graduate from Universitas Gajayana (2022 - 2026, GPA 3.45) and SMA Widya Dharma alumnus (2019 - 2022, Social Sciences). Experienced as an IT Staff intern at ITSK Dr. Soepraoen, specializing in hardware/software troubleshooting, server deployment, website maintenance, and structured database management to support reliable IT operations.',
      ],
      contactEmail: 'achmadarifh25@gmail.com',
      phone: '+62 895-0660-9757',
      location: 'Surabaya, Indonesia',
      availableForHire: true,
      stats: {
        experienceYears: '3.45',
        experienceYearsLabel: 'GPA / Information Systems',
        completedProjects: 'IT Staff',
        completedProjectsLabel: 'ITSK Dr. Soepraoen',
        happyClients: '100%',
        happyClientsLabel: 'Dedication & Problem Solving',
        technologiesMastered: '12+',
        technologiesMasteredLabel: 'Tech Mastered',
      },
      cvUrl: '/ATS_AchmadArif_Bing.pdf',
      cvUrls: {
        id: '/ATS_AchmadArif_Bindo.pdf',
        en: '/ATS_AchmadArif_Bing.pdf',
      },
    },
    ui: {
      nav: {
        home: 'Home',
        about: 'About',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        letsTalk: "Let's Talk",
      },
      hero: {
        viewPortfolio: 'View Portfolio',
        contactMe: 'Download CV',
        downloadCv: 'Download CV',
        cvDropdown: {
          title: 'Select CV Language',
          idLabel: 'Indonesian',
          idSub: 'ATS Format (PDF)',
          enLabel: 'English',
          enSub: 'ATS Format (PDF)',
        },
        scrollDown: 'Scroll Down',
        toExplore: 'to Explore',
        badgeLeft: 'IT Support & Systems',
        badgeRight: 'Network & Infrastructure',
      },
      about: {
        tag: 'Allow me to introduce myself',
        title: 'About Me',
        lead: 'Delivering structured tech solutions across IT infrastructure and modern web development.',
        contactTitle: 'Direct Contact',
        contactPrompt: 'Have a question or looking to collaborate? Reach out to me at:',
        hireMe: 'Contact Me',
        downloadCv: 'Download CV',
        highlights: [
          {
            title: 'Troubleshooting & Support',
            desc: 'Installation, setup, & PC/hardware diagnostics',
            icon: 'Monitor',
          },
          {
            title: 'Server & Infrastructure',
            desc: 'Server deployment & system reliability maintenance',
            icon: 'Server',
          },
          {
            title: 'Website Development',
            desc: 'Modern & responsive web system development',
            icon: 'Globe',
          },
          {
            title: 'Database & Data Mgmt',
            desc: 'Structured database & data processing',
            icon: 'Database',
          },
        ],
      },
      education: {
        tag: 'Academic Background',
        title: 'Education & Certifications',
        desc: 'Formal education history, vocational training, and accredited certifications supporting my technical competencies.',
      },
      experience: {
        tag: 'Career Roadmap',
        title: 'Work Experience',
        desc: 'My professional journey and tangible contributions in managing IT infrastructure, software development, and system administration.',
      },
      skills: {
        tag: 'What I will do for you',
        title: 'Services & Expertise',
        desc: 'A robust blend of modern application development, IT systems management, and reliable network architecture design.',
        techMasteryTag: 'Technical Mastery',
        techMasteryTitle: 'Skills & Tech Stack',
        categories: ['All', 'IT Support & Systems', 'Networking', 'Cloud & Server', 'Web Development'],
      },
      projects: {
        tag: 'Portfolio Spotlight',
        title: 'Featured Projects',
        desc: 'A collection of real-world projects spanning modern web applications, system automation, and network infrastructure deployment.',
        allCategory: 'All',
        viewDetails: 'View Details',
        techUsed: 'Technologies & Tools:',
        visitDemo: 'Visit Live Demo',
        viewSource: 'View Source Code',
      },
      contact: {
        ctaTag: "Let's Collaborate",
        ctaHeadline: 'Interested in Collaborating or Need IT Solutions?',
        ctaSubtext:
          "Whether you need modern web application development, network systems support, or IT consulting, I'm ready to discuss with you.",
        ctaBtn: 'Start a Conversation',
        tag: 'Get in Touch',
        title: 'Contact & Social Media',
        desc: "Feel free to say hello or inquire about project details. I'll get back to you as soon as possible.",
        emailLabel: 'Direct Email',
        phoneLabel: 'Phone / WhatsApp',
        locationLabel: 'Location',
        locationVal: 'Surabaya, Indonesia (Open for Remote & Relocation)',
        socialTitle: 'Connect on Social Media',
        formTitle: 'Send a Message',
        formSub: 'Fill out the form below and I will get back to your email within 24 hours.',
        nameLabel: 'Full Name',
        emailInputLabel: 'Email Address',
        subjectLabel: 'Subject / Topic',
        messageLabel: 'Message',
        namePlaceholder: 'e.g. John Doe',
        emailPlaceholder: 'e.g. john@example.com',
        subjectPlaceholder: 'e.g. Website Project Inquiry / IT Support',
        messagePlaceholder: 'Write your message details or inquiries here...',
        submitBtn: 'Send Message Now',
        submittingBtn: 'Sending Message...',
        successAlert: 'Thank you! Your message has been sent. I will get in touch with you shortly.',
      },
      footer: {
        tagline: 'IT Enthusiast & Tech Solutionist',
        copyright: 'All rights reserved. Built with React & Vite.',
        backToTop: 'Back to top',
      },
    },
    serviceCardsData: [
      {
        id: 'it-support',
        projectsCount: '',
        title: 'System & IT Support',
        description:
          'Hardware & software maintenance, workstation and peripheral troubleshooting, Linux & Windows OS deployment, and end-user helpdesk support.',
        icon: 'Laptop',
        isFeatured: true,
      },
      {
        id: 'network-admin',
        projectsCount: '',
        title: 'Network Administration',
        description:
          'LAN/WAN network design, Mikrotik & Cisco routing/switching, VLAN segmentation, routing protocols, firewall rules, and link monitoring.',
        icon: 'Network',
        isFeatured: true,
      },
      {
        id: 'cloud-devops',
        projectsCount: '',
        title: 'Server & Cloud Infrastructure',
        description:
          'Linux server administration, Nginx web server deployment, Docker containerization, and relational database management (MySQL, PostgreSQL).',
        icon: 'Server',
        isFeatured: true,
      },
      {
        id: 'web-dev',
        projectsCount: '',
        title: 'Web & Application Dev',
        description:
          'Modern web application engineering, internal operational dashboards, and backend REST API integrations with Laravel, React, and Tailwind CSS.',
        icon: 'Code2',
        isFeatured: true,
      },
    ],
    educationData: [
      {
        id: 'edu-1',
        degree: 'Bachelor of Information Systems (S.Kom / S.SI)',
        institution: 'Universitas Gajayana',
        period: '2022 - 2026',
        location: 'Malang, Indonesia',
        description:
          'Specialized in Information Systems Engineering, Database Architecture, Systems Analysis & Design, and IT Governance. Graduated with honors (GPA 3.45/4.00).',
        achievements: [
          'Bachelor of Information Systems with 3.45 GPA',
          'Web-based information systems research and practical deployment',
          'Active in information systems lab practicums and data processing',
        ],
      },
      {
        id: 'edu-2',
        degree: 'Senior High School',
        institution: 'SMA Widya Dharma',
        period: '2019 - 2022',
        location: 'Indonesia',
        description:
          'Studied social sciences, communication, foundational data analysis, and student leadership, building strong analytical and interpersonal skills.',
        achievements: [
          'SMA Widya Dharma Graduate',
          'Active in student council organizations and extracurriculars',
          'Developed structured communication and teamwork capabilities',
        ],
      },
      {
        id: 'edu-3',
        degree: 'Certified Cybersecurity Educator Professional (CCEP)',
        institution: 'Red Team Leaders',
        period: '2026',
        location: 'International Professional Credential',
        description:
          'Credible professional certification validating comprehensive technical competence across 8 cybersecurity domains as well as the capability to design education materials and deliver structured technical security awareness.',
        achievements: [
          'Mastery across 8 domains: Network Security, IAM, Cloud Security, SecOps, and Incident Response',
          'Validated ability to translate technical security frameworks into actionable organizational training',
          'Passed comprehensive scenario-based assessment by Red Team Leaders (2026)',
        ],
      },
    ],
    experienceData: [
      {
        id: 'exp-1',
        role: 'IT Staff (Internship)',
        company: 'ITSK Dr. Soepraoen',
        period: 'July 2025 - September 2025',
        location: 'Malang, Indonesia',
        description: [
          'Installed, configured, and maintained computer workstations and office peripherals.',
          'Assisted with server installation, configuration, and institutional systems operational monitoring.',
          'Actively engaged in the development and maintenance of official website modules and web systems.',
          'Handled hardware/software troubleshooting, database administration, and structured data processing.',
        ],
        skills: ['IT Support', 'Hardware Troubleshooting', 'Server Installation', 'Web Development', 'Database Management', 'Data Processing'],
      },
      {
        id: 'exp-2',
        role: 'Network Administrator & Technician',
        company: 'iBill Network',
        period: 'July 2024 - August 2024',
        location: 'Malang, Indonesia',
        description: [
          'Managed billing records and customer account administration for 100+ active subscribers using Microsoft Excel, including new registrations, package upgrades, and monthly payment reconciliations.',
          'Served as the primary technical helpdesk dispatcher, organizing daily on-site repair schedules and documenting detailed customer issue history.',
          'Deployed network installations averaging 5 sites weekly, handling fiber/LAN cabling, router provisioning, SSID/IP configuration, and PPPoE/Hotspot setups.',
          'Provided first-tier technical troubleshooting remotely and through on-site customer visits to minimize internet connection downtime.',
        ],
        skills: ['Network Administration', 'PPPoE & Hotspot', 'Router Configuration', 'Network Troubleshooting', 'IT Helpdesk', 'Billing Administration'],
      },
      {
        id: 'exp-3',
        role: 'IT Support (Intern)',
        company: 'KRI Bilqis Clinic Center',
        period: 'July 2023 - August 2023',
        location: 'Malang, Indonesia',
        description: [
          'Assisted in routine maintenance and fundamental troubleshooting for operational workstations, printers, and peripheral hardware across reception and clinic examination rooms.',
          'Maintained local area network (LAN/Wi-Fi) stability and supported clinic staff with basic technical inquiries regarding daily clinical management applications.',
        ],
        skills: ['IT Support', 'Hardware Troubleshooting', 'Printer Maintenance', 'LAN & Wi-Fi', 'End-User Support'],
      },
    ],
    skillsData: [
      // IT Support & Systems
      { name: 'Hardware Repair & PC Diagnostics', category: 'IT Support & Systems', proficiency: 92 },
      { name: 'Workstation & Peripherals Troubleshooting', category: 'IT Support & Systems', proficiency: 95 },
      { name: 'Windows & Linux OS Administration', category: 'IT Support & Systems', proficiency: 90 },
      { name: 'IT Helpdesk & End-User Support', category: 'IT Support & Systems', proficiency: 92 },
      { name: 'Printer & Office Device Maintenance', category: 'IT Support & Systems', proficiency: 88 },

      // Networking
      { name: 'LAN/WAN Cabling & Wi-Fi Setup', category: 'Networking', proficiency: 90 },
      { name: 'Mikrotik RouterOS & Winbox', category: 'Networking', proficiency: 88 },
      { name: 'Cisco Routing & Switching (Packet Tracer)', category: 'Networking', proficiency: 82 },
      { name: '802.1Q VLAN, NAT & Inter-VLAN Routing', category: 'Networking', proficiency: 85 },
      { name: 'PPPoE, Hotspot & Access Control (ACL)', category: 'Networking', proficiency: 86 },

      // Cloud & Server
      { name: 'Linux Server (Ubuntu/Debian)', category: 'Cloud & Server', proficiency: 89 },
      { name: 'Database (MySQL & PostgreSQL)', category: 'Cloud & Server', proficiency: 88 },
      { name: 'Nginx Web Server', category: 'Cloud & Server', proficiency: 85 },
      { name: 'Docker & Containerization', category: 'Cloud & Server', proficiency: 82 },
      { name: 'Git & GitHub Workflow', category: 'Cloud & Server', proficiency: 90 },

      // Web Development
      { name: 'PHP & Modern Frameworks (Laravel)', category: 'Web Development', proficiency: 84 },
      { name: 'JavaScript / TypeScript', category: 'Web Development', proficiency: 88 },
      { name: 'React & Modern Frontend', category: 'Web Development', proficiency: 88 },
      { name: 'HTML5, CSS3 & Tailwind CSS', category: 'Web Development', proficiency: 94 },
      { name: 'REST API & Web Integration', category: 'Web Development', proficiency: 88 },
      { name: 'Python / Scripting Basics', category: 'Web Development', proficiency: 80 },
    ],
    projectsData: [
            {
        id: 'proj-1',
        title: 'Workshop Queue Management System',
        category: 'Web App',
        description:
          'Modern queue management web application to optimize service admissions and workshop workflows in real-time.',
        longDescription:
          'Workshop Queue Management System is a digital platform designed to resolve customer queues and disorganized repair schedules in automotive workshops. Using this system, workshop staff can register customer vehicles, track progress in real-time, and manage service turns transparently. Features dedicated roles for Cashier and Owner to simplify operational oversight.<br/><br/>Demo Application: <a href="https://host.achmadarha.site" target="_blank" rel="noopener noreferrer">https://host.achmadarha.site</a><br/>Admin/Cashier/Owner Login: <a href="https://host.achmadarha.site/admin" target="_blank" rel="noopener noreferrer">https://host.achmadarha.site/admin</a><br/>Cashier Account: kasir@bengkel.com<br/>Owner Account: owner@bengkel.com<br/>Password: password',
        tags: ['Laravel', 'MySQL'],
        imageUrl:
          'https://i.ibb.co.com/CpFbw6QC/bengkell.png',
        demoUrl: 'https://host.achmadarha.site',
        githubUrl: '',
        featured: true,
      },
      {
        id: 'proj-9',
        title: 'Puskesmas (Primary Healthcare) 2-Floor Enterprise Network',
        category: 'Networking',
        description:
          'Full design & simulation of a 2-floor primary healthcare center network with VLAN segmentation, Inter-VLAN Routing (SVI), DHCP, NAT, Extended ACL, Port Security, SSHv2, and centralized IoT CCTV monitoring using Cisco Packet Tracer.',
        longDescription:
          'Primary healthcare facilities handle two categories of network traffic with contrasting sensitivity levels: clinical-administrative operations (SIMPUS EMR, PCare BPJS bridging, and CCTV monitoring) and public access (patient waiting room Wi-Fi). This project designs and simulates a 2-floor Puskesmas network that segregates traffic by function, secures critical assets with layered access control policies, and ensures stable local and external connectivity.',
        tags: ['Cisco Packet Tracer', '802.1Q VLAN', 'Inter-VLAN SVI', 'NAT/PAT', 'Extended ACL', 'Port Security', 'SSHv2', 'DHCP', 'IoT CCTV'],
        imageUrl: '/projects/cisco-topology.PNG',
        demoUrl: '',
        githubUrl: '',
        featured: true,
      },
      {
        id: 'proj-2',
        title: 'Campus LPPM Information System',
        category: 'Web App',
        description:
          'Administration management platform for university academic research and community outreach programs (LPPM).',
        longDescription:
          'The LPPM (Institute for Research and Community Service) Information System is a web-based portal facilitating the end-to-end proposal lifecycle—submission, peer review, and final reporting by faculty lecturers. Includes dedicated portals for lecturers to track their proposal status, and an admin/reviewer portal to verify, assess, and monitor publication outputs.<br/><br/>Demo Application: <a href="https://lppm.achmadarha.site" target="_blank" rel="noopener noreferrer">https://lppm.achmadarha.site</a><br/><br/>Admin Portal: <a href="https://lppm.achmadarha.site/admin/login" target="_blank" rel="noopener noreferrer">https://lppm.achmadarha.site/admin/login</a><br/>Email: superadmin@lppm.ac.id<br/>Password: password<br/><br/>Lecturer Portal: <a href="https://lppm.achmadarha.site/dosen/login" target="_blank" rel="noopener noreferrer">https://lppm.achmadarha.site/dosen/login</a><br/>NIDN: 0802028802<br/>Password: password',
        tags: ['Laravel', 'MySQL'],
        imageUrl:
          'https://i.ibb.co.com/wNNBRmxS/lppm.png',
        demoUrl: 'https://lppm.achmadarha.site',
        githubUrl: '',
        featured: true,
      },
      {
        id: 'proj-3',
        title: 'Thesis Repository System',
        category: 'Web App',
        description:
          'Digital thesis repository platform to archive, catalog, and publish undergraduate student research papers.',
        longDescription:
          'Thesis Repository is a digital institutional archive designed to systematically store and organize student theses. It assists universities in archiving academic literature while streamlining thesis discovery and citation access for students, researchers, and faculty members with robust role-based access control.<br/><br/>Demo Application: <a href="https://skripsi.achmadarha.site/" target="_blank" rel="noopener noreferrer">https://skripsi.achmadarha.site/</a><br/><br/>Admin Portal: <a href="https://skripsi.achmadarha.site/admin" target="_blank" rel="noopener noreferrer">https://skripsi.achmadarha.site/admin</a><br/>Email: admin@repo.ac.id<br/>Password: password<br/><br/>Student Portal: <a href="https://skripsi.achmadarha.site/login" target="_blank" rel="noopener noreferrer">https://skripsi.achmadarha.site/login</a><br/>NIM: 20200001<br/>Password: password<br/><br/>Public Access: <a href="https://skripsi.achmadarha.site/login" target="_blank" rel="noopener noreferrer">https://skripsi.achmadarha.site/login</a><br/>Email: irwan@gmail.com<br/>Password: password',
        tags: ['Laravel', 'MySQL'],
        imageUrl:
          'https://i.ibb.co.com/7t37YmRb/SKRIPSI.png',
        demoUrl: 'https://skripsi.achmadarha.site/',
        githubUrl: '',
        featured: true,
      },
      {
        id: 'proj-4',
        title: 'Gudang App — Warehouse Management System',
        category: 'Web App',
        description:
          'Modern web-based inventory and warehouse management system to optimize stock levels and logistics workflows.',
        longDescription:
          'Gudang App is an enterprise warehouse management system that enables real-time inventory tracking and goods movement management. The application tracks inbound and outbound shipments, monitors minimum stock thresholds, manages audit logs, and produces insightful analytics for supply chain decision-making.<br/><br/>Demo Application: <a href="https://gudang.achmadarha.site" target="_blank" rel="noopener noreferrer">https://gudang.achmadarha.site</a>',
        tags: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
        imageUrl:
          'https://i.ibb.co.com/MDrV0gm6/gudang.png',
        demoUrl: 'https://gudang.achmadarha.site',
        githubUrl: '',
        featured: false,
      },
      {
        id: 'proj-5',
        title: 'ARF Bus - Intercity Bus Reservation System',
        category: 'Web App',
        description:
          'Modern web-based intercity bus reservation platform to manage seat bookings, departure schedules, and passenger data.',
        longDescription:
          'ARF Bus is an intercity travel reservation system built to provide an intuitive booking portal for passengers to browse schedules, choose seats, and complete online reservations. For bus fleet operators, it delivers powerful scheduling, route assignment, and real-time ticket revenue tracking tools.',
        tags: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
        imageUrl:
          'https://i.ibb.co.com/VWkJpLVV/bus.png" alt="bus" border="0"',
        demoUrl: '',
        githubUrl: '',
        featured: false,
      },
      {
        id: 'proj-6',
        title: 'HRIS (Human Resources Information System)',
        category: 'Web App',
        description:
          'An integrated human resources management system to streamline employee records, attendance tracking, leave requests, and automated payroll.',
        longDescription:
          'HRIS (Human Resources Information System) is an enterprise web-based human resource management platform designed to streamline personnel administration workflows. The system features centralized employee master data management, digital attendance tracking, multi-tier leave and permission approval pipelines, automated payroll calculation with allowances/deductions, and analytical productivity reporting for HR departments.',
        tags: ['Laravel', 'MySQL', 'PHP', 'Tailwind CSS'],
        imageUrl:
          'https://i.ibb.co.com/xKWZQDcB/absensi.png',
        demoUrl: '',
        githubUrl: '',
        featured: false,
      },
      {
        id: 'proj-7',
        title: 'Cafe App — Modern Integrated Cafe Management System',
        category: 'Web App',
        description:
          'Modern Cafe Management System with a Fully Integrated Ecosystem.',
        longDescription:
          'A complete restaurant and cafe management system featuring a Laravel backend, Filament admin panel, POS Console, and integrated frontend application. Enables high-speed cashier order processing, automated raw ingredient inventory tracking, table management, and precise daily/monthly sales analytics.',
        tags: ['Laravel', 'Filament PHP', 'MySQL', 'POS Console', 'Tailwind CSS'],
        imageUrl:
          'https://i.ibb.co.com/cSGxt6Xm/COFFE.png',
        demoUrl: '',
        githubUrl: '',
        featured: false,
      },
      {
        id: 'proj-8',
        title: 'Muslim Lifestyle PWA',
        category: 'Web App',
        description:
          'Comprehensive Muslim Lifestyle Application for Everyday Islamic Living.',
        longDescription:
          'Muslim Lifestyle PWA is a progressive web application engineered to support everyday Islamic worship and routines seamlessly. Built with React 18 and Vite 6, it delivers location-based accurate prayer times, interactive Qibla finder, digital Quran reader, daily supplications (Duas), and a digital tasbih counter. Features full PWA support with installability across mobile/desktop platforms and offline-first performance.',
        tags: ['React 18', 'Vite 6', 'TypeScript', 'PWA', 'Tailwind CSS'],
        imageUrl:
          'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1280&h=720&fit=crop',
        demoUrl: '',
        githubUrl: '',
        featured: false,
      }
    ],
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/arifhidayat25', icon: 'Github' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/arifhidayat25', icon: 'Linkedin' },
      { name: 'Instagram', url: 'https://instagram.com/arifhidayat.25', icon: 'Instagram' },
      { name: 'WhatsApp', url: 'https://wa.me/6289506609757', icon: 'Whatsapp' },
      { name: 'Email', url: 'mailto:achmadarifh25@gmail.com', icon: 'Mail' },
    ],
  },
};
