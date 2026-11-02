import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  id: string
  /** The section's plain name, matching its navigation link. */
  label: string
  /** Headline lines; each entry starts a new line from md up. */
  title: string[]
  children?: React.ReactNode
  className?: string
}

export function SectionHeading({
  id,
  label,
  title,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-3", className)}>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-balance md:text-4xl"
      >
        {title.map((line, i) => (
          <span key={line}>
            {i > 0 ? <br className="hidden md:inline" /> : null}
            {i > 0 ? " " : null}
            {line}
          </span>
        ))}
      </h2>
      {children ? (
        <div className="text-lg leading-relaxed text-pretty text-muted-foreground">
          {children}
        </div>
      ) : null}
    </div>
  )
}
