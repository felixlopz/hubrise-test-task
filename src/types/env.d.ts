declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
    SENTRY_DSN?: string
    RECAPTCHA_SITE_KEY: string
    CONTACT_MESSAGE_URL: string
    WAIT_ON_TIMEOUT: number
  }
}
