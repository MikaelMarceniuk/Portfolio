import { DownloadSimple } from "phosphor-react"
import { styled } from "styled-components"

interface IFixedNavbarProps {
	isHidden: boolean
}

const Wrapper = styled.header<IFixedNavbarProps>`
	width: 100%;

	height: 60px;
	padding: 0 20px;

	position: fixed;
	top: ${({isHidden}) => isHidden ? '-60px' : '0'};

	display: flex;
	align-items: center;
	justify-content: space-between;

  background-color: ${({theme}) => theme.colors.gray200};

	transition: top 0.2s;
`

const ImageContainer = styled.div`
	width: 36px;
	height: 36px;
`

const Image = styled.img`
	border-radius: 999px;
	border: 1px solid ${({theme}) => theme.colors.gray500};
`

const DownloadCVBtn = styled.button`
	width: 36px;
	height: 36px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 1px solid ${({theme}) => theme.colors.gray500};
	border-radius: 4px;

	background-color: ${({theme}) => theme.colors.gray300};
`

const DownloadCVIcon = styled(DownloadSimple)`
	color: ${({theme}) => theme.colors.gray900};
`

const FixedNavbar: React.FC<IFixedNavbarProps> = ({isHidden}) => {
	return (
		<Wrapper isHidden={isHidden}>
			<ImageContainer>
				<Image src='https://github.com/MikaelMarceniuk.png?size=34' />
			</ImageContainer>
			<DownloadCVBtn>
				<DownloadCVIcon size={18} weight="bold" />
			</DownloadCVBtn>
		</Wrapper>
	)
}

export default FixedNavbar