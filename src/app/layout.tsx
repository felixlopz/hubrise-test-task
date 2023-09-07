import * as React from "react"

import { failIfEnvNotSet } from "@utils/misc"

failIfEnvNotSet()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
