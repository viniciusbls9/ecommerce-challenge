import Input from '@/components/Input'
import ProductCard from '@/components/ProductCard'
import { ProductProps } from '@/models/product'
import fakeAPI from '@/services/fakeAPI'
import { GetStaticProps } from 'next'
import React from 'react'
import * as S from './styled'

const Home: React.FC<ProductProps> = ({ products }: ProductProps) => {
  const renderCards = () => {
    return (
      <S.ProductCardWrapper>
        {products?.map((singleProduct) => (
          <ProductCard
            key={singleProduct.id}
            id={singleProduct.id}
            image={singleProduct.image}
            title={singleProduct.title}
            price={singleProduct.price}
          />
        ))}
      </S.ProductCardWrapper>
    )
  }

  const renderInputFilter = () => {
    const filters = ['ordenar por', 'menor preço', 'a-z', 'mais recentes']
    return (
      <S.HeaderWrapper>
        <S.Title>Sugestões para você</S.Title>

        <Input type="select">{filters}</Input>
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
  let products
  await fakeAPI
    .getRecommendedProducts('6')
    .then((data) => {
      products = data
    })
    .catch((error) => {
      console.log(error)
    })

  return {
    props: { products },
    revalidate: 60 * 60 * 24 // 24hours
  }
}
export default Home
