import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ProductWrapper = styled.section`
  width: 100%;
  height: 100%;
`

export const ProductContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    height: 100%;

    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;

    ${media.greaterThan('medium')`
      grid-template-columns: 40rem 1fr;
    `}
  `}
`

export const ProductImage = styled.img`
  width: 100%;
  max-width: 30rem;
`
export const ProductInfoWrapper = styled.div`
  width: 100%;
`
export const ProductTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    padding: 2rem 0;
    line-height: 2.5rem;
    color: #000000b3;
  `}
`
export const ProductPrice = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.darkGreen};
    padding: 0 0 2rem 0;
    line-height: 2.5rem;
  `}
`

export const ProductDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: #000000b3;
    padding: 0 0 3rem 0;
    line-height: 2rem;
  `}
`
