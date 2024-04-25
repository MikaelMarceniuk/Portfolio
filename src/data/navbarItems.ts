import links from './links'

export type NavigationIcons = 'COMPASS' | 'PACKAGE' | 'CODE' | 'PHONE'

export type SocialIcons = 'LINKEDIN' | 'INSTAGRAM' | 'GITHUB' | 'CV'

export interface INavbarItem {
	group: string
	itens: {
		label: string
		hrefTo: string
		icon: NavigationIcons | SocialIcons
	}[]
}

const NavbarItems: INavbarItem[] = [
	{
		group: 'Navigation',
		itens: [
			{
				label: 'Pagina Inicial',
				hrefTo: '/home',
				icon: 'COMPASS',
			},
			{
				label: 'Servicos',
				hrefTo: '/services',
				icon: 'PACKAGE',
			},
			// {
			// 	label: 'Projetos',
			// 	hrefTo: '/projects',
			// 	icon: 'CODE',
			// },
			{
				label: 'Contato',
				hrefTo: '/contact',
				icon: 'PHONE',
			},
		],
	},
	{
		group: 'Redes Sociais',
		itens: [
			{
				label: 'LinkedIn',
				hrefTo: links.linkedIn,
				icon: 'LINKEDIN',
			},
			{
				label: 'Instagram',
				hrefTo: links.instagram,
				icon: 'INSTAGRAM',
			},
			{
				label: 'Github',
				hrefTo: links.github,
				icon: 'GITHUB',
			},
			{
				label: 'Baixar CV',
				hrefTo: links.downloadCv,
				icon: 'CV',
			},
		],
	},
] as const

export default NavbarItems
