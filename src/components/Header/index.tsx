import Logo from '../../assets/Logo.png'
import { MapPin } from '@phosphor-icons/react'
import { HeaderContainer, MapLocale } from './styles'
import { ButtonCart } from '../ButtonCart'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeShopContext } from '../../contexts/CoffeeShopeContext'

export function Header() {
  // const { addAtCart } = useContext(CoffeeShopContext)
  return (
    <HeaderContainer>
      <section>
        <img src={Logo} alt="Logo Coffee Delivery" />
      </section>
      <nav>
        <MapLocale>
          <MapPin color="#8047F8" weight="fill" size={19} />
          <p>Porto Alegre, RS</p>
        </MapLocale>
        <NavLink to="/checkout" title="checkout">
          <ButtonCart />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
