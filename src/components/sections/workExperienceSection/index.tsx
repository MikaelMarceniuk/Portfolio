import { styled } from 'styled-components'
import WorkExperienceData from '../../../data/workExperience'
import * as BaseSection from '../../ui/baseSection'
import WorkExperienceItem from './components/workExperienceItem'
import { useTranslation } from 'react-i18next'

const WorkExperienceList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;
`

const WorkExperienceSection = () => {
	const { t } = useTranslation()

	return (
		<BaseSection.Wrapper>
			<BaseSection.Title>{t('workExperienceTitle')}</BaseSection.Title>
			<WorkExperienceList>
				{WorkExperienceData.map((work, i) => <WorkExperienceItem key={i} {...work} />)}
			</WorkExperienceList>
		</BaseSection.Wrapper>
	)
}

export default WorkExperienceSection