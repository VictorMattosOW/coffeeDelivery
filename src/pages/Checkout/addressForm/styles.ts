import styled from 'styled-components'

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
