import { SectionTitle, SectionWrapper } from '@/components/baseSection'
import ContactForm from '@/components/contactForm'
import { getTranslations } from 'next-intl/server'

const ContactSection: React.FC = async () => {
	const t = await getTranslations('HomePage')

	return (
		<SectionWrapper>
			<SectionTitle title={t('contactSection.title')} />
			<div data-aos='fade-up'>
				<ContactForm />
			</div>
		</SectionWrapper>
	)
}

export default ContactSection
