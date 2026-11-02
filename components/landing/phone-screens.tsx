import { BookOpen, ChartBar, ChevronLeft, ChevronRight } from "lucide-react"

import { AppIcon } from "@/components/brand/app-icon"
import { FocusRing } from "@/components/brand/focus-ring"
import { EVERYDAY_MOCK, TODAY_SESSIONS } from "@/lib/landing-data"
import { cn } from "@/lib/utils"

// Simplified reconstructions of the app's screens, rendered inside PhoneFrame.
// Labels follow the shipped strings in focus-study/App. Each one can be
// replaced by a real screenshot through PhoneFrame's `src`.

const SESSION_SECONDS = 25 * 60
const REMAINING_SECONDS = 18 * 60 + 42

export function TimerScreen() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6">
        <p className="text-xs text-muted-foreground">집중 시간 진행 중</p>
        <FocusRing
          remaining={REMAINING_SECONDS / SESSION_SECONDS}
          className="w-48 md:w-52 lg:w-60"
        >
          <span className="text-5xl font-light tracking-tight tabular-nums lg:text-6xl">
            18:42
          </span>
          <span className="mt-1 text-xs text-muted-foreground tabular-nums">
            25분 집중
          </span>
        </FocusRing>
      </div>
      <div className="flex flex-col gap-3 px-5 pb-8">
        <div className="grid grid-cols-2 gap-2">
          <MockButton>쉬기</MockButton>
          <MockButton variant="outline" className="text-destructive">
            집중 종료
          </MockButton>
        </div>
        <p className="text-center text-xs text-muted-foreground tabular-nums">
          쉬는 시간 3번 남았어요
        </p>
      </div>
    </>
  )
}

export function BreakWaitScreen() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-5 text-center">
      <FocusRing remaining={0.7} className="w-24">
        <span className="text-2xl font-light tabular-nums">7</span>
      </FocusRing>
      <p className="text-sm font-semibold tabular-nums">
        7초 뒤에 쉬는 시간이 시작돼요
      </p>
      <p className="text-xs leading-relaxed text-muted-foreground">
        다른 앱으로 나가면 집중으로 돌아가요. 이번 쉬는 시간을 쓰면 2번 남아요.
      </p>
      <MockButton variant="outline" className="w-full">
        집중으로 돌아가기
      </MockButton>
    </div>
  )
}

export function EverydayScreen() {
  const m = EVERYDAY_MOCK
  return (
    <div className="flex flex-1 flex-col gap-3 px-3 pt-1">
      <NavTitle title="매일 제한" back />
      <MockSection header="제한 시간">
        <MockRow label="매일 제한 켜기" value={<MockToggle />} />
        <MockRow label="제한 시작" value={m.rangeStart} />
        <MockRow label="제한 끝" value={m.rangeEnd} />
      </MockSection>
      <MockSection header="잠시 풀어 두는 시간">
        {m.windows.map((w) => (
          <MockRow
            key={w.label}
            label={w.label}
            value={`${w.start}–${w.end}`}
          />
        ))}
      </MockSection>
      <MockSection>
        <MockRow
          label="제한할 앱"
          value={`앱 ${m.apps}개 · 웹사이트 ${m.websites}개`}
        />
      </MockSection>
    </div>
  )
}

export function FocusModeScreen() {
  return (
    <div className="flex flex-1 flex-col gap-3 px-3 pt-1">
      <NavTitle title="집중 모드" back />
      <div className="flex flex-col items-center gap-2 py-2">
        <span className="flex size-11 items-center justify-center rounded-full bg-secondary">
          <BookOpen className="size-5 text-primary" />
        </span>
        <span className="text-sm font-semibold">공부</span>
        <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
          켬
        </span>
      </div>
      <MockSection header="알림 허용">
        <MockRow label="사람" value={<ChevronRight className="size-3" />} />
        <MockRow label="앱" value={<ChevronRight className="size-3" />} />
      </MockSection>
      <MockSection header="집중 모드 필터">
        <div className="flex items-center gap-2 px-3 py-2">
          <AppIcon size={20} />
          <span className="flex flex-col">
            <span className="text-xs font-medium">집중 시간</span>
            <span className="text-xs text-muted-foreground">집중 시작 켬</span>
          </span>
        </div>
      </MockSection>
    </div>
  )
}

export function TodayScreen() {
  return (
    <div className="flex flex-1 flex-col gap-3 px-3 pt-1">
      <div className="flex items-center justify-between px-1 py-1">
        <span className="w-8" />
        <span className="text-xs font-semibold">오늘의 기록</span>
        <span className="w-8 text-right text-xs text-primary">닫기</span>
      </div>
      <MockSection header="오늘의 세션">
        {TODAY_SESSIONS.map((s) => (
          <div
            key={s.time}
            className="flex items-center justify-between px-3 py-2"
          >
            <span className="flex flex-col">
              <span className="text-xs tabular-nums">{s.time}</span>
              <span className="text-xs text-muted-foreground">{s.reason}</span>
            </span>
            {s.duration ? (
              <span className="text-xs tabular-nums">{s.duration}</span>
            ) : null}
          </div>
        ))}
      </MockSection>
      <MockSection>
        <div className="flex items-center gap-2 px-3 py-2 text-xs">
          <ChartBar className="size-3.5 text-primary" />
          <span className="flex-1">오늘의 사용 보고서</span>
          <ChevronRight className="size-3 text-muted-foreground" />
        </div>
      </MockSection>
      <p className="px-3 text-xs leading-relaxed text-muted-foreground">
        집중 기록과 별도로 기기 사용 시간을 볼 수 있어요.
      </p>
    </div>
  )
}

function MockButton({
  children,
  variant = "secondary",
  className,
}: {
  children: React.ReactNode
  variant?: "secondary" | "outline"
  className?: string
}) {
  return (
    <span
      className={cn(
        "flex h-11 items-center justify-center rounded-full px-4 text-sm font-medium",
        variant === "secondary" ? "bg-secondary" : "border border-border",
        className
      )}
    >
      {children}
    </span>
  )
}

function NavTitle({ title, back }: { title: string; back?: boolean }) {
  return (
    <div className="relative flex items-center justify-center py-1">
      {back ? (
        <ChevronLeft className="absolute left-0 size-4 text-primary" />
      ) : null}
      <span className="text-xs font-semibold">{title}</span>
    </div>
  )
}

function MockSection({
  header,
  children,
}: {
  header?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      {header ? (
        <span className="px-3 text-xs text-muted-foreground">{header}</span>
      ) : null}
      <div className="divide-y divide-border overflow-hidden rounded-xl bg-card">
        {children}
      </div>
    </div>
  )
}

function MockRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2 px-3 py-2 text-xs">
      <span className="shrink-0 whitespace-nowrap">{label}</span>
      <span className="text-right text-muted-foreground tabular-nums">
        {value}
      </span>
    </div>
  )
}

function MockToggle() {
  return (
    <span className="flex h-4 w-7 items-center justify-end rounded-full bg-primary p-0.5">
      <span className="size-3 rounded-full bg-foreground" />
    </span>
  )
}
