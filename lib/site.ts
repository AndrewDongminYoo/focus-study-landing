import { existsSync } from "node:fs"
import { join } from "node:path"

export const SITE_URL = "https://focus.donminzzi.kr"
export const CONTACT_EMAIL = "ydm2790@gmail.com"
export const NOTIFY_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("온:공 출시 알림 신청")}`
export const SIBLING_APP = {
  name: "온음(WarmWake)",
  href: "https://warmwake.donminzzi.kr",
}
export const STUDIO = "donminzzi lab"

// The app icon is supplied as public/icon.png.
// Until that file exists, the brand components render a labelled placeholder
// instead of a broken image.
export const APP_ICON_SRC = "/icon.png"
export const hasAppIcon = existsSync(join(process.cwd(), "public", "icon.png"))
