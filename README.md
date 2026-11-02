# 온:공 (Ongong) landing page

The pre-launch website for 온:공, an iPhone focus timer for students: while a focus session runs, it locks the apps and websites the student chose.
The site is in Korean and lives at [focus.donminzzi.kr](https://focus.donminzzi.kr).
The app itself is developed in [AndrewDongminYoo/focus-study](https://github.com/AndrewDongminYoo/focus-study); it is not released yet, so the only call to action is a `mailto:` link that asks to be told at launch.

![The link-share card: navy background, the headline 공부할 땐, 온전히 공부만., and a cream timer ring with an amber dot](app/opengraph-image.png)

## Pages

| Route      | What it shows                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`        | Hero with a timer mock, a three-step "how it works", four features with small phone mocks, the privacy promises, an FAQ and the launch-notice CTA |
| `/privacy` | The interim privacy notice, written from the app's data boundary; it gets an effective date at launch                                             |

## Run it

Prerequisites: Node 24 (`.node-version`) and pnpm 12 (the exact version is in `packageManager` in `package.json`).

```bash
pnpm install
pnpm exec playwright install chromium   # once, for `pnpm shot` and `pnpm og`; or set CHROME_PATH to a local Chrome
pnpm dev                                # http://localhost:3000
```

```bash
pnpm check            # typecheck + design-lint + eslint
pnpm build
pnpm shot / /privacy  # screenshots at 1440px and 390px, light and dark, into .screenshots/; fails on overflow or console errors
pnpm og               # regenerate app/opengraph-image.png
```

CI (`.github/workflows/ci.yml`) runs `pnpm check`, `pnpm build` and a render smoke test on every push and pull request.
The site is deployed on Vercel.

## Where things live

| To change                                                           | Edit                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Page copy: steps, features, privacy lines, FAQ, mock screen data    | `lib/landing-data.ts`                                                    |
| Site URL, contact email, the sibling app link, the studio name      | `lib/site.ts`                                                            |
| Colors and radius (light and dark)                                  | `app/tokens.css`, the only file with color values                        |
| Sections                                                            | `components/landing/*`, composed in `app/page.tsx`                       |
| The timer ring, the section mark and the app icon wrapper           | `components/brand/*`                                                     |
| The app icon (header, hero, final CTA, footer, favicon)             | `public/icon.png`                                                        |
| The link-share card                                                 | the copy and colors at the top of `scripts/og-image.mjs`, then `pnpm og` |
| The privacy notice                                                  | `app/privacy/page.tsx`                                                   |
| Design decisions: audience, tone, brand color rules, section layout | `design/brief.md`                                                        |

The type is Pretendard Variable, self-hosted in `app/fonts/` under the SIL Open Font License (`app/fonts/OFL.txt`).

## Keeping the copy true

The page promises things about an app that lives in another repository, so check the copy against it when either one changes.

- Labels inside the phone mocks come from the app's own strings in `focus-study/App/*.swift`. The one exception is the hero's "쉬기" button, which the app calls "쉬는 시간 갖기".
- Every line of `/privacy` traces to the "타깃과 데이터 경계" section of `focus-study/docs/specs/2026-10-26-focus-study-design.md`, and to a search of the app's sources that found no networking or analytics code (2026-11-02). Re-check both when the app's data boundary changes, and add the effective date at launch.
- No user counts, ratings or improvement figures appear on the page: there are none yet.

## Replacing the phone mocks with screenshots

The phone screens are simplified UI reconstructions, captioned "화면 예시 · 실제 앱과 다를 수 있어요".
When real screenshots exist, save them under `public/` at 1179×2556 and pass the path as `src` to `PhoneFrame` (`components/landing/phone-frame.tsx`); the mock children are then ignored.
Remove the caption from `components/landing/hero.tsx` once the hero shows a real screen.

## Working with Claude Code

This repository was created from the [page-gen](https://github.com/AndrewDongminYoo/page-gen) template, which adds an agent workflow: the agent writes `design/brief.md` before code, edits only through design tokens and the shadcn primitives, and checks its work in screenshots.
`CLAUDE.md` and `.claude/` hold that workflow; the page-gen README explains each part.
The unused shadcn components were removed when the site shipped, so `components/ui/` holds only `accordion` and `button`; add a primitive back from the shadcn registry when a change needs one.

## Dependency notes

`osv-scanner.toml` ignores GHSA-g3hv-75wg-m249 for `minimatch@3.1.5`, which only the ESLint plugins use and which has no 3.x fix; the entry records the evidence.
The 10.x copy is moved to a fixed version by an override in `pnpm-workspace.yaml`.
Re-check the entry when `eslint-config-next` updates its plugins.
