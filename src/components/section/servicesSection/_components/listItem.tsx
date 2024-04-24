import { IServiceItem } from '@/data/serviceItems'
import { Laptop, PanelTop, Unplug } from 'lucide-react'

const lucideIconConfigs = {
	size: 22,
	className: 'text-green-400',
}

const ServiceListItem: React.FC<IServiceItem> = ({ icon, text, title }) => {
	const renderLucideIcon = () => {
		switch (icon) {
			case 'PANEL_TOP':
				return <PanelTop {...lucideIconConfigs} />

			case 'UNPLUG':
				return <Unplug {...lucideIconConfigs} />

			case 'LAPTOP':
				return <Laptop {...lucideIconConfigs} />
		}
	}

	return (
		<li className='space-y-3 rounded border border-gray-600 p-5'>
			<div className='flex items-center gap-2'>
				{renderLucideIcon()}
				<span className='font-bold'>{title}</span>
			</div>
			<p className='text-left text-gray-400'>{text}</p>
		</li>
	)
}

export default ServiceListItem
