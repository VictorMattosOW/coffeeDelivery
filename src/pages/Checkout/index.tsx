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
import { useContext } from 'react'
import { CoffeeShopContext } from '../../contexts/CoffeeShopeContext'

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
  const {
    addAtCart,
    handleAddQuantityProductAtCart,
    handleRemoveQuantityProductAtCart,
    handleRemoveItemAtCart,
  } = useContext(CoffeeShopContext)
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

  const getTotalShope = addAtCart.reduce((initial, coffee) => {
    initial += Number(coffee.price) * coffee.quantity
    return initial
  }, 0)

  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }

  function formattedMoney(value: number): string {
    return new Intl.NumberFormat('pt-BR', options).format(value)
  }

  function handleCreateNewAddress(data: addressFormData) {
    console.log(data)
  }

  function handlePayment(e: any) {
    console.log(e.target.defaultValue)
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
            <form onSubmit={handleSubmit(handleCreateNewAddress)}>
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
            <form action="">
              <Select onChange={handlePayment}>
                <label>
                  <input type="radio" name="work_days" value="credito" />
                  <span>
                    <CreditCard color="#8047F8" size={16} />
                    <p>cartão de crédito</p>
                  </span>
                </label>
                <label>
                  <input type="radio" name="work_days" value="debito" />
                  <span>
                    <CreditCard color="#8047F8" size={16} />
                    <p>cartão de débito</p>
                  </span>
                </label>
                <label>
                  <input type="radio" name="work_days" value="dinheiro" />
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
          {addAtCart.map((coffee) => {
            return (
              <SelectedItemsContent key={coffee.id}>
                <div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <img src={coffee.img} alt="" />
                    <div>
                      <p>{coffee.name}</p>
                      <ButtonContent>
                        <AddOrRemoveButtonContent>
                          <button
                            onClick={() =>
                              handleRemoveQuantityProductAtCart(coffee)
                            }
                          >
                            -
                          </button>
                          <span>{coffee.quantity}</span>
                          <button
                            onClick={() =>
                              handleAddQuantityProductAtCart(coffee)
                            }
                          >
                            +
                          </button>
                        </AddOrRemoveButtonContent>
                        <ButtonDelete
                          onClick={() => handleRemoveItemAtCart(coffee)}
                        >
                          <Trash color="#8047F8" size={15} />
                          remover
                        </ButtonDelete>
                      </ButtonContent>
                    </div>
                    <span>R$ {coffee.price}</span>
                  </div>
                  <Divider></Divider>
                </div>
              </SelectedItemsContent>
            )
          })}
          <SummaryContent>
            <Summary>
              <p>Total de itens</p>
              <p>R$ {formattedMoney(getTotalShope)}</p>
            </Summary>
            <Summary>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </Summary>
            <Summary>
              <strong>Total</strong>
              <strong>
                R$ {formattedMoney(getTotalShope + Number('3.50'))}
              </strong>
            </Summary>
            <Summary>
              <button type="submit">confirmar pedido</button>
            </Summary>
          </SummaryContent>
        </CardCheckout>
      </PaymentContent>
    </Container>
  )
}
