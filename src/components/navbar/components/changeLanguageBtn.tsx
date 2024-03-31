import BaseBtnWrapper from "./baseBtnWrapper"
import { useTranslation } from 'react-i18next'

import brazilFlag from '../../../assets/Flag_of_Brazil.svg'
import usaFlag from '../../../assets/Flag_of_the_United_States.svg'
import styled from "styled-components"
import { useState } from "react"

const countryFlags = {
	ptBR: brazilFlag,
	enUS: usaFlag
}

interface IDropdownWrapperProps {
	isVisible: boolean
}

const Wrapper = styled.div`
	position: relative;
`

const DropdownWrapper = styled.ul<IDropdownWrapperProps>`
	width: 36px;

	position: absolute;
	top: 46px;
	z-index: 1;

	display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
	flex-direction: column;
	align-items: center;

	background-color: ${({theme}) => theme.colors.gray300};
	border: 1px solid ${({theme}) => theme.colors.gray400};
	border-radius: 4px;

	& li {
		width: 100%;
		height: 36px;

		display: flex;
		align-items: center;
		justify-content: center;

		border-bottom: 1px solid ${({theme}) => theme.colors.gray400};
		list-style-type: none;
		cursor: pointer;

		&:hover {
			background-color: ${({theme}) => theme.colors.hoverBtn};
			transition: background-color 0.2s;
		}
	}

	& li img {
		width: 20px;
	}
`

const ChangeLanguageBtn = () => {
	const [isDropdownVisible, setIsDropdownVisible] = useState(false)
	const { i18n } = useTranslation()

	const handleChangeLanguage = (language: string) => async () => {
		i18n.changeLanguage(language)
			.then(() => setIsDropdownVisible(false))
	}

	const changeDropdownVisibility = (isVisible: boolean) => setIsDropdownVisible(isVisible)

	return (
		<Wrapper>
			<BaseBtnWrapper onClick={() => changeDropdownVisibility(!isDropdownVisible)}>
				<img style={{ width: 20 }} src={countryFlags[i18n.language as keyof typeof countryFlags]} />
			</BaseBtnWrapper>

			<DropdownWrapper isVisible={isDropdownVisible}>
				{Object.entries(countryFlags).map(([key, value]) => 
					<li
						key={key}
						onClick={handleChangeLanguage(key)}
					>
						<img src={value} />
					</li>
				)}
			</DropdownWrapper>
		</Wrapper>
	)
}

export default ChangeLanguageBtn