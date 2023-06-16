import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.background};
}

body, input, textarea, button {
  font-family: 'Baloo 2', cursive;
  font-weight: 400;
  font-size: 1rem;
}
`
