import ServicesItems from '@/data/serviceItems'
import ServiceListItem from './_components/listItem'

const ServicesSection: React.FC = () => {
	return (
		<section className='space-y-4 p-10 text-center'>
			<p className='text-4xl font-bold'>
				Atuando em conjunto para alcançar resultados significativos.
			</p>
			<ul className='space-y-6 pt-6'>
				{ServicesItems.map((item, i) => (
					<ServiceListItem key={i} {...item} />
				))}
			</ul>
		</section>
	)
}

export default ServicesSection
