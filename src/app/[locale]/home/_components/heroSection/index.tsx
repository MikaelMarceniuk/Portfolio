import DivScaleHoverActive from '@/components/animations/divScaleHoverActive'
import {
	SectionSubtitle,
	SectionTitle,
	SectionWrapper,
} from '@/components/baseSection'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Button } from '../../../../../components/ui/button'

const HeroSection: React.FC = async () => {
	const t = await getTranslations('HomePage')

	return (
		<SectionWrapper>
			<SectionTitle title={t('heroSection.title')} />
			<SectionSubtitle
				dangerouslySetInnerHTML={{ __html: t.raw('heroSection.subtitle') }}
			></SectionSubtitle>

			<DivScaleHoverActive className='m-auto w-min'>
				<Button data-aos='fade-left' className='font-bold shadow-service-card'>
					<Link href='/contact'>{t('heroSection.btnContact')}</Link>
				</Button>
			</DivScaleHoverActive>
		</SectionWrapper>
	)
}

export default HeroSection
