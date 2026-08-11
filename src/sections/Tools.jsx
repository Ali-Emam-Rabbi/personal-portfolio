import React from "react";
import { tools } from "../data/portfolioData";

const Tools = () => {
  const marqueeItems = [
    "HTML", "CSS", "JavaScript", "React", "C", "C++", "Java",
    "UI/UX", "Figma", "GitHub", "VS Code", "Claude", "Cursor",
    "Codex", "Google AI Studio", "Python", "Firebase", "Linux", "Git",
  ];

  return (
    <>
      {/* ── Tools & Technologies Section ── */}
      <section id="tools" className="tools-section" data-testid="tools-section">
        <div className="tools-section__head">
          <p className="eyebrow reveal">
            <span>Toolkit</span>
          </p>
          <h2 className="font-display tools-section__title reveal" style={{ "--reveal-delay": "80ms" }}>
            Tools &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="tools-section__sub reveal" style={{ "--reveal-delay": "160ms" }}>
            Technologies and platforms I use to craft modern, performant applications.
          </p>
        </div>

        <div className="tools-grid reveal" style={{ "--reveal-delay": "240ms" }}>
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="tool-card glass"
              style={{ "--reveal-delay": `${240 + i * 40}ms` }}
              data-testid={`tool-card-${i}`}
            >
              <div className="tool-card__icon-wrap">
                {tool.icon ? (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="tool-card__img"
                    loading="lazy"
                    width={40}
                    height={40}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
                    }}
                  />
                ) : (
                  <i
                    className={tool.iconFA}
                    style={{ color: tool.color, fontSize: "32px" }}
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="tool-card__info">
                <span className="tool-card__name">{tool.name}</span>
                <span className="tool-card__cat mono">{tool.category}</span>
              </div>
              <div className="tool-card__glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Marquee Ticker ── */}
      <div className="marquee-wrapper" aria-hidden="true" data-testid="marquee-section">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item mono">
              {item}
              <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Tools Section ── */
        .tools-section {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px 60px;
        }
        .tools-section__head {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 48px;
          max-width: 720px;
        }
        .tools-section__title {
          margin: 0;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1;
          letter-spacing: -0.025em;
          font-weight: 900;
          color: #fff;
        }
        .tools-section__sub {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.55);
        }

        /* ── Grid ── */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 14px;
        }

        /* ── Tool Card ── */
        .tool-card {
          position: relative;
          border-radius: 20px;
          padding: 22px 16px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          text-align: center;
          cursor: default;
          transition: transform 300ms var(--ease-out),
                      border-color 300ms var(--ease-out),
                      box-shadow 300ms var(--ease-out);
          overflow: hidden;
        }
        .tool-card:hover {
          transform: translateY(-6px) scale(1.03);
          border-color: rgba(110, 231, 255, 0.35);
          box-shadow:
            0 16px 48px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(110, 231, 255, 0.12) inset;
        }
        .tool-card__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 0%,
            rgba(110, 231, 255, 0.12),
            transparent 65%
          );
          opacity: 0;
          transition: opacity 300ms var(--ease-out);
          pointer-events: none;
        }
        .tool-card:hover .tool-card__glow {
          opacity: 1;
        }
        .tool-card__icon-wrap {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .tool-card__img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
          transition: transform 300ms var(--ease-out);
        }
        .tool-card:hover .tool-card__img {
          transform: scale(1.12) rotate(-4deg);
        }
        .tool-card__info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          position: relative;
          z-index: 1;
        }
        .tool-card__name {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.2;
        }
        .tool-card__cat {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          opacity: 0.75;
        }

        /* ── Marquee ── */
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          padding: 18px 0;
          margin: 0;
          background: linear-gradient(
            90deg,
            rgba(110, 231, 255, 0.03),
            rgba(167, 139, 250, 0.04),
            rgba(110, 231, 255, 0.03)
          );
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(90deg, var(--bg-0) 0%, transparent 100%);
        }
        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(270deg, var(--bg-0) 0%, transparent 100%);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 28s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.55);
          white-space: nowrap;
          padding: 0 4px;
          transition: color 220ms ease;
        }
        .marquee-item:hover {
          color: var(--accent-cyan);
        }
        .marquee-dot {
          display: inline-block;
          margin: 0 16px;
          color: var(--accent-violet);
          opacity: 0.6;
          font-size: 14px;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }

        @media (max-width: 960px) {
          .tools-section { padding: 60px 22px 40px; }
          .tools-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 12px; }
        }
        @media (max-width: 600px) {
          .tools-section { padding: 50px 18px 32px; }
          .tools-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px; }
          .tool-card { padding: 18px 12px 14px; }
          .tool-card__name { font-size: 12px; }
          .marquee-wrapper::before, .marquee-wrapper::after { width: 60px; }
        }
      `}</style>
    </>
  );
};

export default Tools;
