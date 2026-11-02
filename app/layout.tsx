import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { APP_ICON_SRC, hasAppIcon } from "@/lib/site"

// Pretendard Variable 1.309, self-hosted under the SIL Open Font License
// (app/fonts/OFL.txt), the same file prep-book-landing ships.
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "온:공 · 공부할 땐, 온전히 공부만",
  description:
    "집중하는 동안 방해되는 앱과 웹사이트를 잠가 두는 iPhone 집중 타이머예요. 계정 없이 쓰고, 고른 앱과 사용량을 서버로 보내지 않아요.",
  icons: hasAppIcon ? { icon: APP_ICON_SRC, apple: APP_ICON_SRC } : undefined,
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
