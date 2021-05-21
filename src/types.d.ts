declare module '*.json' {
  const value: object
  export default value
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const Sentry: typeof import('@sentry/browser')
