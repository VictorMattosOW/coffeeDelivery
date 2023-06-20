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
  gap: 2rem;
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 0.8rem;
  background: ${(props) => props.theme['base-card']};
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

export const BaseInput = styled.input`
  height: 2.65rem;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 1rem;
  background: ${(props) => props.theme['base-input']};
`
interface InputProps {
  $width?: string
}
export const Input = styled(BaseInput)<InputProps>`
  width: ${(props) => props.$width};
`

export const Select = styled.p`
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
