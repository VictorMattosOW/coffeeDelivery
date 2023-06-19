import { MapPinLine } from '@phosphor-icons/react'
import {
  Address,
  AddressAndCreditCard,
  AddressTitle,
  Container,
  FormContainer,
  Input,
  PaymentContent,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <AddressAndCreditCard>
        <h2>Complete seu pedido</h2>
        <Address>
          <AddressTitle>
            <MapPinLine color="#C47F17" size={25} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressTitle>

          <FormContainer>
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
          </FormContainer>
        </Address>
      </AddressAndCreditCard>
      <PaymentContent>
        <h2>Cafés selecionados</h2>
      </PaymentContent>
    </Container>
  )
}
