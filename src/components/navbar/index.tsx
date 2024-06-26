'use client'

import NavbarItems from '@/data/navbarItems'
import { AccordionItem } from '@radix-ui/react-accordion'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import DivScaleHoverActive from '../animations/divScaleHoverActive'
import LanguageSelector from '../languageSelector'
import { Accordion, AccordionContent, AccordionTrigger } from '../ui/accordion'
import NavbarListGroup from './_components/listGroup'

const Navbar: React.FC = () => {
	const t = useTranslations('accessibility')

	return (
		<div className='sticky top-0 z-10 mb-12 border-b bg-background px-4 lg:mb-0 lg:w-full lg:max-w-48 lg:border-b-0 lg:border-r'>
			<Accordion type='single' collapsible className='lg:hidden'>
				<AccordionItem value='navbar-menu'>
					<AccordionTrigger
						className='group justify-end'
						aria-label={t('navbar.mobile.navbarMenuButton')}
					>
						<DivScaleHoverActive>
							<div className='rounded border p-2'>
								<Menu className='hidden opacity-0 transition-opacity group-data-[state=closed]:block group-data-[state=closed]:opacity-100' />
								<X className='hidden opacity-0 transition-opacity group-data-[state=open]:block group-data-[state=open]:opacity-100' />
							</div>
						</DivScaleHoverActive>
					</AccordionTrigger>

					<AccordionContent>
						<div className='flex list-none flex-col gap-4'>
							{NavbarItems.map((item, i) => (
								<NavbarListGroup key={`list-group-${i}`} {...item} />
							))}

							<LanguageSelector />
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<div
				className='hidden list-none flex-col gap-4 pt-24 lg:flex'
				data-aos='slide-right'
			>
				{NavbarItems.map((item, i) => (
					<NavbarListGroup key={`list-group-${i}`} {...item} />
				))}

				<LanguageSelector />
			</div>
		</div>
	)
}

export default Navbar
