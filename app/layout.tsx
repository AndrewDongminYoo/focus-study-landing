import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { APP_ICON_SRC, hasAppIcon, SITE_URL } from "@/lib/site"

// Pretendard Variable 1.309, self-hosted under the SIL Open Font License
// (app/fonts/OFL.txt), the same file prep-book-landing ships.
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "100 900",
})

const TITLE = "온:공 · 공부할 땐, 온전히 공부만"
const DESCRIPTION =
  "집중하는 동안 방해되는 앱과 웹사이트를 잠가 두는 iPhone 집중 타이머예요. 계정 없이 쓰고, 고른 앱과 사용량을 서버로 보내지 않아요."

// The share image is app/opengraph-image.png (regenerate with `pnpm og`);
// Next.js adds its og:image tags, and Twitter falls back to og:image.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: hasAppIcon ? { icon: APP_ICON_SRC, apple: APP_ICON_SRC } : undefined,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "온:공",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${pretendard.variable} scroll-smooth font-sans break-keep antialiased motion-reduce:scroll-auto`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
