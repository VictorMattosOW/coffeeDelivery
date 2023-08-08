import { ShoppingCart as Icon } from '@phosphor-icons/react'
import { ShoppingCart } from './styles'

interface ShoppingCartProps {
  isHeader?: boolean
  handleAddItemAtCart?: () => void
}
// TODO: preciso fazer um Badges contando os produtos do carrinho
export function ButtonCart({
  isHeader = true,
  handleAddItemAtCart,
}: ShoppingCartProps) {
  return (
    <div>
      <ShoppingCart $isHeader={isHeader} onClick={handleAddItemAtCart}>
        <Icon
          color={isHeader ? '#C47F17' : '#FFFFFF'}
          weight="fill"
          size={22}
        />
      </ShoppingCart>
    </div>
  )
}
