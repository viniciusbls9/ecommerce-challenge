import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
  `}
`

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding: 20px;
  text-align: center;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 500px;
  `}
`

export const Title = styled.h1``
