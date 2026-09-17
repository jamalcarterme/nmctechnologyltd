"use client";

import { useEffect, useRef, useState, type ReactNode, type PointerEvent as ReactPointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Auto-advancing filmstrip carousel that the user can also drag/swipe or
 * click through with arrow buttons and dots. Shared by every slider on the
 * site (home showcase, service galleries, project gallery) so "automatic
 * but still slidable by hand" behaves the same everywhere.
 */
export default function SlidingCarousel<T>({
  items,
  visible,
  intervalMs,
  renderItem,
  keyExtractor,
  showDots = false,
  showArrows = false,
}: {
  items: T[];
  visible: 1 | 2 | 3;
  intervalMs: number;
  renderItem: (item: T, i: number) => ReactNode;
  keyExtractor: (item: T, i: number) => string;
  showDots?: boolean;
  showArrows?: boolean;
}) {
  const total = items.length;
  const extended = [...items, ...items.slice(0, visible)];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragOffsetPct, setDragOffsetPct] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const snapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const step = 100 / visible;

  useEffect(() => {
    if (total <= 1 || paused) return;
    const id = setInterval(() => setIndex((i) => i + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, total, paused]);

  useEffect(() => {
    if (index === total) {
      snapTimeout.current = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 650);
    } else if (index < 0) {
      snapTimeout.current = setTimeout(() => {
        setAnimate(false);
        setIndex(total - 1);
      }, 650);
    } else if (!animate) {
      const raf = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(raf);
    }
    return () => {
      if (snapTimeout.current) clearTimeout(snapTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function goTo(i: number) {
    setAnimate(true);
    setIndex(i);
  }

  function handlePointerDown(e: ReactPointerEvent) {
    dragging.current = true;
    startX.current = e.clientX;
    setAnimate(false);
    setPaused(true);
    (e.target as Element).setPointerCapture?.(e.pointerId);
  }

  function handlePointerMove(e: ReactPointerEvent) {
    if (!dragging.current || !trackRef.current) return;
    const width = trackRef.current.offsetWidth || 1;
    const deltaPx = e.clientX - startX.current;
    setDragOffsetPct((deltaPx / width) * 100);
  }

  function endDrag() {
    if (!dragging.current) return;
    dragging.current = false;
    const threshold = 8; // percent of track width
    setAnimate(true);
    if (dragOffsetPct < -threshold) {
      setIndex((i) => i + 1);
    } else if (dragOffsetPct > threshold) {
      setIndex((i) => i - 1);
    }
    setDragOffsetPct(0);
    setPaused(false);
  }

  const visibleDot = ((index % total) + total) % total;

  return (
    <div>
      <div className="relative">
        {showArrows && total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => goTo(index - 1)}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-2 flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 bg-ink/70 text-paper backdrop-blur-sm transition-colors hover:border-gold/60 hover:text-gold sm:-translate-x-4"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => goTo(index + 1)}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 bg-ink/70 text-paper backdrop-blur-sm transition-colors hover:border-gold/60 hover:text-gold sm:translate-x-4"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          className="touch-pan-y cursor-grab select-none overflow-hidden active:cursor-grabbing"
        >
          <div
            className="flex"
            style={{
              transform: `translateX(calc(-${index * step}% + ${dragOffsetPct}%))`,
              transition: animate ? "transform 650ms cubic-bezier(0.22,1,0.36,1)" : "none",
            }}
          >
            {extended.map((item, i) => (
              <div key={keyExtractor(item, i)} style={{ flex: `0 0 ${step}%` }}>
                {renderItem(item, i)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showDots && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={keyExtractor(item, i)}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === visibleDot ? "w-6 bg-gold" : "w-2 bg-paper/25"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
