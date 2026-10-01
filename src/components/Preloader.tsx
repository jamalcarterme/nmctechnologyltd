"use client";

import { useEffect, useState } from "react";

/** Brief branded loader (same behaviour as the reference site's #pre screen). */
export default function Preloader() {
  const [off, setOff] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOff(true), 700);
    return () => clearTimeout(t);
  }, []);
  return (
    <div id="pre" className={off ? "off" : ""} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo-mark.png" alt="" />
      <i />
    </div>
  );
}
