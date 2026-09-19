"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";

/** Text that reveals on scroll. KEEP IN SYNC with the scroll-reveal block in globals.css.
 * The page hero (first section) is excluded; <Reveal> wrappers ([data-rv]) animate as one
 * unit; anything inside [data-no-reveal] (carousels, framer-motion areas) is left alone. */
const TEXT_SELECTOR =
  "main > section:not(:first-child) :is(h2,h3,h4,p,li,blockquote):not([data-rv] *,[data-no-reveal] *)";
const PENDING = ":not([data-in]):not([data-rd])";

type W = Window & { __revealReady?: boolean };

export default function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    (window as W).__revealReady = true;
    if (reduce || !("IntersectionObserver" in window)) {
      root.classList.remove("js-reveal");
      return;
    }
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        let n = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          // Stagger items that enter together (explicit <Reveal delay> wins)
          if (!el.style.getPropertyValue("--rd")) {
            el.style.setProperty("--rd", `${Math.min(n, 5) * 0.06}s`);
          }
          n++;
          el.setAttribute("data-in", "");
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    // Once an animation finishes, hand the element back to its normal styles.
    const onEnd = (e: AnimationEvent) => {
      const el = e.target as HTMLElement;
      if (!e.animationName.startsWith("rv-") || !el.hasAttribute?.("data-in")) return;
      el.removeAttribute("data-in");
      el.setAttribute("data-rd", "");
    };
    document.addEventListener("animationend", onEnd);

    const scan = () => {
      try {
        document
          .querySelectorAll<HTMLElement>(`[data-rv]${PENDING}, ${TEXT_SELECTOR}${PENDING}`)
          .forEach((el) => observer.observe(el));
      } catch {
        root.classList.remove("js-reveal"); // never leave content hidden
      }
    };

    // Pick up content that mounts later (route changes, tabs, accordions, lazy sections)
    let queued = 0;
    const mutations = new MutationObserver(() => {
      if (queued) return;
      queued = requestAnimationFrame(() => {
        queued = 0;
        scan();
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    scan();

    return () => {
      cancelAnimationFrame(queued);
      mutations.disconnect();
      observer.disconnect();
      document.removeEventListener("animationend", onEnd);
    };
  }, [pathname]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
