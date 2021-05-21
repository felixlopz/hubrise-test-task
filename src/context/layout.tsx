import * as React from 'react'

export interface LayoutContextInterface {
  forms: {
    contact: {
      isVisible: boolean
      toggle: () => void
    }
    suggestApp: {
      isVisible: boolean
      toggle: () => void
    }
  }
}

const LayoutContext = React.createContext<LayoutContextInterface>(
  {} as LayoutContextInterface
)

interface LayoutProviderProps {
  children: React.ReactNode
}

function LayoutProvider({ children }: LayoutProviderProps) {
  const [isContactVisible, setContactVisibility] = React.useState(false)
  const [isSuggestAppVisible, setSuggestAppVisibility] = React.useState(false)

  return (
    <LayoutContext.Provider
      value={{
        forms: {
          contact: {
            isVisible: isContactVisible,
            toggle: () => setContactVisibility(!isContactVisible)
          },
          suggestApp: {
            isVisible: isSuggestAppVisible,
            toggle: () => setSuggestAppVisibility(!isSuggestAppVisible)
          }
        }
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

function useLayoutContext() {
  const context = React.useContext(LayoutContext)

  if (!context) {
    throw new Error(`useLayoutContext must be used within LayoutProvider`)
  }

  return context
}

export { LayoutProvider, useLayoutContext }
