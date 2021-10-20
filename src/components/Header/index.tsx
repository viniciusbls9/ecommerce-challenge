import * as S from './styles'
import Logo from '../Logo'
import NavigationBar from '../NavigationBar'

const Header = () => (
  <>
    <S.Wrapper>
      <S.Container>
        <Logo />
      </S.Container>
    </S.Wrapper>
    <NavigationBar />
  </>
)

export default Header
