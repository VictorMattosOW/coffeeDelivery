import { styled } from 'styled-components'
export const InfoContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 6.75rem 0;
`

export const Descriptions = styled.section`
  width: 50%;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }
`

export const IconDescription = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  margin-top: 4.125rem;
`

export const IconContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
