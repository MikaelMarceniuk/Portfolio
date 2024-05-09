import { Metadata, NextPage } from 'next'
import { getTranslations } from 'next-intl/server'
import ContactSection from './_components/contactSection'
import HeroSection from './_components/heroSection'
import ServicesSection from './_components/servicesSection'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('SEO')

	return {
		title: t('homePage'),
		alternates: {
			languages: {
				pt: 'https://mikadev.com.br/pt/home',
				en: 'https://mikadev.com.br/en/home',
			},
		},
	}
}

const MainPage: NextPage = () => {
	return (
		<main className='w-full lg:m-auto lg:max-w-[690px] lg:pt-24'>
			<HeroSection />
			<ServicesSection />
			<ContactSection />
		</main>
	)
}

export default MainPage
