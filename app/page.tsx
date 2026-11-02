import { SectionMark } from "@/components/brand/section-mark"
import { Faq } from "@/components/landing/faq"
import { Features } from "@/components/landing/features"
import { FinalCta } from "@/components/landing/final-cta"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Privacy } from "@/components/landing/privacy"
import { PromiseStrip } from "@/components/landing/promise-strip"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PromiseStrip />
        <HowItWorks />
        <SectionMark />
        <Features />
        <Privacy />
        <Faq />
        <SectionMark />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
