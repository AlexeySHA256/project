
function parseRequiredEnv() {
  const env = {
    NEXT_PUBLIC_TENDERLY_NETWORK_URL: process.env.NEXT_PUBLIC_TENDERLY_NETWORK_URL!,
    NEXT_PUBLIC_REOWNAPPKIT_PROJECT_ID: process.env.NEXT_PUBLIC_REOWNAPPKIT_PROJECT_ID!,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL!,
  }
  Object.entries(env).forEach(([k, v]) => {
    const isServerRuntime = typeof window === "undefined"
    // INFO: variables not prefixed with NEXT_PUBLIC would be empty on frontend
    if (!isServerRuntime && k.startsWith("NEXT_PUBLIC_")) {
      return
    }
    if (!v || !v.trim()) {
      throw new Error(`Error validating environment: '${k}' is required`)
    }
  })
  return env
}

export const env = parseRequiredEnv()

