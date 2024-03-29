import { createContext, useContext, useEffect, useState } from "react"

export interface IScrollContext {
	scrollPosition: number
}

const scrollContext = createContext<IScrollContext>({
	scrollPosition: 0
})

export const useScrollContext = () => useContext(scrollContext)

const { Provider } = scrollContext

interface ScrollProviderProps {
	children: React.ReactNode
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
	const [scrollPosition, setScrollPosition] = useState(0)

	const handleOnScroll = () => setScrollPosition(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll, { passive: true });

    return () => {
			window.removeEventListener('scroll', handleOnScroll);
    };
  }, [])

	return (
		<Provider value={{ scrollPosition }}>
			{children}
		</Provider>
	)
}

export default ScrollProvider