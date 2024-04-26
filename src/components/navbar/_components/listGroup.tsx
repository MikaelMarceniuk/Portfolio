'use client'

import DivScaleHoverActive from '@/components/animations/divScaleHoverActive'
import { INavbarItem, NavigationIcons, SocialIcons } from '@/data/navbarItems'
import {
	Code,
	Compass,
	Github,
	Instagram,
	Linkedin,
	Newspaper,
	Package,
	Phone,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const lucideIconConfigs = {
	size: 14,
	strokeWidth: 1,
}

type PossibleIcons = NavigationIcons | SocialIcons

const NavbarListGroup: React.FC<INavbarItem> = ({ group, itens }) => {
	const pathname = usePathname()

	const renderLucideIcon = (icon: PossibleIcons) => {
		switch (icon) {
			case 'COMPASS':
				return <Compass {...lucideIconConfigs} />

			case 'PACKAGE':
				return <Package {...lucideIconConfigs} />

			case 'CODE':
				return <Code {...lucideIconConfigs} />

			case 'PHONE':
				return <Phone {...lucideIconConfigs} />

			case 'LINKEDIN':
				return <Linkedin {...lucideIconConfigs} />

			case 'INSTAGRAM':
				return <Instagram {...lucideIconConfigs} />

			case 'GITHUB':
				return <Github {...lucideIconConfigs} />

			case 'CV':
				return <Newspaper {...lucideIconConfigs} />
		}
	}

	return (
		<div>
			<div className='pb-2 text-sm font-bold text-gray-400'>{group}</div>

			<ul className='flex h-fit flex-col gap-2 p-2 pb-4'>
				{itens.map((item, i) => (
					<Link
						key={`navbar-item-${i}`}
						href={item.hrefTo}
						target={group == 'Redes Sociais' ? '_blank' : '_self'}
						data-aos='slide-right'
						data-aos-delay={50 * i}
					>
						<DivScaleHoverActive>
							<li
								data-current={item.hrefTo == pathname}
								className='group flex items-center gap-2'
							>
								<div className='p rounded border p-1 group-data-[current=true]:bg-green-600'>
									{renderLucideIcon(item.icon)}
								</div>
								<span className='group-data-[current=true]:text-green-400'>
									{item.label}
								</span>
							</li>
						</DivScaleHoverActive>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default NavbarListGroup