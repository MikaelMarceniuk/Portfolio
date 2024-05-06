import { NextPage } from 'next'
import ContactSection from './_components/contactSection'
import HeroSection from './_components/heroSection'
import ServicesSection from './_components/servicesSection'

const MainPage: NextPage = () => {
	return (
		<main className='w-full lg:m-auto lg:max-w-[690px] lg:pt-24'>
			<HeroSection />
			<ServicesSection />
			<ContactSection />
		</main>
	)
}

export default MainPage
