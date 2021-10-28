import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
  `}
`

export const HeaderWrapper = styled.div`
  width: 100%;
  display: grid;
  padding: 2rem;
  align-items: center;
  text-align: center;

  ${media.greaterThan('medium')`
    text-align: initial;
    padding: 2rem 0;
    grid-template-columns: 1fr 500px;
  `}
`

export const ProductCardWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    padding: 2rem;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    row-gap: 2rem;

    ${media.greaterThan('medium')`
      justify-content: space-between;
      grid-template-columns: repeat(3, 1fr);
      padding: 0;
      gap: 2rem;
      padding-bottom: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2.2rem;
    line-height: 3rem;
    color: ${theme.colors.black};
  `}
`
