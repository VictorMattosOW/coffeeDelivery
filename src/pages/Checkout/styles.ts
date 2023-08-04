import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.9rem;
  }
`

export const AddressAndCreditCard = styled.div`
  display: flex;
  flex-direction: column;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 2rem;
  padding: 2.5rem;
  margin-bottom: 0.8rem;
  background: ${(props) => props.theme['base-card']};
`

export const CardCheckout = styled(Card)`
  border-top-right-radius: 44px;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  line-height: 130%;
  span {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const Content = styled.div`
  div {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
  }
`

export const Select = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 13rem;
    height: 3.1rem;
    padding: 1rem;
    border: none;
    border-radius: 8px;

    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio']:checked + span {
    border: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }
`
export const PaymentContent = styled.div``

export const SelectedItemsContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  span {
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }

  img {
    width: 64px;
    height: 64px;
  }
`

export const AddOrRemoveButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 72px;
  height: 30px;
  border-radius: 8px;
  padding: 0 10px;
  background-color: ${(props) => props.theme['base-button']};

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
  }

  button {
    display: flex;
    align-items: center;
    height: 30px;
    border: none;
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['base-button']};
    font-size: 1.2rem;
    cursor: pointer;
  }
`

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 91px;
  height: 30px;
  border: none;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 0.8rem;
  background-color: ${(props) => props.theme['base-button']};
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
export const Divider = styled.div`
  border-top: 1px solid ${(props) => props.theme['base-button']};
  margin-top: 1.5rem;
`

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.8rem; */
`

export const Summary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-size: 1.3rem;
  }

  button {
    width: 100%;
    height: 46px;
    margin-top: 1.5rem;
    text-transform: uppercase;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
