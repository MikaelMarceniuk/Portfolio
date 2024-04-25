import {
	SectionSubtitle,
	SectionTitle,
	SectionWrapper,
} from '@/components/baseSection'
import ContactForm from '@/components/contactForm'
import links from '@/data/links'
import { Github, Instagram, Linkedin } from 'lucide-react'
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
					href={links.linkedIn}
					className='flex gap-2 text-gray-200'
					target='_blank'
					data-aos='slide-right'
				>
					<Linkedin />
				</Link>

				<Link
					href={links.instagram}
					className='flex gap-2 text-gray-200'
					target='_blank'
					data-aos='slide-up'
				>
					<Instagram />
				</Link>

				<Link
					href={links.github}
					className='flex gap-2 text-gray-200'
					target='_blank'
					data-aos='slide-left'
				>
					<Github />
				</Link>
			</div>

			<div data-aos='slide-up'>
				<ContactForm />
			</div>
		</SectionWrapper>
	)
}

export default ContactPage
