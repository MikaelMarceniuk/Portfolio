import { MapPin } from "phosphor-react"
import { styled, useTheme } from "styled-components"
import { useScreenDimensionContext } from "../../context/screenDimensionContext"
import BottonContent from "./components/bottonContent"

const Wrapper = styled.section`
	padding: 20px;

  background-color: ${({theme}) => theme.colors.gray200};
`

const Content = styled.div`
	margin: 0 auto;

	@media (min-width: ${({theme}) => theme.mediaQueries.tablet}px) {
		max-width: 700px;
	}
`

const TopContent = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;

	overflow-x: hidden;
`

const InformationWrapper = styled.div`
	max-width: 140px;

	display: flex;
	flex-direction: column;
	gap: 16px;

	color: ${({theme}) => theme.colors.gray800};

	@media (min-width: ${({theme}) => theme.mediaQueries.tablet}px) {
		max-width: 520px;
	}
`

const Name = styled.h1`
	font-size: 1.5rem;
	font-weight: 800;
	line-height: 1.6rem;

	color: ${({theme}) => theme.colors.gray900};
`

const Subtext = styled.h2`
	font-size: 0.9rem;
	font-weight: 300;
	line-height: 1.2rem;
	color: ${({theme}) => theme.colors.gray800};
`

const LocalizationWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;

	font-size: 0.75rem;
`

const ImageWrapper = styled.div`
	& img {
		border: 1px solid ${({theme}) => theme.colors.gray500};
		border-radius: 10px;
	}	
`

const Header = () => {
	const { screenWidth } = useScreenDimensionContext()
	const { mediaQueries } = useTheme()

	return (
		<Wrapper>
			<Content>
				<TopContent>
					<InformationWrapper>
						<Name>Mikael Marceniuk</Name>
						<Subtext>Designer & Fullstack Developer</Subtext>
						<LocalizationWrapper>
							<MapPin size={12} />
							Ribeirão Preto, SP
						</LocalizationWrapper>
						{screenWidth >= mediaQueries.tablet && <BottonContent />}
					</InformationWrapper>

					<ImageWrapper>
						<img src='https://github.com/MikaelMarceniuk.png?size=154' alt="Mikael Marceniuk Github Picture"/>
					</ImageWrapper>
				</TopContent>
				{screenWidth < mediaQueries.tablet && <BottonContent />}
			</Content>
		</Wrapper>
	)
}

export default Header