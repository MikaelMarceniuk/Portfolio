import styled, { ThemeProvider } from "styled-components"
import DefaultTheme from "./theme/defaultTheme"

import Header from "./components/header"
import SplashSection from "./components/splashSection"

const AppWrapper = styled.main`
  min-height: 100vh;

  background-color: ${({theme}) => theme.colors.gray100};
`

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <AppWrapper>
        <Header />
        <SplashSection />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
