import { styled } from 'styled-components'
import WorkExperienceData from '../../../data/workExperience'
import * as BaseSection from '../../ui/baseSection'
import WorkExperienceItem from './components/workExperienceItem'

const WorkExperienceList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;
`

const WorkExperienceSection = () => {
	return (
		<BaseSection.Wrapper>
			<BaseSection.Title>Work Experience</BaseSection.Title>
			<WorkExperienceList>
				{WorkExperienceData.map(work => <WorkExperienceItem {...work} />)}
			</WorkExperienceList>
		</BaseSection.Wrapper>
	)
}

export default WorkExperienceSection