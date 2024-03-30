import styled, { ThemeProvider } from "styled-components"
import DefaultTheme from "./theme/defaultTheme"
import './i18n/config'

import Navbar from "./components/navbar"
import Header from "./components/header"
import PageContentWrapper from "./components/ui/pageContentWrapper"
import AboutSection from "./components/sections/aboutSection"
import WorkExperienceSection from "./components/sections/workExperienceSection"
import EducationSection from "./components/sections/educationSection"
import SkillsSection from "./components/sections/skillsSection"
import GetInTouchSection from "./components/sections/getInTouchSection"
import ScreenDimensionProvider from "./context/screenDimensionContext"
import ScrollProvider from "./context/scrollContext"

const AppWrapper = styled.main`
  height: 100%;
  min-height: 100vh;

  background-color: ${({theme}) => theme.colors.gray100};
`

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ScrollProvider>
        <ScreenDimensionProvider>
          <AppWrapper>
            <Navbar />
            <Header />
            <PageContentWrapper>
              <AboutSection />
              <WorkExperienceSection />
              <EducationSection />
              <SkillsSection />
              <GetInTouchSection />
            </PageContentWrapper>
          </AppWrapper>
        </ScreenDimensionProvider>
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
