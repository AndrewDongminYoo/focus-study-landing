import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/landing/section-heading"
import { FAQS } from "@/lib/landing-data"
import { CONTACT_EMAIL } from "@/lib/site"

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="mx-auto grid w-full max-w-6xl scroll-mt-20 gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_2fr] lg:gap-16"
    >
      <SectionHeading
        id="faq-title"
        label="자주 묻는 질문"
        title={["궁금한 점이 있나요?"]}
      >
        <p>할 수 있는 것과 없는 것, 있는 그대로 알려 드려요.</p>
        <p className="mt-3 text-base">
          더 궁금한 점은{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-block py-2 break-all text-foreground underline underline-offset-4 hover:decoration-2"
          >
            {CONTACT_EMAIL}
          </a>
          로 보내 주세요.
        </p>
      </SectionHeading>
      <Accordion type="single" collapsible className="border-t border-border">
        {FAQS.map((f) => (
          <AccordionItem key={f.question} value={f.question}>
            <AccordionTrigger className="py-5 text-base">
              {f.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-pretty text-muted-foreground">
              {f.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
