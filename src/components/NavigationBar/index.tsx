import mockNavigation from 'mocks/mock-navigation-bar.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'

const NavigationBar = () => {
  const router = useRouter()
  return (
    <S.Wrapper>
      <S.Container repeatCount={mockNavigation.length}>
        {mockNavigation.map((items) => (
          <Link href={items.redirect} key={items.iconName}>
            <S.SingleNavigationContainer
              isActive={router?.asPath === items.redirect}
            >
              <S.NavigationIconImg src={items.iconPath} />
              <S.NavigationName>{items.iconName}</S.NavigationName>
            </S.SingleNavigationContainer>
          </Link>
        ))}
      </S.Container>
    </S.Wrapper>
  )
}

export default NavigationBar
