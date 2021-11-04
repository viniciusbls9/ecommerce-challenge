import styled, { css } from 'styled-components'

export const ProductWrapper = styled.section`
  width: 100%;
  height: 100%;
`

export const ProductContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
  `}
`

export const ProductImage = styled.img`
  width: 100%;
`
export const ProductInfoWrapper = styled.div`
  width: 100%;
`
export const ProductTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    padding: 1rem 0;
    line-height: 2.5rem;
    color: ${theme.colors.black};
  `}
`
export const ProductPrice = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.darkGreen};
    padding: 0 0 1rem 0;
    line-height: 2.5rem;
  `}
`

export const ProductDescription = styled.p``
