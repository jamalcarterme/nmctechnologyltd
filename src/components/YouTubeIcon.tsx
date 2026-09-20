export default function YouTubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path
        fill="#fff"
        d="M19.615 8.2a1.9 1.9 0 0 0-1.34-1.34C17.09 6.54 12 6.54 12 6.54s-5.09 0-6.275.32A1.9 1.9 0 0 0 4.385 8.2C4.07 9.39 4.07 12 4.07 12s0 2.61.315 3.8a1.9 1.9 0 0 0 1.34 1.34c1.185.32 6.275.32 6.275.32s5.09 0 6.275-.32a1.9 1.9 0 0 0 1.34-1.34c.315-1.19.315-3.8.315-3.8s0-2.61-.315-3.8ZM10.5 14.3V9.7l4 2.3-4 2.3Z"
      />
    </svg>
  );
}
