import Navbar from '@/components/navbar'
import type { Metadata, NextPage } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

interface IRootLayoutProps {
	children: React.ReactNode
}

const RootLayout: NextPage<IRootLayoutProps> = ({ children }) => {
	return (
		<html lang='pt' className='dark'>
			<body className={`min-h-screen bg-background ${inter.className}`}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	)
}

export default RootLayout
