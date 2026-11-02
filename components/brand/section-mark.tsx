import { cn } from "@/lib/utils"

// A small ring-and-dot mark, drawn in the app icon's proportions (a thick ring
// and a dot as wide as the ring). Used only as a divider between sections.
export function SectionMark({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto flex w-full max-w-6xl items-center gap-4 px-4 md:px-6",
        className
      )}
    >
      <svg viewBox="0 0 20 46" className="h-7 w-auto shrink-0">
        <circle
          cx="10"
          cy="10"
          r="7"
          fill="none"
          strokeWidth="5"
          className="stroke-muted-foreground"
        />
        <circle cx="10" cy="36" r="9.5" className="fill-primary" />
      </svg>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
