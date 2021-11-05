import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const CartWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
`

export const CartContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr;

    ${media.greaterThan('medium')`
      padding: 0;
      grid-template-columns: auto 340px;
      gap: 1.7rem;
    `}
  `}
`
export const PageTitle = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    margin-bottom: 1rem;

    ${media.greaterThan('medium')`
      text-align: left;
    `}
  `}
`

export const CardProductWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    width: 100%;
    background: ${theme.colors.white};
    border: 1px solid #00000026;
    box-shadow: 0px 6px 12px #0000001f;
    border-radius: 1.4rem;
    padding: 1rem;

    ${media.greaterThan('medium')`
      margin-bottom: 0;
    `}
  `}
`

export const InfoProducts = styled.div`
  display: flex;
  align-items: center;
`

export const ProductImage = styled.img`
  width: 11rem;
  height: 7.6rem;
  margin-right: 20px;
`

export const ProductTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 1.6rem;
    color: #4e4e4e;
  `}
`
export const InfoCountProducts = styled.div`
  margin-top: 2rem;

  display: grid;

  grid-template-areas: 'countProducts productTrash productPrice';

  grid-template-columns: 100px 30px auto;
  align-items: center;
`

export const CountProducts = styled.div`
  grid-area: countProducts;
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.7rem;
  background: #000000b3;
  border-radius: 50%;
`
export const QuantityProductWrapper = styled.div`
  width: 5.3rem;
  height: 2.5rem;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`
export const QuantityProduct = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 1.6rem;
    color: #4e4e4e;
  `}
`

export const ProductPriceWrapper = styled.div`
  grid-area: productPrice;
  display: flex;
  justify-content: end;
`

export const ProductPrice = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1.6rem;
    color: ${theme.colors.darkGreen};
  `}
`

export const ProductTrashWrapper = styled.div`
  grid-area: productTrash;
`

export const CardPriceWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.white};
    border: 1px solid #00000026;
    box-shadow: 0px 6px 12px #0000001f;
    border-radius: 1.4rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`
export const TotalPrice = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 2.5rem;
    color: ${theme.colors.darkGreen};
    text-align: center;

    ${media.greaterThan('medium')`
      margin-bottom: 2rem;
    `}
  `}
`
