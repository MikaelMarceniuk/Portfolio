import { NextPage } from 'next'
import HeroSection from './_components/heroSection'
import ServicesSection from './_components/servicesSection'

const MainPage: NextPage = () => {
	return (
		<main>
			<HeroSection />
			<ServicesSection />
		</main>
	)
}

export default MainPage
