"use client";

import { useEffect, useState } from "react";

/** Types text in place. The untyped remainder stays in the layout (invisible),
 * so nothing moves or re-wraps while it "writes". */
export default function Typewriter({
  text,
  delay = 0,
  speed = 30,
  active = true,
  as: Tag = "span",
  className = "",
}: {
  text: string;
  delay?: number;
  speed?: number;
  active?: boolean;
  as?: "p" | "h1" | "span";
  className?: string;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(text.length);
      return;
    }
    if (!active) {
      setN(0);
      return;
    }
    setN(0);
    let iv: ReturnType<typeof setInterval>;
    const t = setTimeout(() => {
      iv = setInterval(() => {
        setN((c) => {
          if (c >= text.length) {
            clearInterval(iv);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, delay);
    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
  }, [text, delay, speed, active]);

  return (
    <Tag className={`${className} ${text.includes("\n") ? "whitespace-pre-line" : ""}`} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, n)}</span>
      <span aria-hidden="true" className="opacity-0">{text.slice(n)}</span>
    </Tag>
  );
}
