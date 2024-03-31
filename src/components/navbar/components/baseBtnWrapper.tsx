import styled from "styled-components";

const BaseBtnWrapper = styled.button`
	width: 36px;
	height: 36px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 1px solid ${({theme}) => theme.colors.gray500};
	border-radius: 4px;

	background-color: ${({theme}) => theme.colors.gray300};
	cursor: pointer;

	&:hover {
		background-color: ${({theme}) => theme.colors.hoverBtn};
		transition: background-color 0.2s;
	}
`

export default BaseBtnWrapper