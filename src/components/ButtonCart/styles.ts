import { styled } from 'styled-components'

export const ShoppingCart = styled.button<{ $isHeader: boolean }>`
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 2.375rem;
  width: 2.375rem;
  border-radius: 8px;
  background: ${(props) =>
    props.theme[props.$isHeader ? 'yellow-light' : 'purple-dark']};
  cursor: pointer;
`
// export const Badges = styled.div`
//   position: relative;
// `
