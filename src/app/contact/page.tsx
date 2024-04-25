import {
	SectionSubtitle,
	SectionTitle,
	SectionWrapper,
} from '@/components/baseSection'
import ContactForm from '@/components/contactForm'
import { Instagram, Linkedin } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'

const ContactPage: NextPage = () => {
	return (
		<SectionWrapper className='pt-10'>
			<SectionTitle title='Entre em contato' />
			<SectionSubtitle>
				Tem um projeto em mente? Quer fazer parceria ou trabalhar comigo? Entre
				em contato pelo formulário e responderei nas próximas 48 horas.
			</SectionSubtitle>

			<div className='flex items-center justify-center gap-2'>
				<Link
					href='https://www.linkedin.com/in/mikael-marceniuk/'
					className='flex gap-2 text-gray-200'
					target='_blank'
				>
					<Linkedin />
				</Link>

				<Link
					href='https://www.instagram.com/mi.ka__779/'
					className='flex gap-2 text-gray-200'
					target='_blank'
				>
					<Instagram />
				</Link>
			</div>

			<ContactForm />
		</SectionWrapper>
	)
}

export default ContactPage
