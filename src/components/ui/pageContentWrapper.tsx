import styled from "styled-components";

const PageContentWrapper = styled.div`
	margin: 0 auto;
	padding: 30px 20px 60px;

	display: flex;
	flex-direction: column;
	gap: 40px;

	@media (min-width: ${({theme}) => theme.mediaQueries.tablet}px) {
		max-width: 700px;

		margin: 30px auto 0;
		padding: 0px;
		padding-bottom: 60px;
	}
`

export default PageContentWrapper