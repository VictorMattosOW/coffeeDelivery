import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { CardInfo, Icon, Info, Title } from './styles'

export function Success() {
  return (
    <section>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <div style={{ display: 'flex', gap: '6.375rem', alignItems: 'center' }}>
        <CardInfo>
          <Info>
            <Icon $background="purple">
              <MapPin color="#FFFFFF" weight="fill" />
            </Icon>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </Info>
          <Info>
            <Icon $background="yellow">
              <Timer color="#FFFFFF" weight="fill" />
            </Icon>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </Info>
          <Info>
            <Icon $background="yellow-dark">
              <CurrencyDollar color="#FFFFFF" />
            </Icon>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </Info>
        </CardInfo>
        <img src="/coffee-image/Illustration.svg" alt="" />
      </div>
    </section>
  )
}
