import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Trash,
} from '@phosphor-icons/react'
import {
  AddOrRemoveButtonContent,
  AddressAndCreditCard,
  ButtonContent,
  ButtonDelete,
  Card,
  CardCheckout,
  Container,
  Content,
  Divider,
  Input,
  PaymentContent,
  Select,
  SelectedItemsContent,
  Summary,
  SummaryContent,
  TitleContent,
} from './styles'

const cafe = {
  id: 1,
  name: 'Expresso Tradicional',
  description: 'Expresso diluído, menos intenso que o tradicional',
  tag: ['TRADICIONAL'],
  price: '9,90',
  img: '/coffee-image/Type=Expresso.svg',
}

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
        <CardCheckout>
          <SelectedItemsContent>
            <div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <img src={cafe.img} alt="" />
                <div>
                  <p>{cafe.name}</p>
                  <ButtonContent>
                    <AddOrRemoveButtonContent>
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </AddOrRemoveButtonContent>
                    <ButtonDelete>
                      <Trash color="#8047F8" size={15} />
                      remover
                    </ButtonDelete>
                  </ButtonContent>
                </div>
                <span>R$ {cafe.price}</span>
              </div>
              <Divider></Divider>
            </div>
          </SelectedItemsContent>
          <SummaryContent>
            <Summary>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </Summary>
            <Summary>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </Summary>
            <Summary>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </Summary>
            <Summary>
              <button>confirmar pedido</button>
            </Summary>
          </SummaryContent>
        </CardCheckout>
      </PaymentContent>
    </Container>
  )
}
