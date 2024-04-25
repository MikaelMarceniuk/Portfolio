'use server'

import { ContactFormType } from '@/components/contactForm'
import env from '@/utils/env'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v8'

const discordApi = new REST({ version: '10' }).setToken(env.DISCORD_BOT_TOKEN)

const sendContactForm = async ({
	name,
	email,
	description,
}: ContactFormType) => {
	let content = '====== Nova Mensagem ======\n'
	content += `Nome: ${name}\n`
	content += `Email: ${email}\n`
	content += `====== Some o projeto ======\n`
	content += `${description}`

	await discordApi.post(Routes.channelMessages(env.DISCORD_CHANNEL_TOKEN), {
		body: { content },
	})
}

export default sendContactForm
