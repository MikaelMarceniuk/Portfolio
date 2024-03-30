import { EnvelopeSimple } from "phosphor-react"
import styled from "styled-components"
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
	margin-top: 16px;

	display: flex;

	& a {
		padding: 10px;

		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;

		border: 1px solid ${({theme}) => theme.colors.gray500};
		border-radius: 4px;

		background-color: ${({theme}) => theme.colors.gray300};
		color: ${({theme}) => theme.colors.gray800};
		text-decoration: none;
	}
`

const BottonContent = () => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<a href="#getInTouchSection">
				<EnvelopeSimple size={18} />
				{t('headerGetInTouch')}
			</a>
		</Wrapper>
	)
}

export default BottonContent