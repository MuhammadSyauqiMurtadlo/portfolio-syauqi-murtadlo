(() => {
  "use strict";

  const STORAGE_KEY = "portfolio-language";
  const translations = [
    ["Skip to main content", "Lewati ke konten utama"],
    ["Return to home", "Kembali ke beranda"],
    ["Main navigation", "Navigasi utama"],
    ["About", "Tentang"],
    ["Skill", "Keahlian"],
    ["Experience", "Pengalaman"],
    ["Project", "Proyek"],
    ["Organization", "Organisasi"],
    ["Certificate", "Sertifikat"],
    ["Learning", "Pembelajaran"],
    ["Contact", "Kontak"],
    ["Change language to English", "Ganti bahasa ke bahasa Inggris"],
    ["Change language to Indonesian", "Ganti bahasa ke bahasa Indonesia"],
    ["Change appearance theme", "Ganti tema tampilan"],
    ["Open navigation menu", "Buka menu navigasi"],
    ["Introduction", "Perkenalan"],
    [
      "Fullstack Web Developer | Laravel, PHP & React JS",
      "Pengembang Web Fullstack | Laravel, PHP & React JS",
    ],
    [
      "Informatics graduate (GPA 3.61/4.00) specializing in Laravel-based web development with a backend focus, building practical applications with REST APIs, React JS, and AI integration.",
      "Lulusan Informatika (GPA 3.61/4.00) yang berfokus pada pengembangan web berbasis Laravel dengan fokus backend, membangun aplikasi praktis dengan REST APIs, React JS, dan integrasi AI.",
    ],
    ["View Project", "Lihat Proyek"],
    ["Download CV", "Unduh CV"],
    ["Social links", "Tautan sosial"],
    ["About Me", "Tentang Saya"],
    [
      "I am an Informatics graduate (GPA 3.61/4.00) and Fullstack Web Developer with a backend focus, building web applications with Laravel, PHP, and MySQL, complemented by React JS on the frontend. I enjoy creating practical, well-structured applications that address real needs.",
      "Saya adalah lulusan Informatika (GPA 3.61/4.00) dan Pengembang Web Fullstack dengan fokus backend, membangun aplikasi web dengan Laravel, PHP, dan MySQL, dilengkapi dengan React JS di frontend. Saya menikmati menciptakan aplikasi yang praktis, terstruktur dengan baik, dan merespons kebutuhan nyata.",
    ],
    [
      "I have built web applications through an internship at the Ministry of Religious Affairs Office in Jombang Regency (a hall reservation system), a freelance project (the SI-IMUT performance evaluation application), and my final project (an automated WhatsApp notification system for the campus library application, SLiMS). I work with REST APIs, JWT authentication, Eloquent ORM, Livewire, Filament, and Git & GitHub, and I am exploring LLM API integration and deployment practices.",
      "Saya telah membangun aplikasi web melalui magang di Kantor Kementerian Agama Kabupaten Jombang (sistem reservasi ruangan), proyek freelance (aplikasi evaluasi kinerja SI-IMUT), dan proyek akhir (sistem notifikasi WhatsApp otomatis untuk aplikasi perpustakaan kampus, SLiMS). Saya bekerja dengan REST APIs, autentikasi JWT, Eloquent ORM, Livewire, Filament, dan Git & GitHub, serta saya sedang mengeksplorasi integrasi LLM API dan praktik deployment.",
    ],
    ["Location", "Lokasi"],
    ["Focus", "Fokus"],
    ["Jombang, East Java, Indonesia", "Jombang, Jawa Timur, Indonesia"],
    [
      "Laravel & Fullstack Web Development",
      "Pengembangan Web Laravel & Fullstack",
    ],
    ["Education", "Pendidikan"],
    [
      "Bachelor's Degree in Informatics (GPA 3.61/4.00) – Universitas KH. A. Wahab Hasbullah",
      "Sarjana Informatika (IPK 3,61/4,00) – Universitas KH. A. Wahab Hasbullah",
    ],
    ["Status", "Status"],
    [
      "Open to Internship & Full-Time",
      "Terbuka untuk Magang & Pekerjaan Penuh Waktu",
    ],
    ["Technical Skills", "Keahlian Teknis"],
    [
      "Technologies and tools I use to build modern web applications and AI-powered solutions.",
      "Teknologi dan alat yang saya gunakan untuk membangun aplikasi web modern dan solusi berbasis AI.",
    ],
    ["AI & Integration", "AI & Integrasi"],
    ["DevOps & Tools", "DevOps & Alat"],
    [
      "Hands-on experience building practical web applications through internship and freelance development projects.",
      "Pengalaman langsung membangun aplikasi web praktis melalui proyek magang dan pengembangan freelance.",
    ],
    ["Web Developer Intern", "Magang Pengembang Web"],
    ["Dec 2025 — Feb 2026", "Des 2025 — Feb 2026"],
    [
      "Ministry of Religious Affairs, Jombang Regency Office · Jombang, East Java",
      "Kantor Kementerian Agama Kabupaten Jombang · Jombang, Jawa Timur",
    ],
    [
      "Designed and developed a web-based hall reservation and usage management system using PHP Native and MySQL, based on requirements gathered directly with supervisors and staff.",
      "Merancang dan mengembangkan sistem reservasi aula dan manajemen penggunaan berbasis web menggunakan PHP Native dan MySQL, berdasarkan kebutuhan yang dihimpun langsung bersama pembimbing dan staf.",
    ],
    [
      "Built front-end interfaces and back-end features, including booking requests, approval workflows, usage history, hall availability information to reduce scheduling conflicts, and access control for 3 user roles and 9 sections.",
      "Membangun antarmuka front-end dan fitur back-end, termasuk permintaan pemesanan, alur persetujuan, riwayat penggunaan, informasi ketersediaan aula untuk mengurangi konflik jadwal, serta kontrol akses untuk 3 peran pengguna dan 9 bagian.",
    ],
    [
      "Designed the MySQL database structure, performed system testing and debugging, and documented the development process.",
      "Merancang struktur basis data MySQL, melakukan pengujian dan debugging sistem, serta mendokumentasikan proses pengembangan.",
    ],
    ["Freelance Web Developer", "Pengembang Web Freelance"],
    ["Sept 2026 — Oct 2026", "Sep 2026 — Okt 2026"],
    [
      "SI-IMUT Performance Evaluation Project · Jombang, East Java",
      "Proyek Evaluasi Kinerja SI-IMUT · Jombang, Jawa Timur",
    ],
    [
      "Built the SI-IMUT Performance Evaluation application using Laravel and MySQL with a Contextual Inquiry approach to understand user needs.",
      "Membangun aplikasi Evaluasi Kinerja SI-IMUT menggunakan Laravel dan MySQL dengan pendekatan Contextual Inquiry untuk memahami kebutuhan pengguna.",
    ],
    [
      "Implemented modules for informant management, tasks/activities, observations, interview notes, insights, pain points, and usability findings.",
      "Mengimplementasikan modul pengelolaan informan, tugas/aktivitas, observasi, catatan wawancara, insight, kendala, dan temuan usability.",
    ],
    [
      "Developed a public usability survey (15 questions, Frequency & Impact) with Nielsen's Severity Rating per question and a results recap page.",
      "Mengembangkan survei usability publik (15 pertanyaan, Frequency & Impact) dengan Severity Rating Nielsen pada setiap pertanyaan serta halaman rekap hasil.",
    ],
    [
      "Selected web projects showcasing my experience in building practical applications across different real-world and academic contexts.",
      "Pilihan proyek web yang menunjukkan pengalaman saya membangun aplikasi praktis untuk berbagai kebutuhan nyata dan akademis.",
    ],
    ["Detail", "Rincian"],
    ["Source code", "Kode sumber"],
    [
      "Laravel-based evaluation application using Contextual Inquiry, covering informant management, observation and interview notes, evaluation results, and a public usability survey scored with Nielsen's Severity Rating.",
      "Aplikasi evaluasi berbasis Laravel dengan metode Contextual Inquiry yang mencakup pengelolaan informan, catatan observasi dan wawancara, hasil evaluasi, serta survei usability publik yang dinilai menggunakan Severity Rating Nielsen.",
    ],
    [
      "Personal finance web application with a Laravel REST API and React JS frontend that visualizes income and expenses and uses LLM API integration to generate financial insights from transaction data.",
      "Aplikasi web keuangan pribadi dengan REST API Laravel dan frontend React JS yang memvisualisasikan pemasukan dan pengeluaran serta menggunakan integrasi LLM API untuk menghasilkan insight keuangan dari data transaksi.",
    ],
    [
      "Laravel and Livewire web application for managing information on PMII activities and members.",
      "Aplikasi web Laravel dan Livewire untuk mengelola informasi kegiatan dan anggota PMII.",
    ],
    [
      "Final project: an automated WhatsApp notification system for the campus library application (SLiMS), with scheduled notifications, message templates, delivery logs, and quota monitoring.",
      "Proyek akhir: sistem notifikasi WhatsApp otomatis untuk aplikasi perpustakaan kampus (SLiMS), dengan jadwal notifikasi, templat pesan, log pengiriman, dan pemantauan kuota.",
    ],
    [
      "Web-based hall reservation system built during my internship to manage booking requests, approval workflows, schedules, and usage history for the office's operations.",
      "Sistem reservasi aula berbasis web yang dibuat selama magang untuk mengelola permintaan pemesanan, alur persetujuan, jadwal, dan riwayat penggunaan untuk operasional kantor.",
    ],
    [
      "Organizational experiences that developed my leadership, coordination, communication, and teamwork skills through various student activities.",
      "Pengalaman organisasi yang mengembangkan kemampuan kepemimpinan, koordinasi, komunikasi, dan kerja sama tim melalui berbagai kegiatan kemahasiswaan.",
    ],
    ["Religious Affairs Member", "Anggota Bidang Keagamaan"],
    [
      "Supported religious and member-development programs and collaborated with members in organizing activities.",
      "Mendukung program keagamaan dan pengembangan anggota serta bekerja sama dengan anggota dalam menyelenggarakan kegiatan.",
    ],
    ["Vice Chairman", "Wakil Ketua"],
    [
      "Coordinated program implementation across divisions together with the chairman, from planning to monitoring, and served as a liaison between the chairman and the divisions.",
      "Mengoordinasikan pelaksanaan program lintas divisi bersama ketua, mulai dari perencanaan hingga pemantauan, serta menjadi penghubung antara ketua dan divisi-divisi.",
    ],
    ["General Secretary of FTI Rayon", "Sekretaris Umum Rayon FTI"],
    [
      "Managed administration, correspondence, and document archiving, and prepared meeting minutes and activity documentation to keep information consistent across the board.",
      "Mengelola administrasi, korespondensi, dan pengarsipan dokumen, serta menyiapkan notulen rapat dan dokumentasi kegiatan agar informasi tetap konsisten di seluruh pengurus.",
    ],
    ["Organizational Affairs Member", "Anggota Bidang Organisasi"],
    [
      "Supported coordination and execution of student programs together with fellow members.",
      "Mendukung koordinasi dan pelaksanaan program mahasiswa bersama anggota lainnya.",
    ],
    [
      "Supported religious activities and program planning together with division members.",
      "Mendukung kegiatan keagamaan dan perencanaan program bersama anggota divisi.",
    ],
    [
      "A collection of courses and certifications that support my continuous learning and professional development in technology.",
      "Kumpulan kursus dan sertifikasi yang mendukung pembelajaran berkelanjutan serta pengembangan profesional saya di bidang teknologi.",
    ],
    ["View Certificate", "Lihat Sertifikat"],
    ["View All Certificates", "Lihat Semua Sertifikat"],
    ["GitHub Activity", "Aktivitas GitHub"],
    [
      "Explore my coding activity, projects, and contributions on GitHub.",
      "Lihat aktivitas pemrograman, proyek, dan kontribusi saya di GitHub.",
    ],
    ["Visit GitHub Profile", "Kunjungi Profil GitHub"],
    ["Learning Journey", "Perjalanan Belajar"],
    [
      "My journey in developing Fullstack Web Development capabilities and exploring AI integration in applications.",
      "Perjalanan saya mengembangkan kemampuan Web Fullstack dan mengeksplorasi integrasi AI dalam aplikasi.",
    ],
    ["Programming Fundamentals & Web Basics", "Dasar Pemrograman & Dasar Web"],
    [
      "Mastered fundamental programming concepts, data structures, HTML, CSS, and JavaScript. Built several static web pages and understood responsive design principles.",
      "Menguasai konsep dasar pemrograman, struktur data, HTML, CSS, dan JavaScript. Membuat beberapa halaman web statis dan memahami prinsip desain responsif.",
    ],
    ["Backend Development & Database", "Pengembangan Backend & Basis Data"],
    [
      "Built a strong foundation in PHP and Laravel: MVC architecture, relational databases, Git & GitHub, REST API development, JWT authentication, and basic security.",
      "Membangun dasar yang kuat dalam PHP dan Laravel: arsitektur MVC, basis data relasional, Git & GitHub, pengembangan REST API, autentikasi JWT, dan keamanan dasar.",
    ],
    [
      "System Development & Real-World Project",
      "Pengembangan Sistem & Proyek Nyata",
    ],
    [
      "Implementing front-end and back-end integration using RESTful APIs and third-party services. Building functional applications while addressing fundamental security aspects, and data validation.",
      "Menerapkan integrasi front-end dan back-end menggunakan RESTful API dan layanan pihak ketiga. Membangun aplikasi fungsional dengan memperhatikan aspek keamanan dasar dan validasi data.",
    ],
    ["Fullstack & AI Integration", "Fullstack & Integrasi AI"],
    [
      "Strengthening my Laravel-based fullstack skills while exploring LLM API integration, deployment, and DevOps practices.",
      "Memperkuat keterampilan fullstack berbasis Laravel sambil mengeksplorasi integrasi LLM API, deployment, dan praktik DevOps.",
    ],
    ["Contact Me", "Hubungi Saya"],
    [
      "I’m open to discussing web development opportunities, projects, and potential collaborations. Feel free to get in touch.",
      "Saya terbuka untuk berdiskusi tentang peluang pengembangan web, proyek, dan potensi kolaborasi. Silakan hubungi saya.",
    ],
    ["Phone", "Telepon"],
    ["Name", "Nama"],
    ["Message", "Pesan"],
    ["Send Message", "Kirim Pesan"],
    [
      "Muhammad Syauqi Murtadlo. All rights reserved.",
      "Muhammad Syauqi Murtadlo. Hak cipta dilindungi.",
    ],
    ["Back to top", "Kembali ke atas"],
    ["Close dialog", "Tutup dialog"],
    ["All Certificates", "Semua Sertifikat"],
    ["View demo", "Lihat demo"],
    [
      "Developed an automated WhatsApp notification system for SLiMS to streamline library notifications. The system supports scheduled notifications, customizable message templates, delivery logs, quota monitoring, and device status tracking.",
      "Mengembangkan sistem notifikasi WhatsApp otomatis untuk SLiMS guna menyederhanakan notifikasi perpustakaan. Sistem ini mendukung penjadwalan notifikasi, templat pesan yang dapat disesuaikan, log pengiriman, pemantauan kuota, dan status perangkat.",
    ],
    [
      "Developed a web-based hall reservation system during an internship at the Ministry of Religious Affairs of Jombang Regency. The system manages reservation requests, approval workflows, schedules, and hall usage history to support daily operational needs.",
      "Mengembangkan sistem reservasi aula berbasis web selama magang di Kementerian Agama Kabupaten Jombang. Sistem ini mengelola permintaan reservasi, alur persetujuan, jadwal, dan riwayat penggunaan aula untuk mendukung kebutuhan operasional.",
    ],
    [
      "Developing a web-based performance evaluation system using Laravel to support evaluation activities based on the Contextual Inquiry method. The system manages informants, tasks, observations, interview notes, findings, and evaluation results.",
      "Mengembangkan sistem evaluasi kinerja berbasis web menggunakan Laravel untuk mendukung kegiatan evaluasi dengan metode Contextual Inquiry. Sistem ini mengelola informan, tugas, observasi, catatan wawancara, temuan, dan hasil evaluasi.",
    ],
    [
      "Developed an AI-powered personal finance analyzer using React JS and Laravel. The system analyzes users' financial data, provides insights, and offers recommendations for better financial management.",
      "Mengembangkan penganalisis keuangan pribadi berbasis AI menggunakan React JS dan Laravel. Sistem ini menganalisis data keuangan pengguna, memberikan wawasan, dan menawarkan rekomendasi untuk pengelolaan keuangan yang lebih baik.",
    ],
    [
      "Developed a web-based organizational information system for PMII using Laravel. The system manages member data, organizational structure, event scheduling, and communication tools to enhance organizational efficiency.",
      "Mengembangkan sistem informasi organisasi berbasis web untuk PMII menggunakan Laravel. Sistem ini mengelola data anggota, struktur organisasi, jadwal acara, dan alat komunikasi untuk meningkatkan efisiensi organisasi.",
    ],
    ["Nama minimal 2 karakter.", "Name must be at least 2 characters."],
    ["Masukkan alamat email yang valid.", "Enter a valid email address."],
    ["Pesan minimal 10 karakter.", "Message must be at least 10 characters."],
    [
      "Periksa kembali isian yang belum sesuai.",
      "Please check the fields that need correction.",
    ],
    [
      "Pesan siap dikirim. Hubungkan form ini ke layanan email/API Anda.",
      "Your message is ready to send. Connect this form to an email/API service.",
    ],
  ];

  const englishToIndonesian = new Map(translations);
  const indonesianToEnglish = new Map(
    translations.map(([english, indonesian]) => [indonesian, english]),
  );
  const sourceText = new WeakMap();
  let currentLanguage = "id";
  const imageAltTranslations = [
    ["Foto profil [YOUR NAME]", "Profile photo [YOUR NAME]"],
    ["Tangkapan layar [PROJECT TITLE]", "Screenshot [PROJECT TITLE]"],
    ["Sertifikat [CERTIFICATE NAME]", "Certificate [CERTIFICATE NAME]"],
    [
      "Statistik kontribusi GitHub [YOUR NAME]",
      "GitHub contribution statistics [YOUR NAME]",
    ],
    [
      "Grafik kontribusi GitHub [YOUR NAME]",
      "GitHub contributions chart [YOUR NAME]",
    ],
  ];

  const translateValue = (value, language) => {
    const trimmed = value.trim().replace(/\s+/g, " ");
    const translation =
      language === "id"
        ? englishToIndonesian.get(trimmed)
        : indonesianToEnglish.get(trimmed);
    if (translation === undefined) return value;
    return `${value.match(/^\s*/)[0]}${translation}${value.match(/\s*$/)[0]}`;
  };

  const translateSubtree = (container, language = currentLanguage) => {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement.closest("code, .code-window, script, style")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!sourceText.has(node)) sourceText.set(node, node.nodeValue);
      node.nodeValue = translateValue(sourceText.get(node), language);
    }

    container.querySelectorAll("img[alt]").forEach((image) => {
      const pair = imageAltTranslations.find((values) =>
        values.includes(image.getAttribute("alt")),
      );
      if (pair) image.alt = pair[language === "id" ? 0 : 1];
    });
  };

  const apply = (language) => {
    currentLanguage = language;
    translateSubtree(document.body, language);
    const accessibleLabels = {
      "skip-link": ["Lewati ke konten utama", "Skip to main content"],
      "navbar-brand": ["Kembali ke beranda", "Return to home"],
      "primary-nav": ["Navigasi utama", "Main navigation"],
      hero: ["Perkenalan", "Introduction"],
      "hero-social": ["Tautan sosial", "Social links"],
      "back-to-top": ["Kembali ke atas", "Back to top"],
      "modal-close": ["Tutup dialog", "Close dialog"],
      "theme-toggle": ["Ganti tema tampilan", "Change appearance theme"],
      hamburger: ["Buka menu navigasi", "Open navigation menu"],
    };

    Object.entries(accessibleLabels).forEach(([id, labels]) => {
      const element = document.getElementById(id);
      if (element) {
        element.setAttribute("aria-label", labels[language === "id" ? 0 : 1]);
      }
    });

    document.documentElement.lang = language;
    const toggle = document.getElementById("language-toggle");
    toggle.textContent = language === "id" ? "EN" : "ID";
    toggle.setAttribute(
      "aria-label",
      language === "id"
        ? "Ganti bahasa ke bahasa Inggris"
        : "Ganti bahasa ke bahasa Indonesia",
    );
    toggle.setAttribute("aria-pressed", language === "en" ? "true" : "false");
    toggle.title = toggle.getAttribute("aria-label");

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content =
        language === "id"
          ? "Portofolio profesional Muhammad Syauqi Murtadlo, Pengembang Web Fullstack yang berfokus membangun aplikasi web yang cepat, rapi, dan mudah dirawat."
          : "Professional portfolio of Muhammad Syauqi Murtadlo, a Fullstack Web Developer focused on building fast, clean, and maintainable web applications.";
    }
    document.title =
      language === "id"
        ? "Syauqi — Pengembang Web Fullstack"
        : "Syauqi — Fullstack Web Developer";
  };

  const init = () => {
    let storedLanguage = null;
    try {
      storedLanguage = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      storedLanguage = null;
    }

    apply(storedLanguage === "id" ? "id" : "en");
    document.getElementById("language-toggle").addEventListener("click", () => {
      const nextLanguage = currentLanguage === "id" ? "en" : "id";
      apply(nextLanguage);
      try {
        localStorage.setItem(STORAGE_KEY, nextLanguage);
      } catch (error) {
        // The current page still switches language when storage is unavailable.
      }
    });
  };

  window.PortfolioLanguage = {
    init,
    translateSubtree,
    translateValue,
    get current() {
      return currentLanguage;
    },
  };
})();
