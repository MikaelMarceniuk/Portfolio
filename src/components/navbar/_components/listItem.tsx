import { INavbarItem } from '@/data/navbarItems'
import { Code, Compass, Package, Phone } from 'lucide-react'
import Link from 'next/link'

const lucideIconConfigs = {
	size: 14,
	strokeWidth: 1,
}

const ListItem: React.FC<INavbarItem> = ({ label, hrefTo, icon }) => {
	const renderLucideIcon = () => {
		switch (icon) {
			case 'COMPASS':
				return <Compass {...lucideIconConfigs} />

			case 'PACKAGE':
				return <Package {...lucideIconConfigs} />

			case 'CODE':
				return <Code {...lucideIconConfigs} />

			case 'PHONE':
				return <Phone {...lucideIconConfigs} />
		}
	}

	return (
		<Link href={hrefTo}>
			<li className='flex items-center gap-2'>
				<div className='p rounded border p-1'>{renderLucideIcon()}</div>
				{label}
			</li>
		</Link>
	)
}

export default ListItem
