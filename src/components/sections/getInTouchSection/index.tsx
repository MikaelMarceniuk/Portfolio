import styled from 'styled-components'
import * as BaseSection from '../../ui/baseSection'
import { Copy, WhatsappLogo } from 'phosphor-react'

const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	& h4 {
		font-size: 1.12rem;
		font-weight: 700;
		color: ${({theme}) => theme.colors.gray900};
	}
`

const ContactContent = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;

	cursor: pointer;
	color: ${({theme}) => theme.colors.gray800};

	&:hover {

	}
`

const iconSize = 18
const email = 'mika.marceniuk@gmail.com'
const wppNumber = '+55 16 99796-5512'

const GetInTouchSection = () => {
	return (
		<BaseSection.Wrapper id='getInTouchSection'>
			<BaseSection.Title>Get in touch</BaseSection.Title>

			<ContactWrapper >
				<h4>Email</h4>
				<ContactContent>
					<p>{email}</p>
					<Copy size={iconSize} />
				</ContactContent>
			</ContactWrapper>

			<ContactWrapper>
				<h4>Whatsapp</h4>
				<ContactContent>
					<p>{wppNumber}</p>
					<WhatsappLogo size={iconSize} />
				</ContactContent>
			</ContactWrapper>
		</BaseSection.Wrapper>
	)
}

export default GetInTouchSection