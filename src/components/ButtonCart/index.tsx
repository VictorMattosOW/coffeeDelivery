import { ShoppingCart as Icon } from '@phosphor-icons/react'
import { Badges, ShoppingCart } from './styles'
import { useContext } from 'react'
import { CoffeeShopContext } from '../../contexts/CoffeeShopeContext'

interface ShoppingCartProps {
  isHeader?: boolean
  handleAddItemAtCart?: () => void
}
export function ButtonCart({
  isHeader = true,
  handleAddItemAtCart,
}: ShoppingCartProps) {
  const { addAtCart } = useContext(CoffeeShopContext)
  return (
    <div>
      <ShoppingCart $isHeader={isHeader} onClick={handleAddItemAtCart}>
        {addAtCart.length > 0 && isHeader ? (
          <Badges>{addAtCart.length}</Badges>
        ) : (
          <Badges style={{ display: 'none' }}></Badges>
        )}

        <Icon
          color={isHeader ? '#C47F17' : '#FFFFFF'}
          weight="fill"
          size={22}
        />
      </ShoppingCart>
    </div>
  )
}
