#!/usr/bin/env node
// Renders the link-share card, app/opengraph-image.png (1200×630).
// Next.js serves it as og:image; Twitter falls back to it.
//
// Usage: pnpm og        (CHROME_PATH optional, as for `pnpm shot`)
//
// The card is drawn with Playwright instead of next/og's ImageResponse because
// ImageResponse cannot read the WOFF2 Pretendard file this site ships, and the
// card needs Hangul. Re-run this script after changing the copy or colors below,
// and commit the PNG it writes.

import { readFileSync } from "node:fs"
import { chromium } from "@playwright/test"

const OUT = "app/opengraph-image.png"
const font = readFileSync("app/fonts/PretendardVariable.woff2").toString(
  "base64"
)

// The fixed brand values from app/tokens.css (navy, cream, dark-mode amber)
// and the dark-mode muted text color.
const NAVY = "#1E2744"
const CREAM = "#FFF4E2"
const AMBER = "#F4A646"
const MUTED = "#C9BCA9"

// The timer ring from components/brand/focus-ring.tsx, at a larger scale:
// a thick cream ring that is 75% full (18:45 left of 25:00), with the amber
// dot below it.
const R = 168
const STROKE = 30
const C = 2 * Math.PI * R
const RING = `
<svg width="420" height="520" viewBox="0 0 420 520">
  <circle cx="210" cy="210" r="${R}" fill="none" stroke="${CREAM}" stroke-opacity="0.14" stroke-width="${STROKE}" />
  <circle cx="210" cy="210" r="${R}" fill="none" stroke="${CREAM}" stroke-width="${STROKE}"
    stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * 0.25}"
    transform="rotate(-90 210 210)" />
  <circle cx="210" cy="470" r="38" fill="${AMBER}" />
</svg>`

const html = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><style>
@font-face { font-family: Pretendard; src: url(data:font/woff2;base64,${font}) format("woff2"); font-weight: 100 900; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; background: ${NAVY}; color: ${CREAM};
  font-family: Pretendard, sans-serif; word-break: keep-all; -webkit-font-smoothing: antialiased; }
.card { display: flex; align-items: center; justify-content: space-between; height: 100%; padding: 0 96px 0 104px; }
.copy { display: flex; flex-direction: column; gap: 28px; }
.mark { font-size: 34px; font-weight: 650; letter-spacing: -0.5px; }
h1 { font-size: 78px; font-weight: 650; line-height: 1.18; letter-spacing: -2px; }
.sub { font-size: 28px; color: ${MUTED}; }
.ring { position: relative; width: 420px; height: 520px; }
.time { position: absolute; left: 0; top: 0; width: 420px; height: 420px; display: flex;
  align-items: center; justify-content: center; font-size: 96px; font-weight: 300;
  font-variant-numeric: tabular-nums; letter-spacing: -2px; }
</style></head><body>
<div class="card">
  <div class="copy">
    <div class="mark">온:공</div>
    <h1>공부할 땐,<br>온전히 공부만.</h1>
    <div class="sub">iPhone 집중 타이머 · 곧 출시</div>
  </div>
  <div class="ring">${RING}<div class="time">18:45</div></div>
</div>
</body></html>`

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH || undefined,
})
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
})
await page.setContent(html)
await page.evaluate(() => document.fonts.ready)
const loaded = await page.evaluate(() =>
  document.fonts.check("650 78px Pretendard")
)
if (!loaded) {
  await browser.close()
  console.error(
    "Pretendard did not load; the card would fall back to a system font."
  )
  process.exit(1)
}
await page.screenshot({ path: OUT })
await browser.close()
console.log(`wrote ${OUT}`)
