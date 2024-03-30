import * as BaseSection from '../ui/baseSection'
import { useTranslation } from 'react-i18next'

import ptBRData from '../../data/about/pt-br'
import enUSData from '../../data/about/en-us'

const AboutSection = () => {
	const { t, i18n } = useTranslation()
	const data = i18n.language == 'ptBR' ? ptBRData : enUSData

	return (
		<BaseSection.Wrapper>
			<BaseSection.Title>{t('aboutTitle')}</BaseSection.Title>
			{data.map((d, i) => <BaseSection.Paragraph key={i}>{d}</BaseSection.Paragraph>)}
		</BaseSection.Wrapper>
	)
}

export default AboutSection