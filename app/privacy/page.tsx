import type { Metadata } from "next"

import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { CONTACT_EMAIL, STUDIO } from "@/lib/site"

export const metadata: Metadata = {
  title: "개인정보처리방침 · 온:공",
}

// Interim pre-launch notice. It states only the facts given for the landing
// page and must be reviewed and completed by the operator before launch.
const POINTS = [
  "온:공에는 계정이 없어요. 가입이나 로그인 없이 써요.",
  "고른 앱 목록과 사용량을 서버로 보내지 않아요.",
  "사용량은 iPhone의 스크린 타임 보고서 안에서만 보여요.",
]

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex max-w-2xl flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-muted-foreground">
              온:공 · 출시 전 안내
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              개인정보처리방침
            </h1>
            <p className="leading-relaxed text-pretty text-muted-foreground">
              온:공은 {STUDIO}에서 만드는 iPhone 집중 타이머예요. 출시 전에 이
              안내를 정식 개인정보처리방침으로 보완할 예정이에요.
            </p>
          </div>
          <ul className="flex flex-col divide-y divide-border border-y border-border">
            {POINTS.map((p) => (
              <li key={p} className="py-5 text-lg leading-relaxed">
                {p}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed">
            문의:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block py-0.5 underline underline-offset-4 hover:decoration-2"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
