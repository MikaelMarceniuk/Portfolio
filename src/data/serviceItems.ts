type ServiceIcon = 'PANEL_TOP' | 'UNPLUG' | 'LAPTOP'

export interface IServiceItem {
	title: string
	icon: ServiceIcon
	text: string
}

const ServicesItems: IServiceItem[] = [
	{
		title: 'UI & UX',
		icon: 'PANEL_TOP',
		text: 'Criando experiências significativas e centradas no usuário por meio do design.',
	},
	{
		title: 'Design e Criatividade',
		icon: 'UNPLUG',
		text: 'Desenvolvendo designs visualmente deslumbrantes que se conectam com a sua audiência.',
	},
	{
		title: 'Desenvolvimento',
		icon: 'LAPTOP',
		text: 'Transformando sua visão em realidade com tecnologia de ponta e as últimas tendências de design.',
	},
] as const

export default ServicesItems
