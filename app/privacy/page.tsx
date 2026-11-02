import type { Metadata } from "next"

import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { CONTACT_EMAIL, STUDIO } from "@/lib/site"

export const metadata: Metadata = {
  title: "개인정보처리방침 · 온:공",
}

// Every statement below traces to the focus-study repository on 2026-11-02:
// docs/specs/2026-10-26-focus-study-design.md (scope, "타깃과 데이터 경계" and
// its M2–M4 amendments) and a search of the product sources, which found no
// URLSession, URLRequest or analytics/crash SDK and only Apple framework
// imports. Re-check them when the app's data boundary changes.
const SECTIONS: { title: string; items: string[] }[] = [
  {
    title: "계정과 서버",
    items: [
      "온:공에는 계정이 없어요. 가입이나 로그인 없이 써요.",
      "온:공은 자체 서버를 두지 않고, 고른 앱 목록과 사용량을 서버로 보내지 않아요.",
      "광고를 보여 주거나, 사용 기록과 오류를 모으는 도구를 쓰지 않아요.",
    ],
  },
  {
    title: "iPhone 안에 저장하는 정보",
    items: [
      "제한할 앱과 웹사이트는 이름이나 주소가 아니라, iOS가 항목마다 주는 식별 값으로만 저장해요.",
      "집중 기록으로는 집중마다 시작한 시각, 끝날 예정이던 시각, 실제로 끝난 시각과 끝난 이유를 저장해요.",
      "설정으로는 집중 시간, 매일 제한의 시간대, 제한을 잠시 풀어 두는 시간을 저장해요.",
      "집중 모드로 시작한 집중인지만 기록하고, 집중 모드의 이름은 저장하지 않아요.",
    ],
  },
  {
    title: "사용량",
    items: [
      "사용량은 iPhone의 스크린 타임 보고서 안에서만 보여요.",
      "보고서에 나온 사용량을 온:공이 따로 옮기거나 저장하지 않아요.",
    ],
  },
  {
    title: "권한",
    items: [
      "스크린 타임 권한은 고른 앱과 웹사이트를 제한하고 사용 보고서를 보여 주는 데에만 써요.",
      "권한은 iPhone의 설정 앱에서 언제든 끌 수 있어요.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex max-w-2xl flex-col gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-muted-foreground">
              온:공 · 출시 전 안내
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              개인정보처리방침
            </h1>
            <p className="leading-relaxed text-pretty text-muted-foreground">
              온:공은 {STUDIO}에서 만드는 iPhone 집중 타이머예요. 이 안내는 출시
              전 버전을 기준으로 해요. 출시할 때 시행일을 함께 적어 확정할게요.
            </p>
          </div>
          {SECTIONS.map((s) => (
            <section key={s.title} className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold tracking-tight">
                {s.title}
              </h2>
              <ul className="flex flex-col divide-y divide-border border-y border-border">
                {s.items.map((item) => (
                  <li key={item} className="py-4 leading-relaxed text-pretty">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight">문의</h2>
            <p className="leading-relaxed">
              개인정보와 관련한 문의는{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block py-2 break-all underline underline-offset-4 hover:decoration-2"
              >
                {CONTACT_EMAIL}
              </a>
              로 보내 주세요.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
