import { SectionTitle, SectionWrapper } from '@/components/baseSection'
import { HomePageServiceList } from '@/data/serviceItems'
import { getTranslations } from 'next-intl/server'
import CardItem from './_components/cardItem'

const ServicesSection: React.FC = async () => {
	const t = await getTranslations('HomePage')

	return (
		<SectionWrapper>
			<SectionTitle title={t('servicesSection.title')} />
			<ul className='space-y-10 pt-6'>
				{HomePageServiceList.map((item, i) => (
					// @ts-ignore
					<CardItem
						key={i}
						data-aos={i % 2 ? 'zoom-in-right' : 'zoom-in-left'}
						{...item}
					/>
				))}
			</ul>
		</SectionWrapper>
	)
}

export default ServicesSection
