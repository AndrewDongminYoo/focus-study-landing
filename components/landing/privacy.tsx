import { SectionHeading } from "@/components/landing/section-heading"
import { PRIVACY_POINTS } from "@/lib/landing-data"

export function Privacy() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-title"
      className="scroll-mt-16 bg-secondary"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <SectionHeading
          id="privacy-title"
          label="개인정보"
          title={["집중은 나의 것.", "기록도 나의 것."]}
        >
          <p>어떤 앱을 쓰는지는 내 iPhone만 알면 되니까요.</p>
        </SectionHeading>
        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {PRIVACY_POINTS.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-4 py-6 md:gap-5 md:py-7"
            >
              <Icon
                className="mt-0.5 size-7 shrink-0 text-primary"
                aria-hidden
              />
              <p className="text-xl font-medium text-balance md:text-2xl">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
