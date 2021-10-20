import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    width: 100%;
    height: ${theme.sizes.menuMobile};

    ${media.greaterThan('medium')`
      height: ${theme.sizes.menuDesktop};

      img {
        width: 190px;
      }
    `}
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: ${theme.spacings.xsmall};

    svg {
      width: 150px;
    }

    ${media.greaterThan('medium')`
      svg {
        width: 190px;
      }
    `}
  `}
`
