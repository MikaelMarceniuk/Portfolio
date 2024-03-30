import styled from 'styled-components'
import * as BaseSection from '../../ui/baseSection'
import { Copy, WhatsappLogo } from 'phosphor-react'
import Constants from '../../../constants'

const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	text-decoration: none;

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


const GetInTouchSection = () => {
	const handleCopyEmail = () => {
		navigator.clipboard.writeText(Constants.email)
	}

	return (
		<BaseSection.Wrapper id='getInTouchSection'>
			<BaseSection.Title>Get in touch</BaseSection.Title>

			<ContactWrapper onClick={handleCopyEmail}>
				<h4>Email</h4>
				<ContactContent>
					<p>{Constants.email}</p>
					<Copy size={iconSize} />
				</ContactContent>
			</ContactWrapper>

			<ContactWrapper as={'a'} href={Constants.wppLinkToMessageMe}>
				<h4>Whatsapp</h4>
				<ContactContent>
					<p>{Constants.wppNumber}</p>
					<WhatsappLogo size={iconSize} />
				</ContactContent>
			</ContactWrapper>
		</BaseSection.Wrapper>
	)
}

export default GetInTouchSection