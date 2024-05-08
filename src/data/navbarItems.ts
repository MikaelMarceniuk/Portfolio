import links from './links'

export type NavigationIcons = 'COMPASS' | 'PACKAGE' | 'CODE' | 'PHONE'

export type SocialIcons = 'LINKEDIN' | 'INSTAGRAM' | 'GITHUB' | 'CV'

export interface INavbarItem {
	group: Record<'pt' | 'en', string>
	itens: {
		label: Record<'pt' | 'en', string>
		hrefTo: string
		icon: NavigationIcons | SocialIcons
		target: '_blank' | '_self'
	}[]
}

const NavbarItems: INavbarItem[] = [
	{
		group: {
			pt: 'Navegacao',
			en: 'Navigation',
		},
		itens: [
			{
				label: {
					pt: 'Pagina Inicial',
					en: 'Home Page',
				},
				hrefTo: '/home',
				icon: 'COMPASS',
				target: '_self',
			},
			{
				label: {
					pt: 'Servicos',
					en: 'Services',
				},
				hrefTo: '/services',
				icon: 'PACKAGE',
				target: '_self',
			},
			// {
			// 	label: 'Projetos',
			// 	hrefTo: '/projects',
			// 	icon: 'CODE',
			// },
			{
				label: {
					pt: 'Contato',
					en: 'Contact',
				},
				hrefTo: '/contact',
				icon: 'PHONE',
				target: '_self',
			},
		],
	},
	{
		group: {
			pt: 'Redes Sociais',
			en: 'Social Medias',
		},
		itens: [
			{
				label: {
					pt: 'LinkedIn',
					en: 'LinkedIn',
				},
				// @ts-ignore
				hrefTo: links.linkedIn,
				icon: 'LINKEDIN',
				target: '_blank',
			},
			{
				label: {
					pt: 'Instagram',
					en: 'Instagram',
				},
				hrefTo: links.instagram,
				icon: 'INSTAGRAM',
				target: '_blank',
			},
			{
				label: {
					pt: 'Github',
					en: 'Github',
				},
				hrefTo: links.github,
				icon: 'GITHUB',
				target: '_blank',
			},
			{
				label: {
					pt: 'Baixar CV',
					en: 'Download CV',
				},
				// @ts-ignore
				hrefTo: links.downloadCv,
				icon: 'CV',
				target: '_blank',
			},
		],
	},
] as const

export default NavbarItems
