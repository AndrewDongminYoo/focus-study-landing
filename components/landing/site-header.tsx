import Link from "next/link"
import { Bell } from "lucide-react"

import { AppIcon } from "@/components/brand/app-icon"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/landing-data"
import { NOTIFY_HREF } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-4 md:px-6">
        <Link
          href="/"
          className="flex h-10 items-center gap-2.5 rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <AppIcon size={32} />
          <span className="text-lg font-semibold tracking-tight">온:공</span>
        </Link>
        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={`/${l.href}`}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild size="lg" className="px-4">
          <a href={NOTIFY_HREF}>
            <Bell />
            출시 알림 받기
          </a>
        </Button>
      </div>
    </header>
  )
}
