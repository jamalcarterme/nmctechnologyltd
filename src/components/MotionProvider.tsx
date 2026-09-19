"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";

const OFFSCREEN = 0.92; // only hide blocks that start below this fraction of the viewport
const DURATION_MS = 700;

function isRendered(el: HTMLElement) {
  return el.getClientRects().length > 0;
}

/** Marks the main content blocks of every section (except the top hero) so they
 * fade/rise in on scroll. Blocks already on screen are left alone, so nothing
 * flashes on load. */
function tagBlocks() {
  const sections = document.querySelectorAll<HTMLElement>("main > section");
  sections.forEach((section, index) => {
    if (index === 0) return; // page hero
    const blocks: HTMLElement[] = [];
    const isGrid = (el: HTMLElement) =>
      getComputedStyle(el).display === "grid" && el.children.length > 1;
    const kids = (el: Element) =>
      Array.from(el.children).filter(
        (c): c is HTMLElement =>
          c instanceof HTMLElement && !c.classList.contains("absolute"),
      );

    for (const container of kids(section)) {
      if (isGrid(container)) {
        blocks.push(...kids(container)); // columns / cards
      } else {
        for (const child of kids(container)) {
          if (isGrid(child)) blocks.push(...kids(child));
          else blocks.push(child);
        }
      }
    }
    blocks.forEach((el, i) => {
      // Leave anything already animated (explicit Reveal, or framer-motion inline styles) alone
      if (
        el.closest("[data-reveal]") ||
        el.style.opacity ||
        el.style.transform ||
        el.querySelector('[data-reveal],[style*="opacity"],[style*="transform"]') ||
        !isRendered(el)
      )
        return;
      if (el.getBoundingClientRect().top < window.innerHeight * OFFSCREEN) return;
      el.setAttribute("data-reveal", "slide-up");
      el.style.setProperty("--reveal-delay", `${(i % 4) * 0.08}s`);
    });
  });
}

function scan(observer: IntersectionObserver) {
  tagBlocks();
  document
    .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
    .forEach((el) => observer.observe(el));
}

export default function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      root.classList.remove("js-reveal");
      (window as unknown as { __revealReady?: boolean }).__revealReady = true;
      return;
    }
    root.classList.add("js-reveal");
    (window as unknown as { __revealReady?: boolean }).__revealReady = true;

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.setAttribute("data-revealed", "");
          const delay = parseFloat(el.style.getPropertyValue("--reveal-delay")) || 0;
          // Once settled, drop the helper attributes so the element behaves exactly as authored.
          timers.push(
            window.setTimeout(() => {
              el.removeAttribute("data-reveal");
              el.removeAttribute("data-revealed");
            }, DURATION_MS + delay * 1000 + 150),
          );
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
    );

    const frame = requestAnimationFrame(() => scan(observer));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
