'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface ICustomQueryClientProviderProps {
	children: React.ReactNode
}

const queryClient = new QueryClient()

const CustomQueryClientProvider: React.FC<ICustomQueryClientProviderProps> = ({
	children,
}) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default CustomQueryClientProvider
