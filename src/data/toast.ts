export interface IToast {
  id: number
  variant: 'success' | 'error'
  title: string
  text: string
  isHideDisabled?: boolean
  timeout?: number
}
