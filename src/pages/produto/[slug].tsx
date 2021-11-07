import fakeAPI from '@/services/fakeAPI'
import { GetServerSideProps } from 'next'
import Button from '@/components/Button'
import theme from '@/styles/theme'
import React from 'react'
import * as S from './styles'
import { ProductProps } from '@/models/product'

const Product: React.FC<ProductProps> = ({ singleProduct }: ProductProps) => {
  const handleAddProductCart = () => {
    const getProducts = localStorage.getItem('products')

    if (getProducts === null) {
      localStorage.setItem('products', JSON.stringify([singleProduct]))
    } else {
      const arrayProducts: [] = JSON.parse(getProducts || '')

      arrayProducts.push({ ...singleProduct, quantity: 1 })
      localStorage.setItem('products', JSON.stringify(arrayProducts))
    }
  }

  return (
    <S.ProductWrapper>
      <S.ProductContainer>
        <S.ProductImage src={singleProduct?.image} />

        <S.ProductInfoWrapper>
          <S.ProductTitle>{singleProduct?.title}</S.ProductTitle>
          <S.ProductPrice>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(parseInt(singleProduct?.price || ''))}
          </S.ProductPrice>
          <S.ProductDescription>
            {singleProduct?.description}
          </S.ProductDescription>

          <Button
            label="adicionar ao carrinho"
            width="100%"
            maxWidth="302px"
            height="36px"
            background="linear-gradient(90deg, rgb(36, 201, 43), rgb(9, 159, 15))"
            backgroundHover="linear-gradient(rgb(9, 159, 15), rgb(36, 201, 43))"
            color={theme.colors.white}
            fontSize={theme.font.sizes.medium}
            boxShadow={`0px 3px 6px ${theme.colors.boxShadow}`}
            margin="0"
            onClick={handleAddProductCart}
          />
        </S.ProductInfoWrapper>
      </S.ProductContainer>
    </S.ProductWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx
  const productSlug = query?.slug

  let singleProduct

  try {
    singleProduct = await fakeAPI.getSingleProduct(productSlug)
  } catch (error) {
    console.log(error)
  }

  return {
    props: { singleProduct }
  }
}

export default Product
