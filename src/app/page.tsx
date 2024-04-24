import HeroSection from '@/components/section/heroSection'
import ServicesSection from '@/components/section/servicesSection'
import { NextPage } from 'next'

const MainPage: NextPage = () => {
	return (
		<main>
			<HeroSection />
			<ServicesSection />
		</main>
	)
}

export default MainPage
