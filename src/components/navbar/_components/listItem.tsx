'use client'

import { INavbarItem } from '@/data/navbarItems'
import { Code, Compass, Package, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const lucideIconConfigs = {
	size: 14,
	strokeWidth: 1,
}

const ListItem: React.FC<INavbarItem> = ({ label, hrefTo, icon }) => {
	const pathname = usePathname()

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
			<li
				data-current={hrefTo == pathname}
				className='group flex items-center gap-2'
			>
				<div className='p rounded border p-1 group-data-[current=true]:bg-green-600'>
					{renderLucideIcon()}
				</div>
				<span className='group-data-[current=true]:text-green-400'>
					{label}
				</span>
			</li>
		</Link>
	)
}

export default ListItem
