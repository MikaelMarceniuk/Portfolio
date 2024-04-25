import {
	SectionSubtitle,
	SectionTitle,
	SectionWrapper,
} from '@/components/baseSection'
import {
	ServiceCardContent,
	ServiceCardHeader,
	ServiceCardHeaderIcon,
	ServiceCardWrapper,
} from '@/components/baseServiceCard'
import { ServicePageItens } from '@/data/serviceItems'
import { NextPage } from 'next'

const ServicesPage: NextPage = () => {
	return (
		<main>
			<SectionWrapper className='pt-10'>
				<SectionTitle title='Servicos' />
				<SectionSubtitle className='text-sm font-medium text-gray-400'>
					Desenvolvimento de Landing Page, Aplicativos Web, Mobile, APIs.
					Manutenção de sistemas. Você que manda.
				</SectionSubtitle>

				<ul className='space-y-10 pt-4'>
					{ServicePageItens.map((item, i) => (
						<ServiceCardWrapper key={i}>
							<ServiceCardHeader>
								<ServiceCardHeaderIcon icon={item.icon} />
								{item.title}
							</ServiceCardHeader>
							<ServiceCardContent>{item.text}</ServiceCardContent>
						</ServiceCardWrapper>
					))}
				</ul>
			</SectionWrapper>
		</main>
	)
}

export default ServicesPage
