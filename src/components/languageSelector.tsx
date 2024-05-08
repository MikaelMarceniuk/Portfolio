'use client'

import NavbarItems from '@/data/navbarItems'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select'

const LanguageSelector: React.FC = () => {
	const router = useRouter()
	const pathname = usePathname()
	const locale = useLocale()
	const t = useTranslations('languageSelector')
	const navbarItensCount = NavbarItems.length

	const handleOnValueChange = (val: string) =>
		router.push(pathname.replace(locale, val))

	return (
		<div data-aos='slide-right' data-aos-delay={50 * navbarItensCount + 1}>
			<div className='pb-4 text-sm font-bold text-gray-400'>{t('title')}</div>

			<Select onValueChange={handleOnValueChange} value={locale}>
				<SelectTrigger className='w-full'>
					<SelectValue placeholder='Language' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='pt'>{t('portuguese')}</SelectItem>
					<SelectItem value='en'>{t('english')}</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}

export default LanguageSelector
