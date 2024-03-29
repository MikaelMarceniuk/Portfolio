import styled, { ThemeProvider } from "styled-components"
import DefaultTheme from "./theme/defaultTheme"

import Navbar from "./components/navbar"
import Header from "./components/header"
import PageContentWrapper from "./components/ui/pageContentWrapper"
import AboutSection from "./components/sections/aboutSection"

const AppWrapper = styled.main`
  min-height: 100vh;

  background-color: ${({theme}) => theme.colors.gray100};
`

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <AppWrapper>
        <Navbar />
        <Header />
        <PageContentWrapper>
          <AboutSection />
        </PageContentWrapper>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
