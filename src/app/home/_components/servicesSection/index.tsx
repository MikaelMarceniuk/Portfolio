import { SectionTitle, SectionWrapper } from '@/components/baseSection'
import {
	ServiceCardContent,
	ServiceCardHeader,
	ServiceCardHeaderIcon,
	ServiceCardWrapper,
} from '@/components/baseServiceCard'
import { HomePageServiceList } from '@/data/serviceItems'

const ServicesSection: React.FC = () => {
	return (
		<SectionWrapper>
			<SectionTitle title='Atuando em conjunto para alcançar resultados significativos.' />
			<ul className='space-y-6 pt-6'>
				{HomePageServiceList.map((item, i) => (
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
	)
}

export default ServicesSection
