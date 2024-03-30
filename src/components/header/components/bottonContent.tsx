import { EnvelopeSimple } from "phosphor-react"
import styled from "styled-components"

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

	@media (min-width: ${({theme}) => theme.mediaQueries.tablet}px) {
		width: 150px;
	}
`

const BottonContent = () => {
	return (
		<Wrapper>
			<a href="#getInTouchSection">
				<EnvelopeSimple size={18} />
				Get in touch
			</a>
		</Wrapper>
	)
}

export default BottonContent