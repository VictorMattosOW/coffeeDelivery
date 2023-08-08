import { ReactNode, createContext, useState } from 'react'

export interface Coffee {
  id: number
  name: string
  description: string
  tag: string[]
  price: string
  img: string
  quantity: number
}

interface CoffeeShopeContextProvidersProps {
  children: ReactNode
}

const coffeesList: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tag: ['TRADICIONAL'],
    price: '9.90',
    img: '/coffee-image/Type=Expresso.svg',
    quantity: 0,
  },
  {
    id: 2,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tag: ['TRADICIONAL'],
    price: '9.90',
    img: '/coffee-image/Type=Americano.svg',
    quantity: 0,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tag: ['TRADICIONAL'],
    price: '9.90',
    img: '/coffee-image/Type=Expresso Cremoso.svg',
    quantity: 0,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tag: ['TRADICIONAL', 'GELADO'],
    price: '9.90',
    img: '/coffee-image/Type=ExpressoGelado.svg',
    quantity: 0,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9.90',
    img: '/coffee-image/Type=Café com Leite.svg',
    quantity: 0,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9.90',
    img: '/coffee-image/Type=Latte.svg',
    quantity: 0,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9.90',
    img: '/coffee-image/Type=Capuccino.svg',
    quantity: 0,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9.90',
    img: '/coffee-image/Type=Macchiato.svg',
    quantity: 0,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tag: ['TRADICIONAL', 'com leite'],
    price: '9.90',
    img: '/coffee-image/Type=Mochaccino.svg',
    quantity: 0,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tag: ['especial', 'com leite'],
    price: '9.90',
    img: '/coffee-image/Type=Chocolate Quente.svg',
    quantity: 0,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tag: ['especial', 'gelado', 'alcoólico'],
    price: '9.90',
    img: '/coffee-image/Type=Cubano.svg',
    quantity: 0,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tag: ['especial'],
    price: '9.90',
    img: '/coffee-image/Type=Havaiano.svg',
    quantity: 0,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tag: ['especial'],
    price: '9.90',
    img: '/coffee-image/Type=Árabe.svg',
    quantity: 0,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tag: ['especial', 'alcoólico'],
    price: '9.90',
    img: '/coffee-image/Type=Irlandês.svg',
    quantity: 0,
  },
]

interface CoffeeShopContextType {
  coffees: Coffee[]
  addAtCart: Coffee[]
  handleAddQuantityProduct: (coffee: Coffee) => void
  handleRemoveQuantityProduct: (coffee: Coffee) => void
  handleAddItemAtCart: (coffee: Coffee) => void
  handleAddQuantityProductAtCart: (coffee: Coffee) => void
  handleRemoveQuantityProductAtCart: (coffee: Coffee) => void
  handleRemoveItemAtCart: (coffee: Coffee) => void
}

export const CoffeeShopContext = createContext({} as CoffeeShopContextType)

export function CoffeeShopContextProvider({
  children,
}: CoffeeShopeContextProvidersProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesList)
  const [addAtCart, setAddAtCart] = useState<Coffee[]>([])

  function handleAddQuantityProduct(coffee: Coffee) {
    const updatedProducts = coffees.map((c) =>
      c.id === coffee.id ? { ...c, quantity: c.quantity + 1 } : c,
    )
    setCoffees(updatedProducts)
  }

  function handleRemoveQuantityProduct(coffee: Coffee) {
    if (coffee.quantity > 0) {
      const updatedProducts = coffees.map((c) =>
        c.id === coffee.id ? { ...c, quantity: c.quantity - 1 } : c,
      )
      setCoffees(updatedProducts)
    }
  }

  function checkIfHasSameProductsAndUpdateQuantity(
    cart: Coffee[],
    coffee: Coffee,
  ): Coffee[] {
    let hasSameProduct = false
    const newCart = cart.map((p) => {
      if (p.id === coffee.id) {
        hasSameProduct = true
        return coffee
      }
      return p
    })

    return hasSameProduct ? newCart : [...cart, coffee]
  }

  function handleAddQuantityProductAtCart(coffee: Coffee) {
    const updatedProducts = addAtCart.map((c) =>
      c.id === coffee.id ? { ...c, quantity: c.quantity + 1 } : c,
    )
    setAddAtCart(updatedProducts)
  }

  function handleRemoveQuantityProductAtCart(coffee: Coffee) {
    if (coffee.quantity > 0) {
      const updatedProducts = addAtCart.map((c) =>
        c.id === coffee.id ? { ...c, quantity: c.quantity - 1 } : c,
      )
      setAddAtCart(updatedProducts)
    }
  }

  function handleAddItemAtCart(coffee: Coffee) {
    setAddAtCart((state) => {
      if (addAtCart.length === 0) {
        return [...state, coffee]
      }
      return checkIfHasSameProductsAndUpdateQuantity(state, coffee)
    })
  }

  function handleRemoveItemAtCart(coffeeToDelete: Coffee) {
    const cartWithoutDeletedItem = addAtCart.filter(
      (coffee) => coffee !== coffeeToDelete,
    )

    setAddAtCart(cartWithoutDeletedItem)
  }

  return (
    <CoffeeShopContext.Provider
      value={{
        coffees,
        addAtCart,
        handleAddQuantityProduct,
        handleRemoveQuantityProduct,
        handleAddItemAtCart,
        handleAddQuantityProductAtCart,
        handleRemoveQuantityProductAtCart,
        handleRemoveItemAtCart,
      }}
    >
      {children}
    </CoffeeShopContext.Provider>
  )
}
