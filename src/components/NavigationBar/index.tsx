import * as S from './styles'
import mockNavigation from 'mocks/mock-navigation-bar.json'

const NavigationBar = () => {
  return (
    <S.Wrapper>
      <S.Container
        className="navigation-bar-container"
        repeatCount={mockNavigation.length}
      >
        {mockNavigation.map((items) => (
          <S.SingleNavigationContainer key={items.iconName}>
            <S.NavigationIconImg src={items.iconPath} />
            <S.NavigationName>{items.iconName}</S.NavigationName>
          </S.SingleNavigationContainer>
        ))}
      </S.Container>
    </S.Wrapper>
  )
}

export default NavigationBar
