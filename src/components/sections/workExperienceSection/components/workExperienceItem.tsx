import styled from "styled-components"
import IWorkExperience from "../../../../interfaces/IWorkExperience"

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	color: ${({theme}) => theme.colors.gray900};
`

const CompanyName = styled.h4`
	font-size: 1rem;
	font-weight: 700;
`

const StartEndDate = styled.p`
	font-size: 0.75rem;
	font-weight: 400;
	color: ${({theme}) => theme.colors.gray600};
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
			<div>
				<CompanyName>{workExp.company}</CompanyName>
				<StartEndDate>{workExp.startYear} - {workExp.finishYear || 'Atualmente'}</StartEndDate>
			</div>
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