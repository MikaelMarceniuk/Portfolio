import styled from 'styled-components'
import SkillsData from '../../../data/skill'
import * as BaseSection from '../../ui/baseSection'
import SkillBadge from './components/skillBadge'
import { useTranslation } from 'react-i18next'

const SkillBadgeList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;

	list-style-type: none;
`

const SkillsSection = () => {
	const { t } = useTranslation()

	return (
		<BaseSection.Wrapper>
			<BaseSection.Title>{t('skillsTitle')}</BaseSection.Title>
			<SkillBadgeList>
				{SkillsData.map((skill, i) => <SkillBadge key={i} title={skill} />)}
			</SkillBadgeList>
		</BaseSection.Wrapper>
	)
}

export default SkillsSection