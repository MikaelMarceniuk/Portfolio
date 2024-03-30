import { createContext, useContext, useEffect, useState } from "react";

interface IDimensionContext {
	screenWidth: number,
	screenHeight: number
}

const ScreenDimensionContext = createContext<IDimensionContext>({
	screenWidth: 0,
	screenHeight: 0
})

export const useScreenDimensionContext = () => useContext(ScreenDimensionContext)

const { Provider } = ScreenDimensionContext

interface IScreenDimensionProviderProps {
	children: React.ReactNode
}

const ScreenDimensionProvider: React.FC<IScreenDimensionProviderProps> = ({ children }) => {
	const [dimensions, setDimensions] = useState({
		screenWidth: window.screen.width,
		screenHeight: window.screen.height
	})

	const handleOnResize = () => {
		setDimensions({
			screenWidth: window.screen.width,
			screenHeight: window.screen.height
		})
	}

  useEffect(() => {
    window.addEventListener('resize', handleOnResize);

    return () => {
			window.removeEventListener('resize', handleOnResize);
    };
  }, [])

	return (
		<Provider value={{...dimensions}}>
			{children}
		</Provider>
	)
}

export default ScreenDimensionProvider