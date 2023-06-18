import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  Container,
  Descriptions,
  Icon,
  IconContent,
  IconDescription,
  InfoContent,
} from './styles'
import CoffeeLogo from '../../../assets/Imagem.png'

export function Description() {
  return (
    <InfoContent>
      <Descriptions>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
        <IconDescription>
          <Container>
            <IconContent>
              <Icon $background="yellow-dark">
                <ShoppingCart color="#FFFFFF" weight="fill" />
              </Icon>
              <p>Compra simples e segura</p>
            </IconContent>
            <IconContent>
              <Icon $background="yellow">
                <Timer color="#FFFFFF" weight="fill" />
              </Icon>
              <p>Entrega rápida e rastreada</p>
            </IconContent>
          </Container>
          <Container>
            <IconContent>
              <Icon $background="base-text">
                <Package color="#FFFFFF" weight="fill" />
              </Icon>
              <p>Embalagem mantém o café intacto</p>
            </IconContent>
            <IconContent>
              <Icon $background="purple">
                <Coffee color="#FFFFFF" weight="fill" />
              </Icon>
              <p>O café chega fresquinho até você</p>
            </IconContent>
          </Container>
        </IconDescription>
      </Descriptions>
      <img src={CoffeeLogo} alt="" />
    </InfoContent>
  )
}
