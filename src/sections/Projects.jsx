import React, { useState } from "react";
import { featured, projects } from "../data/portfolioData";

const Projects = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <section id="work" className="projects" data-testid="projects-section">
      <div className="projects__head">
        <p className="eyebrow reveal">
          <span>Recent Work</span>
        </p>
        <h2 className="font-display projects__title reveal" style={{ "--reveal-delay": "80ms" }}>
          Selected <span className="text-gradient">projects</span>
        </h2>
        <p className="projects__sub reveal" style={{ "--reveal-delay": "160ms" }}>
          A few projects that reflect my craft and taste.
        </p>
      </div>

      {/* Featured card */}
      <article className="featured-card reveal" style={{ "--reveal-delay": "240ms" }} data-testid="featured-card">
        <div className="featured-card__border" aria-hidden="true" />
        <div className="featured-card__inner">
          <div className="featured-card__top">
            <div>
              <span className="featured-card__pill mono">
                <span className="featured-card__pill-dot" />
                {featured.pill}
              </span>
              <h3 className="font-display featured-card__title">{featured.title}</h3>
            </div>
            <a
              className="featured-card__github"
              href={featured.codeHref}
              target="_blank"
              rel="noreferrer"
              aria-label="View code on GitHub"
              data-testid="featured-github-link"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
            </a>
          </div>

          <p className="featured-card__desc">{featured.description}</p>

          <div className="featured-card__actions">
            <button
              type="button"
              className="btn btn--primary"
              aria-expanded={expanded}
              aria-controls="project-list"
              onClick={() => setExpanded((p) => !p)}
              data-testid="toggle-projects-btn"
            >
              <span>{expanded ? "Hide Projects" : "View My Projects"}</span>
              <i
                className={`fa-solid ${expanded ? "fa-arrow-up" : "fa-arrow-down"}`}
                aria-hidden="true"
              />
            </button>
            <a
              className="btn btn--ghost"
              href={featured.codeHref}
              target="_blank"
              rel="noreferrer"
              data-testid="featured-code-btn"
            >
              <span>Code</span>
              <i className="fa-brands fa-github" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      {/* Project grid */}
      <div
        id="project-list"
        className={`projects__grid ${expanded ? "is-open" : "is-closed"}`}
        aria-hidden={!expanded}
        data-testid="projects-grid"
      >
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={`project-card reveal ${p.isPortfolio ? "project-card--portfolio" : ""}`}
            style={{ "--reveal-delay": `${i * 60}ms` }}
            data-testid={`project-card-${i}`}
          >
            <div className="project-card__glow" aria-hidden="true" />
            <div className="project-card__inner">
              <div className="project-card__top">
                <span className="project-card__index mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`project-card__tag mono ${p.isPortfolio ? "project-card__tag--portfolio" : ""}`}>
                  {p.tag}
                </span>
              </div>
              <h4 className="font-display project-card__name">{p.name}</h4>
              <div className="project-card__stack">
                {p.stack.map((s) => (
                  <span key={s} className="project-card__chip">{s}</span>
                ))}
              </div>
              <div className="project-card__bottom">
                <span className="project-card__cta mono">
                  {p.isPortfolio ? "View Portfolio" : "View Live"}
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        .projects {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px;
        }
        .projects__head {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 48px;
          max-width: 720px;
        }
        .projects__title {
          margin: 0;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1;
          letter-spacing: -0.025em;
          font-weight: 900;
          color: #fff;
        }
        .projects__sub {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.55);
        }

        /* Featured */
        .featured-card {
          position: relative;
          border-radius: 28px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(110, 231, 255, 0.5),
            rgba(167, 139, 250, 0.3) 40%,
            rgba(255, 255, 255, 0.05) 70%
          );
          background-size: 200% 200%;
          animation: border-flow 10s ease infinite;
          margin-bottom: 32px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }
        .featured-card__inner {
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
        .featured-card__inner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 0% 0%,
            rgba(110, 231, 255, 0.12),
            transparent 50%
          );
          pointer-events: none;
        }
        .featured-card__top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
        }
        .featured-card__pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: var(--accent-cyan);
          background: rgba(110, 231, 255, 0.08);
          border: 1px solid rgba(110, 231, 255, 0.25);
          margin-bottom: 14px;
        }
        .featured-card__pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
          animation: pulse-glow 2s ease-out infinite;
        }
        .featured-card__title {
          margin: 0;
          font-size: clamp(22px, 2.6vw, 30px);
          letter-spacing: -0.02em;
          color: #fff;
          font-weight: 800;
        }
        .featured-card__github {
          width: 48px;
          height: 48px;
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 18px;
          transition: all 220ms var(--ease-out);
        }
        .featured-card__github:hover {
          transform: rotate(-8deg) scale(1.05);
          border-color: rgba(110, 231, 255, 0.4);
          background: rgba(110, 231, 255, 0.1);
        }
        .featured-card__desc {
          margin: 0 0 22px;
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.75;
          font-size: 15.5px;
          position: relative;
          z-index: 1;
        }
        .featured-card__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          position: relative;
          z-index: 1;
        }

        /* Grid */
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          transition: opacity 320ms var(--ease-out), max-height 520ms var(--ease-out);
        }
        .projects__grid.is-closed {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .projects__grid.is-open {
          max-height: 4000px;
          opacity: 1;
        }

        .project-card {
          position: relative;
          border-radius: 22px;
          padding: 1px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.02)
          );
          transition: transform 320ms var(--ease-out);
        }
        .project-card--portfolio {
          background: linear-gradient(
            145deg,
            rgba(110, 231, 255, 0.3),
            rgba(167, 139, 250, 0.2) 50%,
            rgba(110, 231, 255, 0.1)
          );
        }
        .project-card:hover {
          transform: translateY(-6px);
        }
        .project-card__glow {
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            var(--accent-cyan),
            var(--accent-violet)
          );
          opacity: 0;
          filter: blur(20px);
          transition: opacity 380ms var(--ease-out);
          z-index: -1;
        }
        .project-card:hover .project-card__glow {
          opacity: 0.4;
        }
        .project-card__inner {
          position: relative;
          padding: 24px 22px;
          border-radius: 21px;
          background: linear-gradient(
            145deg,
            rgba(15, 18, 32, 0.95),
            rgba(8, 10, 18, 0.98)
          );
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          overflow: hidden;
        }
        .project-card__inner::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, rgba(110, 231, 255, 0.08), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 320ms var(--ease-out);
        }
        .project-card:hover .project-card__inner::after { opacity: 1; }
        .project-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .project-card__index {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.1em;
        }
        .project-card__tag {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-cyan);
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(110, 231, 255, 0.06);
          border: 1px solid rgba(110, 231, 255, 0.18);
        }
        .project-card__tag--portfolio {
          color: var(--accent-violet);
          background: rgba(167, 139, 250, 0.1);
          border-color: rgba(167, 139, 250, 0.3);
        }
        .project-card__name {
          margin: 4px 0 0;
          font-size: 19px;
          line-height: 1.25;
          letter-spacing: -0.015em;
          color: #fff;
          font-weight: 800;
        }
        .project-card__stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .project-card__chip {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: rgba(255, 255, 255, 0.55);
          padding: 3px 9px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .project-card__bottom {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .project-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          transition: color 220ms var(--ease-out);
        }
        .project-card__cta i {
          font-size: 10px;
          transition: transform 220ms var(--ease-out);
        }
        .project-card:hover .project-card__cta {
          color: var(--accent-cyan);
        }
        .project-card:hover .project-card__cta i {
          transform: translate(2px, -2px);
        }

        @media (max-width: 960px) {
          .projects__grid { grid-template-columns: repeat(2, 1fr); }
          .projects { padding: 60px 22px; }
          .featured-card__inner { padding: 26px 22px; }
        }
        @media (max-width: 600px) {
          .projects__grid { grid-template-columns: 1fr; }
          .projects { padding: 50px 18px; }
          .featured-card__inner { padding: 22px 18px; }
          .featured-card__title { font-size: 22px; }
          .featured-card__top { flex-direction: column; align-items: stretch; }
          .featured-card__github { align-self: flex-start; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
