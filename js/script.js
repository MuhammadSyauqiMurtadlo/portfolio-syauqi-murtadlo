/**
 * Portfolio interactions — vanilla JS, no dependencies.
 * Modules: theme, mobile nav, active-link tracking, scroll reveal,
 * project filter, project modal, back-to-top, contact form validation.
 */
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
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
        }
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
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );

      items.forEach((el) => observer.observe(el));
    };

    return { init };
  })();

  /* ------------------------------------------------------------------
   * Project filtering
   * ---------------------------------------------------------------- */
  const ProjectFilter = (() => {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".project-card");
    const emptyState = document.getElementById("projects-empty");

    const applyFilter = (filter) => {
      let visibleCount = 0;

      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !matches);
        if (matches) visibleCount += 1;
      });

      emptyState.hidden = visibleCount !== 0;
    };

    const init = () => {
      if (buttons.length === 0) return;

      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          buttons.forEach((b) => {
            b.classList.remove("is-active");
            b.setAttribute("aria-selected", "false");
          });
          btn.classList.add("is-active");
          btn.setAttribute("aria-selected", "true");
          applyFilter(btn.dataset.filter);
        });
      });
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
        title: "[PROJECT TITLE]",
        description: "[FULL PROJECT DESCRIPTION]",
        tags: ["[TECH]", "[TECH]", "[TECH]"],
        github: "[GITHUB URL]",
        demo: "[LIVE DEMO URL]",
      },
      "project-2": {
        title: "[PROJECT TITLE]",
        description: "[FULL PROJECT DESCRIPTION]",
        tags: ["[TECH]", "[TECH]", "[TECH]"],
        github: "[GITHUB URL]",
        demo: "[LIVE DEMO URL]",
      },
      "project-3": {
        title: "[PROJECT TITLE]",
        description: "[FULL PROJECT DESCRIPTION]",
        tags: ["[TECH]", "[TECH]", "[TECH]"],
        github: "[GITHUB URL]",
        demo: "[LIVE DEMO URL]",
      },
      "project-4": {
        title: "[PROJECT TITLE]",
        description: "[FULL PROJECT DESCRIPTION]",
        tags: ["[TECH]", "[TECH]", "[TECH]"],
        github: "[GITHUB URL]",
        demo: "[LIVE DEMO URL]",
      },
    };

    const overlay = document.getElementById("modal-overlay");
    const modal = document.getElementById("project-modal");
    const closeBtn = document.getElementById("modal-close");
    const body = document.getElementById("modal-body");
    let lastFocusedElement = null;

    const render = (id) => {
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
    };

    const trapFocus = (event) => {
      if (event.key !== "Tab") return;
      const focusable = modal.querySelectorAll(
        'button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])'
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
          value.trim().length >= 2 ? "" : "Nama minimal 2 karakter.",
      },
      email: {
        input: () => document.getElementById("email"),
        error: () => document.getElementById("email-error"),
        validate: (value) => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value.trim())
            ? ""
            : "Masukkan alamat email yang valid.";
        },
      },
      message: {
        input: () => document.getElementById("message"),
        error: () => document.getElementById("message-error"),
        validate: (value) =>
          value.trim().length >= 10 ? "" : "Pesan minimal 10 karakter.",
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
          status.textContent = "Periksa kembali isian yang belum sesuai.";
          status.style.color = "#ef6a5f";
          return;
        }

        // No backend is wired up yet — replace this with a real submission
        // (fetch to your API, a form service, mailto, etc.).
        status.style.removeProperty("color");
        status.textContent = "Pesan siap dikirim. Hubungkan form ini ke layanan email/API Anda.";
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
    Theme.init();
    MobileNav.init();
    ScrollNav.init();
    ScrollReveal.init();
    ProjectFilter.init();
    ProjectModal.init();
    BackToTop.init();
    ContactForm.init();
    setYear();
  });
})();
