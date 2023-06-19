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

input:focus-visible {
    outline: none !important;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
}


body, input, textarea, button {
  font-family: 'Baloo 2', cursive;
  font-weight: 400;
  font-size: 1rem;
}
`
