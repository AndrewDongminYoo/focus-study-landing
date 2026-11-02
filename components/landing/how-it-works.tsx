import { Check, ShieldCheck } from "lucide-react"

import { SectionHeading } from "@/components/landing/section-heading"
import { FOCUS_LENGTHS, STEPS } from "@/lib/landing-data"
import { cn } from "@/lib/utils"

// Static illustrations, one per step. They are decorative: the step text
// carries the meaning.
const VISUALS = [
  <span
    key="access"
    className="flex items-center gap-2.5 rounded-xl bg-card px-4 py-3 text-sm shadow-xs"
  >
    <ShieldCheck className="size-5 text-primary" />
    스크린 타임
    <span className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
      <Check className="size-3" />
      허용함
    </span>
  </span>,
  <span key="select" className="flex flex-wrap justify-center gap-2 text-sm">
    {["앱 6개", "웹사이트 3개"].map((t) => (
      <span
        key={t}
        className="flex items-center gap-1.5 rounded-xl bg-card px-3 py-2 tabular-nums shadow-xs"
      >
        <Check className="size-4 text-primary" />
        {t}
      </span>
    ))}
  </span>,
  <span key="length" className="flex flex-wrap justify-center gap-1">
    {FOCUS_LENGTHS.map((m) => (
      <span
        key={m}
        className={cn(
          "rounded-lg px-2 py-1.5 text-sm tabular-nums",
          m === 25
            ? "bg-primary font-medium text-primary-foreground"
            : "bg-card text-muted-foreground"
        )}
      >
        {m}분
      </span>
    ))}
  </span>,
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="mx-auto flex w-full max-w-6xl scroll-mt-20 flex-col gap-12 px-4 py-16 md:px-6 md:py-24"
    >
      <SectionHeading
        id="how-it-works-title"
        label="작동 방식"
        title={["집중의 시작은, 간단하게."]}
      >
        <p>
          처음 한 번 준비해 두면, 그다음부터는 시간을 정하고 시작하기만 하면
          돼요.
        </p>
      </SectionHeading>
      <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex flex-col gap-3">
            <div
              aria-hidden
              className="mb-2 flex h-32 items-center justify-center rounded-2xl bg-secondary px-4"
            >
              {VISUALS[i]}
            </div>
            <h3 className="flex gap-2 text-lg font-semibold text-balance">
              <span className="text-muted-foreground tabular-nums">
                {i + 1}
              </span>
              {step.title}
            </h3>
            <p className="leading-relaxed text-pretty text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
