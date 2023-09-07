import * as React from "react"

import { Language } from "@utils/locales"

export interface ClientConfiguration {
  NODE_ENV: string
  CONTACT_MESSAGE_URL: string
  RECAPTCHA_SITE_KEY: string
}

export interface LayoutContextInterface {
  forms: {
    contact: {
      isVisible: boolean
      toggle: () => void
    }
  }
  clientConfiguration: ClientConfiguration
  language: Language
}

const LayoutContext = React.createContext<LayoutContextInterface>({} as LayoutContextInterface)

interface LayoutContextProviderProps {
  clientConfiguration: ClientConfiguration
  language: Language
  children: React.ReactNode
}

const LayoutContextProvider = ({
  clientConfiguration,
  language,
  children,
}: LayoutContextProviderProps): JSX.Element => {
  const [isContactVisible, setContactVisibility] = React.useState(false)

  return (
    <LayoutContext.Provider
      value={{
        forms: {
          contact: {
            isVisible: isContactVisible,
            toggle: () => setContactVisibility(!isContactVisible),
          },
        },
        clientConfiguration,
        language,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

function useLayoutContext(): LayoutContextInterface {
  const context = React.useContext(LayoutContext)

  if (!context) {
    throw new Error(`useLayoutContext must be used within LayoutContextProvider`)
  }

  return context
}

export { LayoutContextProvider, useLayoutContext }
