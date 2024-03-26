import styled, { ThemeProvider } from "styled-components"
import DefaultTheme from "./theme/defaultTheme"

const AppWrapper = styled.main`
  min-height: 100vh;
  background-color: ${({theme}) => theme.colors.gray100};
`

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <AppWrapper>
        <p>Hello World!</p>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
