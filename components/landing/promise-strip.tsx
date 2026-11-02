import { PROMISES } from "@/lib/landing-data"

export function PromiseStrip() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <ul
        aria-label="온:공의 약속"
        className="flex flex-col gap-3 rounded-2xl bg-secondary px-6 py-5 md:flex-row md:items-center md:justify-center md:gap-10"
      >
        {PROMISES.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2.5 text-sm">
            <Icon className="size-4 shrink-0 text-primary" aria-hidden />
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}
