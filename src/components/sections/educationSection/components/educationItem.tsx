import styled from "styled-components"
import IEducation from "../../../../interfaces/IEducation"

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	color: ${({theme}) => theme.colors.gray900};
`

const InfoWrapper = styled.div`
	& h4 {
		font-size: 1rem;
		font-weight: 700;
	}

	& p {
		font-size: 0.75rem;
		font-weight: 400;
		color: ${({theme}) => theme.colors.gray600};
	}

	@media (min-width: ${({theme}) => theme.mediaQueries.mobileLarge}px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const Description = styled.div`
	padding-left: 10px;

	border-left: 2px solid ${({theme}) => theme.colors.gray500};

	font-size: 0.88rem;
	font-weight: 400;
	color: ${({theme}) => theme.colors.gray700};
`

const EducationItem: React.FC<IEducation> = ({...educationExp}) => {
	return (
		<Wrapper>
			<InfoWrapper>
				<h4>{educationExp.place}</h4>
				<p>{educationExp.startYear} - {educationExp.finishYear || 'Atualmente'}</p>
			</InfoWrapper>
			<ContentWrapper>
				<Description>
					{educationExp.description.map((desc, i) => <p key={i} dangerouslySetInnerHTML={{__html: desc}}/>)}
				</Description>
			</ContentWrapper>
		</Wrapper>
	)
}

export default EducationItem