import React, { useEffect, useRef, useState } from "react";
import { profile, socials } from "../data/portfolioData";
import { scrollToTarget } from "../utils/scroll";

const Hero = () => {
  const imgWrapRef = useRef(null);
  const [resumeUnavailable, setResumeUnavailable] = useState(false);
  const resumeTimer = useRef(null);

  useEffect(() => {
    const wrap = imgWrapRef.current;
    if (!wrap) return;
    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = ((e.clientX - cx) / Math.max(rect.width, 1)) * 14;
      const dy = ((e.clientY - cy) / Math.max(rect.height, 1)) * 14;
      wrap.style.setProperty("--px", `${dx}px`);
      wrap.style.setProperty("--py", `${dy}px`);
    };
    const onLeave = () => {
      wrap.style.setProperty("--px", "0px");
      wrap.style.setProperty("--py", "0px");
    };
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    scrollToTarget(target);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    setResumeUnavailable(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setResumeUnavailable(false), 3500);
  };

  return (
    <section id="top" className="hero" data-testid="hero-section">
      <div className="hero__grid">
        {/* Left: text */}
        <div className="hero__left">
          <p className="eyebrow reveal" data-testid="hero-eyebrow">
            <span>{profile.greeting}</span>
          </p>

          <h1
            className="font-display hero__name reveal"
            style={{ "--reveal-delay": "80ms" }}
            data-testid="hero-name"
          >
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p
            className="hero__title mono reveal"
            style={{ "--reveal-delay": "160ms" }}
            data-testid="hero-title"
          >
            {profile.title}
          </p>

          <h2
            className="font-display hero__words reveal"
            style={{ "--reveal-delay": "240ms" }}
            data-testid="hero-words"
          >
            {profile.heroWords.map((word, i) => (
              <span key={word} className="hero__word">
                {word}
                {i < profile.heroWords.length - 1 && (
                  <span className="hero__sep" aria-hidden="true">
                    .
                  </span>
                )}
                {i === profile.heroWords.length - 1 && (
                  <span className="hero__sep" aria-hidden="true">
                    .
                  </span>
                )}
              </span>
            ))}
          </h2>

          <p
            className="hero__bio reveal"
            style={{ "--reveal-delay": "320ms" }}
            data-testid="hero-bio"
          >
            {profile.bio}
          </p>

          <div
            className="hero__cta reveal"
            style={{ "--reveal-delay": "400ms" }}
          >
            <a
              className="btn btn--primary"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-contact-btn"
            >
              <span>Contact</span>
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            </a>
            <a
              className="btn btn--resume"
              onClick={handleResumeClick}
              data-testid="hero-resume-btn"
              aria-label="Download Resume PDF"
            >
              <i className="fa-solid fa-file-arrow-down" aria-hidden="true" />
              <span>Download CV</span>
            </a>
            <button
              className="btn btn--ghost"
              type="button"
              onClick={(e) => handleScrollTo(e, "#work")}
              data-testid="hero-view-work-btn"
            >
              <span>View recent work</span>
              <i className="fa-solid fa-arrow-down" aria-hidden="true" />
            </button>
          </div>

          <div
            className="hero__socials reveal"
            style={{ "--reveal-delay": "480ms" }}
            aria-label="Social links"
          >
            {socials.map((s) => (
              <a
                key={s.name}
                className="hero__social"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
                data-testid={`social-${s.name.toLowerCase()}`}
              >
                <i className={s.icon} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div
            className="hero__scroll-indicator reveal"
            style={{ "--reveal-delay": "560ms" }}
            aria-hidden="true"
          >
            <span className="hero__scroll-line" />
            <span className="mono hero__scroll-text">SCROLL</span>
          </div>
        </div>

        {/* Right: image */}
        <div
          className="hero__right reveal"
          style={{ "--reveal-delay": "200ms" }}
        >
          <div className="hero__image-wrap" ref={imgWrapRef} data-testid="hero-image-wrap">
            <div className="hero__image-glow" aria-hidden="true" />
            <div className="hero__image-frame">
              <img
                src={profile.imageSrc}
                alt={`Portrait of ${profile.name}`}
                className="hero__image"
                loading="eager"
                decoding="async"
                data-testid="hero-image"
              />
              <div className="hero__image-overlay" aria-hidden="true" />
            </div>

            {/* Floating badges */}
            <div className="hero__badge hero__badge--top mono">
              <span className="hero__badge-dot" />
              <span>Available for work</span>
            </div>
            <div className="hero__badge hero__badge--bottom mono">
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              <span>Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {resumeUnavailable && (
        <div className="resume-unavailable-message" role="status">
          Resume is currently unavailable. Please check back soon.
        </div>
      )}

      <style>{`
        .hero {
          position: relative;
          padding: 140px 24px 60px;
          max-width: 1280px;
          margin: 0 auto;
        }
        .hero__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          min-height: calc(100dvh - 200px);
        }
        .hero__left {
          display: flex;
          flex-direction: column;
          gap: 22px;
          max-width: 640px;
        }
        .eyebrow span { display: inline-block; }
        .hero__name {
          margin: 0;
          font-size: clamp(44px, 6vw, 88px);
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -0.03em;
        }
        .hero__title {
          margin: 0;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          letter-spacing: 0.02em;
        }
        .hero__words {
          margin: 8px 0 0;
          font-size: clamp(28px, 3.6vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: rgba(255, 255, 255, 0.85);
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .hero__word { color: #fff; }
        .hero__word:nth-child(2) { color: var(--accent-cyan); }
        .hero__word:nth-child(3) { color: var(--accent-violet); }
        .hero__sep {
          color: var(--accent-cyan);
          margin-right: 6px;
        }
        .hero__bio {
          margin: 0;
          font-size: 16px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.62);
          max-width: 56ch;
          font-weight: 400;
        }
        .hero__cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 6px;
        }
        .hero__socials {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 6px;
        }
        .hero__social {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          transition: all 240ms var(--ease-out);
        }
        .hero__social:hover {
          color: #fff;
          transform: translateY(-3px);
          border-color: rgba(110, 231, 255, 0.4);
          background: rgba(110, 231, 255, 0.1);
          box-shadow: 0 8px 24px rgba(110, 231, 255, 0.18);
        }

        .hero__scroll-indicator {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
          color: rgba(255, 255, 255, 0.4);
        }
        .hero__scroll-line {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-cyan), transparent);
          background-size: 200% 100%;
          animation: shimmer 2.4s linear infinite;
        }
        .hero__scroll-text {
          font-size: 10.5px;
          letter-spacing: 0.3em;
        }

        /* Image */
        .hero__right {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero__image-wrap {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 4 / 5;
          --px: 0px;
          --py: 0px;
        }
        .hero__image-glow {
          position: absolute;
          inset: -40px;
          border-radius: 40px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(110, 231, 255, 0.35),
            transparent 60%
          ),
          radial-gradient(
            circle at 70% 70%,
            rgba(167, 139, 250, 0.3),
            transparent 60%
          );
          filter: blur(40px);
          opacity: 0.8;
          z-index: 0;
          animation: float 6s ease-in-out infinite;
        }
        .hero__image-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(
            145deg,
            rgba(110, 231, 255, 0.05),
            rgba(167, 139, 250, 0.03)
          );
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.55),
            0 0 0 1px rgba(110, 231, 255, 0.08) inset;
          transform: translate3d(var(--px), var(--py), 0);
          transition: transform 600ms var(--ease-out);
          z-index: 1;
        }
        .hero__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
          transition: transform 800ms var(--ease-out);
        }
        .hero__image-wrap:hover .hero__image {
          transform: scale(1.04);
        }
        .hero__image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(6, 7, 11, 0.5) 100%
          );
          pointer-events: none;
        }

        /* Floating badges */
        .hero__badge {
          position: absolute;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #fff;
          background: linear-gradient(
            145deg,
            rgba(8, 12, 22, 0.78),
            rgba(8, 12, 22, 0.62)
          );
          border: 1px solid rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
          animation: float 5s ease-in-out infinite;
        }
        .hero__badge--top {
          top: 10%;
          right: -18px;
        }
        .hero__badge--bottom {
          bottom: 12%;
          left: -22px;
          animation-delay: 1s;
        }
        .hero__badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 12px #4ade80;
          animation: pulse-glow 2s ease-out infinite;
        }
        .hero__badge i { color: var(--accent-cyan); font-size: 12px; }

        @media (max-width: 960px) {
          .hero { padding: 120px 20px 40px; }
          .hero__grid {
            grid-template-columns: 1fr;
            gap: 50px;
            min-height: auto;
          }
          .hero__right { order: -1; }
          .hero__image-wrap {
            max-width: 320px;
            aspect-ratio: 1 / 1;
          }
          .hero__left { max-width: 100%; }
        }
        @media (max-width: 540px) {
          .hero { padding: 110px 18px 32px; }
          .hero__name { font-size: clamp(36px, 11vw, 56px); }
          .hero__words { font-size: clamp(22px, 6.5vw, 34px); }
          .hero__bio { font-size: 15px; }
          .hero__image-wrap { max-width: 280px; }
          .hero__badge--top { right: 0; top: 4%; }
          .hero__badge--bottom { left: 0; bottom: 6%; }
          .hero__cta .btn { flex: 1; min-width: 140px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
