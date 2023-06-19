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
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 23.25rem;
  border-radius: 8px;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
`

export const AddressTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  line-height: 120%;
  span {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormContainer = styled.div`
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

export const PaymentContent = styled.div``
