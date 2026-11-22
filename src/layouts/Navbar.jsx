import React, { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data/portfolioData";
import { scrollToTarget } from "../utils/scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeUnavailable, setResumeUnavailable] = useState(false);
  const resumeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 769px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(href);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    setOpen(false);
    setResumeUnavailable(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setResumeUnavailable(false), 3500);
  };

  return (
    <header
      className={`navbar ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}
      data-testid="navbar"
    >
      <div className="navbar__inner glass-strong">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="navbar__brand"
          data-testid="brand-link"
        >
          <span className="navbar__brand-dot" aria-hidden="true">
            <span className="navbar__brand-dot-pulse" />
          </span>
          <span className="navbar__brand-name">
            Ali<span className="navbar__brand-accent">.dev</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              data-nav-id={link.id}
              onClick={(e) => handleNavClick(e, link.href)}
              className="navbar__link"
              data-testid={`nav-link-${link.id}`}
            >
              <span className="navbar__link-text">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            className="navbar__resume btn btn--resume btn--small"
            onClick={handleResumeClick}
            data-testid="navbar-resume-btn"
            aria-label="Download Resume"
          >
            <i className="fa-solid fa-file-arrow-down" aria-hidden="true" />
            <span>Resume</span>
          </a>
          <a
            className="navbar__cta btn btn--primary btn--small"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rabbiboy226@gmail.com"
            target="_blank"
            rel="noreferrer"
            data-testid="navbar-contact-cta"
          >
            <span>Let's talk</span>
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((p) => !p)}
          data-testid="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`navbar__drawer glass-strong ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="navbar__drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="navbar__drawer-link"
              data-testid={`mobile-nav-link-${link.id}`}
            >
              <span>{link.label}</span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          ))}
          <a
            className="btn btn--resume"
            onClick={handleResumeClick}
            data-testid="mobile-nav-resume"
          >
            <i className="fa-solid fa-file-arrow-down" aria-hidden="true" />
            <span>Download Resume</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rabbiboy226@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
            onClick={() => setOpen(false)}
            data-testid="mobile-nav-contact"
          >
            <span>Contact me</span>
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
          </a>
        </nav>
      </div>

      {resumeUnavailable && (
        <div className="resume-unavailable-message" role="status">
          Resume is currently unavailable. Please check back soon.
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 16px;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          pointer-events: none;
        }
        .navbar__inner {
          pointer-events: auto;
          width: 100%;
          max-width: 1160px;
          display: grid;
          grid-template-columns: auto 1fr auto auto;
          align-items: center;
          gap: 16px;
          padding: 10px 14px 10px 18px;
          border-radius: 999px;
          transition: all 280ms var(--ease-out);
        }
        .navbar.is-scrolled .navbar__inner {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45),
                      0 0 0 1px rgba(110, 231, 255, 0.06) inset;
        }
        .navbar__brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 15px;
          letter-spacing: -0.01em;
        }
        .navbar__brand-dot {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 16px var(--accent-glow);
        }
        .navbar__brand-dot-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1.5px solid var(--accent-cyan);
          animation: pulse-glow 2.4s ease-out infinite;
        }
        .navbar__brand-name { color: #fff; }
        .navbar__brand-accent {
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
          margin-left: 2px;
        }
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 4px;
          justify-content: center;
        }
        .navbar__link {
          position: relative;
          padding: 8px 14px;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          border-radius: 999px;
          transition: color 220ms var(--ease-out);
        }
        .navbar__link::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          opacity: 0;
          transition: opacity 220ms var(--ease-out);
        }
        .navbar__link:hover { color: #fff; }
        .navbar__link:hover::before { opacity: 1; }
        .navbar__link.is-active { color: #fff; }
        .navbar__link.is-active::before {
          opacity: 1;
          background: linear-gradient(
            135deg,
            rgba(110, 231, 255, 0.16),
            rgba(167, 139, 250, 0.12)
          );
          border: 1px solid rgba(110, 231, 255, 0.25);
        }
        .navbar__link-text {
          position: relative;
          z-index: 1;
        }
        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .navbar__resume,
        .navbar__cta {
          padding: 9px 16px !important;
          border-radius: 999px !important;
          font-size: 13px !important;
        }
        .navbar__toggle {
          display: none;
          width: 40px;
          height: 40px;
          padding: 0;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          color: #fff;
        }
        .navbar__toggle span {
          width: 18px;
          height: 1.5px;
          background: #fff;
          border-radius: 2px;
          transition: transform 220ms var(--ease-out), opacity 200ms ease;
        }
        .navbar.is-open .navbar__toggle span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .navbar.is-open .navbar__toggle span:nth-child(2) {
          opacity: 0;
        }
        .navbar.is-open .navbar__toggle span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }
        .navbar__drawer {
          position: fixed;
          top: 78px;
          left: 16px;
          right: 16px;
          padding: 18px;
          border-radius: 22px;
          opacity: 0;
          transform: translateY(-12px) scale(0.98);
          pointer-events: none;
          transition: all 280ms var(--ease-out);
        }
        .navbar__drawer.is-open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .navbar__drawer-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .navbar__drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          transition: all 220ms var(--ease-out);
        }
        .navbar__drawer-link:hover {
          color: #fff;
          background: rgba(110, 231, 255, 0.08);
          border-color: rgba(110, 231, 255, 0.25);
        }
        .navbar__drawer-link i {
          font-size: 12px;
          color: var(--accent-cyan);
        }
        .navbar__drawer .btn {
          margin-top: 8px;
        }

        @media (max-width: 960px) {
          .navbar__actions { display: none; }
        }
        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .navbar__toggle { display: inline-flex; }
          .navbar__inner {
            grid-template-columns: 1fr auto;
            border-radius: 22px;
            padding: 10px 12px 10px 16px;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
