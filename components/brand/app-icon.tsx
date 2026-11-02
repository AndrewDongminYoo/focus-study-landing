import Image from "next/image"

import { APP_ICON_SRC, hasAppIcon } from "@/lib/site"
import { cn } from "@/lib/utils"

const SIZES = {
  20: "size-5",
  32: "size-8",
  64: "size-16",
} as const

type AppIconProps = {
  size: keyof typeof SIZES
  className?: string
}

// The 온:공 app icon (public/icon.png), never redrawn here.
// The icon always sits next to the "온:공" name, so it is decorative (alt="").
export function AppIcon({ size, className }: AppIconProps) {
  // The ring keeps the icon's edge visible on the navy dark-mode background,
  // which is the same color as the icon's own background.
  const shape = cn(
    "shrink-0 rounded-[22.5%] ring-1 ring-border",
    SIZES[size],
    className
  )

  if (!hasAppIcon) {
    // Placeholder until public/icon.png is added. Adding the file swaps it in;
    // no code change is needed.
    return (
      <span
        aria-hidden
        data-placeholder="public/icon.png"
        className={cn(
          shape,
          "inline-block border border-dashed border-muted-foreground/60 bg-muted"
        )}
      />
    )
  }

  return (
    <Image
      src={APP_ICON_SRC}
      alt=""
      width={size}
      height={size}
      className={shape}
    />
  )
}
