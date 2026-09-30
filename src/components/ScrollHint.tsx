"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [up, setUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      setUp(atBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label={up ? "Scroll up" : "Scroll down"}
      onClick={() =>
        window.scrollTo({ top: up ? 0 : document.documentElement.scrollHeight, behavior: "smooth" })
      }
      className={`${up ? "hint-up" : "hint-down"} fixed bottom-[68px] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-colors hover:bg-gold-light`}
    >
      {up ? <ArrowUp className="h-6 w-6" strokeWidth={2.5} /> : <ArrowDown className="h-6 w-6" strokeWidth={2.5} />}
    </button>
  );
}
