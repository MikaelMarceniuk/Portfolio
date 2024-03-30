import { styled } from 'styled-components'
import * as BaseSection from '../../ui/baseSection'
import EducationItem from './components/educationItem'
import EducationData from '../../../data/education'
import { useTranslation } from 'react-i18next'

const EducationList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;
`

const EducationSection = () => {
	const { t } = useTranslation()

	return (
		<BaseSection.Wrapper>
			<BaseSection.Title>{t('educationTitle')}</BaseSection.Title>
			<EducationList>
				{EducationData.map((edu, i) => <EducationItem key={i} {...edu} />)}
			</EducationList>
		</BaseSection.Wrapper>
	)
}

export default EducationSection