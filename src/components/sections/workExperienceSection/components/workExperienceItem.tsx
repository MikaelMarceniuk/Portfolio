import styled from "styled-components"
import IWorkExperience from "../../../../interfaces/IWorkExperience"

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

const Role = styled.p`
	font-size: 0.9rem;
	font-weight: 400;
	color: ${({theme}) => theme.colors.gray800};
`

const Description = styled.div`
	padding-left: 10px;

	border-left: 2px solid ${({theme}) => theme.colors.gray500};

	font-size: 0.88rem;
	font-weight: 400;
	color: ${({theme}) => theme.colors.gray700};
`

const WorkExperienceItem: React.FC<IWorkExperience> = ({...workExp}) => {
	return (
		<Wrapper>
			<InfoWrapper>
				<h4>{workExp.company}</h4>
				<p>{workExp.startYear} - {workExp.finishYear || 'Atualmente'}</p>
			</InfoWrapper>
			<ContentWrapper>
				<Role>{workExp.role}</Role>
				<Description>
					{workExp.description.map((desc, i) => <p key={i} dangerouslySetInnerHTML={{__html: desc}}/>)}
				</Description>
			</ContentWrapper>
		</Wrapper>
	)
}

export default WorkExperienceItem