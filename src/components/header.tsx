import { EnvelopeSimple, MapPin } from "phosphor-react"
import { styled } from "styled-components"

const Wrapper = styled.section`
	padding: 20px;

  background-color: ${({theme}) => theme.colors.gray200};
`

const TopContent = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;

	overflow-x: hidden;
`

const BottonContent = styled.div`
	margin-top: 16px;

	display: flex;
`

const GetInTouchBtn = styled.button`
	padding: 10px;

	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	border: 1px solid ${({theme}) => theme.colors.gray500};
	border-radius: 4px;

	background-color: ${({theme}) => theme.colors.gray300};
	color: ${({theme}) => theme.colors.gray800};
`

const InformationWrapper = styled.div`
	max-width: 140px;

	display: flex;
	flex-direction: column;
	gap: 16px;

	color: ${({theme}) => theme.colors.gray800};
`

const Name = styled.p`
	font-size: 1.5rem;
	font-weight: 800;
	line-height: 1.6rem;

	color: ${({theme}) => theme.colors.gray900};
`

const Subtext = styled.p`
	font-size: 0.9rem;
	line-height: 1.2rem;
	color: ${({theme}) => theme.colors.gray800};
`

const LocalizationWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;

	font-size: 0.75rem;
`

const Image = styled.img`
	border: 1px solid ${({theme}) => theme.colors.gray500};
	border-radius: 10px;
`

const Header = () => {
	return (
		<Wrapper>
			<TopContent>
				<InformationWrapper>
					<Name>Mikael Marceniuk</Name>
					<Subtext>Designer & Fullstack Developer</Subtext>
					<LocalizationWrapper>
						<MapPin size={12} />
						Ribeirão Preto, SP
					</LocalizationWrapper>
				</InformationWrapper>
					<Image src='https://github.com/MikaelMarceniuk.png?size=154' />
			</TopContent>
			<BottonContent>
				<GetInTouchBtn>
					<EnvelopeSimple size={18} />
					Get in touch
				</GetInTouchBtn>
			</BottonContent>
		</Wrapper>
	)
}

export default Header