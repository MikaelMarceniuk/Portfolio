import { DownloadSimple } from "phosphor-react"
import { styled } from "styled-components"

const Wrapper = styled.header`
	height: 60px;
	padding: 0 20px;

	display: flex;
	align-items: center;
	justify-content: space-between;

  background-color: ${({theme}) => theme.colors.gray200};
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

const Navbar = () => {
	return (
		<Wrapper>
			<ImageContainer>
				<Image src='https://github.com/MikaelMarceniuk.png?size=34' />
			</ImageContainer>
			<DownloadCVBtn>
				<DownloadCVIcon size={18} weight="bold" />
			</DownloadCVBtn>
		</Wrapper>
	)
}

export default Navbar