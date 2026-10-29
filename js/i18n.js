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
      "Fullstack Web Developer | AI Engineering Enthusiast",
      "Pengembang Web Fullstack | Penggemar Rekayasa AI",
    ],
    [
      "Informatics graduate focused on fullstack web development, building practical applications and integrating AI into modern web solutions.",
      "Lulusan Informatika yang berfokus pada pengembangan web fullstack, membangun aplikasi praktis, dan mengintegrasikan AI ke dalam solusi web modern.",
    ],
    ["View Project", "Lihat Proyek"],
    ["Download CV", "Unduh CV"],
    ["Social links", "Tautan sosial"],
    ["About Me", "Tentang Saya"],
    [
      "I am an Informatics graduate focused on building modern web applications as a Fullstack Web Developer. I enjoy creating practical, well-structured, and responsive applications that address real-world needs.",
      "Saya adalah lulusan Informatika yang berfokus membangun aplikasi web modern sebagai Pengembang Web Fullstack. Saya senang membuat aplikasi yang praktis, terstruktur dengan baik, dan responsif untuk menjawab kebutuhan nyata.",
    ],
    [
      "Currently, I am deepening my expertise in Laravel, React, JavaScript, PHP, databases, and REST APIs while exploring AI integration for modern web applications. I continuously improve my skills through hands-on projects, practical experience, and continuous learning as I prepare to grow my career in the technology industry.",
      "Saat ini, saya memperdalam keahlian Laravel, React, JavaScript, PHP, basis data, dan REST API, sekaligus mengeksplorasi integrasi AI untuk aplikasi web modern. Saya terus mengembangkan kemampuan melalui proyek langsung, pengalaman praktis, dan pembelajaran berkelanjutan sebagai persiapan untuk berkarier di industri teknologi.",
    ],
    ["Location", "Lokasi"],
    ["Focus", "Fokus"],
    [
      "Fullstack Development, AI-Powered Applications",
      "Pengembangan Fullstack, Aplikasi Berbasis AI",
    ],
    ["Education", "Pendidikan"],
    [
      "Bachelor's Degree in Informatics - Universitas KH. A. Wahab Hasbullah",
      "Sarjana Informatika - Universitas KH. A. Wahab Hasbullah",
    ],
    ["Status", "Status"],
    ["Open to Work", "Terbuka untuk Peluang Kerja"],
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
    ["Dec 2025 — Jan 2026", "Des 2025 — Jan 2026"],
    [
      "Ministry of Religious Affairs of Jombang Regency · Jombang",
      "Kementerian Agama Kabupaten Jombang · Jombang",
    ],
    [
      "Developed a web-based Hall Reservation Management System using PHP Native and MySQL.",
      "Mengembangkan Sistem Manajemen Reservasi Aula berbasis web menggunakan PHP Native dan MySQL.",
    ],
    [
      "Implemented features for booking requests, data management, approval workflows, and usage history.",
      "Menerapkan fitur permintaan pemesanan, pengelolaan data, alur persetujuan, dan riwayat penggunaan.",
    ],
    [
      "Contributed to database design and application development for operational use.",
      "Berkontribusi dalam perancangan basis data dan pengembangan aplikasi untuk kebutuhan operasional.",
    ],
    ["Freelance Web Developer", "Pengembang Web Freelance"],
    ["Sept 2026 — Present", "Sep 2026 — Sekarang"],
    [
      "SI-IMUT Performance Evaluation Project · Remote",
      "Proyek Evaluasi Kinerja SI-IMUT · Jarak jauh",
    ],
    [
      "Developing a web-based SI-IMUT Performance Evaluation System using Laravel.",
      "Mengembangkan Sistem Evaluasi Kinerja SI-IMUT berbasis web menggunakan Laravel.",
    ],
    [
      "Implementing an evaluation workflow based on the Contextual Inquiry method.",
      "Menerapkan alur evaluasi berdasarkan metode Contextual Inquiry.",
    ],
    [
      "Developing features for informant management, tasks/activities, observations, interview notes, and evaluation results.",
      "Mengembangkan fitur pengelolaan informan, tugas/aktivitas, observasi, catatan wawancara, dan hasil evaluasi.",
    ],
    [
      "Selected web projects showcasing my experience in building practical applications across different real-world and academic contexts.",
      "Pilihan proyek web yang menunjukkan pengalaman saya membangun aplikasi praktis untuk berbagai kebutuhan nyata dan akademis.",
    ],
    ["Detail", "Rincian"],
    ["Source code", "Kode sumber"],
    ["Kode sumber", "Source code"],
    [
      "Developed an automated WhatsApp notification system for library services, featuring scheduled notifications, message templates, delivery logs, and quota monitoring.",
      "Mengembangkan sistem notifikasi WhatsApp otomatis untuk layanan perpustakaan dengan fitur jadwal notifikasi, templat pesan, log pengiriman, dan pemantauan kuota.",
    ],
    [
      "Developed a web-based hall reservation system to manage booking requests, approval workflows, schedules, and usage history for operational needs.",
      "Mengembangkan sistem reservasi aula berbasis web untuk mengelola permintaan pemesanan, alur persetujuan, jadwal, dan riwayat penggunaan.",
    ],
    [
      "Developing a web-based evaluation system based on Contextual Inquiry, supporting informant management, task observation, interview notes, and evaluation results.",
      "Mengembangkan sistem evaluasi berbasis web dengan metode Contextual Inquiry yang mendukung pengelolaan informan, observasi tugas, catatan wawancara, dan hasil evaluasi.",
    ],
    [
      "A web application that uses AI to analyze personal financial data and provide insights for better financial management.",
      "Aplikasi web yang menggunakan AI untuk menganalisis data keuangan pribadi dan memberikan wawasan untuk pengelolaan keuangan yang lebih baik.",
    ],
    [
      "A web application for managing and organizing information related to PMII activities and members.",
      "Aplikasi web untuk mengelola dan mengorganisasi informasi terkait kegiatan dan anggota PMII.",
    ],
    [
      "Organizational experiences that developed my leadership, coordination, communication, and teamwork skills through various student activities.",
      "Pengalaman organisasi yang mengembangkan kemampuan kepemimpinan, koordinasi, komunikasi, dan kerja sama tim melalui berbagai kegiatan kemahasiswaan.",
    ],
    ["Religious Affairs Member", "Anggota Bidang Keagamaan"],
    [
      "Supported religious affairs programs, participated in religious and member development activities, and collaborated with members in organizing organizational programs.",
      "Mendukung program bidang keagamaan, berpartisipasi dalam kegiatan keagamaan dan pengembangan anggota, serta bekerja sama dalam menyelenggarakan program organisasi.",
    ],
    ["Vice Chairman", "Wakil Ketua"],
    [
      "Assisted in organizational leadership, coordinated internal activities, and supported the implementation of organizational programs.",
      "Membantu kepemimpinan organisasi, mengoordinasikan kegiatan internal, dan mendukung pelaksanaan program organisasi.",
    ],
    ["General Secretary of FTI Rayon", "Sekretaris Umum Rayon FTI"],
    [
      "Managed organizational administration and documentation, supported program coordination, and contributed to planning and executing organizational activities.",
      "Mengelola administrasi dan dokumentasi organisasi, mendukung koordinasi program, serta berkontribusi dalam perencanaan dan pelaksanaan kegiatan organisasi.",
    ],
    ["Organizational Affairs Member", "Anggota Bidang Organisasi"],
    [
      "Supported organizational coordination and program execution, contributed to student activities, and collaborated with organizational members.",
      "Mendukung koordinasi organisasi dan pelaksanaan program, berkontribusi dalam kegiatan mahasiswa, serta bekerja sama dengan anggota organisasi.",
    ],
    [
      "Supported religious activities, contributed to program planning, and collaborated with division members in carrying out organizational programs.",
      "Mendukung kegiatan keagamaan, berkontribusi dalam perencanaan program, dan bekerja sama dengan anggota divisi dalam menjalankan program organisasi.",
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
    [
      "Programming Fundamentals & Web Basics",
      "Dasar Pemrograman & Dasar Web",
    ],
    [
      "Mastered fundamental programming concepts, data structures, HTML, CSS, and JavaScript. Built several static web pages and understood responsive design principles.",
      "Menguasai konsep dasar pemrograman, struktur data, HTML, CSS, dan JavaScript. Membuat beberapa halaman web statis dan memahami prinsip desain responsif.",
    ],
    [
      "Backend Development & Database",
      "Pengembangan Backend & Basis Data",
    ],
    [
      "Delving into PHP and the Laravel framework. Learning MVC architecture, relational database management, Git & GitHub, RESTful API development, as well as authentication mechanisms and basic security.",
      "Mendalami PHP dan framework Laravel. Mempelajari arsitektur MVC, pengelolaan basis data relasional, Git & GitHub, pengembangan RESTful API, mekanisme autentikasi, serta keamanan dasar.",
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
      "Strengthening capabilities as a Full-Stack Web Developer while developing competencies in AI engineering, AI integration into web applications, and deployment and DevOps practices.",
      "Memperkuat kemampuan sebagai Pengembang Web Fullstack sekaligus mengembangkan kompetensi rekayasa AI, integrasi AI ke aplikasi web, deployment, dan praktik DevOps.",
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
    ["Lihat demo", "View demo"],
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

    apply(storedLanguage === "en" ? "en" : "id");
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
