import { ButtonCart } from '../../../components/ButtonCart'
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
import { useState } from 'react'

interface CoffeeProps {
  coffee: {
    id: number
    name: string
    description: string
    tag: string[]
    price: string
    img: string
  }
}

export function Card({ coffee }: CoffeeProps) {
  const { id, name, description, tag, price, img } = coffee
  const [_product, setCoffee] = useState<CoffeeProps>({} as CoffeeProps)
  const [coffeeQtt, setCoffeeQtt] = useState(1)

  function handleAddItemAtCart() {
    const coffeeBody: CoffeeProps = {
      coffee: {
        id,
        name,
        description,
        tag,
        price,
        img,
      },
    }
    setCoffee(coffeeBody)
  }

  function handleSumCoffeeQuantity() {
    setCoffeeQtt((state) => state + 1)
  }

  function handleSubtractCoffeeQuantity() {
    if (coffeeQtt > 1) {
      setCoffeeQtt((state) => state - 1)
    }
  }
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
            <button onClick={handleSubtractCoffeeQuantity}>-</button>
            <span>{coffeeQtt}</span>
            <button onClick={handleSumCoffeeQuantity}>+</button>
          </AddOrRemoveButtonContent>
          <ButtonCart
            isHeader={false}
            handleAddItemAtCart={handleAddItemAtCart}
          />
        </ButtonsContent>
      </AddToCarContent>
    </CardContent>
  )
}
