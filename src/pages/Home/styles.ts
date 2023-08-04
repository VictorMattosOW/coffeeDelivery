import { styled } from 'styled-components'

export const Title = styled.header`
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
  margin-bottom: 2rem;
`

export const CoffeeListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;
`
