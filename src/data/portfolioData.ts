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
      cvUrl: '/cv-achmad-arif.pdf',
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
        scrollDown: 'Gulir ke Bawah',
        toExplore: 'untuk Menjelajah',
        badgeLeft: 'Fullstack & Web Dev',
        badgeRight: 'Network & IT Systems',
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
        categories: ['Semua', 'Languages', 'Frontend & Backend', 'DevOps & Cloud', 'Networking & Systems'],
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
        id: 'web-dev',
        projectsCount: '',
        title: 'Web & Fullstack Dev',
        description:
          'Membangun aplikasi web interaktif, responsif, dan scalable dengan React, TypeScript, Node.js, dan arsitektur REST API modern.',
        icon: 'Code2',
        isFeatured: true,
      },
      {
        id: 'it-support',
        projectsCount: '',
        title: 'System & IT Support',
        description:
          'Pemeliharaan perangkat keras & lunak, troubleshooting workstation, manajemen sistem operasi Linux & Windows, serta backup recovery.',
        icon: 'Laptop',
        isFeatured: true,
      },
      {
        id: 'network-admin',
        projectsCount: '',
        title: 'Network Administration',
        description:
          'Konfigurasi jaringan LAN/WAN, routing & switching Mikrotik/Cisco, setup VLAN, firewall security, dan monitoring bandwidth jaringan.',
        icon: 'Network',
        isFeatured: true,
      },
      {
        id: 'cloud-devops',
        projectsCount: '',
        title: 'Cloud & Database Mgmt',
        description:
          'Manajemen database relasional (MySQL, PostgreSQL), containerization dengan Docker, serta deployment server cloud yang handal.',
        icon: 'Server',
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
    ],
    skillsData: [
      { name: 'JavaScript / TypeScript', category: 'Languages', proficiency: 92 },
      { name: 'HTML5 & CSS3 / Modern Web', category: 'Languages', proficiency: 95 },
      { name: 'PHP / Modern Stack', category: 'Languages', proficiency: 84 },
      { name: 'Python / Scripting', category: 'Languages', proficiency: 80 },
      { name: 'SQL (MySQL & Postgres)', category: 'Languages', proficiency: 88 },
      { name: 'React & Vite', category: 'Frontend & Backend', proficiency: 92 },
      { name: 'Node.js & Express', category: 'Frontend & Backend', proficiency: 86 },
      { name: 'REST API & GraphQL', category: 'Frontend & Backend', proficiency: 90 },
      { name: 'Tailwind & Modern CSS', category: 'Frontend & Backend', proficiency: 94 },
      { name: 'Linux Server (Ubuntu/Debian)', category: 'DevOps & Cloud', proficiency: 89 },
      { name: 'Docker & Containerization', category: 'DevOps & Cloud', proficiency: 82 },
      { name: 'Nginx Web Server', category: 'DevOps & Cloud', proficiency: 85 },
      { name: 'Git & GitHub Workflow', category: 'DevOps & Cloud', proficiency: 90 },
      { name: 'Mikrotik RouterOS & Winbox', category: 'Networking & Systems', proficiency: 88 },
      { name: 'Cisco Routing & Switching', category: 'Networking & Systems', proficiency: 82 },
      { name: 'VLAN, VPN & Firewall Security', category: 'Networking & Systems', proficiency: 85 },
      { name: 'Hardware Repair & Diagnostics', category: 'Networking & Systems', proficiency: 92 },
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
          'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fhost.achmadarha.site%2F?w=1280&h=720',
        demoUrl: 'https://host.achmadarha.site',
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
          'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Flppm.achmadarha.site%2F?w=1280&h=720',
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
          'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fskripsi.achmadarha.site%2F?w=1280&h=720',
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
          'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fgudang.achmadarha.site%2F?w=1280&h=720',
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
          'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1280&h=720&fit=crop',
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
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1280&h=720&fit=crop',
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
          'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1280&h=720&fit=crop',
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
      },
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
      cvUrl: '/cv-achmad-arif.pdf',
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
        scrollDown: 'Scroll Down',
        toExplore: 'to Explore',
        badgeLeft: 'Fullstack & Web Dev',
        badgeRight: 'Network & IT Systems',
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
        categories: ['All', 'Languages', 'Frontend & Backend', 'DevOps & Cloud', 'Networking & Systems'],
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
        id: 'web-dev',
        projectsCount: '',
        title: 'Web & Fullstack Dev',
        description:
          'Building interactive, responsive, and scalable web applications with React, TypeScript, Node.js, and modern REST API architectures.',
        icon: 'Code2',
        isFeatured: true,
      },
      {
        id: 'it-support',
        projectsCount: '',
        title: 'System & IT Support',
        description:
          'Hardware & software maintenance, workstation troubleshooting, Linux & Windows OS management, and automated backup recovery.',
        icon: 'Laptop',
        isFeatured: true,
      },
      {
        id: 'network-admin',
        projectsCount: 'S',
        title: 'Network Administration',
        description:
          'LAN/WAN network configuration, Mikrotik/Cisco routing & switching, VLAN setups, firewall security, and bandwidth monitoring.',
        icon: 'Network',
        isFeatured: true,
      },
      {
        id: 'cloud-devops',
        projectsCount: '',
        title: 'Cloud & Database Mgmt',
        description:
          'Relational database management (MySQL, PostgreSQL), containerization with Docker, and dependable cloud server deployment.',
        icon: 'Server',
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
    ],
    skillsData: [
      { name: 'JavaScript / TypeScript', category: 'Languages', proficiency: 92 },
      { name: 'HTML5 & CSS3 / Modern Web', category: 'Languages', proficiency: 95 },
      { name: 'PHP / Modern Stack', category: 'Languages', proficiency: 84 },
      { name: 'Python / Scripting', category: 'Languages', proficiency: 80 },
      { name: 'SQL (MySQL & Postgres)', category: 'Languages', proficiency: 88 },
      { name: 'React & Vite', category: 'Frontend & Backend', proficiency: 92 },
      { name: 'Node.js & Express', category: 'Frontend & Backend', proficiency: 86 },
      { name: 'REST API & GraphQL', category: 'Frontend & Backend', proficiency: 90 },
      { name: 'Tailwind & Modern CSS', category: 'Frontend & Backend', proficiency: 94 },
      { name: 'Linux Server (Ubuntu/Debian)', category: 'DevOps & Cloud', proficiency: 89 },
      { name: 'Docker & Containerization', category: 'DevOps & Cloud', proficiency: 82 },
      { name: 'Nginx Web Server', category: 'DevOps & Cloud', proficiency: 85 },
      { name: 'Git & GitHub Workflow', category: 'DevOps & Cloud', proficiency: 90 },
      { name: 'Mikrotik RouterOS & Winbox', category: 'Networking & Systems', proficiency: 88 },
      { name: 'Cisco Routing & Switching', category: 'Networking & Systems', proficiency: 82 },
      { name: 'VLAN, VPN & Firewall Security', category: 'Networking & Systems', proficiency: 85 },
      { name: 'Hardware Repair & Diagnostics', category: 'Networking & Systems', proficiency: 92 },
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
          'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fhost.achmadarha.site%2F?w=1280&h=720',
        demoUrl: 'https://host.achmadarha.site',
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
          'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Flppm.achmadarha.site%2F?w=1280&h=720',
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
          'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fskripsi.achmadarha.site%2F?w=1280&h=720',
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
          'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fgudang.achmadarha.site%2F?w=1280&h=720',
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
          'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1280&h=720&fit=crop',
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
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1280&h=720&fit=crop',
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
          'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1280&h=720&fit=crop',
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
      },
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
