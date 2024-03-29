import { styled } from "styled-components"

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Title = styled.h3`
	font-size: 1.4rem;
	font-weight: 700;
	color: ${({theme}) => theme.colors.gray900};
`

const Paragraph = styled.p`
	font-size: 0.9rem;
	font-weight: 400;
	color: ${({theme}) => theme.colors.gray700};
`

export { Wrapper, Title, Paragraph }