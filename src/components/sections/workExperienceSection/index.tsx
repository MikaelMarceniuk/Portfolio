import { styled } from 'styled-components'
import * as BaseSection from '../../ui/baseSection'
import WorkExperienceItem from './components/workExperienceItem'
import { useTranslation } from 'react-i18next'

import ptBrData from '../../../data/workExperience/pt-br'
import enUsData from '../../../data/workExperience/en-us'

const WorkExperienceList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;
`

const WorkExperienceSection = () => {
	const { t, i18n } = useTranslation()
	const data = i18n.language == 'ptBR' ? ptBrData : enUsData

	return (
		<BaseSection.Wrapper>
			<BaseSection.Title>{t('workExperienceTitle')}</BaseSection.Title>
			<WorkExperienceList>
				{data.map((work, i) => <WorkExperienceItem key={i} {...work} />)}
			</WorkExperienceList>
		</BaseSection.Wrapper>
	)
}

export default WorkExperienceSection