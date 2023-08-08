import { styled } from 'styled-components'

export const ShoppingCart = styled.button<{ $isHeader: boolean }>`
  position: relative;
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
export const Badges = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  color: var(--base-white, #fff);
  background-color: #c47f17;
  font-size: 12px;
  font-weight: 700;
`
