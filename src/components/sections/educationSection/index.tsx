import { styled } from 'styled-components'
import * as BaseSection from '../../ui/baseSection'
import EducationItem from './components/educationItem'
import { useTranslation } from 'react-i18next'

import ptBRData from '../../../data/education/pt-br'
import enUSData from '../../../data/education/en-us'

const EducationList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;
`

const EducationSection = () => {
	const { t, i18n } = useTranslation()
	const data = i18n.language == 'ptBR' ? ptBRData : enUSData

	return (
		<BaseSection.Wrapper>
			<BaseSection.Title>{t('educationTitle')}</BaseSection.Title>
			<EducationList>
				{data.map((edu, i) => <EducationItem key={i} {...edu} />)}
			</EducationList>
		</BaseSection.Wrapper>
	)
}

export default EducationSection