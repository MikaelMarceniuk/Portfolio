export type HomePageServiceIcon = 'PANEL_TOP' | 'UNPLUG' | 'LAPTOP'

export type ServicePageIcon = 'ZAP' | 'CHROME' | 'SMARTPHONE' | 'WRENCH'

export interface IServiceItem {
	title: string
	icon: HomePageServiceIcon | ServicePageIcon
	text: string
}

export const HomePageServiceList: IServiceItem[] = [
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

export const ServicePageItens: IServiceItem[] = [
	{
		title: 'Landing Page',
		icon: 'ZAP',
		text: 'Crio landing pages que são visualmente impressionantes e otimizadas para altas conversões, levando o seu negócio para o próximo nível.',
	},
	{
		title: 'Desenvolvimento de Aplicativos Web',
		icon: 'CHROME',
		text: 'Desenvolvo soluções escaláveis, seguras, usáveis, com tecnologias modernas e UX impecável para otimizar sua produtividade.',
	},
	{
		title: 'Desenvolvimento de Aplicativos Mobile',
		icon: 'SMARTPHONE',
		text: 'Dsenvolvo apps mobile sob medida: Android e iOS. Intuitivos, eficientes, com UX impecável. Publico e do suporte nas principais lojas.',
	},
	{
		title: 'Manutencao de Sistemas',
		icon: 'WRENCH',
		text: 'Sistemas sempre funcionando: manutenção preventiva e corretiva para Windows, Linux, servidores, redes e muito mais. Atendimento personalizado e suporte técnico ágil.',
	},
] as const
