import {
	SectionSubtitle,
	SectionTitle,
	SectionWrapper,
} from '@/components/baseSection'
import ContactForm from '@/components/contactForm'
import { Mail } from 'lucide-react'
import { NextPage } from 'next'

const ContactPage: NextPage = () => {
	return (
		<SectionWrapper className='pt-10'>
			<SectionTitle title='Entre em contato' />
			<SectionSubtitle>
				Tem um projeto em mente? Quer fazer parceria ou trabalhar comigo? Entre
				em contato pelo formulário e responderei nas próximas 48 horas.
			</SectionSubtitle>

			<div>
				<div className='flex gap-2'>
					<Mail />
					mika.marceniuk@gmail.com
				</div>
			</div>

			<ContactForm />
		</SectionWrapper>
	)
}

export default ContactPage
