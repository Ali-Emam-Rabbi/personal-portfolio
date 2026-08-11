import { useEffect } from "react";
import {
  activeSectionObserverOptions,
  revealObserverOptions,
} from "../animations/observerConfig";

/**
 * Adds .is-in class to elements with .reveal when scrolled into view.
 * Auto-stagger via CSS variable --reveal-delay.
 */
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      revealObserverOptions
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

/**
 * Tracks the active section for scrollspy highlight.
 */
export function useActiveSection(sectionIds) {
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const setActive = (id) => {
      document.querySelectorAll("[data-nav-id]").forEach((el) => {
        if (el.getAttribute("data-nav-id") === id) {
          el.classList.add("is-active");
        } else {
          el.classList.remove("is-active");
        }
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      activeSectionObserverOptions
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [sectionIds]);
}
