import DivScaleHoverActive from '@/components/animations/divScaleHoverActive'
import {
	SectionSubtitle,
	SectionTitle,
	SectionWrapper,
} from '@/components/baseSection'
import ContactForm from '@/components/contactForm'
import links from '@/data/links'
import { Github, Instagram, Linkedin } from 'lucide-react'
import { Metadata, NextPage } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('SEO')

	return {
		title: t('contactPage'),
	}
}

const ContactPage: NextPage = async () => {
	const t = await getTranslations('ContactPage')
	const locale = await getLocale()

	return (
		<main className='w-full lg:m-auto lg:max-w-[690px] lg:pt-24'>
			<SectionWrapper>
				<SectionTitle title={t('title')} />
				<SectionSubtitle>{t('subtitle')}</SectionSubtitle>

				<div className='flex items-center justify-center gap-2'>
					<DivScaleHoverActive>
						<Link
							// @ts-ignore
							href={links.linkedIn[locale]}
							className='flex gap-2 text-gray-200'
							target='_blank'
							data-aos='fade-right'
							data-aos-offset='-100'
						>
							<Linkedin />
						</Link>
					</DivScaleHoverActive>
					<DivScaleHoverActive>
						<Link
							href={links.instagram}
							className='flex gap-2 text-gray-200'
							target='_blank'
							data-aos='fade-up'
							data-aos-offset='-100'
						>
							<Instagram />
						</Link>
					</DivScaleHoverActive>
					<DivScaleHoverActive>
						<Link
							href={links.github}
							className='flex gap-2 text-gray-200'
							target='_blank'
							data-aos='fade-left'
							data-aos-offset='-100'
						>
							<Github />
						</Link>
					</DivScaleHoverActive>
				</div>

				<div data-aos='fade-up' data-aos-offset='-120'>
					<ContactForm />
				</div>
			</SectionWrapper>
		</main>
	)
}

export default ContactPage
