import Navbar from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import AosProvider from '@/context/aosProvider'
import CustomQueryClientProvider from '@/context/customQueryClientProvider'
import pick from 'lodash/pick'
import type { Metadata, NextPage } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('SEO')

	return {
		title: {
			default: t('title'),
			template: `%s | ${t('title')}`,
		},
		description: t('description'),
		alternates: {
			canonical: 'https://mikadev.com.br',
			languages: {
				pt: 'https://mikadev.com.br/pt',
				en: 'https://mikadev.com.br/en',
			},
		},
	}
}

interface IRootLayoutProps {
	children: React.ReactNode
	params: { locale: 'pt' | 'en' }
}

const RootLayout: NextPage<IRootLayoutProps> = ({ children, params }) => {
	const messages = useMessages()

	return (
		<html lang={params.locale} className='dark'>
			<AosProvider />
			<body className={`min-h-screen bg-background ${inter.className} lg:flex`}>
				<NextIntlClientProvider
					messages={{
						...pick(messages, 'contactForm'),
						...pick(messages, 'languageSelector'),
					}}
				>
					<CustomQueryClientProvider>
						<Navbar />
						<Toaster />
						{children}
					</CustomQueryClientProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

export default RootLayout
