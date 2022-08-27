import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CardContextProvider } from './context/CartContext'
import { Router } from './Routes'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CardContextProvider>
          <Router />
        </CardContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
