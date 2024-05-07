'use client'

import {
	ServiceCardContent,
	ServiceCardHeader,
	ServiceCardHeaderIcon,
	ServiceCardWrapper,
} from '@/components/baseServiceCard'
import { IServiceItem } from '@/data/serviceItems'
import { useLocale } from 'next-intl'

type ICardItemProps = IServiceItem & React.HTMLAttributes<HTMLLIElement>

const CardItem: React.FC<ICardItemProps> = ({ title, text, icon, ...rest }) => {
	const locale = useLocale()

	return (
		<ServiceCardWrapper {...rest}>
			<ServiceCardHeader>
				<ServiceCardHeaderIcon icon={icon} />
				{title[locale]}
			</ServiceCardHeader>
			<ServiceCardContent>{text[locale]}</ServiceCardContent>
		</ServiceCardWrapper>
	)
}

export default CardItem
