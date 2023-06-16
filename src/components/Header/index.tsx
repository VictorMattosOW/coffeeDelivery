import { HeaderContainer, MapLocale, ShoppingCar } from './styles'
import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
export function Header() {
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
        <ShoppingCar>
          <ShoppingCart color="#C47F17" weight="fill" size={22} />
        </ShoppingCar>
      </nav>
    </HeaderContainer>
  )
}
