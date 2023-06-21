import { styled } from 'styled-components'

export const Title = styled.header`
  margin: 5rem 0;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CardInfo = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  padding: 2.5rem;
  position: relative;
  background-color: ${(props) => props.theme.background};
  background-clip: padding-box;

  border: solid 4px transparent;
  border-radius: 6px 36px 6px 36px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -3px;
    border-radius: inherit;
    background: linear-gradient(to right, #c47f17, #4b2995);
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;

  p,
  strong {
    line-height: 130%;
  }
`

export const Icon = styled.span<{ $background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.$background]};
`
