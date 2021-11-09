/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import { SingleProductProps } from '@/models/product'
import { AddIcon, RemoveIcon, TrashIcon } from '@/utils/Icons'
import theme from '@/styles/theme'
import * as S from './styles'
import localStorageService from '@/services/localStorageService'

const MyCard: React.FC = () => {
  const [productsLocalStorage, setProductsLocalStorage] = useState<
    SingleProductProps[]
  >([])

  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    const getProducts = localStorageService.getProductsLocalStorage(
      1,
      'products'
    )
    setProductsLocalStorage(getProducts)
  }, [])

  useEffect(() => {
    const getProducts: SingleProductProps[] =
      localStorageService.getProductsLocalStorage(1, 'products')

    const value = getProducts.map((product) => {
      return parseInt(product?.price!) * parseInt(product?.quantity!)
    })
    const valueReduce = value.reduce((total, numero) => total + numero, 0)
    setTotalValue(valueReduce)
  }, [productsLocalStorage])

  const handleRemoveProduct = (indexProduct: number) => {
    const getProducts: [] = localStorageService.getProductsLocalStorage(
      1,
      'products'
    )
    getProducts.splice(indexProduct, 1)
    localStorage.setItem('products', JSON.stringify(getProducts))
    setProductsLocalStorage(getProducts)
  }

  const handleAddOrRemoveSingleProduct = (
    products: SingleProductProps,
    signal: string,
    productIndex: number
  ) => {
    const getProducts: SingleProductProps[] =
      localStorageService.getProductsLocalStorage(1, 'products')
    const findProduct = getProducts.find(
      (el: SingleProductProps) => el.id === products.id
    )

    if (findProduct !== undefined) {
      const quantityFormat = parseInt(products?.quantity!)
      const operation = signal === '-' ? quantityFormat - 1 : quantityFormat + 1

      const newValue = {
        ...products,
        quantity: operation.toString()
      }

      getProducts.splice(productIndex, 1, newValue)

      if (operation === 0) {
        getProducts.splice(productIndex, 1)
      }

      localStorage.setItem('products', JSON.stringify(getProducts))
      setProductsLocalStorage(getProducts)
    }
  }

  const renderProductCard = () => {
    return (
      <S.CardProductWrapper>
        {productsLocalStorage?.map((products: SingleProductProps, index) => {
          return (
            <>
              <S.InfoProducts key={products.id}>
                <S.ProductImage src={products.image} />
                <S.ProductTitle>{products.title}</S.ProductTitle>
              </S.InfoProducts>

              <S.InfoCountProducts>
                <S.CountProducts>
                  <S.IconWrapper
                    onClick={() =>
                      handleAddOrRemoveSingleProduct(products, '-', index)
                    }
                  >
                    <RemoveIcon />
                  </S.IconWrapper>
                  <S.QuantityProductWrapper>
                    <S.QuantityProduct>{products?.quantity}</S.QuantityProduct>
                  </S.QuantityProductWrapper>
                  <S.IconWrapper
                    onClick={() =>
                      handleAddOrRemoveSingleProduct(products, '+', index)
                    }
                  >
                    <AddIcon />
                  </S.IconWrapper>
                </S.CountProducts>
                <S.ProductTrashWrapper>
                  <TrashIcon
                    color="#000000b3"
                    size="28px"
                    onClick={() => handleRemoveProduct(index)}
                  />
                </S.ProductTrashWrapper>
                <S.ProductPriceWrapper>
                  <S.ProductPrice>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(
                      parseInt(products?.price || '') *
                        parseInt(products?.quantity || '')
                    )}
                  </S.ProductPrice>
                </S.ProductPriceWrapper>
              </S.InfoCountProducts>
            </>
          )
        })}
      </S.CardProductWrapper>
    )
  }

  const renderCardPrice = () => {
    return (
      <S.CardPriceWrapper>
        <S.TotalPrice>
          Total:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(totalValue)}
        </S.TotalPrice>

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
      {productsLocalStorage?.length ? (
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
