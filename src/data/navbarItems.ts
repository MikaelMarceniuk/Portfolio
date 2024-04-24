type NavbarIcon = 'COMPASS' | 'PACKAGE' | 'CODE' | 'PHONE'

export interface INavbarItem {
	label: string
	hrefTo: string
	icon: NavbarIcon
}

const NavbarItems: INavbarItem[] = [
	{
		label: 'Pagina Inicial',
		hrefTo: '/',
		icon: 'COMPASS',
	},
	{
		label: 'Servicos',
		hrefTo: '/services',
		icon: 'PACKAGE',
	},
	{
		label: 'Projetos',
		hrefTo: '/projects',
		icon: 'CODE',
	},
	{
		label: 'Contato',
		hrefTo: '/contact',
		icon: 'PHONE',
	},
] as const

export default NavbarItems
