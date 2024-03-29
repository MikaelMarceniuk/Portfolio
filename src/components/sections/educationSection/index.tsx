import { styled } from 'styled-components'
import * as BaseSection from '../../ui/baseSection'
import EducationItem from './components/educationItem'
import EducationData from '../../../data/education'

const EducationList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;
`

const EducationSection = () => {
	return (
		<BaseSection.Wrapper>
			<BaseSection.Title>Education</BaseSection.Title>
			<EducationList>
				{EducationData.map(edu => <EducationItem {...edu} />)}
			</EducationList>
		</BaseSection.Wrapper>
	)
}

export default EducationSection