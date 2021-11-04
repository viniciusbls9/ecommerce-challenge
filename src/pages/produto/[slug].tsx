// import fakeAPI from '@/services/fakeAPI'
// import { GetServerSideProps } from 'next'
import React from 'react'
import * as S from './styles'

const Product: React.FC = () => {
  return (
    <S.ProductWrapper>
      <S.ProductContainer>
        <S.ProductImage />

        <S.ProductInfoWrapper>
          <S.ProductTitle>Boné Bordado Harry Potter Grifinoria</S.ProductTitle>
          <S.ProductPrice>R$30,00</S.ProductPrice>
          <S.ProductDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dicta
            rerum possimus dolores assumenda, officia quibusdam, praesentium nam
            non debitis nostrum enim neque. Atque cum nemo repellat reiciendis
            ducimus impedit?
          </S.ProductDescription>
        </S.ProductInfoWrapper>
      </S.ProductContainer>
    </S.ProductWrapper>
  )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { query } = ctx
//   const category = query?.category
//   let products

//   try {
//     if (category === 'clothing') {
//       const allProducts = await fakeAPI.getProducts()
//       products = allProducts.filter((product) => {
//         return product.category?.includes(category)
//       })
//     } else {
//       products = await fakeAPI.getCategory(category)
//     }
//   } catch (error) {
//     console.log(error)
//   }

//   return {
//     props: { products }
//   }
// }

export default Product
