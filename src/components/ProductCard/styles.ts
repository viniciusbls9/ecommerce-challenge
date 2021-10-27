import styled, { css } from 'styled-components'

export const ProductCardWrapper = styled.div`
  width: 100%;
`

export const ProductCard = styled.div`
  ${({ theme }) => css`
    width: 100%;
    box-shadow: 0px 6px 12px #0000001f;
    border: 1px solid #00000026;
    background-color: ${theme.colors.white};
  `}
`

export const ProductCardHeader = styled.div`
  width: 100%;
  height: 100%;
  max-height: 202px;
`

export const ProductCardBody = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`

export const ProductTitle = styled.p``

export const ProductPrice = styled.p``
