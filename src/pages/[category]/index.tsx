import React, { useCallback, useState } from 'react'
import { GetServerSideProps } from 'next'
import { ProductProps } from '@/models/product'
import ProductCard from '@/components/ProductCard'
import * as S from '../styles'
import fakeAPI from '@/services/fakeAPI'

const Slug: React.FC<ProductProps> = ({ products }: ProductProps) => {
  const [, setProductList] = useState(products)

  const lowPriceFilter = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const newData = [...products!]
    const newFormat = newData?.sort((a, b) => {
      return Number(a.price) - Number(b.price)
    })

    setProductList(newFormat)
  }

  const alphabeticalOrderFilter = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const newData = [...products!]
    const newFormat = newData?.sort((a, b) => {
      if (a.title < b.title) {
        return -1
      } else {
        return 1
      }
    })

    setProductList(newFormat)
  }

  const handleProductsFilter = (value: string) => {
    switch (value) {
      case 'menor preço':
        lowPriceFilter()
        break
      case 'a-z':
        alphabeticalOrderFilter()
        break
      default:
        setProductList(products)
        break
    }
  }

  const renderCards = useCallback(() => {
    return (
      <S.ProductCardWrapper>
        {products?.map((singleProduct) => (
          <ProductCard
            key={singleProduct.id}
            id={singleProduct.id}
            image={singleProduct.image}
            title={singleProduct.title}
            price={new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(parseInt(singleProduct.price))}
          />
        ))}
      </S.ProductCardWrapper>
    )
  }, [products])

  const renderInputFilter = () => {
    const filters = ['menor preço', 'a-z', 'mais recentes']
    return (
      <S.HeaderWrapper>
        <S.Title>Sugestões para você</S.Title>

        <S.Select onChange={(e) => handleProductsFilter(e.target.value)}>
          <S.Option value="">ordenar por</S.Option>
          {filters.map((filter) => (
            <S.Option key={filter} value={filter}>
              {filter}
            </S.Option>
          ))}
        </S.Select>
      </S.HeaderWrapper>
    )
  }

  return (
    <S.HomeWrapper>
      {renderInputFilter()}
      {renderCards()}
    </S.HomeWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx
  const category = query?.category
  let products

  try {
    if (category === 'clothing') {
      const allProducts = await fakeAPI.getProducts()
      products = allProducts.filter((product) => {
        return product.category?.includes(category)
      })
    } else {
      products = await fakeAPI.getCategory(category)
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: { products }
  }
}

export default Slug
