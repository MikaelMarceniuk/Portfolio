import { NextPage } from 'next'
import ContactSection from './_components/contactSection'
import HeroSection from './_components/heroSection'
import ServicesSection from './_components/servicesSection'

const MainPage: NextPage = () => {
	return (
		<main>
			<HeroSection />
			<ServicesSection />
			<ContactSection />
		</main>
	)
}

export default MainPage
