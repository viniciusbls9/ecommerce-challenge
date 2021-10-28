import Input from '@/components/Input'
import ProductCard from '@/components/ProductCard'
import React from 'react'
import * as S from './styled'

const Home: React.FC = () => {
  const props = [
    {
      id: 1,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 'R$ 109.95'
    },
    {
      id: 2,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 'R$ 109.95'
    },
    {
      id: 3,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 'R$ 109.95'
    }
  ]

  const renderCards = () => {
    return (
      <S.ProductCardWrapper>
        {props.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
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

export default Home
