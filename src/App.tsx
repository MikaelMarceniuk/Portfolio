import styled, { ThemeProvider } from "styled-components"
import DefaultTheme from "./theme/defaultTheme"
import ScrollProvider from "./context/scrollContext"

import Navbar from "./components/navbar"
import Header from "./components/header"
import PageContentWrapper from "./components/ui/pageContentWrapper"
import AboutSection from "./components/sections/aboutSection"
import WorkExperienceSection from "./components/sections/workExperienceSection"
import EducationSection from "./components/sections/educationSection"
import SkillsSection from "./components/sections/skillsSection"
import GetInTouchSection from "./components/sections/getInTouchSection"

const AppWrapper = styled.main`
  min-height: 100vh;

  background-color: ${({theme}) => theme.colors.gray100};
`

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ScrollProvider>
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
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
