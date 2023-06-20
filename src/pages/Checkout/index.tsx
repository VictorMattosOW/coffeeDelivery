import { MapPinLine, CurrencyDollar, CreditCard } from '@phosphor-icons/react'
import {
  AddressAndCreditCard,
  Card,
  Container,
  Content,
  Input,
  PaymentContent,
  Select,
  TitleContent,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <AddressAndCreditCard>
        <h2>Complete seu pedido</h2>
        <Card>
          <TitleContent>
            <MapPinLine color="#C47F17" size={25} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleContent>

          <Content>
            <form>
              <Input type="text" placeholder="CEP" />
              <Input $width="100%" type="text" placeholder="Rua" />
              <div>
                <Input type="text" placeholder="Número" />
                <Input $width="70%" type="text" placeholder="Complemento" />
              </div>
              <div>
                <Input type="text" placeholder="Bairro" />
                <Input $width="60%" type="text" placeholder="Cidade" />
                <Input $width="10%" type="text" placeholder="UF" />
              </div>
            </form>
          </Content>
        </Card>
        <Card>
          <TitleContent>
            <CurrencyDollar color="#8047F8" size={25} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </TitleContent>
          <Content>
            <form>
              <Select>
                <label>
                  <input type="radio" name="work_days" value="1" />
                  <span>
                    <CreditCard color="#8047F8" size={16} />
                    <p>cartão de crédito</p>
                  </span>
                </label>
                <label>
                  <input type="radio" name="work_days" value="1" />
                  <span>
                    <CreditCard color="#8047F8" size={16} />
                    <p>cartão de débito</p>
                  </span>
                </label>
                <label>
                  <input type="radio" name="work_days" value="1" />
                  <span>
                    <CreditCard color="#8047F8" size={16} />
                    <p>dinheiro</p>
                  </span>
                </label>
              </Select>
            </form>
          </Content>
        </Card>
      </AddressAndCreditCard>
      <PaymentContent>
        <h2>Cafés selecionados</h2>
        <Card>
          <h1>teste</h1>
        </Card>
      </PaymentContent>
    </Container>
  )
}
