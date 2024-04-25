import { HomePageServiceIcon, ServicePageIcon } from '@/data/serviceItems'
import { cn } from '@/lib/utils'
import {
	Chrome,
	Laptop,
	PanelTop,
	Smartphone,
	Unplug,
	Wrench,
	Zap,
} from 'lucide-react'

interface IServiceCardWrapperProps extends React.HTMLAttributes<HTMLLIElement> {
	children: React.ReactNode
}

export const ServiceCardWrapper: React.FC<IServiceCardWrapperProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<li
			className={cn('space-y-4 rounded border border-gray-600 p-5', className)}
			{...props}
		>
			{children}
		</li>
	)
}

interface IServiceCardHeaderWrapperProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

export const ServiceCardHeader: React.FC<IServiceCardHeaderWrapperProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={cn('flex flex-wrap items-center gap-2 font-bold', className)}
			{...props}
		>
			{children}
		</div>
	)
}

interface IServiceCardHeaderIconProps {
	icon: HomePageServiceIcon | ServicePageIcon
}

const lucideIconConfigs = {
	size: 22,
	className: 'text-green-400',
}

export const ServiceCardHeaderIcon: React.FC<IServiceCardHeaderIconProps> = ({
	icon,
}) => {
	const renderLucideIcon = () => {
		switch (icon) {
			case 'PANEL_TOP':
				return <PanelTop {...lucideIconConfigs} />

			case 'UNPLUG':
				return <Unplug {...lucideIconConfigs} />

			case 'LAPTOP':
				return <Laptop {...lucideIconConfigs} />

			case 'ZAP':
				return <Zap {...lucideIconConfigs} />

			case 'CHROME':
				return <Chrome {...lucideIconConfigs} />

			case 'SMARTPHONE':
				return <Smartphone {...lucideIconConfigs} />

			case 'WRENCH':
				return <Wrench {...lucideIconConfigs} />
		}
	}

	return renderLucideIcon()
}

interface IServiceCardContent
	extends React.HTMLAttributes<HTMLParagraphElement> {
	children: React.ReactNode
}

export const ServiceCardContent: React.FC<IServiceCardContent> = ({
	children,
	className,
	...props
}) => {
	return (
		<p className={cn('text-left text-gray-400', className)} {...props}>
			{children}
		</p>
	)
}
