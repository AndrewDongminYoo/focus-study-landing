import { ArrowDown, Bell } from "lucide-react"

import { AppIcon } from "@/components/brand/app-icon"
import { PhoneFrame } from "@/components/landing/phone-frame"
import { TimerScreen } from "@/components/landing/phone-screens"
import { Button } from "@/components/ui/button"
import { NOTIFY_HREF } from "@/lib/site"

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pt-16 pb-12 md:px-6 md:pt-24 md:pb-16 lg:grid-cols-[1fr_auto] lg:gap-20">
      <div className="flex flex-col items-start gap-8">
        <AppIcon size={64} />
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl leading-tight font-semibold tracking-tight md:text-5xl md:leading-tight">
            공부할 땐,
            <br />
            온전히 공부만.
          </h1>
          <p className="max-w-prose text-lg leading-relaxed text-pretty text-muted-foreground">
            집중하는 동안 방해되는 앱과 웹사이트를 잠가 두는 iPhone 집중
            타이머예요.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button asChild size="lg" className="h-12 px-6 text-base">
            <a href={NOTIFY_HREF}>
              <Bell />
              출시 알림 받기
            </a>
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-1.5 rounded-md py-2 text-base font-medium underline underline-offset-4 outline-none hover:decoration-2 focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            어떻게 작동하나요
            <ArrowDown className="size-4" />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span
            aria-disabled="true"
            className="inline-flex cursor-default items-center gap-2 rounded-lg border border-border px-3 py-1.5 select-none"
          >
            <span className="font-semibold text-foreground/70">App Store</span>
            <span aria-hidden className="h-3 w-px bg-border" />
            <span>곧 출시</span>
          </span>
          <span>iOS 17 이상 · iPhone 전용</span>
        </div>
      </div>
      <PhoneFrame
        label="온:공 집중 화면 예시: 남은 시간 18분 42초, 쉬기와 집중 종료 버튼"
        caption="화면 예시 · 실제 앱과 다를 수 있어요"
        className="mx-auto w-64 md:w-72 lg:w-80"
      >
        <TimerScreen />
      </PhoneFrame>
    </section>
  )
}
