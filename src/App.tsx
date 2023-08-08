import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CoffeeShopContextProvider } from './contexts/CoffeeShopeContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeShopContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeeShopContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
