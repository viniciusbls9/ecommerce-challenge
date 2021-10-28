import styled, { css } from 'styled-components'

export const ProductCard = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 38rem;
    height: 100%;
    max-height: 40rem;
    box-shadow: 0px 6px 12px #0000001f;
    border: 1px solid #00000026;
    border-radius: 1.4rem;
    background-color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      border-radius: 1.4rem;
    }
  `}
`

export const ProductCardHeader = styled.div`
  width: 100%;
  height: 100%;
  max-height: 202px;
  display: flex;
  justify-content: center;
`

export const Image = styled.img`
  width: 100%;
  max-width: 38rem;
`

export const ProductCardBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${theme.spacings.small};
  `}
`

export const ProductTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 1.9rem;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const ProductPrice = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: 700;
    line-height: 1.9rem;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
