import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import theme from 'styles/theme'

interface SingleProduct {
  id: number
  image: string
  title: string
  price: string
}

export interface ProductCardProps {
  products: SingleProduct[]
}

const ProductCard = ({ products }: ProductCardProps) => (
  <S.ProductCardWrapper>
    {products.map((product) => (
      <S.ProductCard key={product.id}>
        <S.ProductCardHeader>
          <Image src={product.image} width="100%" height="100%" unoptimized />
        </S.ProductCardHeader>
        <S.ProductCardBody>
          <S.ProductTitle>{product.title}</S.ProductTitle>
          <S.ProductPrice>{product.price}</S.ProductPrice>
          <Link href={product.id.toString()}>
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
            />
          </Link>
        </S.ProductCardBody>
      </S.ProductCard>
    ))}
  </S.ProductCardWrapper>
)

export default ProductCard
