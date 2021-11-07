import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import { AddIcon, RemoveIcon, TrashIcon } from '@/utils/Icons'
import theme from '@/styles/theme'
import * as S from './styles'

const MyCard: React.FC = () => {
  const [productsLocalStorage, setProductsLocalStorage] = useState([])

  useEffect(() => {
    const getKey = localStorage?.key(1) || ''

    const getLocalStorage: [] =
      getKey !== '' ? JSON.parse(localStorage?.getItem('products') || '') : []

    setProductsLocalStorage(getLocalStorage)
  }, [])
  const renderProductCard = () => {
    return (
      <S.CardProductWrapper>
        <S.InfoProducts>
          <S.ProductImage src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
          <S.ProductTitle>boné bordado harry potter grifinoria</S.ProductTitle>
        </S.InfoProducts>

        <S.InfoCountProducts>
          <S.CountProducts>
            <S.IconWrapper>
              <RemoveIcon />
            </S.IconWrapper>
            <S.QuantityProductWrapper>
              <S.QuantityProduct>1</S.QuantityProduct>
            </S.QuantityProductWrapper>
            <S.IconWrapper>
              <AddIcon />
            </S.IconWrapper>
          </S.CountProducts>
          <S.ProductTrashWrapper>
            <TrashIcon color="#000000b3" size="28px" />
          </S.ProductTrashWrapper>
          <S.ProductPriceWrapper>
            <S.ProductPrice>R$ 30,00</S.ProductPrice>
          </S.ProductPriceWrapper>
        </S.InfoCountProducts>
      </S.CardProductWrapper>
    )
  }

  const renderCardPrice = () => {
    return (
      <S.CardPriceWrapper>
        <S.TotalPrice>Total: R$30,00</S.TotalPrice>

        <Button
          label="continuar"
          width="100%"
          maxWidth="302px"
          height="36px"
          background="linear-gradient(90deg, rgb(36, 201, 43), rgb(9, 159, 15))"
          backgroundHover="linear-gradient(rgb(9, 159, 15), rgb(36, 201, 43))"
          color={theme.colors.white}
          fontSize={theme.font.sizes.medium}
          boxShadow={`0px 3px 6px ${theme.colors.boxShadow}`}
          margin="0"
        />
      </S.CardPriceWrapper>
    )
  }

  const renderWithoutProduct = () => {
    return (
      <S.WithoutProductWrapper>
        <S.PageTitle textAlign="center">
          não possui produto no carrinho
        </S.PageTitle>
      </S.WithoutProductWrapper>
    )
  }

  return (
    <S.CartWrapper>
      {productsLocalStorage.length ? (
        <>
          <S.PageTitle textAlign="left">meu carrinho</S.PageTitle>
          <S.CartContainer>
            {renderProductCard()}
            {renderCardPrice()}
          </S.CartContainer>
        </>
      ) : (
        renderWithoutProduct()
      )}
    </S.CartWrapper>
  )
}

export default MyCard
