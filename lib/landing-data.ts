import type { LucideIcon } from "lucide-react"
import {
  ChartBar,
  CloudOff,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  UserX,
} from "lucide-react"

export const NAV_LINKS = [
  { href: "#features", label: "기능" },
  { href: "#how-it-works", label: "작동 방식" },
  { href: "#privacy", label: "개인정보" },
  { href: "#contact", label: "문의" },
] as const

// The app's onboarding says "데이터는 기기에만 저장돼요", which backs the last line.
export const PROMISES: { icon: LucideIcon; text: string }[] = [
  { icon: LockKeyhole, text: "내가 고른 앱과 웹사이트만" },
  { icon: ShieldCheck, text: "계정 없이, 서버 없이" },
  { icon: Smartphone, text: "내 iPhone 안에서만" },
]

export type Step = { title: string; description: string }

export const STEPS: Step[] = [
  {
    title: "스크린 타임 권한 허용하기",
    description:
      "앱을 제한하고 사용 보고서를 보여 주려면 iPhone의 스크린 타임 권한이 필요해요.",
  },
  {
    title: "집중을 방해하는 앱과 웹사이트 고르기",
    description:
      "공부할 때 자꾸 손이 가는 앱과 웹사이트를 직접 골라요. 고른 것만 잠가요.",
  },
  {
    title: "집중 시간을 정하고 시작하기",
    description:
      "25분부터 50분까지 5분 단위로 정하고 시작해요. 설정에서 언제든 바꿀 수 있어요.",
  },
]

export const FOCUS_LENGTHS = [25, 30, 35, 40, 45, 50] as const

export type FeatureKey = "break" | "everyday" | "focusMode" | "today"

export type Feature = {
  key: FeatureKey
  /** The feature's name, shown above the headline. */
  label: string
  /** Benefit headline, one entry per line. */
  headline: [string, string]
  body: string
  note: string
}

export const FEATURES: Feature[] = [
  {
    key: "break",
    label: "짧게 쉬기",
    headline: ["잠깐 쉬어도,", "흐름은 그대로."],
    body: "한 번의 집중에서 3분씩 최대 3번 쉴 수 있어요. 쉬는 시간은 짧은 대기 화면 뒤에 시작되고, 쉬는 동안에는 타이머가 멈추고 제한이 잠깐 풀려요.",
    note: "무작정 참기보다, 다시 돌아올 수 있게.",
  },
  {
    key: "everyday",
    label: "매일 제한",
    headline: ["매일 같은 시간,", "따로 신경 쓰지 않도록."],
    body: "학교 시간처럼 매일 반복되는 시간대에 따로 고른 앱을 막아요. 점심시간처럼 제한을 잠시 풀어 둘 시간도 3개까지 정할 수 있어요.",
    note: "앱을 열지 않아도 매일 적용돼요.",
  },
  {
    key: "focusMode",
    label: "집중 모드와 함께",
    headline: ["집중 모드를 켜면,", "온:공도 함께."],
    body: "iOS에서 “공부” 같은 집중 모드를 켜면 집중이 시작돼요. 알림은 그 집중 모드에 설정한 대로 iOS가 걸러 줘요.",
    note: "그렇게 시작한 집중은 집중 모드를 끄면 끝나요.",
  },
  {
    key: "today",
    label: "오늘의 기록",
    headline: ["오늘의 집중을,", "차분하게 돌아봐요."],
    body: "오늘 한 집중과 끝난 이유를 보여 줘요. 오늘의 사용량은 스크린 타임 보고서로 확인해요.",
    note: "점수나 비교 대신, 나의 하루를 기록해요.",
  },
]

export type PrivacyPoint = { icon: LucideIcon; text: string }

export const PRIVACY_POINTS: PrivacyPoint[] = [
  { icon: UserX, text: "계정이 없어요" },
  { icon: CloudOff, text: "고른 앱 목록과 사용량을 서버로 보내지 않아요" },
  {
    icon: ChartBar,
    text: "사용량은 iPhone의 스크린 타임 보고서 안에서만 보여요",
  },
]

export type Faq = { question: string; answer: string }

export const FAQS: Faq[] = [
  {
    question: "모든 브라우저에서 사이트가 막히나요?",
    answer:
      "사이트(도메인) 단위로 막고, 주소의 세부 경로별로 막지는 않아요. 브라우저별 동작은 확인한 범위만 안내할 예정이에요.",
  },
  {
    question: "공부했다는 증명이 되나요?",
    answer: "아니요. 스스로 정한 약속을 지키도록 돕는 도구예요.",
  },
  {
    question: "일시정지가 있나요?",
    answer: "쉬기(3분, 최대 3번)만 있어요.",
  },
  {
    question: "Android나 iPad도 되나요?",
    answer: "지금은 iPhone만 지원해요.",
  },
  {
    question: "부모님이 관리하는 기능이 있나요?",
    answer: "없어요. 본인이 본인의 iPhone에서 쓰는 앱이에요.",
  },
]

// Mock screen data. Labels follow the shipped app strings in focus-study/App.
export const TODAY_SESSIONS = [
  { time: "오후 4:10", reason: "25분 만료", duration: "25분 0초" },
  { time: "오후 4:42", reason: "집중 종료", duration: null },
  { time: "오후 7:30", reason: "40분 만료", duration: "40분 0초" },
] as const

export const EVERYDAY_MOCK = {
  rangeStart: "08:30",
  rangeEnd: "16:30",
  windows: [{ label: "점심시간", start: "12:20", end: "13:10" }],
  apps: 6,
  websites: 3,
} as const
