import styled, { css } from 'styled-components'

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

    @media screen and (min-width: 940px) {
      padding: 0;
      grid-template-columns: auto 340px;
      gap: 1.7rem;
      height: 13rem;
    }
  `}
`
export const PageTitle = styled.h1<{ textAlign: string }>`
  ${({ theme, textAlign }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    margin-bottom: 1rem;
    padding-left: 2rem;

    @media screen and (min-width: 768px) {
      text-align: ${textAlign};
    }

    @media screen and (min-width: 940px) {
      padding-left: 0;
    }
  `}
`

export const CardProductWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    width: 100%;
    max-width: 68.8rem;
    background: ${theme.colors.white};
    border: 1px solid #00000026;
    box-shadow: 0px 6px 12px #0000001f;
    border-radius: 1.4rem;
    padding: 1rem;
    display: grid;
    grid-row-gap: 3rem;

    @media screen and (min-width: 940px) {
      margin-bottom: 0;
      grid-template-columns: 353px auto;
    }
  `}
`
export const CardProductContainer = styled.div`
  margin-bottom: 2rem;
`

export const InfoProducts = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
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

  @media screen and (min-width: 940px) {
    margin-top: 0rem;
    grid-template-areas: 'countProducts productPrice productTrash';
    grid-template-columns: 100px auto 30px;
    justify-content: space-between;
  }
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
    max-width: 68.8rem;
    height: 100%;
    max-height: 20rem;
    background: ${theme.colors.white};
    border: 1px solid #00000026;
    box-shadow: 0px 6px 12px #0000001f;
    border-radius: 1.4rem;
    padding: 3rem;
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

    @media screen and (min-width: 768px) {
      margin-bottom: 2rem;
    }
  `}
`
export const WithoutProductWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
