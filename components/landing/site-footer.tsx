import Link from "next/link"

import { AppIcon } from "@/components/brand/app-icon"
import { CONTACT_EMAIL, SIBLING_APP, STUDIO } from "@/lib/site"

const linkClass =
  "inline-flex min-h-10 w-fit items-center underline underline-offset-4 hover:decoration-2 rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-10 md:px-6">
        <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
          <p className="flex items-center gap-2.5">
            <AppIcon size={32} />
            <span className="text-lg font-semibold tracking-tight">온:공</span>
            <span className="text-sm text-muted-foreground">
              나의 하루에, 온전히.
            </span>
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            온:공은 {STUDIO}에서 만드는 iPhone 앱이에요.
          </p>
        </div>
        <FooterColumn title="형제 앱">
          <a href={SIBLING_APP.href} className={linkClass}>
            {SIBLING_APP.name}
          </a>
        </FooterColumn>
        <FooterColumn title="문의">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`break-all ${linkClass}`}
          >
            {CONTACT_EMAIL}
          </a>
        </FooterColumn>
        <FooterColumn title="안내">
          <Link href="/privacy" className={linkClass}>
            개인정보처리방침
          </Link>
        </FooterColumn>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 pb-10 text-sm text-muted-foreground md:px-6">
        © {STUDIO}
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <p className="text-muted-foreground">{title}</p>
      {children}
    </div>
  )
}
