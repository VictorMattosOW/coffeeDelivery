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
  PaymentContent,
  Select,
  SelectedItemsContent,
  Summary,
  SummaryContent,
  TitleContent,
} from './styles'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressForm } from './addressForm'

const cafe = {
  id: 1,
  name: 'Expresso Tradicional',
  description: 'Expresso diluído, menos intenso que o tradicional',
  tag: ['TRADICIONAL'],
  price: '9,90',
  img: '/coffee-image/Type=Expresso.svg',
}

const addressFormValidationSchema = z.object({
  rua: z.string().min(10),
  numero: z.number().nonnegative(),
  cep: z.string().min(8),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().min(2),
})

type addressFormData = z.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const addressForm = useForm<addressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      numero: 0,
      rua: '',
      uf: '',
    },
  })

  const { handleSubmit } = addressForm

  function handleCreateNewAddress(data: addressFormData) {
    console.log(data)
  }

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
              <FormProvider {...addressForm}>
                <AddressForm />
              </FormProvider>
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
            <form onSubmit={handleSubmit(handleCreateNewAddress)} action="">
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
