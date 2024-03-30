import { styled, useTheme } from "styled-components"
import FixedNavbar from "./fixedNavbar"
import { useScrollContext } from "../../context/scrollContext"
import Ping from "../ping"
import { useTranslation } from 'react-i18next'
import { useScreenDimensionContext } from "../../context/screenDimensionContext"
import DownloadCvBtn from "./components/downloadCvBtn"
import ChangeLanguageBtn from "./components/changeLanguageBtn"

const Wrapper = styled.header`
	height: 60px;
	padding: 0 20px;

  background-color: ${({theme}) => theme.colors.gray200};
`

const Content = styled.div`
	height: 100%;

	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: ${({theme}) => theme.mediaQueries.tablet}px) {
		max-width: 700px;
	}
`

const ImageContainer = styled.div`
	width: 36px;
	height: 36px;
`

const BtnsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
`

const Image = styled.img`
	border-radius: 999px;
	border: 1px solid ${({theme}) => theme.colors.gray500};
`

const AvailableToWorkWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;

	& span {
		font-size: 0.8rem;
		color: ${({theme}) => theme.colors.gray700}
	}
`

const Navbar = () => {
	const { scrollPosition } = useScrollContext()
	const { screenWidth } = useScreenDimensionContext()
	const { mediaQueries } = useTheme()
	const { t } = useTranslation()

	return (
		<>
			<FixedNavbar isHidden={scrollPosition < 320}/>
			<Wrapper>
				<Content>
					<ImageContainer>
						<Image src='https://github.com/MikaelMarceniuk.png?size=34' />
					</ImageContainer>
					<BtnsContainer>
						{screenWidth >= mediaQueries.mobileSmall && 
							<AvailableToWorkWrapper>
								<Ping />
								<span>{t('navbarAvailableToWork')}</span>
							</AvailableToWorkWrapper>
						}
						<DownloadCvBtn />
						<ChangeLanguageBtn />
					</BtnsContainer>
				</Content>
			</Wrapper>
		</>
	)
}

export default Navbar