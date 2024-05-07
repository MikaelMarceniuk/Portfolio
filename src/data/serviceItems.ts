export type HomePageServiceIcon = 'PANEL_TOP' | 'UNPLUG' | 'LAPTOP'

export type ServicePageIcon = 'ZAP' | 'CHROME' | 'SMARTPHONE' | 'WRENCH'

export interface IServiceItem {
	title: Record<'pt' | 'en', string>
	icon: HomePageServiceIcon | ServicePageIcon
	text: Record<'pt' | 'en', string>
}

export const HomePageServiceList: IServiceItem[] = [
	{
		title: {
			pt: 'UI & UX',
			en: 'UI & UX',
		},
		icon: 'PANEL_TOP',
		text: {
			pt: 'Criando experiências significativas e centradas no usuário por meio do design.',
			en: 'Crafting meaningful, user-centered experiences through design.',
		},
	},
	{
		title: {
			pt: 'Design e Criatividade',
			en: 'Design and Creativity',
		},
		icon: 'UNPLUG',
		text: {
			pt: 'Desenvolvendo designs visualmente deslumbrantes que se conectam com a sua audiência.',
			en: 'Crafting visually stunning designs that capture attention, convey emotions, and connect with your audience on a deeper level.',
		},
	},
	{
		title: {
			pt: 'Desenvolvimento',
			en: 'Development',
		},
		icon: 'LAPTOP',
		text: {
			pt: 'Transformando sua visão em realidade com tecnologia de ponta e as últimas tendências de design.',
			en: 'Bringing your vision to life with cutting-edge technology and design trends.',
		},
	},
] as const

export const ServicePageItens: IServiceItem[] = [
	{
		title: {
			pt: 'Landing Page',
			en: 'Landing Page',
		},
		icon: 'ZAP',
		text: {
			pt: 'Crio landing pages que são visualmente impressionantes e otimizadas para altas conversões, levando o seu negócio para o próximo nível.',
			en: 'I craft visually stunning landing pages that are not only aesthetically pleasing but also strategically designed to drive conversions and boost your business.',
		},
	},
	{
		title: {
			pt: 'Desenvolvimento de Aplicativos Web',
			en: 'Web Development',
		},
		icon: 'CHROME',
		text: {
			pt: 'Desenvolvo soluções escaláveis, seguras, usáveis, com tecnologias modernas e UX impecável para otimizar sua produtividade.',
			en: 'I craft scalable, secure, and user-friendly solutions that leverage modern technologies and impeccable UX design to optimize your productivity and streamline operations.',
		},
	},
	{
		title: {
			pt: 'Desenvolvimento de Aplicativos Mobile',
			en: 'Mobile Development',
		},
		icon: 'SMARTPHONE',
		text: {
			pt: 'Desenvolvo apps mobile sob medida: Android e iOS. Intuitivos, eficientes, com UX impecável. Publico e do suporte nas principais lojas.',
			en: 'I specialize in developing custom-built Android and iOS mobile apps that are not only intuitive and efficient but also designed with impeccable UX principles in mind, ensuring a seamless and engaging user experience.',
		},
	},
	{
		title: {
			pt: 'Manutencao de Sistemas',
			en: 'Maintenance and Systems',
		},
		icon: 'WRENCH',
		text: {
			pt: 'Sistemas sempre funcionando: manutenção preventiva e corretiva para Windows, Linux, servidores, redes e muito mais. Atendimento personalizado e suporte técnico ágil.',
			en: 'I specialize in providing comprehensive IT maintenance and support services to ensure that your systems, including Windows, Linux, servers, and networks, are always running smoothly and efficiently.',
		},
	},
] as const
