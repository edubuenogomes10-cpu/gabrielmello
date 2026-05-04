import { useId } from "react";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  decorative?: boolean;
  title?: string;
};

export function BrandMark({
  className,
  decorative = true,
  title = "Gabriel Mello",
}: BrandMarkProps) {
  const goldGradientId = useId().replace(/:/g, "");
  const highlightGradientId = `${goldGradientId}-highlight`;

  return (
    <svg
      viewBox="0 0 232 248"
      className={cn(
        "overflow-visible [--brand-mark-gold:#C9A962] [--brand-mark-gold-dark:#8F6828] [--brand-mark-gold-light:#F6E1A6] [--brand-mark-ink:var(--brown)]",
        className,
      )}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={decorative}
      aria-label={decorative ? undefined : title}
      role={decorative ? undefined : "img"}
    >
      <defs>
        <linearGradient id={goldGradientId} x1="64" y1="18" x2="188" y2="228" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--brand-mark-gold-light)" />
          <stop offset="28%" stopColor="#E0BC6C" />
          <stop offset="55%" stopColor="var(--brand-mark-gold)" />
          <stop offset="100%" stopColor="var(--brand-mark-gold-dark)" />
        </linearGradient>
        <linearGradient
          id={highlightGradientId}
          x1="72"
          y1="40"
          x2="176"
          y2="198"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="rgba(255,249,225,0.92)" />
          <stop offset="100%" stopColor="rgba(255,249,225,0)" />
        </linearGradient>
      </defs>

      <g strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M38 194V94c0-20 16-36 36-36h50l19-30h55c11 0 20 6 25 16l10 24"
          stroke={`url(#${goldGradientId})`}
          strokeWidth="11"
        />
        <path
          d="M38 194V94c0-20 16-36 36-36h50l19-30h55c11 0 20 6 25 16l10 24"
          stroke={`url(#${highlightGradientId})`}
          strokeWidth="3"
          opacity="0.8"
        />

        <rect
          x="57"
          y="96"
          width="39"
          height="18"
          rx="4"
          stroke={`url(#${goldGradientId})`}
          strokeWidth="8"
        />
        <rect
          x="57"
          y="96"
          width="39"
          height="18"
          rx="4"
          stroke={`url(#${highlightGradientId})`}
          strokeWidth="2.5"
          opacity="0.72"
        />

        <path
          d="M180 78c-22-13-49-18-75-13c-31 5-57 25-70 54c-18 40-11 88 19 119c23 25 57 37 90 33h35"
          stroke={`url(#${goldGradientId})`}
          strokeWidth="11"
        />
        <path
          d="M180 78c-22-13-49-18-75-13c-31 5-57 25-70 54c-18 40-11 88 19 119c23 25 57 37 90 33h35"
          stroke={`url(#${highlightGradientId})`}
          strokeWidth="3"
          opacity="0.76"
        />

        <path
          d="M166 101c-15-10-34-14-52-10c-20 4-37 17-47 34c-17 29-12 68 12 92c17 17 42 26 66 22c16-2 31-10 43-22v-42h-37"
          stroke="var(--brand-mark-ink)"
          strokeWidth="10"
        />
      </g>
    </svg>
  );
}
