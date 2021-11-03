import ProductCard from '@/components/ProductCard'
import { ProductProps } from '@/models/product'
import fakeAPI from '@/services/fakeAPI'
import { GetStaticProps } from 'next'
import React, { useCallback, useState } from 'react'
import * as S from './styled'

const Home: React.FC<ProductProps> = ({ products }: ProductProps) => {
  const [productList, setProductList] = useState(products)

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
        {productList?.map((singleProduct) => (
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
  }, [productList])

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

export const getStaticProps: GetStaticProps = async () => {
  const response = await fakeAPI.getRecommendedProducts('6')

  const products = response.map((product) => {
    return {
      id: product.id || null,
      image: product.image || null,
      title: product.title || null,
      price: product.price || null,
      category: product.category || null,
      description: product.description || null
    }
  })

  return {
    props: { products },
    revalidate: 60 * 60 * 24 // 24hours
  }
}
export default Home
