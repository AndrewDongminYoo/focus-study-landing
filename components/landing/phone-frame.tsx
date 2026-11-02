import Image from "next/image"
import { BatteryFull, Signal, Wifi } from "lucide-react"

import { cn } from "@/lib/utils"

type PhoneFrameProps = {
  /** Describes the screen for screen readers. Also the alt of a screenshot. */
  label: string
  /** A real 1179×2556 screenshot. When set, it replaces the mock children. */
  src?: string
  /** Visible note under the frame, in the page's own theme. */
  caption?: string
  className?: string
  children?: React.ReactNode
}

// An iPhone frame. The screen always renders with the dark tokens (navy, cream
// and dark-mode amber), the same pair as the app icon, in both page themes.
// The offset shadow sits outside that scope so it follows the page theme.
export function PhoneFrame({
  label,
  src,
  caption,
  className,
  children,
}: PhoneFrameProps) {
  return (
    <figure
      className={cn("flex w-full flex-col items-center gap-5", className)}
    >
      <div className="w-full rounded-[2.75rem] shadow-(--phone-shadow)">
        <div className="dark rounded-[2.75rem] bg-card p-2 ring-2 ring-foreground/20">
          <div className="relative aspect-[1179/2556] overflow-hidden rounded-[2.25rem] bg-background text-foreground">
            {src ? (
              <Image
                src={src}
                alt={label}
                fill
                sizes="(min-width: 768px) 320px, 256px"
                className="object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label={label}
                className="absolute inset-0 flex flex-col"
              >
                <StatusBar />
                <div aria-hidden className="flex min-h-0 flex-1 flex-col">
                  {children}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function StatusBar() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold tabular-nums"
    >
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <Signal className="size-3" />
        <Wifi className="size-3" />
        <BatteryFull className="size-3.5" />
      </span>
    </div>
  )
}
