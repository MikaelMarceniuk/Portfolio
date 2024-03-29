import styled from 'styled-components'
import SkillsData from '../../../data/skill'
import * as BaseSection from '../../ui/baseSection'
import SkillBadge from './components/skillBadge'

const SkillBadgeList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	list-style-type: none;
`

const SkillsSection = () => {
	return (
		<BaseSection.Wrapper>
			<BaseSection.Title>Skills</BaseSection.Title>
			<SkillBadgeList>
				{SkillsData.map(skill => <SkillBadge title={skill} />)}
			</SkillBadgeList>
		</BaseSection.Wrapper>
	)
}

export default SkillsSection