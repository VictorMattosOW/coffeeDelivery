import { ButtonCart } from '../../../components/ButtonCart'
import { CoffeeShopContext } from '../../../contexts/CoffeeShopeContext'
import {
  AddOrRemoveButtonContent,
  AddToCarContent,
  ButtonsContent,
  CardContent,
  CoffeeInfo,
  PriceContent,
  Tag,
  TagContent,
} from './styles'
import { useContext } from 'react'

interface CoffeeProps {
  coffee: {
    id: number
    name: string
    description: string
    tag: string[]
    price: string
    img: string
    quantity: number
  }
}

export function Card({ coffee }: CoffeeProps) {
  const { id, name, description, tag, price, img, quantity } = coffee
  const {
    handleAddQuantityProduct,
    handleRemoveQuantityProduct,
    handleAddItemAtCart,
  } = useContext(CoffeeShopContext)

  return (
    <CardContent key={id}>
      <img src={img} alt={name} />
      <TagContent>
        {tag.map((tag, index) => {
          return <Tag key={index}>{tag.toLocaleUpperCase()}</Tag>
        })}
      </TagContent>

      <CoffeeInfo>
        <h3>{name}</h3>
        <p>{description}</p>
      </CoffeeInfo>

      <AddToCarContent>
        <PriceContent>
          <h2>{price}</h2>
        </PriceContent>
        <ButtonsContent>
          <AddOrRemoveButtonContent>
            <button onClick={() => handleRemoveQuantityProduct(coffee)}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleAddQuantityProduct(coffee)}>+</button>
          </AddOrRemoveButtonContent>
          <ButtonCart
            isHeader={false}
            handleAddItemAtCart={() => handleAddItemAtCart(coffee)}
          />
        </ButtonsContent>
      </AddToCarContent>
    </CardContent>
  )
}
