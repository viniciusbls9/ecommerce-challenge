import * as S from './styles'
import Link from 'next/link'
import Button from '../Button'
import theme from 'styles/theme'

export interface ProductCardProps {
  id: number
  image: string
  title: string
  price: string
}

const ProductCard = ({ id, image, title, price }: ProductCardProps) => {
  return (
    <S.ProductCard>
      <S.ProductCardHeader>
        <S.Image src={image} />
      </S.ProductCardHeader>
      <S.ProductCardBody>
        <S.ProductTitle>{title}</S.ProductTitle>
        <S.ProductPrice>{price}</S.ProductPrice>
        <Link href={`product/${id.toString()}`}>
          <Button
            as="a"
            label="ver produto"
            width="100%"
            maxWidth="302px"
            height="36px"
            background="linear-gradient(90deg, rgb(36, 201, 43), rgb(9, 159, 15))"
            color={theme.colors.white}
            fontSize={theme.font.sizes.medium}
            boxShadow={`0px 3px 6px ${theme.colors.boxShadow}`}
            margin="0"
          />
        </Link>
      </S.ProductCardBody>
    </S.ProductCard>
  )
}

export default ProductCard
