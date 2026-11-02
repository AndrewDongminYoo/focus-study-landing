import { cn } from "@/lib/utils"

type FocusRingProps = {
  /** Remaining share of the session, 0 to 1. */
  remaining: number
  className?: string
  children?: React.ReactNode
}

const R = 84
const STROKE = 14
const DOT_R = 18
// Ring outer edge + the icon's gap between ring and dot + the dot radius.
const DOT_CY = 100 + R + STROKE / 2 + 14 + DOT_R
const VIEW_H = DOT_CY + DOT_R + 2
const CIRCUMFERENCE = 2 * Math.PI * R

// The app icon's motif: a thick cream ring with a large amber dot below it.
// The ring is the timer: the full arc is the remaining time, drawn from 12 o'clock.
export function FocusRing({ remaining, className, children }: FocusRingProps) {
  const offset = CIRCUMFERENCE * (1 - Math.min(1, Math.max(0, remaining)))

  return (
    <div
      className={cn("relative", className)}
      style={{ aspectRatio: `200 / ${VIEW_H}` }} // design-lint-ignore geometry, no color
    >
      <svg
        viewBox={`0 0 200 ${VIEW_H}`}
        className="absolute inset-0 size-full"
        aria-hidden
      >
        <circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          strokeWidth={STROKE}
          className="stroke-foreground/15"
        />
        <circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          transform="rotate(-90 100 100)"
          className="stroke-foreground"
        />
        <circle cx="100" cy={DOT_CY} r={DOT_R} className="fill-primary" />
      </svg>
      <div className="absolute inset-x-0 top-0 flex aspect-square flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
