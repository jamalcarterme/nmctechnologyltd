"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "nmc-cookie-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-20 left-3 right-3 z-[60] rounded-2xl border border-paper/15 bg-ink p-5 shadow-2xl sm:left-5 sm:right-auto sm:max-w-sm md:bottom-5"
    >
      <p className="font-display text-base font-semibold text-paper">We value your privacy</p>
      <p className="mt-2 text-[14px] leading-relaxed text-paper/70">
        We use cookies to improve functionality, understand website usage and enhance your
        experience. Read our{" "}
        <Link href="/privacy-policy" className="text-gold underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="flex-1 rounded-full bg-gold px-4 py-2.5 text-[14px] font-semibold text-ink hover:bg-gold-light"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose("declined")}
          className="flex-1 rounded-full border border-paper/30 px-4 py-2.5 text-[14px] font-semibold text-paper hover:border-gold hover:text-gold"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
