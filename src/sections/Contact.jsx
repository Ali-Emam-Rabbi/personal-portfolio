import React from "react";
import { profile, socials } from "../data/portfolioData";

const Contact = () => {
  return (
    <section id="contact" className="contact-section" data-testid="contact-section">
      <div className="contact-section__inner">
        <div className="contact-section__head">
          <p className="eyebrow reveal">
            <span>Let's connect</span>
          </p>
          <h2
            className="font-display contact-section__title reveal"
            style={{ "--reveal-delay": "80ms" }}
          >
            Got a <span className="text-gradient">project</span><br />in mind?
          </h2>
          <p
            className="contact-section__sub reveal"
            style={{ "--reveal-delay": "160ms" }}
          >
            For collaborations, freelance work, or opportunities — drop a message
            and I'll get back to you.
          </p>
        </div>

        <div
          className="contact-card reveal"
          style={{ "--reveal-delay": "240ms" }}
          data-testid="contact-card"
        >
          <div className="contact-card__border" aria-hidden="true" />
          <div className="contact-card__inner">
            <div className="contact-card__rows">
              <a
                className="contact-row contact-row--link"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-email"
              >
                <span className="contact-row__icon">
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                </span>
                <div className="contact-row__body">
                  <span className="contact-row__label mono">Email</span>
                  <span className="contact-row__value">{profile.email}</span>
                </div>
                <i
                  className="fa-solid fa-arrow-up-right-from-square contact-row__arrow"
                  aria-hidden="true"
                />
              </a>

              <div className="contact-row" data-testid="contact-location">
                <span className="contact-row__icon">
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                </span>
                <div className="contact-row__body">
                  <span className="contact-row__label mono">Location</span>
                  <span className="contact-row__value">{profile.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-card__divider" />

            <div className="contact-card__socials">
              <span className="mono contact-card__socials-label">FOLLOW</span>
              <div className="contact-card__socials-list">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    className="contact-social"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    data-testid={`contact-social-${s.name.toLowerCase()}`}
                  >
                    <i className={s.icon} aria-hidden="true" />
                    <span className="contact-social__handle">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            <a
              className="btn btn--primary contact-card__cta"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-send-btn"
            >
              <span>Send a message</span>
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px 60px;
        }
        .contact-section__inner {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          align-items: center;
        }
        .contact-section__head {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-section__title {
          margin: 0;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1;
          letter-spacing: -0.03em;
          font-weight: 900;
          color: #fff;
        }
        .contact-section__sub {
          margin: 0;
          font-size: 16px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.55);
          max-width: 38ch;
        }

        .contact-card {
          position: relative;
          border-radius: 28px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(110, 231, 255, 0.4),
            rgba(167, 139, 250, 0.25) 50%,
            rgba(255, 255, 255, 0.05)
          );
          background-size: 200% 200%;
          animation: border-flow 12s ease infinite;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.45);
        }
        .contact-card__inner {
          position: relative;
          padding: 32px;
          border-radius: 27px;
          background: linear-gradient(
            145deg,
            rgba(15, 18, 32, 0.92),
            rgba(8, 10, 18, 0.95)
          );
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          overflow: hidden;
        }
        .contact-card__inner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 100% 0%,
            rgba(167, 139, 250, 0.14),
            transparent 50%
          );
          pointer-events: none;
        }
        .contact-card__rows {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
        .contact-row {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          transition: all 240ms var(--ease-out);
        }
        .contact-row--link:hover {
          border-color: rgba(110, 231, 255, 0.3);
          background: rgba(110, 231, 255, 0.06);
          transform: translateY(-2px);
        }
        .contact-row__icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: linear-gradient(
            145deg,
            rgba(110, 231, 255, 0.18),
            rgba(167, 139, 250, 0.1)
          );
          border: 1px solid rgba(110, 231, 255, 0.2);
          color: var(--accent-cyan);
          font-size: 16px;
        }
        .contact-row__body {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }
        .contact-row__label {
          font-size: 10.5px;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.4);
        }
        .contact-row__value {
          color: rgba(255, 255, 255, 0.92);
          font-size: 15.5px;
          font-weight: 500;
          overflow-wrap: anywhere;
        }
        .contact-row__arrow {
          color: rgba(255, 255, 255, 0.35);
          font-size: 13px;
          transition: all 240ms var(--ease-out);
        }
        .contact-row--link:hover .contact-row__arrow {
          color: var(--accent-cyan);
          transform: translate(2px, -2px);
        }

        .contact-card__divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.12),
            transparent
          );
          margin: 22px 0;
          position: relative;
          z-index: 1;
        }

        .contact-card__socials {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        .contact-card__socials-label {
          font-size: 10.5px;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.4);
        }
        .contact-card__socials-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .contact-social {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: 999px;
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.78);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 240ms var(--ease-out);
        }
        .contact-social:hover {
          color: #fff;
          background: rgba(110, 231, 255, 0.1);
          border-color: rgba(110, 231, 255, 0.35);
          transform: translateY(-2px);
        }
        .contact-social i { color: var(--accent-cyan); font-size: 13px; }

        .contact-card__cta {
          width: 100%;
          margin-top: 22px;
          padding: 16px !important;
          font-size: 15px !important;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 960px) {
          .contact-section__inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-section { padding: 60px 22px 50px; }
          .contact-card__inner { padding: 26px 22px; }
        }
        @media (max-width: 540px) {
          .contact-section { padding: 50px 18px 40px; }
          .contact-row {
            grid-template-columns: auto 1fr;
            gap: 12px;
          }
          .contact-row__arrow { display: none; }
          .contact-card__inner { padding: 22px 18px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
