import { styled } from "styled-components"

const Wrapper = styled.li`
	height: 24px;
	padding: 6px 10px;

	display: flex;
	align-items: center;

	background-color: ${({theme}) => theme.colors.gray600};
	border-radius: 6px;

	font-size: 0.75rem;
	font-weight: 600;

	& span {
		text-transform: uppercase;
	}
`

interface SkillBadgeProps {
	title: string
}

const SkillBadge: React.FC<SkillBadgeProps> = ({title}) => {
	return (
		<Wrapper>
			<span>{title}</span>
		</Wrapper>
	)
}

export default SkillBadge