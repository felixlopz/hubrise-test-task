const fs = require("fs").promises
const { join } = require("path")

const yaml = require("yaml")

// Check the presence of env variables.
const requiredEnvVars = ["SENTRY_DSN", "RECAPTCHA_SITE_KEY", "CONTACT_MESSAGE_URL"]
const missingVars = requiredEnvVars.filter((key) => !(key in process.env))
if (missingVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingVars.join(", ")}`)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {}, // The presence of this empty object makes SC use human-readable class names in dev mode.
  },
  redirects: async () => {
    const yamlFile = join(process.cwd(), "content", "redirects.yaml")
    const data = await fs.readFile(yamlFile, "utf8")
    const entries = yaml.parse(data)
    return entries.map(({ fromPath, toPath }) => ({
      source: fromPath,
      destination: toPath,
      permanent: true,
    }))
  },
}

module.exports = nextConfig
