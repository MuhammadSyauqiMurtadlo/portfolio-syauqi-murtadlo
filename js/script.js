/**
 * Portfolio interactions — vanilla JS, no dependencies.
 * Modules: theme, mobile nav, active-link tracking, scroll reveal,
 * project and certificate modals, back-to-top, contact form validation.
 */
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* ------------------------------------------------------------------
   * Theme (dark navy default / light) — persisted in localStorage
   * ---------------------------------------------------------------- */
  const Theme = (() => {
    const STORAGE_KEY = "portfolio-theme";
    const root = document.documentElement;
    const toggleBtn = document.getElementById("theme-toggle");

    const getStored = () => {
      try {
        return localStorage.getItem(STORAGE_KEY);
      } catch (err) {
        return null;
      }
    };

    const setStored = (value) => {
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch (err) {
        /* localStorage unavailable (private mode, etc.) — fail silently */
      }
    };

    const apply = (theme) => {
      if (theme === "light") {
        root.setAttribute("data-theme", "light");
        toggleBtn.setAttribute("aria-pressed", "true");
      } else {
        root.setAttribute("data-theme", "dark");
        toggleBtn.setAttribute("aria-pressed", "false");
      }
    };

    const init = () => {
      // Default is dark navy regardless of system preference,
      // unless the user has explicitly chosen light before.
      const stored = getStored();
      apply(stored === "light" ? "light" : "dark");

      toggleBtn.addEventListener("click", () => {
        const isLight = root.getAttribute("data-theme") === "light";
        const next = isLight ? "dark" : "light";
        apply(next);
        setStored(next);
      });
    };

    return { init };
  })();

  /* ------------------------------------------------------------------
   * Mobile navigation (hamburger menu)
   * ---------------------------------------------------------------- */
  const MobileNav = (() => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("primary-nav");
    let isOpen = false;

    const close = () => {
      isOpen = false;
      nav.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    };

    const open = () => {
      isOpen = true;
      nav.classList.add("is-open");
      hamburger.setAttribute("aria-expanded", "true");
    };

    const toggle = () => (isOpen ? close() : open());

    const init = () => {
      hamburger.addEventListener("click", toggle);

      nav.querySelectorAll(".navbar__link").forEach((link) => {
        link.addEventListener("click", close);
      });

      document.addEventListener("click", (event) => {
        if (!isOpen) return;
        const clickedInsideNav = nav.contains(event.target);
        const clickedHamburger = hamburger.contains(event.target);
        if (!clickedInsideNav && !clickedHamburger) close();
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && isOpen) {
          close();
          hamburger.focus();
        }
      });

      // Close automatically if the viewport grows back to desktop size.
      window.addEventListener("resize", () => {
        if (window.innerWidth > 860 && isOpen) close();
      });
    };

    return { init };
  })();

  /* ------------------------------------------------------------------
   * Smooth scroll with fixed-navbar offset + active link tracking
   * ---------------------------------------------------------------- */
  const ScrollNav = (() => {
    const navLinks = Array.from(document.querySelectorAll(".navbar__link"));
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    const navbar = document.getElementById("navbar");

    const setActive = (id) => {
      navLinks.forEach((link) => {
        const match = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", match);
        if (match) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const initSmoothScroll = () => {
      navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
          const targetId = link.getAttribute("href");
          const target = document.querySelector(targetId);
          if (!target) return;
          event.preventDefault();

          const navHeight = navbar.offsetHeight;
          const top =
            target.getBoundingClientRect().top + window.scrollY - navHeight + 1;

          window.scrollTo({
            top,
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });

          history.pushState(null, "", targetId);
        });
      });
    };

    const initActiveTracking = () => {
      if (!("IntersectionObserver" in window) || sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        {
          rootMargin: `-${navbar.offsetHeight + 20}px 0px -55% 0px`,
          threshold: 0,
        },
      );

      sections.forEach((section) => observer.observe(section));
    };

    const init = () => {
      initSmoothScroll();
      initActiveTracking();
    };

    return { init };
  })();

  /* ------------------------------------------------------------------
   * Scroll reveal animation (IntersectionObserver)
   * ---------------------------------------------------------------- */
  const ScrollReveal = (() => {
    const init = () => {
      const items = document.querySelectorAll(".reveal");

      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        items.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
      );

      items.forEach((el) => observer.observe(el));
    };

    return { init };
  })();

  /* ------------------------------------------------------------------
   * Project detail modal
   * ---------------------------------------------------------------- */
  const ProjectModal = (() => {
    // Placeholder content per project — replace with your real project data.
    const projectData = {
      "project-1": {
        title: "Automated WhatsApp Notification System for SLiMS",
        description:
          "Developed an automated WhatsApp notification system for SLiMS to streamline library notifications. The system supports scheduled notifications, customizable message templates, delivery logs, quota monitoring, and device status tracking.",
        tags: ["PHP", "MySQL", "WhatsApp API"],
        github:
          "https://github.com/MuhammadSyauqiMurtadlo/slims-9.6.1-2025.git",
        demo: "[LIVE DEMO URL]",
      },
      "project-2": {
        title: "Kemenag Hall Reservation System",
        description:
          "Developed a web-based hall reservation system during an internship at the Ministry of Religious Affairs of Jombang Regency. The system manages reservation requests, approval workflows, schedules, and hall usage history to support daily operational needs.",
        tags: ["PHP Native", "MySQL", "Javascript"],
        github:
          "https://github.com/MuhammadSyauqiMurtadlo/aula-kemenag-jombang.git",
        demo: "[LIVE DEMO URL]",
      },
      "project-3": {
        title: "SI-IMUT Performance Evaluation System",
        description:
          "Developing a web-based performance evaluation system using Laravel to support evaluation activities based on the Contextual Inquiry method. The system manages informants, tasks, observations, interview notes, findings, and evaluation results.",
        tags: ["Laravel", "MySQL", "Bootstrap"],
        github:
          "https://github.com/MuhammadSyauqiMurtadlo/evaluasi-kinerja-siimut.git",
        demo: "[LIVE DEMO URL]",
      },
      "project-4": {
        title: "AI Personal Finance Analyzer",
        description:
          "Developed an AI-powered personal finance analyzer using React JS and Laravel. The system analyzes users' financial data, provides insights, and offers recommendations for better financial management.",
        tags: ["AI", "React JS", "Laravel"],
        github:
          "https://github.com/MuhammadSyauqiMurtadlo/ai-finance-analyzer-frontend.git",
        demo: "[LIVE DEMO URL]",
      },
      "project-5": {
        title: "PMII Organizational Information System",
        description:
          "Developed a web-based organizational information system for PMII using Laravel. The system manages member data, organizational structure, event scheduling, and communication tools to enhance organizational efficiency.",
        tags: ["Laravel", "MySQL", "Bootstrap"],
        github:
          "https://github.com/MuhammadSyauqiMurtadlo/pmii-organizational-information-system.git",
        demo: "[LIVE DEMO URL]",
      },
    };

    const overlay = document.getElementById("modal-overlay");
    const modal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close");
    const body = document.getElementById("modal-body");
    let lastFocusedElement = null;

    const render = (id) => {
      if (id === "all-certificates") {
        const certificates = [
          {
            name: "Algoritma dan Pemrograman Dasar",
            issuer: "CodePolitan",
            year: "2023",
            image: "/img/sertifikat/all-sertifikat/codepolitan-01.jpg",
            url: "https://codepolitan.com/c/1ZMXJDL",
          },
          {
            name: "Belajar Bootstrap CSS Framework",
            issuer: "CodePolitan",
            year: "2023",
            image: "/img/sertifikat/all-sertifikat/codepolitan-02.jpg",
            url: "https://codepolitan.com/c/V56VNWT",
          },
          {
            name: "Dasar CSS",
            issuer: "CodePolitan",
            year: "2023",
            image: "/img/sertifikat/all-sertifikat/codepolitan-03.jpg",
            url: "https://codepolitan.com/c/QC6PEJZ",
          },
          {
            name: "Belajar Dasar HTML",
            issuer: "CodePolitan",
            year: "2023",
            image: "/img/sertifikat/all-sertifikat/codepolitan-04.jpg",
            url: "https://codepolitan.com/c/AE8DDGL",
          },
          {
            name: "Belajar Node.js dan NPM",
            issuer: "CodePolitan",
            year: "2025",
            image: "/img/sertifikat/all-sertifikat/codepolitan-05.jpg",
            url: "https://codepolitan.com/c/QHZ35VN",
          },
          {
            name: "Framework Laravel Dasar",
            issuer: "CodePolitan",
            year: "2024",
            image: "/img/sertifikat/all-sertifikat/codepolitan-06.jpg",
            url: "https://codepolitan.com/c/M8JCOMZ",
          },
          {
            name: "Belajar GIT Lanjutan",
            issuer: "CodePolitan",
            year: "2023",
            image: "/img/sertifikat/all-sertifikat/codepolitan-07.jpg",
            url: "https://codepolitan.com/c/LO5AVBN",
          },
          {
            name: "Belajar Git Pemula",
            issuer: "CodePolitan",
            year: "2025",
            image: "/img/sertifikat/all-sertifikat/codepolitan-08.jpg",
            url: "https://codepolitan.com/c/HKCE5AS",
          },
          {
            name: "Belajar JavaScript",
            issuer: "CodePolitan",
            year: "2023",
            image: "/img/sertifikat/all-sertifikat/codepolitan-09.jpg",
            url: "https://codepolitan.com/c/AO8HNRM",
          },
          {
            name: "Belajar Konsep OOP di JavaScript",
            issuer: "CodePolitan",
            year: "2026",
            image: "/img/sertifikat/all-sertifikat/codepolitan-10.jpg",
            url: "https://codepolitan.com/c/GMCV1FH",
          },
          {
            name: "Menggunakan Terminal atau CMD untuk Development",
            issuer: "CodePolitan",
            year: "2025",
            image: "/img/sertifikat/all-sertifikat/codepolitan-11.jpg",
            url: "https://codepolitan.com/c/CLGDPYK",
          },
          {
            name: "Pemrograman PHP",
            issuer: "CodePolitan",
            year: "2025",
            image: "/img/sertifikat/all-sertifikat/codepolitan-12.jpg",
            url: "https://codepolitan.com/c/RCQKRLV",
          },
          {
            name: "Mahir menggunakan Text Editor buat Pemula",
            issuer: "CodePolitan",
            year: "2023",
            image: "/img/sertifikat/all-sertifikat/codepolitan-13.jpg",
            url: "https://codepolitan.com/c/VLDRCR3",
          },
          {
            name: "Mengenal Pemrograman Komputer",
            issuer: "CodePolitan",
            year: "2023",
            image: "/img/sertifikat/all-sertifikat/codepolitan-14.jpg",
            url: "https://codepolitan.com/c/HKNECKH",
          },
          {
            name: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding",
            year: "2026",
            image: "/img/sertifikat/all-sertifikat/dicoding-01.jpg",
            url: "https://www.dicoding.com/certificates/QLZ99GL4MZ5D",
          },
          {
            name: "Membuat Front-End Web untuk Pemula",
            issuer: "Dicoding",
            year: "2026",
            image: "/img/sertifikat/all-sertifikat/dicoding-02.jpg",
            url: "https://www.dicoding.com/certificates/53XE1R370ZRN",
          },
          {
            name: "Penggunaan Generative AI",
            issuer: "Dicoding",
            year: "2026",
            image: "/img/sertifikat/all-sertifikat/dicoding-03.jpg",
            url: "https://www.dicoding.com/certificates/1OP8ROJ61ZQK",
          },
          {
            name: "Webinar Series #131 - Agentic AI",
            issuer: "Dunia Coding",
            year: "2026",
            image: "/img/sertifikat/all-sertifikat/dunia-coding.jpg",
            url: "",
          },
          {
            name: "IBM Granite Models for Software Development",
            issuer: "IBM SkillsBuild",
            year: "2026",
            image: "/img/sertifikat/all-sertifikat/ibm-01.jpg",
            url: "",
          },
          {
            name: "Intelligent by Design: Build an AI Agent",
            issuer: "IBM SkillsBuild",
            year: "2026",
            image: "/img/sertifikat/all-sertifikat/ibm-02.jpg",
            url: "",
          },
          {
            name: "Introduction to Large Language Models",
            issuer: "IBM SkillsBuild",
            year: "2026",
            image: "/img/sertifikat/all-sertifikat/ibm-03.jpg",
            url: "",
          },
          {
            name: "Lab: Troubleshoot Your Code Using IBM Bob",
            issuer: "IBM SkillsBuild",
            year: "2026",
            image: "/img/sertifikat/all-sertifikat/ibm-04.jpg",
            url: "",
          },
        ];

        body.innerHTML = `
  <h3 id="modal-title">All Certificates</h3>
  <div class="cert__grid" id="additional-certificates-list">
    ${certificates
      .map((certificate) => {
        const cardTag = certificate.url ? "a" : "article";
        const linkAttributes = certificate.url
          ? `href="${certificate.url}" target="_blank" rel="noopener noreferrer"`
          : "";

        return `
          <${cardTag} class="cert-card" ${linkAttributes}>
            <div class="cert-card__thumb">
              <img
                src="${certificate.image}"
                alt="Sertifikat ${certificate.name}"
                loading="lazy"
                width="320"
                height="220"
              />
            </div>
            <div class="cert-card__body">
              <h4 class="cert-card__title">${certificate.name}</h4>
              <p class="cert-card__issuer">
                ${certificate.issuer} · ${certificate.year}
              </p>
              ${
                certificate.url
                  ? `<span class="btn btn--primary btn--sm cert-card__button">
                View Certificate
              </span>`
                  : ""
              }
            </div>
          </${cardTag}>
        `;
      })
      .join("")}
  </div>
`;
        window.PortfolioLanguage.translateSubtree(body);
        return;
      }

      const data = projectData[id];
      if (!data) return;

      body.innerHTML = `
        <h3 id="modal-title">${data.title}</h3>
        <p>${data.description}</p>
        <ul class="project-card__tags">
          ${data.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
        <div class="project-card__actions">
          <a class="btn btn--sm btn--primary" href="${data.demo}" target="_blank" rel="noopener noreferrer">Lihat demo</a>
          <a class="btn btn--sm btn--ghost" href="${data.github}" target="_blank" rel="noopener noreferrer">Kode sumber</a>
        </div>
      `;
      window.PortfolioLanguage.translateSubtree(body);
    };

    const trapFocus = (event) => {
      if (event.key !== "Tab") return;
      const focusable = modal.querySelectorAll(
        'button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const close = () => {
      overlay.classList.remove("is-open");
      document.body.style.removeProperty("overflow");
      setTimeout(() => {
        overlay.hidden = true;
      }, 200);
      document.removeEventListener("keydown", onKeydown);
      if (lastFocusedElement) lastFocusedElement.focus();
    };

    function onKeydown(event) {
      if (event.key === "Escape") close();
      trapFocus(event);
    }

    const open = (id, trigger) => {
      lastFocusedElement = trigger;
      render(id);
      overlay.hidden = false;
      // Force reflow so the transition runs.
      void overlay.offsetWidth;
      overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
      document.addEventListener("keydown", onKeydown);
    };

    const init = () => {
      document.querySelectorAll("[data-modal-trigger]").forEach((trigger) => {
        trigger.addEventListener("click", () => {
          open(trigger.dataset.modalTrigger, trigger);
        });
      });

      closeBtn.addEventListener("click", close);

      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) close();
      });
    };

    return { init };
  })();

  /* ------------------------------------------------------------------
   * Back to top button
   * ---------------------------------------------------------------- */
  const BackToTop = (() => {
    const btn = document.getElementById("back-to-top");

    const init = () => {
      const toggleVisibility = () => {
        btn.classList.toggle("is-visible", window.scrollY > 480);
      };

      window.addEventListener("scroll", toggleVisibility, { passive: true });
      toggleVisibility();

      btn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      });
    };

    return { init };
  })();

  /* ------------------------------------------------------------------
   * Contact form validation (client-side only, no backend wired up)
   * ---------------------------------------------------------------- */
  const ContactForm = (() => {
    const form = document.getElementById("contact-form");

    const fields = {
      name: {
        input: () => document.getElementById("name"),
        error: () => document.getElementById("name-error"),
        validate: (value) =>
          value.trim().length >= 2
            ? ""
            : window.PortfolioLanguage.translateValue(
                "Nama minimal 2 karakter.",
                window.PortfolioLanguage.current,
              ),
      },
      email: {
        input: () => document.getElementById("email"),
        error: () => document.getElementById("email-error"),
        validate: (value) => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value.trim())
            ? ""
            : window.PortfolioLanguage.translateValue(
                "Masukkan alamat email yang valid.",
                window.PortfolioLanguage.current,
              );
        },
      },
      message: {
        input: () => document.getElementById("message"),
        error: () => document.getElementById("message-error"),
        validate: (value) =>
          value.trim().length >= 10
            ? ""
            : window.PortfolioLanguage.translateValue(
                "Pesan minimal 10 karakter.",
                window.PortfolioLanguage.current,
              ),
      },
    };

    const validateField = (key) => {
      const { input, error, validate } = fields[key];
      const inputEl = input();
      const errorEl = error();
      const message = validate(inputEl.value);

      inputEl.closest(".form-field").classList.toggle("has-error", !!message);
      errorEl.textContent = message;
      if (message) {
        inputEl.setAttribute("aria-invalid", "true");
      } else {
        inputEl.removeAttribute("aria-invalid");
      }

      return message === "";
    };

    const init = () => {
      if (!form) return;

      Object.keys(fields).forEach((key) => {
        const inputEl = fields[key].input();
        inputEl.addEventListener("blur", () => validateField(key));
        inputEl.addEventListener("input", () => {
          if (inputEl.closest(".form-field").classList.contains("has-error")) {
            validateField(key);
          }
        });
      });

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const results = Object.keys(fields).map((key) => validateField(key));
        const isValid = results.every(Boolean);
        const status = document.getElementById("form-status");

        if (!isValid) {
          status.textContent = window.PortfolioLanguage.translateValue(
            "Periksa kembali isian yang belum sesuai.",
            window.PortfolioLanguage.current,
          );
          status.style.color = "#ef6a5f";
          return;
        }

        // No backend is wired up yet — replace this with a real submission
        // (fetch to your API, a form service, mailto, etc.).
        status.style.removeProperty("color");
        status.textContent = window.PortfolioLanguage.translateValue(
          "Pesan siap dikirim. Hubungkan form ini ke layanan email/API Anda.",
          window.PortfolioLanguage.current,
        );
        form.reset();
      });
    };

    return { init };
  })();

  /* ------------------------------------------------------------------
   * Misc: current year in footer
   * ---------------------------------------------------------------- */
  const setYear = () => {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  };

  /* ------------------------------------------------------------------
   * Init
   * ---------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    window.PortfolioLanguage.init();
    Theme.init();
    MobileNav.init();
    ScrollNav.init();
    ScrollReveal.init();
    ProjectModal.init();
    BackToTop.init();
    ContactForm.init();
    setYear();
  });
})();
