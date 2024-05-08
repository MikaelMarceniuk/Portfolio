import {
	SectionSubtitle,
	SectionTitle,
	SectionWrapper,
} from '@/components/baseSection'
import { ServicePageItens } from '@/data/serviceItems'
import { Metadata, NextPage } from 'next'
import { getTranslations } from 'next-intl/server'
import CardItem from './_components/cardItem'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('SEO')

	return {
		title: t('servicesPage'),
	}
}

const ServicesPage: NextPage = async () => {
	const t = await getTranslations('ServicesPage')

	return (
		<main className='w-full lg:m-auto lg:max-w-[690px] lg:pt-24'>
			<SectionWrapper>
				<SectionTitle title={t('title')} />
				<SectionSubtitle className='text-sm font-medium text-gray-400'>
					{t('subtitle')}
				</SectionSubtitle>

				<ul className='space-y-10 pt-4'>
					{ServicePageItens.map((item, i) => (
						// @ts-ignore
						<CardItem
							key={i}
							data-aos={i % 2 ? 'zoom-in-right' : 'zoom-in-left'}
							data-aos-offset='-200'
							{...item}
						/>
					))}
				</ul>
			</SectionWrapper>
		</main>
	)
}

export default ServicesPage
