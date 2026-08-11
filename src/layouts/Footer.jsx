import React from "react";
import { profile, socials } from "../data/portfolioData";
import { scrollToTop } from "../utils/scroll";

const Footer = () => {
  const year = new Date().getFullYear();
  const handleTop = (e) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <footer className="footer" data-testid="footer">
      <div className="footer__inner">
        <div className="footer__col footer__col--brand">
          <a href="#top" onClick={handleTop} className="footer__brand">
            <span className="footer__brand-dot" />
            <span className="font-display">{profile.name}</span>
          </a>
          <p className="footer__tag">{profile.title}</p>
        </div>

        <div className="footer__col">
          <span className="mono footer__label">EXPLORE</span>
          <ul className="footer__list">
            <li><a href="#top" onClick={handleTop} data-testid="footer-link-home">Home</a></li>
            <li><a href="#work" data-testid="footer-link-work">Work</a></li>
            <li><a href="#contact" data-testid="footer-link-contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <span className="mono footer__label">SOCIAL</span>
          <ul className="footer__list">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noreferrer" data-testid={`footer-social-${s.name.toLowerCase()}`}>
                  <i className={s.icon} aria-hidden="true" />
                  <span>{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__col--cta">
          <span className="mono footer__label">EMAIL</span>
          <a className="footer__email" href={`mailto:${profile.email}`} data-testid="footer-email">
            {profile.email}
          </a>
          <a href="#top" onClick={handleTop} className="footer__top">
            <span>Back to top</span>
            <i className="fa-solid fa-arrow-up" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© <span data-testid="footer-year">{year}</span> {profile.name}. All rights reserved.</span>
        <span className="mono footer__bottom-meta">
          Crafted with <i className="fa-solid fa-bolt" style={{ color: "var(--accent-cyan)" }} aria-hidden="true" /> in {profile.location.split(",")[0]}
        </span>
      </div>

      <style>{`
        .footer {
          position: relative;
          margin-top: 40px;
          padding: 60px 24px 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.3));
        }
        .footer__inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 50px;
        }
        .footer__col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer__col--brand {
          gap: 10px;
        }
        .footer__brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 18px;
          font-weight: 800;
          color: #fff;
        }
        .footer__brand-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 14px var(--accent-glow);
        }
        .footer__tag {
          margin: 0;
          color: rgba(255, 255, 255, 0.45);
          font-size: 13.5px;
        }
        .footer__label {
          font-size: 10.5px;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.35);
        }
        .footer__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer__list a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          transition: color 220ms var(--ease-out), transform 220ms var(--ease-out);
        }
        .footer__list a:hover {
          color: var(--accent-cyan);
          transform: translateX(4px);
        }
        .footer__list i { font-size: 13px; width: 14px; }
        .footer__col--cta { gap: 12px; }
        .footer__email {
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          word-break: break-all;
          transition: color 220ms var(--ease-out);
        }
        .footer__email:hover { color: var(--accent-cyan); }
        .footer__top {
          margin-top: 6px;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          font-size: 12.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          transition: all 220ms var(--ease-out);
        }
        .footer__top:hover {
          background: rgba(110, 231, 255, 0.1);
          border-color: rgba(110, 231, 255, 0.35);
          color: #fff;
        }
        .footer__top i { color: var(--accent-cyan); font-size: 11px; }

        .footer__bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.4);
          flex-wrap: wrap;
        }
        .footer__bottom-meta i { margin: 0 4px; }

        @media (max-width: 860px) {
          .footer__inner {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 540px) {
          .footer { padding: 50px 18px 24px; }
          .footer__inner {
            grid-template-columns: 1fr;
            gap: 28px;
            padding-bottom: 32px;
          }
          .footer__bottom {
            flex-direction: column;
            text-align: center;
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
