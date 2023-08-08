import { useContext } from 'react'
import { CoffeeShopContext, Coffee } from '../../contexts/CoffeeShopeContext'
import { Card } from './Card'
import { Description } from './Description'
import { CoffeeListContainer, Title } from './styles'

export function Home() {
  const { coffees } = useContext(CoffeeShopContext)

  return (
    <main>
      <Description />
      <section>
        <Title>
          <h2>Nossos cafés</h2>
        </Title>
        <CoffeeListContainer>
          {coffees.map((coffee: Coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </CoffeeListContainer>
      </section>
    </main>
  )
}
