import { SectionTitle, SectionWrapper } from '@/components/baseSection'
import ContactForm from '@/components/contactForm'

const ContactSection: React.FC = () => {
	return (
		<SectionWrapper>
			<SectionTitle
				data-aos-offset='100'
				title='Vamos discutir seu próximo projeto.'
			/>
			<div data-aos='fade-up'>
				<ContactForm />
			</div>
		</SectionWrapper>
	)
}

export default ContactSection
