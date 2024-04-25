import { z } from 'zod'

const envSchema = z.object({
	DISCORD_BOT_TOKEN: z.string(),
	DISCORD_CHANNEL_TOKEN: z.string(),
})

const env = envSchema.parse(process.env)

export default env
