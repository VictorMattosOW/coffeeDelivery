import { ShoppingCart } from '@phosphor-icons/react'
import {
  AddOrRemoveButtonContent,
  AddToCarContent,
  ButtonsContent,
  CardContent,
  CartButton,
  CoffeeInfo,
  CoffeeListContainer,
  PriceContent,
  Tag,
  TagContent,
  Title,
} from './styled'
interface CoffeeType {
  id: number
  name: string
  description: string
  tag: string[]
  price: string
  img: string
}

const coffees: CoffeeType[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tag: ['TRADICIONAL'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Expresso.svg',
  },
  {
    id: 2,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tag: ['TRADICIONAL'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Americano.svg',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tag: ['TRADICIONAL'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Expresso Cremoso.svg',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tag: ['TRADICIONAL', 'GELADO'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=ExpressoGelado.svg',
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Café com Leite.svg',
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Latte.svg',
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Capuccino.svg',
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Macchiato.svg',
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Mochaccino.svg',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tag: ['especial', 'com leite'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Chocolate Quente.svg',
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tag: ['especial', 'gelado', 'alcoólico'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Cubano.svg',
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tag: ['especial'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Havaiano.svg',
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tag: ['especial'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Árabe.svg',
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tag: ['especial', 'alcoólico'],
    price: '9,90',
    img: '../../../../public/coffee-image/Type=Irlandês.svg',
  },
]

export function CoffeeList() {
  return (
    <section>
      <Title>
        <h2>Nossos cafés</h2>
      </Title>
      <CoffeeListContainer>
        {coffees.map((coffee: CoffeeType) => {
          return (
            <CardContent key={coffee.id}>
              <img src={coffee.img} alt={coffee.name} />
              <TagContent>
                {coffee.tag.map((tag, index) => {
                  return <Tag key={index}>{tag.toLocaleUpperCase()}</Tag>
                })}
              </TagContent>

              <CoffeeInfo>
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>
              </CoffeeInfo>

              <AddToCarContent>
                <PriceContent>
                  <h2>{coffee.price}</h2>
                </PriceContent>
                <ButtonsContent>
                  <AddOrRemoveButtonContent>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </AddOrRemoveButtonContent>
                  <CartButton>
                    <ShoppingCart color="#FFFFFF" weight="fill" size={24} />
                  </CartButton>
                </ButtonsContent>
              </AddToCarContent>
            </CardContent>
          )
        })}
      </CoffeeListContainer>
    </section>
  )
}
