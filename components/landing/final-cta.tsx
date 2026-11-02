import { Bell } from "lucide-react"

import { AppIcon } from "@/components/brand/app-icon"
import { Button } from "@/components/ui/button"
import { NOTIFY_HREF } from "@/lib/site"

export function FinalCta() {
  return (
    <section
      aria-labelledby="notify-title"
      className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center md:px-6 md:py-28"
    >
      <AppIcon size={64} />
      <h2
        id="notify-title"
        className="text-3xl font-semibold tracking-tight text-balance md:text-4xl"
      >
        출시되면 가장 먼저 알려 드릴게요.
      </h2>
      <p className="max-w-md leading-relaxed text-pretty text-muted-foreground">
        온전히 공부하는 시간, 온:공과 함께해요. 버튼을 누르면 메일 앱에서 출시
        알림 신청 메일이 열려요.
      </p>
      <Button asChild size="lg" className="h-12 px-6 text-base">
        <a href={NOTIFY_HREF}>
          <Bell />
          출시 알림 받기
        </a>
      </Button>
    </section>
  )
}
