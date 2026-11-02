import { PhoneFrame } from "@/components/landing/phone-frame"
import {
  BreakWaitScreen,
  EverydayScreen,
  FocusModeScreen,
  TodayScreen,
} from "@/components/landing/phone-screens"
import { SectionHeading } from "@/components/landing/section-heading"
import { FEATURES, type FeatureKey } from "@/lib/landing-data"
import { cn } from "@/lib/utils"

const SCREENS: Record<FeatureKey, { label: string; screen: React.ReactNode }> =
  {
    break: {
      label: "쉬는 시간 대기 화면 예시: 7초 뒤에 쉬는 시간이 시작돼요",
      screen: <BreakWaitScreen />,
    },
    everyday: {
      label: "매일 제한 설정 예시: 8시 30분부터 16시 30분까지, 점심시간 해제",
      screen: <EverydayScreen />,
    },
    focusMode: {
      label: "iOS 집중 모드 설정 예시: 공부 집중 모드에 온:공 필터 추가",
      screen: <FocusModeScreen />,
    },
    today: {
      label: "오늘의 기록 화면 예시: 오늘 한 집중과 끝난 이유",
      screen: <TodayScreen />,
    },
  }

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="mx-auto flex w-full max-w-6xl scroll-mt-20 flex-col gap-16 px-4 py-16 md:px-6 md:py-24"
    >
      <SectionHeading
        id="features-title"
        label="기능"
        title={["나의 속도로, 나의 집중."]}
      >
        <p>너무 엄격하지 않게. 그렇다고 쉽게 흐트러지지 않게.</p>
      </SectionHeading>
      <div className="flex flex-col gap-16 md:gap-24">
        {FEATURES.map((f, i) => (
          <article
            key={f.key}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
          >
            <div
              className={cn("flex flex-col gap-4", i % 2 === 1 && "md:order-2")}
            >
              <p className="text-sm font-medium text-muted-foreground">
                {f.label}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {f.headline[0]}
                <br />
                {f.headline[1]}
              </h3>
              <p className="max-w-prose text-base leading-relaxed text-pretty">
                {f.body}
              </p>
              <p className="text-sm text-muted-foreground">{f.note}</p>
            </div>
            <div
              className={cn(
                "flex justify-center rounded-3xl bg-secondary px-6",
                // Screens whose content ends early are cropped at the tile edge.
                f.key === "break"
                  ? "py-10 md:py-12"
                  : "h-112 items-start overflow-hidden pt-10"
              )}
            >
              <PhoneFrame label={SCREENS[f.key].label} className="w-60">
                {SCREENS[f.key].screen}
              </PhoneFrame>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
