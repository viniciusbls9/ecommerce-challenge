import mockNavigation from 'mocks/mock-footer.json'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterContainer>
      {mockNavigation.map((items) => (
        <Link href={items.redirect} key={items.redirect}>
          <S.SingleIconContainer>
            <S.NavigationIconImg src={items.iconPath} />
          </S.SingleIconContainer>
        </Link>
      ))}
    </S.FooterContainer>
  </S.FooterWrapper>
)

export default Footer
