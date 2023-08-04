import { styled } from 'styled-components'
export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
`

export const MapLocale = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  height: 2.375rem;
  width: 9rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  p {
    font-size: 0.95rem;
  }
`
