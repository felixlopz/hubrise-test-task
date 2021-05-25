import React, { useContext } from 'react'
import { IToast } from '../../data/toast'

export type ToastSetter = (
  toast: Pick<
    IToast,
    'variant' | 'title' | 'text' | 'isHideDisabled' | 'timeout'
  >
) => void

export const ToastContext = React.createContext<ToastSetter | undefined>(
  undefined
)

export function useToast(): ToastSetter {
  const toastContext = useContext(ToastContext)

  if (!toastContext)
    throw new Error('useToast must be inside a ToastProvider with a value')

  return toastContext
}
