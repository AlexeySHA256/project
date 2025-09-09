import { z } from "zod"

const appConfigSchema = z.object({
  NEXT_PUBLIC_TENDERLY_NETWORK_URL: z.string().url(),
  NEXT_PUBLIC_REOWNAPPKIT_PROJECT_ID: z.string(),
  NEXT_PUBLIC_SERVER_URL: z.string().url()
})


// INFO: for client side config variables should be explicitly specified due to how next.js inlines env variables in client bundle
export const env = appConfigSchema.parse(
  typeof window === undefined ? process.env :
    {
      NEXT_PUBLIC_TENDERLY_NETWORK_URL: process.env.NEXT_PUBLIC_TENDERLY_NETWORK_URL,
      NEXT_PUBLIC_REOWNAPPKIT_PROJECT_ID: process.env.NEXT_PUBLIC_REOWNAPPKIT_PROJECT_ID,
      NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    }
)


