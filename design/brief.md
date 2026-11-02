# 온:공 landing page

Audience & goal: Korean middle school, high school and university students whose study is interrupted by their phone.
They must understand what the app blocks and what it does not block, and leave with the intent to be notified at launch (pre-release; the only action is a `mailto:` "출시 알림 받기").

Tone: calm, tidy, honest; reference feel: a quiet study desk, editorial and airy, the timer numerals as the typographic hero.
Copy is 해요체, with no exaggeration and no scolding ("폰 중독 탈출!" is out).

Brand hue: amber, fixed by the operator. Light `#A85F10` = `oklch(0.5581 0.1255 59.86)`, dark `#F4A646` = `oklch(0.7848 0.1425 68.29)`.
It is the warm lamp on a dark desk, and it is the dot in the app icon.
Neutrals come from the icon: navy `#1E2744` = `oklch(0.2799 0.0551 269.56)` and cream `#FFF4E2` = `oklch(0.9710 0.0265 80.25)`.
Light mode is navy text on cream; dark mode is cream text on navy, the same pair as the icon.
Amber is used only for primary buttons, emphasis, and progress.
On cream, amber is 4.48:1, so in light mode it is only for large text, icons, borders and progress; small text links are navy with an underline.
Button text: white on amber in light (4.87:1), navy on amber in dark (7.27:1); never cream on amber in dark (1.9:1).
Derived neutrals: muted text light `oklch(0.47 0.04 272)` 6.30:1 on cream, dark `oklch(0.80 0.03 78)` 7.85:1 on navy.
No gradients.

Motif: the ring and the dot (two circles). Used only in the timer illustration and as a small divider mark between sections; never scattered as background decoration.

Type: Pretendard Variable (self-hosted, OFL, same file as prep-book-landing) as the only sans family; Geist Mono is not used.
Scale: `text-sm` meta and UI, `text-base` body, `text-lg` lead, `text-2xl`/`text-3xl` section titles, `text-4xl`/`text-5xl` hero title, timer numerals `text-6xl` with `tabular-nums` and `font-light`.

Layout: `max-w-6xl` container, `px-4 md:px-6`, sections `py-16 md:py-24`.
Hero is a split (copy left, phone right) on `lg`, stacked on mobile (copy first).
Features alternate text and a small phone screen left/right on `md`, stacked on mobile with text first.
Everything is left-aligned except the final CTA, which is short and centered.

Sections:

1. Header: `AppIcon` + "온:공" wordmark, anchor links 기능 · 작동 방식 · 개인정보 · 문의 (hidden under `md`; the CTA stays), `Button` "출시 알림 받기".
2. Hero: `AppIcon` 64px above the two-line h1 "공부할 땐, / 온전히 공부만.", lead copy, `Button` (mailto) + underlined text link "어떻게 작동하나요", a disabled "App Store · 곧 출시" `Badge`-like element (text only, not Apple's badge). Right: `PhoneFrame` with the full-screen timer (remaining time large, ring + dot progress, "쉬기" and "집중 종료") and the caption "화면 예시 · 실제 앱과 다를 수 있어요".
3. Promise strip: three short lines with icons ("내가 고른 앱과 웹사이트만 · 계정도, 서버 전송도 없이 · 내 iPhone 안에서만").
4. How it works: three steps, each with a static illustration card (permission, chosen apps and websites, the 25–50 minute lengths), a horizontal row on `md`.
5. Features ×4, alternating: 짧게 쉬기 (break waiting screen), 매일 제한 (daily schedule with lunch window), 집중 모드와 함께 (iOS Focus "공부" on), 오늘의 기록 (today's sessions with end reasons). Each has the feature name as a label, a two-line benefit headline, the body, a one-line note, and a small `PhoneFrame`.
6. Privacy: headline "집중은 나의 것. 기록도 나의 것." and three emphasized lines with lucide icons.
7. FAQ: `Accordion`, five questions, answers verbatim from the request.

Section headings (how it works, features, privacy, FAQ) are a small label that matches the navigation link, then a headline, then a lead sentence (`SectionHeading`).
Revised on 2026-11-02 after comparing with a v0.dev build of the same prompt: the headlines, feature notes, promise strip, step illustrations, hero line break and caption, footer wordmark, and the flat offset phone shadow (`--phone-shadow`) came from that comparison. The v0 feature cards were not adopted because they show controls the app does not have (a weekday picker).
8. Final CTA: `AppIcon`, "출시되면 가장 먼저 알려 드릴게요.", `Button`.
9. Footer: `AppIcon` + "온:공" + "나의 하루에, 온전히.", donminzzi lab, 온음(WarmWake) link, 개인정보처리방침 (`/privacy`), contact email, © donminzzi lab.

Phone screens: the screen subtree is wrapped in `.dark` so it always renders navy + cream + dark amber, like the icon, in both page themes.
`PhoneFrame` takes either `src` (a future 1179×2556 screenshot, `aspect-[1179/2556]`) or children (the reconstructed UI), so a real screenshot can replace the mock later.
Mock strings follow the shipped app (`focus-study/App/FocusView.swift`, `TodayHistoryView.swift`), except the hero buttons, which use the operator's "쉬기" / "집중 종료".

States: the page has no data regions. The App Store badge has one state, disabled "곧 출시".
Copy language: ko.

Assets and decisions to confirm:

- `public/icon.png` is the operator's app icon. All icon uses go through `components/brand/app-icon.tsx`, which renders a labelled placeholder if the file is missing; the favicon is wired the same way.
- Contact email `ydm2790@gmail.com` (from the prep-book-landing footer), kept in one constant in `lib/site.ts`.
- 온음(WarmWake) URL `https://warmwake.donminzzi.kr` (from the warm_alarm README).
- `/privacy` is a short interim page that states only the facts in the request; it needs the operator's review before launch.
- No user counts, ratings or improvement figures anywhere.
