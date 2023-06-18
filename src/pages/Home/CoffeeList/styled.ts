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

export const CardContent = styled.div`
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem;
  img {
    margin-top: calc(0px - 1rem - 6px);
    margin-bottom: 0.7rem;
  }
`

export const TagContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  margin-bottom: 1rem;
`

export const Tag = styled.span`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 16px;
  padding: 0 0.5rem;
`

export const CoffeeInfo = styled.div`
  text-align: center;
  h3 {
    font-size: 1.3rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const AddToCarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  justify-content: space-between;
`

export const PriceContent = styled.div`
  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};

    &::before {
      content: 'R$ ';
      font-size: 1.2rem;
      font-weight: 500;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const ButtonsContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const AddOrRemoveButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 72px;
  height: 38px;
  border-radius: 8px;
  padding: 0 10px;
  background-color: ${(props) => props.theme['base-button']};

  span {
    text-align: center;
    font-size: 1.5rem;
    padding-top: 0.2rem;
    color: ${(props) => props.theme['base-title']};
  }

  button {
    height: 38px;
    border: none;
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['base-button']};
    font-size: 1.7rem;
    cursor: pointer;
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
