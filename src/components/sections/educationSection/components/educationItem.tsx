import styled from "styled-components"
import IEducation from "../../../../interfaces/IEducation"

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	color: ${({theme}) => theme.colors.gray900};
`

const Place = styled.h4`
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
			<div>
				<Place>{educationExp.place}</Place>
				<StartEndDate>{educationExp.startYear} - {educationExp.finishYear || 'Atualmente'}</StartEndDate>
			</div>
			<ContentWrapper>
				<Description>
					{educationExp.description.map((desc, i) => <p key={i} dangerouslySetInnerHTML={{__html: desc}}/>)}
				</Description>
			</ContentWrapper>
		</Wrapper>
	)
}

export default EducationItem