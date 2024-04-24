import { SectionTitle, SectionWrapper } from '@/components/baseSection'
import ServicesItems from '@/data/serviceItems'
import ServiceListItem from './_components/listItem'

const ServicesSection: React.FC = () => {
	return (
		<SectionWrapper>
			<SectionTitle title='Atuando em conjunto para alcançar resultados significativos.' />
			<ul className='space-y-6 pt-6'>
				{ServicesItems.map((item, i) => (
					<ServiceListItem key={i} {...item} />
				))}
			</ul>
		</SectionWrapper>
	)
}

export default ServicesSection
