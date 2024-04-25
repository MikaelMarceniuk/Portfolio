'use client'

import NavbarItems from '@/data/navbarItems'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import ListItem from './_components/listItem'

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenuOpen = () => setIsOpen((oldValue) => !oldValue)

	return (
		<div className='sticky top-0 border-b bg-background px-4'>
			<div className='flex h-20 items-center justify-end'>
				<div className='rounded border p-2' onClick={toggleMenuOpen}>
					<Menu
						data-active={!isOpen}
						className='hidden opacity-0 transition-opacity data-[active=true]:block data-[active=true]:opacity-100'
					/>
					<X
						data-active={isOpen}
						className='hidden opacity-0 transition-opacity data-[active=true]:block data-[active=true]:opacity-100'
					/>
				</div>
			</div>
			<div
				data-active={isOpen}
				className='hidden h-0 p-2 data-[active=true]:block data-[active=true]:h-fit data-[active=true]:pb-4'
			>
				<ul className='flex list-none flex-col gap-4'>
					{NavbarItems.map((item, i) => (
						<ListItem key={i} {...item} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
