import * as S from './styles'
import Logo from '../Logo'
import NavigationBar from '../NavigationBar'

const Header = () => (
  <>
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Logo />
      </S.HeaderContainer>
    </S.HeaderWrapper>
    <NavigationBar />
  </>
)

export default Header
