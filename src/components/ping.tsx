import styled from "styled-components"

const Wrapper = styled.div`
	height: 36px;

	display: flex;
	align-items: center;
	justify-content: center;
`

const ContentWrapper = styled.div`
	position: relative;

	display: inline-flex;
`

const BaseContent = styled.div`
	width: 8px;
	height: 8px;

	background-color: ${({theme}) => theme.colors.green};
	border-radius: 9999px;
`

const ContentPing = styled(BaseContent)`
	position: absolute;
	top: 0;
	left: 0;

	animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

	@keyframes ping {
		75%, 100% {
			transform: scale(2);
			opacity: 0;
		}
	}
`

const ContentPulse = styled(BaseContent)`
	position: absolute;
	top: 0;
	left: 0;

	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: .5;
		}
	}
`

const Ping = () => {
	return (
		<Wrapper>
			<ContentWrapper>
				<BaseContent />
				<ContentPing />
				<ContentPulse />
			</ContentWrapper>
		</Wrapper>
	)
}

export default Ping